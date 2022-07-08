import React from 'react'
import Footer from '../components/Footer';
import NavbarSignIn from '../components/navbars/NavbarSignIn';

const Interests = () => {
  return (
    <React.Fragment>
        <NavbarSignIn />
        <section className=''>
            <div className="mx-auto">
                <div className="w-full  p-20 bg-center bg-cover h-80"
                    style={{'backgroundImage': 'url(https://cdn.pixabay.com/photo/2021/04/22/17/55/flowers-6199691__340.png'}}>
                    <h1 className="text-3xl font-bold text-center text-gold">Tell us what interests you!</h1>
                    <p className="text-xl text-center text-white mt-5">
                        We have amazing things for you. <br/> Favourite a few to help us better understand your interests
                    </p>
                </div>
            </div>
        </section>



        {/* <section>
        <div class="flex flex-col items-center pb-10">
            <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src={} alt="Bonnie image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
            <div class="flex mt-4 space-x-3 lg:mt-6">
                <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
            </div>
        </div>
        </section> */}
        <Footer />
    </React.Fragment>
  )
}

export default Interests