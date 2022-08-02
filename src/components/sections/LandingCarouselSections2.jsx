import { Carousel } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

import ladieslaugh from '../../assets/images/women-laugh.jpg'
import ladyphone from '../../assets/images/lady-onphone.jpg'
import ladieslap from '../../assets/images/banner2-ladiesLap.jpg'

const SingleHero = ({mainText, secondText, img}) => {

  return (
    <section className="relative bg-white">
            <img
                className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
                src={img}
                alt="Couple on a bed with a dog"
            />

            <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

            <div className="relative max-w-screen-xl px-4 pt-20 pb-10 sm:py-32 mx-auto  lg:items-center lg:flex">
                <div className="max-w-xl text-center sm:text-left">
                    <p className='mt-4 sm:leading-relaxed text-sm  uppercase'>
                        <Link to='/categories'>Category</Link>
                    </p>
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-primaryBlue">
                        {mainText}
                        {/* <strong className="font-extrabold text-rose-700 sm:block">
                        Forever Home.
                        </strong> */}
                    </h1>

                <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
                    {secondText}
                </p>

                <div className="flex flex-wrap gap-4 mt-8 text-center">
                    <Link to='/allcourses' className="block w-full px-12 py-2 text-sm sm:text-lg font-bold text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring" >
                        Start Learning
                    </Link>

                  
                </div>
                </div>
            </div>
    </section>
  )
}

const LandingCarouselSections2 = () => {
  return (
    <React.Fragment>
        <div className="h-64 sm:h-72 md:h-96 xl:h-[500px] 2xl:h-[550px]">
          <Carousel >
            <SingleHero
              mainText='Learn the Skills of the Future'
              secondText='Explore new skills, deepen exisiting passions, get lost in creativity whiles establishing your self.'
              img={ladieslaugh}
             />

             <SingleHero
             mainText='Excelling Business Communications'
             secondText='Explore and harness the power of branding and communitcations to move your business to the next level'
             img={ladyphone}
             />
             <SingleHero
             mainText='The Business Masterclass'
             secondText='Learn the fundamental skills you need to set up and establish you business in the 21st century'
             img={ladieslap}
             />
            

          </Carousel>
        </div>
    </React.Fragment>
  )
}

export default LandingCarouselSections2