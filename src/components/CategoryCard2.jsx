import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import soapImage from '../assets/images/soap3.jpg'
import cleaningAgent from '../assets/images/cat-cleaningAgents.jpg'
import catCulinary from '../assets/images/cat-culinary.jpg'
import catMarketing from '../assets/images/cat-makerting.jpg'
import catBranding from '../assets/images/banner2-ladiesLap.jpg'
import catSoap from '../assets/images/cat-soaps.jpg'
import catCosmetic from '../assets/images/cat-cosmetics.jpg'
import catOrganicSoap from '../assets/images/organic-soap.jpg'
// import ladyOnPhone from  '../assets/images/lady-onphone.jpg'

const CategoryCard2 = ({id}) => {
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
        <Link className="h-52 relative block bg-black group overflow-hidden rounded-lg" to={`/categories/${id}`}>
            <img
                className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50 rounded-lg"
                src={img}
                alt={img}
            />
            <div className="relative p-8">
                <div>
                    <h1 className='text-white font-extrabold text-xl'>{title}</h1>
                </div>

                <div className="mt-10">
                <div
                    className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
                >
                    <p className="text-sm text-white">
                        brief Cat description
                    </p>
                </div>
                </div>
            </div>
        </Link>
  )
}

export default CategoryCard2