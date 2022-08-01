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
    const [description, setDescription] = useState('');

    useEffect(() => {
     
        const setCatImage = () => {
            switch (catID) {
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
    }, [catID]);

  return (
    <React.Fragment>
        <NavbarSignedIn />
        <DynamicCategoryHero 
            catDescription={description}
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