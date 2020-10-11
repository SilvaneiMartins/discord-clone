/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto Discord Clone;
*/
import React, { useEffect } from 'react'
import './app.css'

import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../src/features/userSlice'
import { auth } from '../src/conexao/firebase'
import { login, logout } from '../src/features/userSlice'

import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import SignIn from '../src/pages/SignIn'

function App() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(
                    login({
                        uid: authUser.uid,
                        photo: authUser.photoURL,
                        email: authUser.email,
                        displayName: authUser.displayName,
                    }))
            } else {
                dispatch(logout())
            }
        })
    }, [dispatch])

    return (
        <div className="app">
            {user ? (
                <>
                    <Sidebar />
                    <Chat />
                </>
            ) : (
                    <SignIn />
                )}
        </div>
    )
}

export default App
