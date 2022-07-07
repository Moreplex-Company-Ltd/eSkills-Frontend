import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/moreplex-logo-white.png'

const Navbar = () => {
  return (
    
<nav className="w-screen h-[70px] fixed bg-secondaryBlue px-2  py-2.5 ">
  <div className="container flex flex-wrap justify-between items-center mx-auto w-full h-full">
  <Link to="/" className="flex items-center">
      <img src={logo} className="mr-3 h-8 sm:h-9" alt="Flowbite Logo" />
  </Link>
  
  </div>
</nav>

  )
}

export default Navbar