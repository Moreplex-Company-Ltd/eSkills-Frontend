import React, { useState } from 'react'
// import Footer from '../components/Footer'
import NavbarSignedIn from '../components/navbars/NavbarSignedIn'

// import ladyOnPhone from '../assets/images/lady-onphone.jpg'
import CourseChapterNav from '../components/courseVideoPage/CourseChapterNav'
import TabHeaders from '../components/courseVideoPage/tabs/TabHeaders'

import AboutTab from '../components/courseVideoPage/tabs/AboutTab';
import ReviewsTab from '../components/courseVideoPage/tabs/ReviewsTab';
import DiscussionsTab from '../components/courseVideoPage/tabs/DiscussionsTab'
import ResourcesTab from '../components/courseVideoPage/tabs/ResourcesTab';
import LoadingVideo from '../components/courseVideoPage/LoadingVideo'
import RenderVideoPlayer from '../components/courseVideoPage/RenderVideoPlayer';
// import { Accordion } from 'flowbite-react';


const courseTitle = 'Introduction to Soap Branding: Branding the Perfect Soap'
const courseAuthor = 'Prince Baff'

const CoursePage = () => {
    
    const [selectedTab, setSelectedTab] = useState('tab1');

    
  return (
    <React.Fragment>
        <NavbarSignedIn />

        <section className='h-full w-full'>
            <div className='border pt-12  text-black border-red-700'>
                <div className='pt-16 bg-gray-600'>
                    <h1 className='ml-5 text-2xl tracking-tight font-bold  md:text-4xl'>{courseTitle}</h1>
                    <h2 className='ml-5 mb-2'>Taught By: <span className='text-secondaryBlue italic font-extrabold'>{courseAuthor}</span></h2>
                    {/* <hr /> */}
                    {/* <div className='flex mx-10 justify-between mt-5'>
                        <button className='px-4 py-1 rounded bg-gray-100 border border-secondaryBlue hover:bg-gray-200'>Prev</button>
                        <button className='px-4 py-1 rounded bg-gray-100 border border-secondaryBlue hover:bg-gray-200'>Next</button>
                    </div> */}

                    <div className='flex mx-5 mt-2border border-green-700'>
                        <div className='w-[75%] h-[560px]  border border-black'>
                            {/* <img src={ladyOnPhone} alt='immg'  className='object-fill w-full h-full'/> */}
                            {/* <LoadingVideo /> */}
                            <RenderVideoPlayer />

                        </div>
                        <div className='w-[25%] py-0 h-[560px] overflow-y-scroll '>
                            <p className='text-center font-extrabold text-lg mb-4'>9 Sections (2h:45m)</p>
                        <div className=' pb-0  w-full '>
                            <CourseChapterNav />

                            {/* <CourseChapterNav  isWatched={true} />
                            <CourseChapterNav  />
                            <CourseChapterNav  />
                            <CourseChapterNav  />
                            <CourseChapterNav  />
                            <CourseChapterNav  />
                            <CourseChapterNav  /> */}
                            
                        </div>
                        
                        </div>
                    </div>

                </div>

                {/* tabs goes here */}
                <div className='mt-5'>
                    <div className='flex justify-between mx-20'>
                        <div className='flex justify-between'> 
                            <TabHeaders id='tab1' title='About' setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
                            <TabHeaders id='tab2' title='Reviews' setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
                            <TabHeaders id='tab3' title='Discussions' setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
                            <TabHeaders id='tab4' title='Resources' setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
                        </div>
                        <div>
                        <button className='px-4 py-0.5 rounded bg-gray-100 border border-secondaryBlue hover:bg-gray-200 mr-5'>Favorite</button>
                        <button className='px-4 py-0.5 rounded bg-gray-100 border border-secondaryBlue hover:bg-gray-200'>Share</button>
                        </div>
                    </div>
                    <hr className='h-2' />

                    <div className='mt-8'>
                        {/* dynamic rendering based on selected tab */}
                        {selectedTab === 'tab1' && <AboutTab />  }
                        {selectedTab === 'tab2' && <ReviewsTab /> }
                        {selectedTab === 'tab3' && <DiscussionsTab /> }
                        {selectedTab === 'tab4' && <ResourcesTab /> }
                    </div>
  
                </div>



            </div>
        </section>

        {/* <Footer /> */}
    </React.Fragment>
  )
}

export default CoursePage