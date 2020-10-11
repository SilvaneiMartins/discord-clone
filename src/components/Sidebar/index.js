/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto Discord Clone;
*/
import React, { useEffect, useState } from 'react'
import './sidebar.css'

import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import db, { auth } from '../../conexao/firebase'
import SidebarChannel from '../SidebarChannel'

import AddIcon from '@material-ui/icons/Add'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import InfoIcon from '@material-ui/icons/Info'
import CallIcon from '@material-ui/icons/Call'
import MicIcon from '@material-ui/icons/Mic'
import HeadsetIcon from '@material-ui/icons/Headset'
import SettingsIcon from '@material-ui/icons/Settings'

import { Avatar } from '@material-ui/core'

export default function Sidebar() {
    const user = useSelector(selectUser)
    const [channels, setChannels] = useState([])

    useEffect(() => {
        db.collection("channels").onSnapshot(snapshot =>
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    channel: doc.data(),
                }))
            )
        )
    }, [])

    const handleAddChannel = () => {
        const channelName = prompt("Digite um nome para o canal!")

        if (channelName) {
            db.collection("channels").add({
                channelName: channelName,
            })
        }
    }

    const handleSignOut = () => {
        auth.signOut()
    }

    return (
        <div className="sidebar" >
            <div className="sidebar__top">
                <h3>Nome da Empresa</h3>
                <ExpandMoreIcon />
            </div>

            <div
                className="sidebar__channels"
            >
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Nome do Canal</h4>
                    </div>

                    <AddIcon
                        onClick={handleAddChannel}
                        className="sidebar__addChannels"
                    />
                </div>

                <div className="sidebar__channelsList" >
                    {channels.map(({ id, channel }) => (
                        <SidebarChannel
                            key={id}
                            id={id}
                            channelName={channel.channelName}
                        />
                    ))}
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon
                    className="sidebar__voiceIcon"
                    fontSize="large"
                />

                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoIcon />
                    <CallIcon />
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar
                    onClick={handleSignOut}
                    src={user.photo}
                />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 5)}</p>
                </div>

                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}
