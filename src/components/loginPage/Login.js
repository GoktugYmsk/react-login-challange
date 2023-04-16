import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';

import Home from '../homePage/index';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const inputSuccess = () => {
    if (user === 'admin' && password === '1233') {
      const newToken = 'exampleToken';
      setToken(newToken);
      localStorage.setItem('token', newToken);
      console.log('Token oluşturuldu ve localStorage\'e kaydedildi.');
      navigate('/');
    } else {
      console.log('Hatalı kullanıcı adı veya şifre');
    }
  };

  const isLoggedIn = localStorage.getItem('token') === 'exampleToken';

  if (isLoggedIn) {
    return <Home />;
  }

  return (
    <div className="loginMainPage">
      <Helmet>
        <title> Login Sayfası </title>
      </Helmet>
      <div className='login' >
        <input onChange={e => setUser(e.target.value)} placeholder='Kullanıcı adı' />
        <input onChange={e => setPassword(e.target.value)} placeholder='Şifre' />
        <button onClick={inputSuccess} className='loginButton' >Giriş</button>
      </div>
      <NavLink className='homePage' to='/' >
        Anasayfa
      </NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Login;
