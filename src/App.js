import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import FormInputs from './Components/FormInputs';
import NavBar from './Components/NavBar';
import SignUp from './Components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className='NavBar'>
        <NavBar />
      </div>
      <div className='Container'>
        <div className='appWrapper'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<FormInputs />} />
            <Route path='/SignUp' element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
