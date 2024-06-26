import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./componets/home/Login.component";
import Home from "./componets/home/home.component";
import Signupcomponent from "./componets/home/Signup.component";
import Sidebarcomponent from "./componets/home/Sidebar.component";
import ProductsComponent from "./componets/home/Products.component";
import Vegetablescomponent from "./componets/home/vegetables.component";
import Vegetablesdeatilcomponent from "./componets/home/vegetablesdeatils.component";
import ProductDetailscomponent from "./componets/home/ProductDetails.component";
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
          <Route path="/fruits" element={<ProductsComponent />} />
          <Route path="/vegetables" element={<Vegetablescomponent />} />
          <Route path="/vegetabledeatils" component={<Vegetablesdeatilcomponent />} /> 
          <Route path="/vegetables/detailsPage" element={<ProductDetailscomponent />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default Navigation;
