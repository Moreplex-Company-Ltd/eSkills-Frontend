import React from 'react'
import CourseCard from './CourseCard'

const CoursesRowByCategory = (props) => {
  return (
    <React.Fragment>
        {/* mobile; 1 col carousel */}
        <section className='sm:hidden w-full  py-10 '>
          <div className='container mx-auto px-10'>
            <h1 className='text-lg sm:text-2xl text-primaryBlue font-bold'>{props.title}</h1>
            <hr />
          </div>
          <div className='container mx-auto py-5 px-10  '>
            <div className='grid grid-cols-1'>
              <CourseCard />
            </div>
          </div>
        </section>

        {/* tabs; 2 cols carousel */}
        <section className='hidden md:hidden sm:block  w-full  py-10 '>
          <div className='mx-auto px-10'>
            <h1 className='text-2xl text-primaryBlue font-bold'>{props.title}</h1>
            <hr />
          </div>
          <div className='mx-auto py-5 px-10  '>
            <div className='flex justify-between gap-5'>
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </section>


        {/* desktops; 4 cols carousel */}
        <section className='hidden md:block  w-full  py-10 '>
          <div className='container mx-auto px-0'>
            <h1 className='text-2xl text-primaryBlue font-bold'>{props.title}</h1>
            <hr />
          </div>
          <div className='container mx-auto py-5 px-0  '>
            <div className='grid grid-cols-4 gap-5'>
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </section>

    </React.Fragment>
  )
}

export default CoursesRowByCategory