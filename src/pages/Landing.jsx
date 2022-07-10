import React from 'react'

import NavbarDefault from '../components/navbars/NavbarDefault'
import Footer from '../components/Footer'
import LandingCarouselSections from '../components/sections/LandingCarouselSections'
import CoursesRowByCategory from '../components/CoursesRowByCategory'
import { Carousel } from 'flowbite-react'

import screenshot1 from '../assets/images/screenshot-home.jpg'

const Landing = () => {
  return (
    <React.Fragment>
        <NavbarDefault />
        <section className='pt-14'>
            <LandingCarouselSections />
            <section className="bg-white ">
                <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center">
                        <h1 className="mb-4 text-2xl tracking-tight font-bold text-gray-900 md:text-5xl ">Online learning Designed for Vocational Skills</h1>
                        <p className="mb-4 text-xl md:text-2xl font-light text-gray-500 ">
                        With so much to explore, real projects to create, and the support of fellow-creatives, 
                        Moreplex’s online learning platform empowers you to learn new skills and accomplish real growth.
                        </p>
                    </div>   
                </div>
            </section>

            <section className='mb-10'>
                <div className='flex justify-center items-center'>
                    {/* text section */}
                    <div className='w-[40%]  pl-10 sm:pl-24 pr-5'>
                        <h1 className='text-xl sm:text-4xl tracking-tight font-bold mb-4 text-primaryBlue'>Designed for optimal productivity</h1>
                        <p className='mb-4 text-sm md:text-2xl font-light'>With AI based Course Recommendation, you see only what you liked best. 
                            <br/>What else can we offer you?
                        </p>
                        <button className='mt-10 rounded text-white font-bold bg-gold px-4 py-2'>Learn More</button>

                    </div>
                    {/* image section */}
                    <div className='w-[70%]'>
                        <img src={screenshot1} className='object-cover shadow-lg rounded-bl-lg rounded-tl-lg'  alt='screenshot1' />
                    </div>
                </div>
            </section>

            <section className='bg-grayBackground'>
                <Carousel>
                <CoursesRowByCategory title='Trending Courses' />
                <CoursesRowByCategory title='Popular Courses' />

                </Carousel>
            </section>

        </section>
        
        <div className='mt-6'></div>
        <Footer />
    </React.Fragment>
  )
}

export default Landing