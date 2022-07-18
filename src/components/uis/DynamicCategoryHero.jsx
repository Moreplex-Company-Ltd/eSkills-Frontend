import React from 'react';
import { Link } from 'react-router-dom';

const DynamicCategoryHero = ({catName, catImage}) => {
  return (
    <section class="relative bg-white">
            <img
                class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
                src={catImage}
                alt="Couple on a bed with a dog"
            />

            <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

            <div class="relative max-w-screen-xl px-4 pt-20 pb-10 sm:py-32 mx-auto  lg:items-center lg:flex">
                <div class="max-w-xl text-center sm:text-left">
                    <p className='mt-4 sm:leading-relaxed text-sm  uppercase'>
                        <Link to='/categories'>Category</Link>
                    </p>
                    <h1 class="text-3xl font-extrabold sm:text-5xl text-primaryBlue">
                        {catName}
                        {/* <strong class="font-extrabold text-rose-700 sm:block">
                        Forever Home.
                        </strong> */}
                    </h1>

                <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>

                <div class="flex flex-wrap gap-4 mt-8 text-center">
                    <Link to='/get-started' class="block w-full px-12 py-2 text-sm sm:text-lg font-bold text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring" >
                        Start Learning
                    </Link>

                  
                </div>
                </div>
            </div>
        </section>
  )
}

export default DynamicCategoryHero