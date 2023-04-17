import React from 'react'

import { Helmet } from 'react-helmet';

import './index.css'

function Home() {
  return (
    <div className='containerHome' >
      <Helmet>
        <title>Ana Sayfa</title>
      </Helmet>
      <h3>Hoşgeldiniz</h3>
      <div className='glare' ></div>
    </div>
  )
}

export default Home
