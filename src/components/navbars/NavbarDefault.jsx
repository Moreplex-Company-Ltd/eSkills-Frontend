import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/moreplex-logo-white.png'
// import avatar from '../../assets/images/background2.jpeg'
import { useState } from 'react';


const NavbarDefault = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);


  return (
    <React.Fragment>
    
    <nav className="w-screen bg-primaryBlue fixed border-gray-200 px-2 sm:px-4 py-2.5  z-10">
      <div className="flex flex-wrap justify-between items-center mx-2">

        {/* Group 1; left menu hamburger on mobile */}
        <button id="mobileMenuDropdown" data-dropdown-toggle="mobileMenuDropdown" data-collapse-toggle="mobileMenuDropdown" type="button" className="inline-flex items-center  text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200  " aria-controls="mobile-menu-4" aria-expanded="false" onClick={()=>setOpenMobileMenu(prev=>!prev)}>
          <span className="sr-only">Open main menu</span>
          {openMobileMenu ? 
          <svg className="w-7 h-7 focus:bg-transparent text-white fill-white"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> :
          <svg className="w-7 h-7 focus:bg-transparent text-white fill-white"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          }
        </button>

          

        {/* Group 2; only Brand logo on mobile */}
        <div className='flex justify-between items-center space-x-6'>
          {/* Logo Brand */}
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-9 sm:h-9" alt="Moreplex Logo" />
          </Link>

          {/* First Nav */}
          <button className='hidden md:flex justify-between items-center'>
            <h1 className='text-white font-bold'>Categories
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </h1>
          </button>
          
          {/* Search box */}
          <div className='hidden md:flex pl-2'>
          <form className='w-[50vh] '>   
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block p-1.5 pl-10 w-full text-sm text-white bg-transparent rounded-lg border border-white  focus:border-none" placeholder="Search Courses, Workshops, Topics etc... " />
            </div>
          </form>
          </div>
      
        </div>
      
        {/* Group 3; only user avatar on mobile */}
        <div className="flex justify-between items-center">
          <button type='button' className='justify-center text-white font-bold border border-white sm:border-none rounded px-2 py-1 hover:text-gold'>
            <Link to='/signin'>Sign In</Link>
          </button>
          <button type='button' className='hidden md:block ml-6  text-white font-bold border border-white rounded px-2 py-1 hover:bg-blue-900'>
            <Link to='/signup'>Sign Up</Link>
          </button>

          
        
        </div>
      {/* <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </li>
        </ul>
      </div> */}
      </div>

      {/* mobile menu */}
      {openMobileMenu && (
        <div id="mobileMenuDropdown" className=" md:hidden w-full divide-y  divide-gray-600 ">
          <ul className=" text-lg py-5 text-white dark:text-gray-400" aria-labelledby="dropdownLargeButton">
            
            <li className='flex justify-center'>
            <form className='w-[80%] block '>   
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block p-1.5 pl-10 w-full text-sm text-white bg-transparent rounded border border-white  focus:border-none" placeholder="Search Courses, Workshops... " />
            </div>
          </form>
            </li>
          </ul>
          
      </div>
      )}

    </nav>


    </React.Fragment>
    // <nav className="w-screen h-[70px] fixed bg-secondaryBlue px-2  py-2.5 ">
    //     <div className="container flex flex-wrap justify-between items-center mx-auto w-full h-full">
    //     <Link to="/" className="flex items-center">
    //         <img src={logo} className="mr-3 h-8 sm:h-9" alt="Flowbite Logo" />
    //     </Link>
        
    //     </div>
    // </nav>
  )
}

export default NavbarDefault