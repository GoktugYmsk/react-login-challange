import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const inputSuccess = () => {
    if (user === 'admin' && password === '1233') {
      console.log('çalıştı')
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
      </div>
      <button onClick={inputSuccess} className='loginButton' >Giriş</button>
    </div>
  );
}

export default App;
