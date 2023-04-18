/*

Post istek kodu

***************************************************************************************


import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './index.css';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const inputSuccess = () => {
    axios.post('/api/login', { username: user, password: password })
      .then(response => {
        const newToken = response.data.token;
        setToken(newToken);
        localStorage.setItem('token', newToken);
        console.log('Token oluşturuldu ve localStorage\'e kaydedildi.');
        navigate('/home');
      })
      .catch(error => {
        console.log('Hatalı kullanıcı adı veya şifre');
      });
  };

  return (
    <div className="loginMainPage">
      <Helmet>
        <title> Login Sayfası </title>
      </Helmet>
      <div className='login' >
        <input onChange={e => setUser(e.target.value)} placeholder='Kullanıcı adı' />
        <input type='password' onChange={e => setPassword(e.target.value)} placeholder='Şifre' />
        <button onClick={inputSuccess} className='loginButton' >Giriş</button>
      </div>
      {token && (
        <div>Kod: {token}</div>
      )}
    </div>
  );
}

export default Login;



*/