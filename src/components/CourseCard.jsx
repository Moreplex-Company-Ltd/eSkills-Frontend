import React from 'react'
import { Link } from 'react-router-dom'
import soapImage from '../assets/images/soap3.jpg'


const courseTitle = 'Introduction to Soap Branding: Branding the Perfect Soap'
const courseAuthor = 'Prince Baff'


const CourseCard = () => {
  
  return (
    <div className="h-30 flex flex-col text-gray-900 bg-white rounded-xl drop-shadow-md hover:shadow-xl">
          <div className="rounded-lg bg-white shadow-md">
          <div className='flex justify-center items-center'>
          <svg 
            className='absolute fill-black '
            xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 20 30" >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="m9 17 8-5-8-5z"></path>
          </svg>
          <img src={soapImage} className="w-full rounded-t-lg" alt='imgg' />
          </div>
            
            <div className="px-3 py-2">
              <div className='flex justify-between'>
                <p className='font-poppins font-extrabold text-xs'><span className='font-extrabold'>13,734</span> students</p>
                <p className='font-poppins font-extrabold text-xs'>1h 35m</p>
              </div>

              <h2 className="mb-1 text-lg font-medium text-primaryBlue">
                <Link to='/course'>{courseTitle}</Link>
                
              </h2>

              <div className='flex justify-between items-end my-0'>
                <p className="text-base text-center text-gold">{courseAuthor} </p>
                
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="50" height="30"
                  viewBox="-10 0 1 60"
                  className='fill-black'>
                  <path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z"></path>
                </svg>
                
              </div>
              
            </div>
          </div>
        </div>
  )
}

export default CourseCard