import React, { useState } from 'react'

import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import './index.css'

function LoginScreen() {
    const [input,setInput]= useState('')
    const [pass,setPass] = useState('')
    const [saveToken,setSaveToken] = useState('')
    const navigate = useNavigate()

    const handleClick = () => {
        if(!input || !pass){
            console.log('Bu alanların Doldurulması zorunludur')
        }
        else if (input === 'admin' && pass === '1234')
        {
            const tokenAdd = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            setSaveToken(tokenAdd)
            localStorage.setItem('saveToken',tokenAdd)
            console.log('Token localeStorag`e kaydedildi ')
            navigate('homeScreen')
        }
    }

    return (
        <div className='screenContainer' >
            <Helmet>Example2 Login Sayfası</Helmet>
            <div className='screenBox' >
                <input className='inputOne' onChange={e => setInput(e.target.value)} placeholder='kullanıcı adı' />
                <br />
                <input type='password' onChange={e => setPass(e.target.value)} className='inputTwo' placeholder='şifre' />
                <br />
            </div>
            <button onClick={handleClick} >Gönder</button>
        </div>
    )
}

export default LoginScreen
