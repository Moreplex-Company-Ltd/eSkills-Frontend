import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NavbarDefault from '../components/navbars/NavbarDefault'

const Page404 = () => {
  return (
    <React.Fragment>
      <NavbarDefault />
      <section className="bg-white ">
          <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                  <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 mt-10">404</h1>
                  <p className="mb-4 text-3xl tracking-tight font-bold text-primaryBlue md:text-4xl ">Something's missing.</p>
                  <p className="mb-4 text-lg font-light text-gray-500 ">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                  <button className="inline-flex font-bold text-white bg-primaryBlue hover:font-bold focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center  my-4">
                    <Link to='/home'>Back to Homepage</Link>
                  </button>
              </div>   
          </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default Page404