import { Carousel } from 'flowbite-react'
import React from 'react'
import CategoryCard from './CaregoryCard'

const TopCategoryRows = (props) => {
  return (
    <React.Fragment>
        {/* mobile; 1 col carousel */}
        <section className='sm:hidden w-full  py-10 '>
          <div className='container mx-auto px-10'>
            <h1 className='mb-4 text-2xl tracking-tight font-bold text-primaryBlue md:text-4xl text-center'>Top Categories</h1>
          </div>
          <div className='container mx-auto py-5 px-10  '>
            <div className='grid grid-cols-1'>
                <Carousel>
                    <CategoryCard id='cat1'/>
                    <CategoryCard id='cat4'/>
                    <CategoryCard id='cat6'/>
                    <CategoryCard id='cat7'/>
                </Carousel>
              
            </div>
          </div>
        </section>

        {/* tabs; 2 cols carousel */}
        <section className='hidden md:hidden sm:block  w-full  py-10 '>
          <div className='mx-auto px-10'>
            <h1 className='mb-4 text-2xl tracking-tight font-bold text-primaryBlue md:text-4xl text-center'>Top Categories</h1>
          </div>
          <div className='mx-auto py-5 px-10  '>
            <div className='flex justify-between gap-5'>
              <CategoryCard id='cat1'/>
              <CategoryCard id='cat4'/>
            </div>
          </div>
        </section>


        {/* desktops; 4 cols carousel */}
        <section className='hidden md:block  w-full  py-4 '>
          <div className='container mx-auto px-0'>
            <h1 className='mb-4 text-2xl tracking-tight font-bold text-primaryBlue md:text-4xl  text-center'>Top Categories</h1>
          </div>
          <div className='container mx-auto py-5 px-0  '>
            <div className='grid grid-cols-4 gap-5'>
              <CategoryCard id='cat1'/>
              <CategoryCard id='cat4'/>
              <CategoryCard id='cat6'/>
              <CategoryCard id='cat7'/>
            </div>
          </div>
        </section>

    </React.Fragment>
  )
}

export default TopCategoryRows