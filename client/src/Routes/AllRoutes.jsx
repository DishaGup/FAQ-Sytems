import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Components/Auth/Register";
import RegisterPage from "../Pages/RegistrationPage";
import LoginPage from "../Pages/LoginPage";
import Home from "../Pages/Home";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
       
         <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        
      </Routes>
    </div>
  );
};

export default AllRoutes;