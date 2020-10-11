/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto Discord Clone;
*/
import React, { useEffect, useState } from 'react'
import './chat.css'

import firebase from 'firebase'
import db from '../../conexao/firebase'
import ChatHeader from '../ChatHeader'
import Messages from '../Messages'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import {
    selectChannelId,
    selectChannelName,
} from '../../features/appSlice'

import AddCircleIcon from '@material-ui/icons/AddCircle'
import GifIcon from '@material-ui/icons/Gif'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'

function Chat() {
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [input, setInput] = useState("")
    const [messanges, setMessages] = useState([])

    useEffect(() => {
        if (channelId) {
            db.collection("channels")
                .doc(channelId)
                .collection("messanges")
                .orderBy("timestamp", "desc")
                .onSnapshot(snapshot =>
                    setMessages(
                        snapshot.docs.map(doc =>
                            doc.data()
                        )
                    )
                )
        }
    }, [channelId])

    const handleSendMessage = (e) => {
        e.preventDefault()

        db.collection("channels")
            .doc(channelId)
            .collection("messanges")
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user,
            })

        setInput("")
    }

    return (
        <div className="chat" >
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {messanges.map(message => (
                    <Messages
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    />
                ))}
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input
                        value={input}
                        disabled={!channelId}
                        onChange={e => setInput(e.target.value)}
                        placeholder={`Mensagem #${channelName}`}
                    />
                    <button
                        disabled={!channelId}
                        className="chat__inputButton"
                        type="submit"
                        onClick={handleSendMessage}
                    >
                        Enviar Mensagem
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat
