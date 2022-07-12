import React, {useState, useEffect} from 'react'

import soapImage from '../assets/images/soap3.jpg'
import cleaningAgent from '../assets/images/cat-cleaningAgents.jpg'
import catCulinary from '../assets/images/cat-culinary.jpg'
import catMarketing from '../assets/images/cat-makerting.jpg'
import catBranding from '../assets/images/banner2-ladiesLap.jpg'
import catSoap from '../assets/images/cat-soaps.jpg'
import catCosmetic from '../assets/images/cat-cosmetics.jpg'
import catOrganicSoap from '../assets/images/organic-soap.jpg'
// import ladyOnPhone from  '../assets/images/lady-onphone.jpg'


const CategoryCard = ({id}) => {
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
     
        const setCatImage = () => {
            switch (id) {
                case 'cat1':
                    setImg(catOrganicSoap)
                    setTitle('Organic Skin Care Manufacturing')
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
                    setTitle('Business Branding & Communication')
                    break;
                case 'cat7':
                    setImg(catMarketing)
                    setTitle('Marketing & Business Development')
                    break;
                default:
                    setTitle('No Title')
                    setImg(soapImage)
                    break;
            }
        }


        setCatImage()
        // useEffect cleanup
        return () => setCatImage()
    }, [id]);



  return (
    <div className="h-fit flex flex-col text-gray-900 bg-white rounded-xl drop-shadow-md hover:shadow-xl">
          <div className="rounded-lg bg-white shadow-md">
          <img src={img} className="w-full rounded-t-lg h-44" alt={`${title}`} />
          
            <div className="px-2 py-1 bg-primaryBlue">
              <h2 className="mb-1 text-lg font-medium text-white text-center">{title}</h2>              
            </div>
          </div>
        </div>
  )
}

export default CategoryCard