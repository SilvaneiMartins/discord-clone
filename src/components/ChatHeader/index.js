/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto Discord Clone;
*/
import React from 'react'
import './chatheader.css'

import NotificationsIcon from '@material-ui/icons/Notifications'
import EditLocationIcon from '@material-ui/icons/EditLocation'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import HelpRoundedIcon from '@material-ui/icons/HelpRounded'

function ChatHeader({ channelName }) {
    return (
        <div className="chatheader" >
            <div className="chatheader__left">
                <h3>
                    <span className="chatheader__hash" >#</span>
                    {channelName}
                </h3>


            </div>

            <div className="chatheader__right">
                <NotificationsIcon />
                <EditLocationIcon />
                <PeopleAltIcon />

                <div className="chatheader__search">
                    <input
                        placeholder="Buscar"
                    />
                    <SearchRoundedIcon />
                </div>

                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader
