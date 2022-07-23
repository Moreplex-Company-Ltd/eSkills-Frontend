import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({toRef, name}) => {
  return (
    <>
    {/* <button className='mb-5 rounded text-white font-bold bg-gold px-4 py-2 hover:bg-opacity-90'>
        <Link to={toRef}>{name}</Link>
    </button> */}
    <button className='mb-5 block w-full px-12 py-2 text-sm sm:text-lg font-bold text-white rounded shadow bg-gold sm:w-auto active:bg-gold hover:opacity-90 focus:outline-none focus:ring'>
        <Link to={toRef}>{name}</Link>
    </button>
    </>
  )
}

export default LinkButton