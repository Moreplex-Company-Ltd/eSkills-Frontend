import React from 'react';
import { Link } from 'react-router-dom';

import NavbarDefault from '../components/navbars/NavbarDefault'
import Footer from '../components/Footer'
// import LandingCarouselSections from '../components/sections/LandingCarouselSections'
import CoursesRowByCategory from '../components/CoursesRowByCategory'
import { Carousel } from 'flowbite-react'

import screenshot1 from '../assets/images/screenshot-home.jpg'
import TopCategoryRows from '../components/TopCategoryRows';
import LinkButton from '../components/uis/LinkButton';
import LandingCarouselSections2 from '../components/sections/LandingCarouselSections2';
// import LandingCarouselSections from "../components/sections/LandingCarouselSections";

const Landing = () => {
  return (
    <React.Fragment>
        <NavbarDefault />
        <section className='pt-14'>
            <LandingCarouselSections2 />

            <section className="bg-white ">
                <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto lg:px-40 md:px-20  text-center">
                        <h1 className="mb-4 text-2xl tracking-tight font-bold text-primaryBlue md:text-4xl ">Online learning Designed for Vocational Skills</h1>
                        <p className="mb-4 text-lg md:text-2xl font-light">
                        With so much to explore, real projects to create, and the support of fellow-creatives, 
                        Moreplex’s Elearning Academy empowers you to learn new skills, accomplish real growth and establish yourself
                        </p>
                    </div>   
                </div>
            </section>

            {/* top categories */}
            <section className='mb-10 sm:mb-36'>
                <TopCategoryRows />
                <div className='flex justify-center'>
                    <LinkButton name='View All Categories' toRef='/categories' />
                </div>
                
            </section>

            <section className='py-5 sm:py-10'>
                {/* desktop*/}
                <div className='hidden lg:flex justify-center items-center'>
                    {/* text col left */}
                    <div className='w-[40%]  px-10 sm:pl-24'>
                        <h1 className='text-xl sm:text-4xl tracking-tight font-bold mb-4 text-primaryBlue'>Designed for optimal productivity</h1>
                        <p className='mb-4 text-sm md:text-2xl font-light'>With AI based Course Recommendation, you see only what you like best. 
                            <br/>What else can we offer you?
                        </p>
                        <div className='mt-10'>

                        </div>
                        <LinkButton name='Learn More' toRef='/about' />
                    </div>
                    {/* image col right */}
                    <div className='w-[70%]'>
                        <img src={screenshot1} className='object-cover shadow-lg rounded-bl-lg rounded-tl-lg hover:shadow-2xl'  alt='screenshot1' />
                    </div>
                </div>


                {/* mobile and tab and other smaller screens */}
                <div className='w-full lg:hidden justify-center items-center'>
                    <h1 className='mb-4 text-2xl tracking-tight font-bold text-primaryBlue text-center px-10 md:text-4xl md:mb-6'>Designed for optimal productivity</h1>
                    <img src={screenshot1} className='object-cover shadow-lg hover:shadow-2xl'  alt='screenshot1' />
                    <div className='text-center px-5 md:px-20 mt-5'>
                        <p className='mb-4 text-lg md:text-2xl'>With AI based Course Recommendation, you see only what you like best. 
                            <br/>What else can we offer you?
                        </p>
                        <LinkButton name='Learn More' toRef='/about' />
                    </div>
                </div>
            </section>

            <section className='bg-grayBackground my-10'>
            <h1 className='mb-0 text-2xl tracking-tight font-bold text-primaryBlue text-center px-10 md:text-4xl md:mb-0 pt-5'>Trending Courses</h1>
                <Carousel>
                <CoursesRowByCategory />
                <CoursesRowByCategory />

                </Carousel>
            </section>

            <section className="bg-white ">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg ">
                        <h2 className="mb-4 text-3xl tracking-tight font-bold text-primaryBlue md:text-4xl  ">Learn anywhere, anytime</h2>
                        <p className="mb-4">
                        MESA offers you the opportunity to become a skilled artisan anywhere, anytime. With access to the internet, you can close to becoming 21st century skilled artisan.
                        </p>
                        <p className='mb-10'>
                        Broaden your scope, begin a new skill, build your existing skills here!
                        The good news is, you can get started for free
                        Learning without limitations!
                        </p>
                        <button className='mb-5 rounded text-white font-bold bg-gold px-4 py-2 hover:bg-opacity-90'><Link to='/allcourses'>Get Started for Free</Link></button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                    </div>
                </div>
            </section>

        </section>
        
        
        <Footer />
    </React.Fragment>
  )
}

export default Landing