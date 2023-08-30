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
        {/* <Route path="/all-recipe" element={<AllRecipe />} />
        <Route
          path="/single-recipe/:recipe_id"
          element={<SingleRecipePage />}
        />
        <Route path="/bookmarked-data" element={<BookmarkData />} /> */}
      </Routes>
    </div>
  );
};

export default AllRoutes;