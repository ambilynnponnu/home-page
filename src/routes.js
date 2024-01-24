import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./componets/home/Login.component";
import Home from "./componets/home/home.component";
import Signupcomponent from "./componets/home/Signup.component";
import Sidebarcomponent from "./componets/home/Sidebar.component";
function Navigation() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signupcomponent />} />
          <Route path="/sidebar" element={<Sidebarcomponent />} />

        </Routes>
      </Router>
    </div>
  );
}

export default Navigation;
