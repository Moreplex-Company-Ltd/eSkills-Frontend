import React, {useEffect} from 'react'
import { useState } from 'react';

import cleaningAgent from '../assets/images/cat-cleaningAgents.jpg'
import catCulinary from '../assets/images/cat-culinary.jpg'
import catMarketing from '../assets/images/cat-makerting.jpg'
import catBranding from '../assets/images/banner2-ladiesLap.jpg'
import catSoap from '../assets/images/cat-soaps.jpg'
import catCosmetic from '../assets/images/cat-cosmetics.jpg'
import catOrganicSoap from '../assets/images/organic-soap.jpg'


const CategoryInterest = ({catTitle, id}) => {
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
     
        const setCatImage = () => {
            switch (id) {
                case 'cat1':
                    setImg(catOrganicSoap)
                    setTitle('Organic SkinCare Manufacturing')
                    break;
                case 'cat2':
                    setImg(catCosmetic)
                    setTitle('Cosmetic Manufacturing')
                    break;
                case 'cat3':
                    setImg(cleaningAgent)
                    setTitle('Cleaning Agents Manufacturing')
                    break;
                case 'cat4':
                    setImg(catSoap)
                    setTitle('Soap & Detergents Manufacturing')
                    break;
                case 'cat5':
                    setImg(catCulinary)
                    setTitle('Culinary & Catering Buiness')
                    break;
                case 'cat6':
                    setImg(catBranding)
                    setTitle('Branding & Communication')
                    break;
                case 'cat7':
                    setImg(catMarketing)
                    setTitle('Marketing & Business Development')
                    break;
                default:
                    setTitle('No Title')
                    break;
            }
        }


        setCatImage()
        // useEffect cleanup
        return () => setCatImage()
    }, [id]);


    
  return (
    <div className='h-30 w-[115px] sm:w-[300px] flex-col  '>
        <div className='flex justify-center'>
        <button className=''>
            <img className="mb-1 w-20 h-20 rounded-full border border-gold object-cover " src={img} alt={`${title}`} />
        </button>
        </div>
        <h5 className='w-full  text-xs font-bold text-secondaryBlue text-center  px-1 break-words'>{title}</h5>
    </div>
  )
}

export default CategoryInterest