import React from 'react'
import NavbarSignedIn from '../components/navbars/NavbarSignedIn';
import Footer from '../components/Footer';

// import womemLaugh from '../assets/images/women-laugh.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    const desktopheight = 96;
    const mobileHeight = 64;
    const mainText = `Explore, Learn,  Establish yourself`
  return (
    <React.Fragment>
        <NavbarSignedIn />


        <section>
            {/* desktop */}
            <div className={` h-${desktopheight} hidden sm:flex  hero-section-1  items-center `}>
                <div className="container mx-auto  text-white">
                <h1 className="text-2xl sm:text-4xl font-bold sm:font-bold text-white mt-20 text-center">
                    {mainText}
                </h1>
                
                </div>
            </div>

            {/* mobile */}
            <div className={` h-${mobileHeight} sm:hidden hero-section-1 flex items-center justify-center`}>
                <div className=" p-4 mt-14 text-white justify-center items-center">
                <h1 className="text-2xl sm:text-4xl font-bold sm:font-bold text-center text-white">{mainText}</h1>
                
                </div>
            </div>
        </section>

        

        <section className="bg-white ">
            <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto lg:px-40 md:px-20  text-center my-10">
                    {/* <h1 className="mb-4 text-2xl tracking-tight font-bold text-primaryBlue md:text-4xl ">Online learning Designed for Vocational Skills</h1> */}
                    <p className=" text-lg md:text-2xl  font-medium text-gray-900  leading-10  mb-10">
                    Moreplex eSkills Academy is a personalized online learning community platform designed to teach
                    vocational and technical skills to economically disadvantaged group. The goal of the
                    platform is to remove all barriers to technical and vocational training by making it
                    available to as many people as possible.
                    </p>
                  

                    <p className="  font-medium text-gray-900  text-lg md:text-2xl leading-loose pt-5">The platform provides resources and training materials, activities as well as
                    monitoring and evaluation of user’s performance through testing and generation of
                    reports of progress.</p>
                </div>   
            </div>
        </section>


        <section className="bg-white ">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <div className='flex justify-between items-center'>

                <figure className="max-w-screen-md mx-auto">
                    <svg className="h-12 mx-auto mb-3 text-gray-400 " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                    </svg> 
                    <blockquote>
                        <p className="text-2xl font-medium text-gray-900 ">
                        <span className='font-bold text-secondaryBlue'>Our mission</span> is to create an enabling environment where quality vocational and
technical education become accessible to everyone by removing all barriers.</p>
                    </blockquote>
                </figure>


                <figure className="max-w-screen-md mx-auto">
                    <svg className="h-12 mx-auto mb-3 text-gray-400 " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                    </svg> 
                    <blockquote>
                        <p className="text-2xl font-medium text-gray-900 ">
                        <span className='font-bold text-secondaryBlue'>Our goal</span> is to connect the world to economically viable skills development. We
envision a world where everyone has the power to change life through learning.
                        </p>
                    </blockquote>
                </figure>

                </div>
                
            </div>
        </section>


        <section className=" ">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg ">
                    <h2 className="mb-4 text-3xl tracking-tight font-bold text-primaryBlue md:text-4xl  ">Who we are</h2>
                    <p className="mb-4 text-black">We exist to provide life-changing learning environment to everyone around the world
to learn cutting edge vocational and technical skills that has the potential to create
economic opportunities for themselves and their communities. </p>
                    <p className='mb-10 text-black'>MESA is a
personalized online learning platform that offers everyone access to online courses
in technical and vocational education. MESA was borne out of our efforts to remove
barriers to quality education for all.</p>
                    <button className='mb-5 rounded text-white font-bold bg-gold px-4 py-2 hover:bg-opacity-90'><Link to='/signin'>Get Started for Free</Link></button>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                </div>
            </div>
        </section>


        <section class="overflow-hidden about-section">
            <div class="p-8 h-96 md:p-12 lg:px-16 lg:py-24 bg-blue-900/25 items-center">
                <div class=" text-center ">
                {/* <h2 class="text-center text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo!
                </h2>

                <button></button> */}

                
                </div>
            </div>
        </section>



        {/* <aside className="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="max-w-xl mx-auto text-center sm:text-left">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h2>

                <p className="hidden text-gray-300 md:mt-4 md:block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                    tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
                    fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
                    duis.
                </p>

                <div className="mt-4 md:mt-8">
                    <a
                    href="#d"
                    className="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                    Get Started Today
                    </a>
                </div>
                </div>
            </div>

            <img
                alt="#"
                src={womemLaugh}
                className="object-cover w-full h-56 sm:h-full"
            />
        </aside> */}


        {/* <section className="relative bg-white">
            <img
                className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
                src="https://images.unsplash.com/photo-1601758003122-53c40e686a19"
                alt="Couple on a bed with a dog"
            />

            <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

            <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
                <div className="max-w-xl text-center sm:text-left">
                <h1 className="text-3xl font-extrabold sm:text-5xl">
                    Let us find your
                    <strong className="font-extrabold text-rose-700 sm:block">
                    Forever Home.
                    </strong>
                </h1>

                <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>

                <div className="flex flex-wrap gap-4 mt-8 text-center">
                    <a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring" href="/get-started">
                    Get Started
                    </a>

                    <a className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring" href="/about">
                    Learn More
                    </a>
                </div>
                </div>
            </div>
        </section> */}
        

        <Footer />
    </React.Fragment>
  )
}

export default About