import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter as Router, Routes, Route, NavLink  } from 'react-router-dom';
import './panel.css'


function Panel() {


  return (
    <Router>
        <div className='panel'>
          <ul className='panel-ul'>
            <li className='panel-li'><NavLink to='/' id='navlink'>Login</NavLink></li>
            <li className='panel-li'><NavLink to='/signup' id='navlink' >Signup</NavLink></li>
          </ul>
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
  )
}

export default Panel
