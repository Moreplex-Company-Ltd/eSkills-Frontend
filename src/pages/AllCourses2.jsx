import { Pagination } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import CourseLoadingCard from '../components/CourseLoadingCard'
import Footer from '../components/Footer'
import NavbarSignedIn from '../components/navbars/NavbarSignedIn'
// import WorkshopCard from '../components/WorkshopCard'

const AllCourses2 = () => {
  return (
    <React.Fragment>
        <main className='bg-grayBackground'>
        <NavbarSignedIn />
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
            
            <section className='hidden sm:block container mx-auto py-20'>
                
                <div className='container mx-auto  w-full '>
                <div className='flex justify-between sm:gap-5 md:gap-20'>
                    <div className='mb-6 flex-col w-full'>
                    <label htmlFor="category" className="block mb-1 text-sm font-bold text-gray-900 ">Filter By</label>
                    <select id="category" className=" border border-secondaryBlue text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option>All Categories</option>
                        <option>Cat 1</option>
                        <option>Cat 2</option>
                        <option>Cat 3</option>
                    </select>
                    </div>

                    <div className='mb-6 flex-col w-full'>
                    <label htmlFor="countries" className="block mb-1 text-sm font-bold text-gray-900 ">Filter By</label>
                    <select id="countries" className=" border border-secondaryBlue text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option>Trending</option>
                        <option>Popular</option>
                        <option>Newly Added</option>
                    </select>
                    </div>

                    <div className='mb-4 flex-col w-full'>
                    <label htmlFor="countries" className="block mb-1 text-sm font-bold text-gray-900 ">Filter By</label>
                    <select id="countries" className="border border-secondaryBlue text-gray-900 text-sm rounded focus:ring-primaryBlue focus:border-blue-500 block w-full p-2.5 ">
                        <option>Courses and Workshops</option>
                        <option>Only Courses</option>
                        <option>Only Workshops</option>
                    </select>
                    </div>
                </div>
                <div className='flex items-start justify-end gap-5'>
                    <button className='px-5 py-1.5 text-black font-bold text-sm border border-black rounded hover:bg-primaryBlue hover:text-white'>Clear Filter</button>
                    <button className='px-5 py-1.5 font-bold text-sm border border-black rounded bg-primaryBlue text-white hover:bg-opacity-90'>Search</button>
                </div>
                </div>

                {/* right main content  desktop */}
                <div className='hidden sm:block container mx-auto w-full'>
                    <div className='mt-20'>
                    
                    <div className='grid sm:grid-cols-2 md:grid-cols-4 justify-between gap-6'>
                        <CourseCard />
                        <CourseLoadingCard />
                        <CourseLoadingCard />
                        <CourseLoadingCard />
                        <CourseLoadingCard />
                        <CourseLoadingCard />
                        <CourseLoadingCard />
                        <CourseLoadingCard />
                    </div>
                    </div>

                    {/* <div className='mb-5'>
                    <div className='flex justify-between items-start'>
                    <h1 className='mb-5 text-primaryBlue font-bold text-xl sm:text-3xl'>Popular Workshops</h1>
                    <button className='px-5 py-1.5 text-black font-bold text-sm border border-black rounded hover:bg-primaryBlue hover:text-white'>View All</button>
                    </div>
                    <div className='w-full space-y-8'>
                        <WorkshopCard />
                        <WorkshopCard />
                    </div>
                    </div> */}
                    <div className='flex items-center justify-center text-center text-sm px-10 mt-20'>
                    <Pagination
                        currentPage={2}
                        // onPageChange={onPageChange}
                        totalPages={4}
                    />
                    </div>
                </div>

            </section>

            {/* this is for mobile and smaller screes */}
            <section className='sm:hidden w-full mb-20 mt-10 flex-row- items-start justify-center'>
                {/* top bar */}
                <div className='container mx-auto px-8 w-full '>
                    <div className='mb-6'>
                    <label htmlFor="category" className="block mb-1 text-sm font-bold text-gray-900 ">Filter By</label>
                    <select id="category" className=" border border-secondaryBlue text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option>All Categories</option>
                        <option>Cat 1</option>
                        <option>Cat 2</option>
                        <option>Cat 3</option>
                    </select>
                    </div>

                    <div className='mb-6'>
                    <label htmlFor="countries" className="block mb-1 text-sm font-bold text-gray-900 ">Filter By</label>
                    <select id="countries" className=" border border-secondaryBlue text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option>Trending</option>
                        <option>Popular</option>
                        <option>Newly Added</option>
                    </select>
                    </div>

                    <div className='mb-4'>
                    <label htmlFor="countries" className="block mb-1 text-sm font-bold text-gray-900 ">Filter By</label>
                    <select id="countries" className="border border-secondaryBlue text-gray-900 text-sm rounded focus:ring-primaryBlue focus:border-blue-500 block w-full p-2.5 ">
                        <option>Courses and Workshops</option>
                        <option>Only Courses</option>
                        <option>Only Workshops</option>
                    </select>
                    </div>
                </div>
                <hr />
                {/* right main content -> mobile */}
                <div className='container mx-auto px-8 mt-8 text-2xl font-bold '>
                    <div className=' mb-20'>
                    
                    <div className='grid grid-cols-1 gap-8'>
                            <CourseCard />
                            <CourseLoadingCard />
                            <CourseLoadingCard />
                            <CourseLoadingCard />
                    </div>
                    </div>

                    <div className='flex items-center justify-center text-center text-sm px-10'>
                    <Pagination
                        currentPage={2}
                        // onPageChange={onPageChange}
                        totalPages={4}
                    />
                    </div>


                    {/* workshops */}
                    {/* <div className='mb-5'>
                    <div className='flex justify-between items-start'>
                    <h1 className='mb-5 text-primaryBlue font-bold text-xl sm:text-3xl'>Popular Workshops</h1>
                    <button className='px-5 py-1.5 text-black font-bold text-sm border border-black rounded hover:bg-primaryBlue hover:text-white'>View All</button>
                    </div>
                    <div className='w-full space-y-8'>
                        <Carousel>
                            <WorkshopCard />
                            <WorkshopCard />
                        </Carousel>
                        
                    </div>
                    </div> */}
                </div>
            </section>
            {/* <div className='mt-[150px]'></div> */}
            <Footer />
        </main>
        
    </React.Fragment>
  )
}

export default AllCourses2