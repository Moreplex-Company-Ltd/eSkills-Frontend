import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/moreplex-logo-white.png'


const Navbar = () => {
  return (
    <React.Fragment>
    
    <nav className="w-screen bg-primaryBlue  border-gray-200 px-2 sm:px-4 py-2.5 fixed">
      <div className="flex flex-wrap justify-between items-center mx-2">
        {/* group1 */}
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

          {/* Group 2; only continue as Gues */}
          <div className="flex justify-between items-center">
            {/* desktop */}
            <button type='button' className=' hidden sm:block text-white font-bold border border-white rounded px-2 py-1 hover:bg-blue-900'>
              <Link to='/interests'>Continue as Guest</Link>
            </button>
            {/* Mobile */}
            <button type='button' className='md:hidden text-white font-bold border border-white rounded px-2 py-1 hover:bg-blue-900'>
              <Link to='/interests'>Guest</Link>
            </button>
          </div>
      
      
   
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

export default Navbar