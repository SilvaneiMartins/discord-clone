/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto Discord Clone;
*/
import React from 'react'
import './messages.css'

import { Avatar } from '@material-ui/core'

function Messages({ timestamp, message, user }) {
    return (
        <div className="messages" >
            <Avatar
                src={user.photo}
                alt={user.displayName}
            />
            <div className="messages__info">
                <h4>
                    {user.displayName}
                    <span className="messages__timestamp" >
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Messages
