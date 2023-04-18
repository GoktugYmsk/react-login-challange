import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/homePage';
import Login from './components/loginPage/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Hoşgeldiniz</h3>
      <br/>
      <p>Giriş yapmak için butona tıklayın</p>
      <button className='appLoginButton'>Devam et</button>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
