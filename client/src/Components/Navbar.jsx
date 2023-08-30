import React, { useState } from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <Link to="/"> Home</Link>
    <Link to="/login" >Login</Link>
  
    </>
   
  );
};

export default Navbar;
