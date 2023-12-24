import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {


  const navigate=useNavigate()
  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: "#e3f2fd" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">HOME</a>
          <a className="navbar-brand" onClick={()=>navigate('/Login')}>Login</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
