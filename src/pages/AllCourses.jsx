import React from 'react'
import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import Footer from '../components/Footer'
import NavbarSignedIn from '../components/navbars/NavbarSignedIn'

const AllCourses = () => {
  return (
    <React.Fragment>
        <NavbarSignedIn />
        <main>
            <section>
                {/* desktop */}
                <div className=" h-80 hidden sm:flex  hero-section-1  items-center ">
                    <div className="container mx-auto  text-white">
                    <h1 className="text-2xl sm:text-4xl font-bold sm:font-bold text-white mt-20">Do what you love, Learn what you want, Unlock your truest passions</h1>
                    <button className='text-white bg-gold px-4 py-2 mt-10 rounded font-bold'><Link to='/signin'>Get Started for Free</Link></button>
                    </div>
                </div>

                {/* mobile */}
                <div className=" h-80 sm:hidden hero-section-1 flex items-center justify-center">
                    <div className=" p-4 mt-14 text-white justify-center items-center">
                    <h1 className="text-2xl sm:text-4xl font-bold sm:font-bold text-center text-white">Do what you love, Learn what you want, Unlock your truest passions</h1>
                    <button className='text-white bg-gold px-4 py-2 mt-5 text-center ml-20 rounded font-bold'><Link to='/signin'>Get Started for Free</Link></button>
                    </div>
                </div>
            </section>
            <section className='container mx-8 sm:mx-auto relative h-screen overflow-hidden md:flex my-16 '>
                {/* left side bar */}
                <div className='sidebar  w-72 space-y-6 pr-4 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out '>
                    <div className='w-full'>
                    <button className='bg-primaryBlue text-left pl-4 text-white font-medium text-2xl w-full py-1.5 rounded-md'>All Categories</button>
                    <ul className='mt-5 space-y-1 mb-5'>
                        <li className='font-normal rounded pl-1 py-2 hover:bg-gray-300 hover:pl-2'>Organic SkinCare Manufacturing</li>
                        <li className='font-normal rounded pl-1 py-2 hover:bg-gray-300 hover:pl-2'>Soap & Detergents Manufacturing</li>
                        <li className='font-normal rounded pl-1 py-2 hover:bg-gray-300 hover:pl-2'>Cosmetic Manufacturing</li>
                        <li className='font-normal rounded pl-1 py-2 hover:bg-gray-300 hover:pl-2'>Cleaning Agents</li>
                        <li className='font-normal rounded pl-1 py-2 hover:bg-gray-300 hover:pl-2'>Culinary & Catering Business</li>
                        <li className='font-normal rounded pl-1 py-2 hover:bg-gray-300 hover:pl-2'>Branding & Communication</li>
                        <li className='font-normal rounded pl-1 py-2 hover:bg-gray-300 hover:pl-2'>Marketing & Business Development</li>
                    </ul>
                    <hr />
                    </div>

                    <div className='w-full'>
                    <button className='bg-primaryBlue text-left pl-4 text-white font-medium text-2xl w-full py-1.5 rounded-md'>Filter By</button>
                    {/* Courses */}
                    <h1 className='mt-5 font-bold text-xl'>Courses</h1>
                    <hr />
                    <ul className='mt-0 mb-8'>
                        <li className='font-normal rounded pl-2 py-2 hover:bg-gray-300 hover:pl-3'>New Courses</li>
                        <li className='font-normal rounded pl-2 py-2 hover:bg-gray-300 hover:pl-3'>Popular Courses</li>
                        <li className='font-normal rounded pl-2 py-2 hover:bg-gray-300 hover:pl-3'>Trending Courses</li>
                    </ul>

                    {/* Workshops */}
                    <h1 className='font-bold text-xl'>Workshops</h1>
                    <hr />
                    <ul className='mt-0'>
                        <li className='font-normal rounded pl-2 py-2 hover:bg-gray-300 hover:pl-3'>New Workshops</li>
                        <li className='font-normal rounded pl-2 py-2 hover:bg-gray-300 hover:pl-3'>Popular Workshops</li>
                        <li className='font-normal rounded pl-2 py-2 hover:bg-gray-300 hover:pl-3'>Trending Workshops</li>
                    </ul>
                    </div>
                </div>

                {/* right main content */}
                <div className='flex-1 pl-4  text-2xl font-bold  h-screen overflow-y-auto '>
                    <div className='mb-20'>
                    <div className='flex justify-between items-start'>
                    <h1 className='mb-5 text-primaryBlue font-bold text-xl sm:text-3xl'>Popular Courses</h1>
                    <button className='px-5 py-1.5 text-black font-bold text-sm border border-black rounded hover:bg-gray-100'>View All</button>
                    </div>
                    <div className='grid grid-cols-1  sm:grid-cols-3 justify-between gap-6'>
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                    </div>

                    <div className='mb-5'>
                    <div className='flex justify-between items-start'>
                    <h1 className='mb-5 text-primaryBlue font-bold text-xl sm:text-3xl'>Popular Workshops</h1>
                    <button className='px-5 py-1.5 text-black font-bold text-sm border border-black rounded hover:bg-gray-100'>View All</button>
                    </div>
                    <div className='w-full justify-between gap-6'>
                        <CourseCard />
                    </div>
                    </div>
                </div>
            </section>
            {/* <div className='mt-[150px]'></div> */}
        </main>
        <Footer />
    </React.Fragment>
  )
}

export default AllCourses