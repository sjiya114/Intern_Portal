import React, { useContext } from 'react'
import {Toaster} from 'react-hot-toast';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Review from './components/Review';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Footer from './components/Footer';
import Home from './pages/Home';
import Reward from './pages/Reward';
import Dashboard from './pages/Dashboard';
import { AppContext } from './context/AppContext';
function App() {
  const {token}=useContext(AppContext);
  return (
    <div>
      <Toaster/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/reward' element={<Reward/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/signup' element={<Signup/>}  ></Route>
        {token && <Route path='/dashboard' element={<Dashboard/>}  ></Route>}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
