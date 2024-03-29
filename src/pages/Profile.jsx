import React, { useEffect, useState } from 'react'
import NavbarSignedIn from '../components/navbars/NavbarSignedIn'
import DefaultHero from '../components/uis/DefaultHero'

// import avatar from '../assets/images/background2.jpeg'
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { getMe } from '../redux/userSlice';


const avatar = 'https://res.cloudinary.com/jondexter/image/upload/v1629122461/avatars/user_ywbrdf.png'





const RenderItem = ({title, value}) =>{
    return (
    <div className="pl-1 w-[18rem] sm:w-[22rem] h-20 bg-purple-500 rounded-lg shadow-md">
      <div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
        <div className="my-auto">
          <p className="font-bold">{title}</p>
          <p className="text-lg">{value}</p>
        </div>
        <div className="my-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        </div>
      </div>
    </div>
    )
}

const Profile = () => {
    const dispatch = useDispatch()

    const [user, setUser] = useState();


    useEffect(() => {
  
        const getUser = async () => {
            const response = await dispatch(getMe()).unwrap();
            console.log(response)
            if(response.status===200){
                setUser(response.user)
            }
        }
    
        // call the fucn
        getUser();

        // clenn up
      return () => getUser()
    }, [dispatch])




  return (
    <React.Fragment>
        <NavbarSignedIn />
        <DefaultHero
            heroText=' '
            mH='36'
            dH='32'
        />
        <main>
            <div className='container  mx-auto pb-10 pl-5 sm:pl-0'>
                {/* image goes here */}
                <div className='grid grid-cols-1 sm:grid-cols-3 mt-5   gap-5'>

                    <div className='flex flex-col border border-gold h-full  items-center bg-white rounded-lg shadow-sm py-10'>
                        <img className="w-32 h-32 sm:w-40 sm:h-40  rounded-full ring-white object-cover" src={user?.avatarURL || avatar} alt="userphoto" />
                        <div className=' mt-5 flex flex-col justify-around gap-1'>
                            <p className='font-bold'>Name: <span className='font-light'>{user?.firstName.concat(' ', user?.lastName) || 'Guest'}</span></p>
                            { user?.email && <p className='font-bold'>Email: <span className='font-light'>{user.email}</span></p>}
                            { user?.phoneNumber && <p className='font-bold'>Phone Number: <span className='font-light'>{user.phoneNumber}</span></p>}
                            <p className='font-bold'>Account verified: <span className='font-light'>{user?.accountVerified ? 'Yes' : 'No'}</span></p>
                            <p className='font-bold'>Date joined: <span className='font-light'>{user?.created_at }</span></p>
                        </div>
                       
                        <div className=' mt-6 '>
                            <button className='border border-primaryBlue rounded px-4 py-1'>Edit Profile</button>
                        </div>
                    </div>

                    <div className='col-span-2 bg-white rounded-lg shadow-sm flex  justify-between  pt-10 border border-gold mr-5 sm:mr-0 '>
                        
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 px-5 mb-9'>
                            <RenderItem title='COURSES ENROLLED' value={0} />
                            <RenderItem title='COURSES COMPLETED' value={0} />
                            {/* <RenderItem title='COURSES COMPLETED' value={0} /> */}
                        </div>

                        
                        
                        

                    </div>

                
                </div>
            </div>
        </main>
        <Footer />
    </React.Fragment>
  )
}

export default Profile