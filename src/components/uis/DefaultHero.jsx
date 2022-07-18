import React from 'react';
import { Link } from 'react-router-dom';

const DefaultHero = ({heroText, linkText, linkRef}) => {
    const mainText = heroText ? heroText :  'Do what you love, Learn what you want, Unlock your truest passions'
    
 
  return (
    <section>
        {/* desktop */}
        <div className=" h-80 hidden sm:flex  hero-section-1  items-center ">
            <div className="container mx-auto  text-white">
            <h1 className="text-2xl sm:text-4xl font-bold sm:font-bold text-white mt-20">{mainText}</h1>
            {linkText && (
                <button className='text-white bg-gold px-4 py-2 mt-10 rounded font-bold'><Link to={linkRef}>{linkText}</Link></button>
            )}
            </div>
        </div>

        {/* mobile */}
        <div className=" h-64 sm:hidden hero-section-1 flex items-center justify-center">
            <div className=" p-4 mt-14 text-white justify-center items-center">
            <h1 className="text-2xl sm:text-4xl font-bold sm:font-bold text-center text-white">{mainText}</h1>
            {linkText && (
                <button className='text-white bg-gold px-4 py-2 mt-5 text-center ml-20 rounded font-bold'><Link to={linkRef}>{linkText}</Link></button>
            )}
            </div>
        </div>
    </section>
  )
}

export default DefaultHero