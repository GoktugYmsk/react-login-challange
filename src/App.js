import { Helmet } from 'react-helmet';

import { NavLink, Route, Routes } from 'react-router-dom';

import Login from './components/loginPage/Login';
import './App.css';

function App() {

  return (
    <div className="App">
      <Helmet>
        <title> App Ekranı </title>
      </Helmet>
      <header className="App-header">
      </header>
      <NavLink className='homePage' to='/Login' >
        Login ekranı
      </NavLink>
      <Routes>
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
