import React from 'react'
import CourseCard from './CourseCard'
import CourseLoadingCard from './CourseLoadingCard'

const CoursesRowByCategory = (props) => {
  console.log(props.id)
  return (
    <React.Fragment>
        {/* mobile; 1 col carousel */}
        <section className='sm:hidden w-full  py-10 '>
          <div className='container mx-auto px-10'>
            <h1 className='text-lg tracking-tight  sm:text-2xl text-primaryBlue font-bold'>{props.title}</h1>
            <hr />
          </div>
          <div className='container mx-auto py-5 px-10  '>
            <div className='grid grid-cols-1'>
              {props.loading ? <CourseLoadingCard /> : <CourseCard /> }
            </div>
          </div>
        </section>

        {/* tabs; 2 cols carousel */}
        <section className='hidden md:hidden sm:block  w-full  py-10 '>
          <div className='mx-auto px-10'>
            <h1 className='text-2xl tracking-tight  text-primaryBlue font-bold'>{props.title}</h1>
            <hr />
          </div>
          <div className='mx-auto py-5 px-10  '>
            <div className='flex justify-between gap-5'>
              {props.loading ? <CourseLoadingCard /> : <CourseCard /> }
              {props.loading ? <CourseLoadingCard /> : <CourseCard /> }
            </div>
          </div>
        </section>


        {/* desktops; 4 cols carousel */}
        <section className='hidden md:block  w-full  py-8 '>
          <div className='container mx-auto px-0'>
            <h1 className='text-xl tracking-tight font-bold text-gray-900 md:text-3xl'>{props.title}</h1>
            <hr />
          </div>
          <div className='container mx-auto py-5 px-0  '>
            <div className='grid grid-cols-4 gap-5'>
            {props.loading ? <CourseLoadingCard /> : <CourseCard /> }
            {props.loading ? <CourseLoadingCard /> : <CourseCard /> }
            {props.loading ? <CourseLoadingCard /> : <CourseCard /> }
            {props.loading ? <CourseLoadingCard /> : <CourseCard /> }
            </div>
          </div>
        </section>

    </React.Fragment>
  )
}

export default CoursesRowByCategory