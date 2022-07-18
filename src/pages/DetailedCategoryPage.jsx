import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import NavbarSignedIn from '../components/navbars/NavbarSignedIn'
import { useParams } from 'react-router-dom'

import soapImage from '../assets/images/soap3.jpg'
import cleaningAgent from '../assets/images/cat-cleaningAgents.jpg'
import catCulinary from '../assets/images/cat-culinary.jpg'
import catMarketing from '../assets/images/cat-makerting.jpg'
import catBranding from '../assets/images/banner2-ladiesLap.jpg'
import catSoap from '../assets/images/cat-soaps.jpg'
import catCosmetic from '../assets/images/cat-cosmetics.jpg'
import catOrganicSoap from '../assets/images/organic-soap.jpg'
import DynamicCategoryHero from '../components/uis/DynamicCategoryHero'
import CoursesRowByCategory from '../components/CoursesRowByCategory'
import { Carousel } from 'flowbite-react'
// import ladyOnPhone from  '../assets/images/lady-onphone.jpg'

const DetailedCategoryPage = (props) => {
    const {catID } = useParams()
    
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
     
        const setCatImage = () => {
            switch (catID) {
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
    }, [catID]);

  return (
    <React.Fragment>
        <NavbarSignedIn />
        <DynamicCategoryHero 
            catName={title}
            catImage={img}
        />
        

        <section className='mt-10'>
            <div className='container mx-auto px-10 sm:px-0'>
            <h1 className='text-lg tracking-tight  sm:text-2xl text-primaryBlue font-bold'>{`${title} Courses`}</h1>
            </div>
            <Carousel>
                <CoursesRowByCategory />
                <CoursesRowByCategory />
            </Carousel>
            
        </section>

        <Footer />
    </React.Fragment>
  )
}

export default DetailedCategoryPage