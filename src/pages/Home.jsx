import React from 'react';
import CoursesRowByCategory from '../components/CoursesRowByCategory';
import Footer from '../components/Footer';


import NavbarSignedIn from '../components/navbars/NavbarSignedIn';
import CarouselSections from '../components/sections/CarouselSections';


const Home = () => {
  return (
    <React.Fragment>
      <NavbarSignedIn />


      <section className='bg-grayBackground'>
          {/* desktop */}
          <div className="h-[400px] hidden sm:flex flex-col hero-section-main justify-center items-center ">
                <div className=" p-4 text-white justify-center">
                <h1 className="text-2xl sm:text-4xl font-bold sm:font-bold text-center text-gold">Inspirations Starts Here</h1>
                    <p className="text-xl font-medium sm:text-2xl text-center text-white mt-5 px-20">
                    Explore new skills, deepen existing passions, and get lost in creativity. 
                    <br/>What you find just might surprise and inspire you.
                    </p>
                </div>
                {/* <div className='flex justify-center gap-10'>
                  <CourseCard />
                  <CourseCard />
                  <CourseCard />
                </div> */}
            </div>


            {/* mobile */}
          <div className="h-[250px] sm:hidden flex hero-section-main justify-center items-center">
                <div className=" p-4 mt-14 text-white justify-center">
                <h1 className="text-2xl sm:text-4xl font-bold sm:font-bold text-center text-gold">Inspirations Starts Here</h1>
                    <p className="text-lg text-center font-normal text-white mt-5">
                    Explore new skills, deepen existing passions, and establish yourself
                    </p>
                </div>
                {/* <div className='flex justify-center gap-10'>
                  <CourseCard />
                  <CourseCard />
                  <CourseCard />
                </div> */}
            </div>
        </section>

        
        <CoursesRowByCategory 
          title='Because you love Cosmetic Manufacturing'
        />
        <CoursesRowByCategory 
          title='Establish your Business: Marketing Courses to take you to the next level'
        />


        <section className='my-5'>
          <CarouselSections />
        </section>


 

     
      

  
        

       




        <Footer />
    </React.Fragment>
  )
}

export default Home