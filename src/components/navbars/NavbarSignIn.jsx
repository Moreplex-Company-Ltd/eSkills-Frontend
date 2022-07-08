import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/moreplex-logo-white.png'


const NavbarSignIn = () => {
  return (
    <React.Fragment>
    
    <nav className="w-screen bg-primaryBlue fixed border-gray-200 px-2 sm:px-4 py-2.5 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className='flex justify-between items-center space-x-6'>
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-10 sm:h-10" alt="Moreplex Logo" />
          </Link>

          <div className='hidden md:flex'>
            <h1 className='text-white font-bold'>Learning Paths</h1>
          </div>

          
          <div className='hidden md:flex pl-2'>
          <form className='w-[50vh] '>   
            {/* <label for="default-search" className="text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label> */}
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block p-1.5 pl-10 w-full text-sm text-white bg-transparent rounded-lg border border-white  focus:border-none" placeholder="Search Courses, Workshops, Topics etc... " />
            </div>
          </form>
          </div>
        
        </div>
      
      
      <div className="flex md:order-2">
          <button type="button" className=" text-white hover:text-white border border-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:bg-white font-medium rounded text-sm px-3 sm:px-5 py-0 sm:py-2 text-center mr-2">
            <Link to='/signin'>Get started</Link>
          </button>
          <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  " aria-controls="mobile-menu-4" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6 focus:bg-transparent text-white fill-white"  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
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
    </nav>`


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

export default NavbarSignIn