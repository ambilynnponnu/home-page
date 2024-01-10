import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {


  const navigate=useNavigate()
  return (
    <div style={{ backgroundColor: "#e3f2fd" }}>
      <nav className="navbar" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">HOME</a>
          <a className="navbar-brand" onClick={()=>navigate('/Login')}>Login</a>
          <a className="navbar-brand" onClick={()=>navigate('/Todo')}>Todo</a>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
