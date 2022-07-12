import React, {useEffect} from 'react'
import { useState } from 'react';

import cleaningAgent from '../assets/images/cat-cleaningAgents.jpg'
import catCulinary from '../assets/images/cat-culinary.jpg'
import catMarketing from '../assets/images/cat-makerting.jpg'
import catBranding from '../assets/images/banner2-ladiesLap.jpg'
import catSoap from '../assets/images/cat-soaps.jpg'
import catCosmetic from '../assets/images/cat-cosmetics.jpg'
import catOrganicSoap from '../assets/images/organic-soap.jpg'


const CategoryInterest = ({id, selectedCats, setSelectedCats}) => {
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');

    const [selected, setSelected] = useState(false)

    useEffect(() => {
        if(selected){
            // console.log('add to array')
            setSelectedCats([...selectedCats, id])
        }else {
            // console.log('remove from array')
            setSelectedCats(selectedCats.filter(catId=>catId!==id))
        }
     
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
                    setTitle('Culinary & Catering Business')
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
    }, [id, selected]);


    

    const handleOnClick = (id) => {
        console.log(id);
        setSelected(prev=>!prev)
        

    }

  

    

    
  return (
    <div className='h-30 w-[115px] sm:w-[200px] sm:h-[220px] flex-col' onClick={handleOnClick}>
        <div className='flex justify-center  '>
        <button className=''>
            { selected && <div className='interest-selected  mb-1 w-20 h-20 sm:w-[150px] sm:h-[150px] rounded-full border border-gold object-cover opacity-50   flex justify-center items-center absolute'>
                <svg  viewBox="0 0 20 30 " className='fill-white w-14 h-14 sm:w-20 sm:h-20 ' xmlns="http://www.w3.org/2000/svg"  >
                    
                    <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                </svg>
            </div>}
            <img className="mb-1 w-20 h-20 sm:w-[150px] sm:h-[150px] rounded-full border border-gold object-cover" src={img} alt={`${title}`} />
        </button>
        </div>
        <h5 className='w-full  text-xs sm:text-lg font-bold text-secondaryBlue text-center  px-1 break-words'>{title}</h5>
        
    </div>

    // <div className='h-30 w-[115px] sm:w-[200px] sm:h-[220px] flex-col  hover:border hover:border-red-500 ' onClick={handleOnClick}>
    //     <div className='flex justify-center  '>
    //     <button className=''>
    //         <img className="mb-1 w-20 h-20 sm:w-[150px] sm:h-[150px] rounded-full border border-gold object-cover " src={img} alt={`${title}`} />
    //     </button>
    //     </div>
    //     <h5 className='w-full  text-xs sm:text-lg font-bold text-secondaryBlue text-center  px-1 break-words'>{title}</h5>
    //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{'fill': 'rgba(0, 0, 0, 1)', 'transform': 'msFilter'}}>
    //         <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
    //     </svg>
    // </div>

    // <div className='h-30 w-[115px] sm:w-[300px] flex-col border border-red-600 '>
    //     <div className='flex justify-center  '>
    //     <button className=''>
    //         <img className="mb-1 w-20 h-20 rounded-full border border-gold object-cover " src={img} alt={`${title}`} />
    //     </button>
    //     </div>
    //     <h5 className='w-full  text-xs font-bold text-secondaryBlue text-center  px-1 break-words'>{title}</h5>
    // </div>
  )
}

export default CategoryInterest