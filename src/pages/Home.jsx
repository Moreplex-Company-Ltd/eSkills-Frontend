import React from 'react';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';


import NavbarSignIn from '../components/navbars/NavbarSignIn';


const Home = () => {
  return (
    <React.Fragment>
        <NavbarSignIn />

        <section>
          {/* desktop */}
          <div className="h-[680px] hidden sm:flex flex-col hero-section-main justify-center items-center ">
                <div className=" p-4 text-white justify-center">
                <h1 className="text-2xl sm:text-4xl font-bold sm:font-bold text-center text-gold">Inspirations Starts Here</h1>
                    <p className="text-lg sm:text-2xl text-center text-white mt-5">
                        Let's start with these. We hope you love them <br/>
                        We will continue to recommend more as you journey with us
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
                <div className=" p-4 mt-5 text-white justify-center">
                <h1 className="text-xl sm:text-4xl font-bold sm:font-bold text-center text-gold">Inspirations Starts Here</h1>
                    <p className="text-sm text-center text-white mt-5">
                        Let's start with these. We hope you love them <br/>
                        We will continue to recommend more as you journey with us
                    </p>
                </div>
                {/* <div className='flex justify-center gap-10'>
                  <CourseCard />
                  <CourseCard />
                  <CourseCard />
                </div> */}
            </div>


        </section>


        <section className='p-10 flex flex-col items-center'>
          <div className='flex flex-wrap gap-6'>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>

        

        

        </section>




        <Footer />
    </React.Fragment>
  )
}

export default Home