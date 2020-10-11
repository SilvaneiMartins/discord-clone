/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto Discord Clone;
*/
import React from 'react'
import './sidebarchannel.css'

import { setChannelInfo } from '../../features/appSlice'
import { useDispatch } from 'react-redux'

function SidebarChannel({ id, channelName }) {
    const dispatch = useDispatch()

    return (
        <div
            className="sidebarchannel"
            onClick={() => dispatch(
                setChannelInfo({
                    channelId: id,
                    channelName: channelName,
                })
            )}
        >
            <h4>
                <span className="sidebarchannel__hash" >#</span>
                {channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
