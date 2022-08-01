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
    const [description, setDescription] = useState('');

    useEffect(() => {
     
        const setCatImage = () => {
            switch (id) {
                case 'cat1':
                    setImg(catOrganicSoap)
                    setTitle('Organic Skin Care Manufacturing');
                    setDescription('Looking to use natural ingredients to make soaps that has healing prosperities? This course teaches you all the details on Ingredients and how to make perfect organic skin care products')

                    break;
                case 'cat2':
                    setImg(catCosmetic)
                    setTitle('Cosmetic Manufacturing')
                    setDescription('Realize your dream of starting your own cosmetics business through this course. Covers all you need to start and run homemade cosmetics business')
                    break;
                case 'cat3':
                    setImg(cleaningAgent)
                    setTitle('Cleaning Agents Manufacturing')
                    setDescription('Looking to learn how to produce various types and grades of cleaning agents? This course shows you exactly how')
                    break;
                case 'cat4':
                    setImg(catSoap)
                    setTitle('Soap & Detergents Manufacturing')
                    setDescription('This course teaches you all you need to know about detergents and soaps manufacturing from small scale to large scale as well as gives you access to the resources needed to run successful Soapmaking business')
                    break;
                case 'cat5':
                    setImg(catCulinary)
                    setTitle('Culinary & Catering Business')
                    setDescription('Food business is a lucrative venture that can give very good returns within a short period. Learn about how to design recipes and brand your food business')
                    break;
                case 'cat6':
                    setImg(catBranding)
                    setTitle('Business Branding & Communication')
                    setDescription('Breif description')
                    break;
                case 'cat7':
                    setImg(catMarketing)
                    setTitle('Marketing & Business Development')
                    setDescription('Breif description')
                    break;
                default:
                    setTitle('No Title')
                    setImg(soapImage)
                    setDescription('Breif cat description')
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
                        {description}
                    </p>
                </div>
                </div>
            </div>
        </Link>
  )
}

export default CategoryCard2