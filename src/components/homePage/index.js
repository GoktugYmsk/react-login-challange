import React from 'react'

import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import './index.css'

function Home() {
  const navigate = useNavigate()

  const LoginComeBack = () => {
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
      <p className='loginParagraph' >Login ekranına dönmek için</p>
      <button onClick={LoginComeBack} className='loginPageBackButton' >Devam et</button>
    </div>
  )
}

export default Home
