import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NavbarDefault from '../components/navbars/NavbarDefault'

const Page404 = () => {
  return (
    <React.Fragment>
      <NavbarDefault />
      <section className="bg-white pt-[95px]">
        <div className=" px-4 mx-auto  max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">404</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Page not found</p>
            <div className="py-8">
                <button className='text-secondaryBlue border border-secondaryBlue rounded px-4 py-2'>
                  <Link to='/'>Home</Link>
                </button>
            </div>
            
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default Page404