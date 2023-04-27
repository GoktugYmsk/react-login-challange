import React from 'react'

import { useNavigate } from 'react-router-dom'

function Deneme() {
    const navigate = useNavigate()

    const clearStorage = () => {
        localStorage.clear()
        navigate('/')
    }

    return (
        <div>
            <h1>Deneme sayfası</h1>
            <p>Login ekranına dönmek için</p>
            <button onClick={clearStorage} >Login Ekranı</button>
        </div>
    )
}

export default Deneme
