import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/moreplex-logo-white.png'
// import avatar from '../../assets/images/background2.jpeg'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutCurrentUser } from '../../redux/userSlice';

const avatar = "https://res.cloudinary.com/jondexter/image/upload/v1629122461/avatars/user_ywbrdf.png"


const NavbarSignedIn = () => {
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user.user);
  // console.log(user)

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false)


  
  const onLogoutHandler = async() => {
    await dispatch(logOutCurrentUser()).unwrap();
  }


  return (
    <React.Fragment>
    
    <nav className="w-screen bg-primaryBlue fixed border-gray-200 px-2 sm:px-4 py-2.5  z-20">
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
          <button className='hidden md:flex justify-between items-center' onClick={()=>window.location.href = '/categories'}>
            <h1 className='text-white font-bold'>Categories</h1>
            <svg className="w-4 5-4 ml-1 text-white font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
          <button type='button' className='hidden md:block mr-6 justify-center text-white'>
            Notifications
          </button>
          {/* rounded-full overflow-hidden border-2 border-purple-500 w-10 h-10 flex justify-center items-center | hover:border-white focus:outline-none focus:border-white */}
            <div className='relative'>
            <button type="button" className="flex  text-sm  rounded-full md:mr-0 border-2 border-white overflow-hidden items-center hover:border-white  focus:ring-white focus:border-white" onClick={()=>setOpenProfileMenu(prev=>!prev)}>
              <span className="sr-only">Open user menu</span>
              <img className="w-9 h-9 sm:w-10 sm:h-10  rounded-full ring-white object-cover" src={user?.avatarURL || avatar} alt="userphoto" />
            </button>

            {openProfileMenu && 
            <>
            <div className="fixed inset-0 w-full h-screen z-20 bg-black opacity-25" onClick={()=>setOpenProfileMenu(prev=>!prev)}></div>
            <div className="absolute z-30 right-0 pt-5  bg-gray-100 rounded ">
              <div className='flex justify-center items-center '>
                <div className='text-center'>
                  <img className="ml-7 sm:ml-5 w-12 h-12 sm:w-16 sm:h-16 object-center rounded-full ring-white object-cover" src={user?  user.avatarURL : avatar} alt="userphoto" />
                  <p className='text-sm'>{user ? user.name : 'Guest'}</p>
                  <button className='mt-2 px-3 py-1 sm:py-1.5 bg-primaryBlue text-white rounded hover:opacity-90'><Link to='/profile'>View Profile</Link></button>
                </div>
              </div>
              <hr className='text-gray-500 mt-5 mb-0' />
                <div className=" rounded-lg divide-y divide-gray-200 shadow-lg w-48">
                    <a href="/profile" className="block text-secondaryBlue font-semibold px-4 py-2 | hover:text-white hover:bg-gray-500">My Courses</a>
                    <a href="/setting" className="block text-secondaryBlue font-semibold px-4 py-2 | hover:text-white hover:bg-gray-500">Account Settings</a>
                    <a href="/help" className="block text-secondaryBlue font-semibold px-4 py-2 | hover:text-white hover:bg-gray-500">Help</a>
                    <div className='py-2 text-center'>
                        <p className='block text-secondaryBlue font-semibold px-4 py-2  hover:text-white hover:bg-gray-500' onClick={()=>onLogoutHandler()}>
                          Logout
                        </p>
                    </div>
                </div>
            </div>
            </>}
            
            </div>
                    
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

export default NavbarSignedIn