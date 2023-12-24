import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Login from './componets/home/Login.component';
function Navigation() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Login" element={<Login />} />
                </Routes>
            </Router>

        </div>
    )
}

export default Navigation
