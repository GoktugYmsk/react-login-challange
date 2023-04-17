import React from 'react'

import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import Login from '../loginPage/Login';
import './index.css'

function Home() {
  const navigate = useNavigate()

  const LoginComeBack = () =>{
    navigate('/Login')
  }

  return (
    <div className='containerHome' >
      <Helmet>
        <title>Ana Sayfa</title>
      </Helmet>
      <h3 className='h3' >Hoşgeldiniz</h3>
      <div className='glare' ></div>
      <div className='glare' ></div>
      <div className='glare' ></div>
      <div className='glare' ></div>
      <div className='glare' ></div>
      <div className='glare' ></div>
      <div className='glare' ></div>
      <div className='glare' ></div>
      <div className='glare' ></div>
      <div className='glare' ></div>
      <p>Login ekranına dönmek için</p>
      <button onClick={LoginComeBack} className='loginPageBack' >Devam et</button>
    </div>
  )
}

export default Home
