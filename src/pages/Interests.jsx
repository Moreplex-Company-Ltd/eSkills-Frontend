import React, { useState } from 'react'
import Footer from '../components/Footer';
import NavbarSignedIn from '../components/navbars/NavbarSignedIn';

import CategoryInterest from '../components/CategoryInterest';
import { Link } from 'react-router-dom';


const Interests = () => {
    const [selectedCats, setSelectedCats] = useState([])


    console.log(selectedCats)

  return (
    <React.Fragment>
        <NavbarSignedIn />
        <section className='bg-grayBackground'>
            {/* desktop */}
            <div className=" h-80 hidden sm:flex  hero-section-1  items-center justify-center">
                <div className=" p-4 text-white">
                <h1 className="text-2xl sm:text-4xl font-bold sm:font-bold text-center text-gold">Tell us what interests you!</h1>
                    <p className="text-lg sm:text-2xl text-center text-white mt-5">
                        We have amazing things for you. <br/> Favourite a few to help us better understand your interests
                    </p>
                </div>
            </div>

            {/* mobile */}
            <div className=" h-60 sm:hidden hero-section-1 flex items-center justify-center">
                <div className=" p-4 mt-14 text-white">
                <h1 className="text-2xl sm:text-4xl font-bold sm:font-bold text-center text-gold">Tell us what interests you!</h1>
                    <p className="text-lg sm:text-2xl  font-medium text-center text-white mt-5">
                        We have amazing things for you. <br/> Favourite a few to help us better understand your interests
                    </p>
                </div>
            </div>

            {/* desktop; display 3, 4 */}
            <section className='hidden sm:flex py-10 px-2  flex-col items-center gap-4 '>
                <div className='flex flex-wrap gap-5'>
                    <CategoryInterest id='cat1' setSelectedCats={setSelectedCats} />
                    <CategoryInterest id='cat2' setSelectedCats={setSelectedCats} />
                    <CategoryInterest id='cat4' setSelectedCats={setSelectedCats} />
                </div>
                <div className='flex flex-wrap gap-5'>
                    <CategoryInterest id='cat3' setSelectedCats={setSelectedCats} />
                    <CategoryInterest id='cat5' setSelectedCats={setSelectedCats} />
                    <CategoryInterest id='cat6' setSelectedCats={setSelectedCats} />
                    <CategoryInterest id='cat7' setSelectedCats={setSelectedCats} />
                </div>
            </section>

            {/* mobile; display 2,3,3 */}
            <section className='sm:hidden  py-10 px-2  flex flex-col items-center gap-4 '>
                <div className='flex flex-wrap'>
                    <CategoryInterest id='cat1' setSelectedCats={setSelectedCats} />
                    <CategoryInterest id='cat2' setSelectedCats={setSelectedCats} />
                </div>
                <div className='flex flex-wrap'>
                    <CategoryInterest id='cat3' setSelectedCats={setSelectedCats} />
                    <CategoryInterest id='cat4' setSelectedCats={setSelectedCats} />
                    <CategoryInterest id='cat5' setSelectedCats={setSelectedCats} />
                </div>
                 <div className='flex flex-wrap'>
                    <CategoryInterest id='cat6' setSelectedCats={setSelectedCats} />
                    <CategoryInterest id='cat7' setSelectedCats={setSelectedCats} />
                </div>
            </section>



            <section className='my-6 flex items-center justify-center'>
                <button className='rounded bg-gold text-primaryBlue font-bold px-8 py-2'>
                    <Link to='/home'>Continue</Link>
                </button>
            </section>
            

        




        </section>
        <Footer />
    </React.Fragment>
  )
}

export default Interests