/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto Discord Clone;
*/
import React, { useState } from 'react'
import './signin.css'

import { auth, provider } from '../../conexao/firebase'

import { Button } from '@material-ui/core'
import LogoSignIn from '../../assets/logoSignIn.png'

import EmailIcon from '@material-ui/icons/Email'
import LockIcon from '@material-ui/icons/Lock'

import { FiEyeOff, FiEye } from "react-icons/fi"

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [show, setShow] = useState(false);

    const handleClick = (e) => {
        e.preventDefault()

        setShow(!show);
    }

    const handleSignIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }

    const signInEmailAndPassword = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                // <>
                //     <Sidebar />
                //     <Chat />
                // </>
            })
            .catch(error => {
                alert('Digite o email ou senha, para acessar o sistema!')
            })
    }

    return (
        <div className="login" >
            <div className="login_logo">
                <img
                    src={LogoSignIn}
                    alt="Discord"
                />
            </div>

            <div className="logo__right">
                <h1>Acessar o Sistema </h1>

                <div className="login__inputEmail">
                    <EmailIcon />
                    <input
                        placeholder="Digíte seu e-mail"
                        value={email}
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>


                <div className="login__inputPassword">
                    <LockIcon />
                    <input
                        placeholder="Digíte sua senha"
                        type={show ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="login__eyepassword">
                        {show ? (
                            <FiEye
                                size={20}
                                onClick={handleClick}
                            />
                        ) : (
                                <FiEyeOff
                                    size={20}
                                    onClick={handleClick}
                                />
                            )}
                    </div>
                </div>

                <Button
                    onClick={signInEmailAndPassword}
                >ENTRAR</Button>

                <h3>Ou entre com</h3>

                <Button
                    onClick={handleSignIn}
                >GOOGLE</Button>
            </div>
        </div>
    )
}

export default SignIn
