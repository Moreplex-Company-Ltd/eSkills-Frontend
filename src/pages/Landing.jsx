import React from 'react'

import NavbarDefault from '../components/navbars/NavbarDefault'
import Footer from '../components/Footer'
import LandingCarouselSections from '../components/sections/LandingCarouselSections'

const Landing = () => {
  return (
    <React.Fragment>
        <NavbarDefault />
        <section className='pt-14'>
            <LandingCarouselSections />
        </section>
        
        <div className='mt-6'></div>
        <Footer />
    </React.Fragment>
  )
}

export default Landing