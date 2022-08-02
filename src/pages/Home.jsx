import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseLoadingCard from '../components/CourseLoadingCard';
import CoursesRowByCategory from '../components/CoursesRowByCategory';
import Footer from '../components/Footer';


import NavbarSignedIn from '../components/navbars/NavbarSignedIn';
import CarouselSections from '../components/sections/CarouselSections';
import { getMe } from '../redux/userSlice';


const RenderLoading = () => {
  return (
    <div className='container mx-auto py-5 px-0'>
        <CourseLoadingCard />
    </div>
  )
}

const Home = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state=>state.user.isLoggedIn)
    const [isLoading, setIsLoading] = useState(false);
    // const [user, setUser] = useState();
    const [interestCats, setInterestCats] = useState({});


    useEffect(() => {
  
        const getUser = async () => {
            setIsLoading(true)
            const response = await dispatch(getMe()).unwrap();
            console.log(response)
            if(response.status===200){
                // setUser(response.user)
                setInterestCats(response.user.interests)
                setIsLoading(false)
            }else{
              // setUser(null)
            }
        }

        
    
        // call the fucn
        getUser();

        // clenn up
      return () => getUser()
    }, [ ])

    console.log( interestCats )
    console.log(Object.keys(interestCats).length)

  return (
    <React.Fragment>
      <NavbarSignedIn />
      <div className='bg-grayBackground'>

      <section>
          {/* desktop */}
          <div className="h-[400px] hidden sm:flex flex-col hero-section-main justify-center items-center ">
                <div className=" p-4 text-white justify-center">
                <h1 className="text-2xl sm:text-4xl font-bold sm:font-bold text-center text-gold">Inspirations Starts Here</h1>
                    <p className="text-xl font-medium sm:text-2xl text-center text-white mt-5 px-20">
                    Explore new skills, deepen existing passions, and get lost in creativity. 
                    <br/>What you find just might surprise and inspire you.
                    </p>
                </div>
                {/* <div className='flex justify-center gap-10'>
                  <CourseCard />
                  <CourseCard />
                  <CourseCard />
                </div> */}
            </div>


            {/* mobile */}
          <div className="h-[250px] sm:hidden flex hero-section-main justify-center items-center">
                <div className=" p-4 mt-14 text-white justify-center">
                <h1 className="text-2xl sm:text-4xl font-bold sm:font-bold text-center text-gold">Inspirations Starts Here</h1>
                    <p className="text-lg text-center font-normal text-white mt-5">
                    Explore new skills, deepen existing passions, and establish yourself
                    </p>
                </div>
                {/* <div className='flex justify-center gap-10'>
                  <CourseCard />
                  <CourseCard />
                  <CourseCard />
                </div> */}
            </div>
        </section>


            
          {/* {(interestCats.length!==0) ? 
            // interestCats.map(interestCat=>
            //   <CoursesRowByCategory 
            //   title={`${interestCat.category.name} Courses for you`}
            // />)
            // (console.log(interestCats[]))

            // <p>hel</p>
              
            
            
            // <RenderLoading />
           : (
            <>
            <CoursesRowByCategory 
            title='Because you love Cosmetic Manufacturing'
            loading={true}
          />
          <CoursesRowByCategory 
            title='Establish your Business: Marketing Courses to take you to the next level'
            loading={true}
          />
          </>
          )} */}

          {Object.keys(interestCats).length!==0 ? 
          interestCats.map(interestCat=>
              <CoursesRowByCategory 
              key={interestCat.id}
              id={interestCat.categoryId}
              title={`${interestCat.category.name} Courses for you`}
              loading={true}
            />)
          :
           (
            <>
            <CoursesRowByCategory 
            title='Because you love Cosmetic Manufacturing'
            loading={true}
          />
          <CoursesRowByCategory 
            title='Establish your Business: Marketing Courses to take you to the next level'
            loading={true}
          />
            </>
           )}

         
        
        
        
     


        <section className='my-5'>
          <CarouselSections />
        </section>


 

     
      

  
        

       



        </div>
        <Footer />
    </React.Fragment>
  )
}

export default Home