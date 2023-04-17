import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/homePage';
import Login from './components/loginPage/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
