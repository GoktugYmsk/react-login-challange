import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './index.css';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const inputSuccess = () => {
    if (user === 'admin' && password === '1234') {
      const newToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      setToken(newToken);
      localStorage.setItem('token', newToken);
      console.log('Token oluşturuldu ve localStorage\'e kaydedildi.');
      navigate('/home');
    } else {
      setError('Hatalı kullanıcı adı veya şifre');
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      axios.get('/api/login', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          console.log('Giriş başarılı');
        })
        .catch(error => {
          console.log('Hata oluştu: ', error.response.status);
          if (error.response.status === 404) {
            setError('Giriş başarısız');
          } else {
            console.log('Bilinmeyen bir hata oluştu.');
          }
        });
    }
  }, [token]);
  

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.clear();
      console.log('localStorage temizlendi.');
    };
    window.addEventListener('beforeunload', clearLocalStorage);
    return () => {
      window.removeEventListener('beforeunload', clearLocalStorage);
    };
  }, []);

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
      {error && (
        <div className='errorMessage' >{error}</div>
      )}
      {token && (
        <div className='loginToken' >Kod: {token}</div>
      )}
    </div>
  );
}

export default Login;
