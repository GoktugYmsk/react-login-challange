import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Home from './components/homePage';
import Login from './components/loginPage';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [hideEntrance, setHideEntrance] = useState(false);

  const openLoginScreen = () => {
    setHideEntrance(true);
    navigate('/login');
  };

  return (
    <div className="App">
      {!hideEntrance && (
        <div className='entrance' >
          <h3 className='appH3' >Hoşgeldiniz</h3>
          <br />
          <p className='appParagraph' >Giriş yapmak için butona tıklayın</p>
          <button onClick={openLoginScreen} className='appLoginButton'>Devam et</button>
        </div>
      )}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
