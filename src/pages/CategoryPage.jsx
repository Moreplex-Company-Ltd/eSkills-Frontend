import React from 'react'


import NavbarSignedIn from '../components/navbars/NavbarSignedIn'
import Footer from '../components/Footer'
import DefaultHero from '../components/uis/DefaultHero'
import CategoryCard2 from '../components/CategoryCard2'


const CategoryPage = () => {
  return (
    <React.Fragment>
        <NavbarSignedIn />
        <DefaultHero
            heroText='Check out all the categories we have'
        />


        <section className='w-full py-16'>
            <div className='container mx-auto py-5 px-10 sm:px-0'>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <CategoryCard2 id='cat1' />
                    <CategoryCard2 id='cat2' />
                    <CategoryCard2 id='cat3' />
                    <CategoryCard2 id='cat4' />
                    <CategoryCard2 id='cat5' />
                    <CategoryCard2 id='cat6' />
                    <CategoryCard2 id='cat7' />
                </div>
                

            
            </div>
            
        </section>
        <Footer />
    </React.Fragment>
  )
}

export default CategoryPage