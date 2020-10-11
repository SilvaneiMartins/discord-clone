/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto Discord Clone;
*/
import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',

    initialState: {
        channelId: null,
        channelName: null,
    },

    reducers: {
        setChannelInfo: (state, action) => {
            state.channelId = action.payload.channelId;
            state.channelName = action.payload.channelName;
        },
    },
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;

export default appSlice.reducer;
