import { useState } from 'react';

import './App.css';

function App() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const inputSuccess = () => {
    if (user === 'admin' && password === '1233') {
      const newToken = 'example-token' 
      setToken(newToken)
      localStorage.setItem('token', newToken) 
      console.log('Token oluşturuldu ve localStorage\'e kaydedildi.')
    }
    else {
      console.log('Hatalı kullanıcı adı veya şifre')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className='login' >
        <input onChange={e => setUser(e.target.value)} placeholder='Kullanıcı adı' />
        <input onChange={e => setPassword(e.target.value)} placeholder='Şifre' />
        <button onClick={inputSuccess} className='loginButton' >Giriş</button>
      </div>
    </div>
  );
}

export default App;
