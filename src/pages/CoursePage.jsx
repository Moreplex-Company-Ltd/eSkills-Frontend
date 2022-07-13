import React from 'react'
import Footer from '../components/Footer'
import NavbarSignedIn from '../components/navbars/NavbarSignedIn'


const courseTitle = 'Introduction to Soap Branding: Branding the Perfect Soap'
const courseAuthor = 'Prince Baff'


const CoursePage = () => {
  return (
    <React.Fragment>
        <NavbarSignedIn />

        <section className='h-full w-full pt-16'>
            <div className='border pt-16 border-red-700'>
                <div className='container mx-auto'>
                    <h1 className='mb-3 text-2xl tracking-tight font-bold text-primaryBlue  md:text-4xl'>{courseTitle}</h1>
                    <hr />
                    <div className='flex justify-between mt-5'>
                        <button className='px-4 py-1 rounded bg-gray-100 border border-secondaryBlue hover:bg-gray-200'>Prev</button>
                        <button className='px-4 py-1 rounded bg-gray-100 border border-secondaryBlue hover:bg-gray-200'>Next</button>
                    </div>

                    <div className='border border-green-700'>
                        <div className='mt-5'></div>
                    </div>

                </div>
            </div>
        </section>

        {/* <Footer /> */}
    </React.Fragment>
  )
}

export default CoursePage