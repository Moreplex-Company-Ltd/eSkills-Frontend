import { Carousel } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const LandingCarouselSections = () => {
  return (
    <React.Fragment>
        <div className="h-64 sm:h-72 md:h-96 xl:h-[500px] 2xl:h-[550px]">
          <Carousel >
            <div className="flex h-full w-full items-center justify-center carousel-1-background opacity-25 text-white">
              <div className='container px-16 text-center sm:text-left sm:px-0 md:px-20'>
                <h1 className='font-extrabold text-lg sm:font-bold sm:text-4xl text-gold tracking-tight '>Learn the Skills of the Future</h1>
                <p className='mt-2 text-lg sm:mt-6 sm:text-xl'>Explore new skills, deepen exisiting passions, get lost in creativity whiles establishing your self.</p>
                <button className='mt-5 sm:mt-16 text-sm sm:text-lg font-normal sm:font-bold  px-2 py-1 sm:px-8 sm:py-2 bg-secondaryBlue text-white rounded'> <Link to='courses'> Check all Courses </Link> </button>
              </div>
            </div>
            <div className="flex h-full w-full items-center justify-center carousel-2-background opacity-25 text-white">
              <div className='container px-16 text-center sm:text-left sm:px-0 md:px-20'>
                <h1 className='font-extrabold text-lg sm:font-bold sm:text-4xl text-gold tracking-tight '>Excelling Business Communications</h1>
                <p className='mt-2 text-lg sm:mt-6 sm:text-xl'>Explore and harness the power of branding and communitcations to move your business to the next level</p>
                <button className='mt-5 sm:mt-16 text-sm sm:text-lg font-normal sm:font-bold  px-2 py-1 sm:px-8 sm:py-2 bg-secondaryBlue text-white rounded'> <Link to='courses'> Check all Courses </Link> </button>
              </div>
            </div>
            <div className="flex h-full w-full items-center justify-center carousel-3-background opacity-25 text-white">
              <div className='container px-16 text-center sm:text-left sm:px-0 md:px-20'>
                <h1 className='font-extrabold text-lg sm:font-bold sm:text-4xl text-gold tracking-tight '>The Business Masterclass</h1>
                <p className='mt-2 text-lg sm:mt-6 sm:text-xl'>Learn the fundamental skills you need to set up and establish you business in the 21st century</p>
                <button className='mt-5 sm:mt-16 text-sm sm:text-lg font-normal sm:font-bold  px-2 py-1 sm:px-8 sm:py-2 bg-secondaryBlue text-white rounded'> <Link to='courses'> Check all Courses </Link> </button>
              </div>
            </div>

            {/* <div className="flex h-full w-full items-center justify-center carousel-2-background text-white border border-red-600 rounded-lg">
              <div className='container'>
                <h1 className='font-bold text-3xl'>Excelling Business Communications</h1>
                <p className='mt-6 text-xl'>Explore and harness the power of branding and communitcations to move your business to the next level</p>
                <button className='mt-16 rounded bg-primaryBlue text-white font-bold px-8 py-2'>Check the Branding & Communication Category</button>
              </div>
            </div> */}

            {/* <div className="flex h-full w-full items-center justify-center carousel-3-background text-white border border-red-600 rounded-lg">
              <div className='container'>
                <h1 className='font-bold text-3xl'>The Business Masterclass</h1>
                <p className='mt-6 text-xl'>Learn the fundamental skills you need to set up and establish you business in the 21st century</p>
                <button className='mt-16 rounded bg-primaryBlue text-white font-bold px-8 py-2'>Check the Business Category</button>
              </div>
            </div> */}
          </Carousel>
        </div>
    </React.Fragment>
  )
}

export default LandingCarouselSections