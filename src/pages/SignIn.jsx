import React, { useState } from 'react'
import Navbar from '../components/navbars/Navbar'
import { Link } from 'react-router-dom'
import ContinueWithGoogle from '../components/Accounts/ContinueWithGoogle'
import ContinueWithFacebook from '../components/Accounts/ContinueWithFacebook';
// import AccountInput from '../components/Accounts/AccountInput';
import SubmitButton from '../components/Accounts/SubmitButton';
import OrDivider from '../components/Accounts/OrDivider';
import Footer from '../components/Footer';
import { logInUser } from '../redux/userSlice';
import { useDispatch } from "react-redux";



const SignIn = () => {
    const dispatch = useDispatch()
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('')
    const [loggingIn, setLoggingIn] = useState("");
    const [error, serError] = useState(' ');


    const onSubmitHandler = async(e) => {
        e.preventDefault();
        serError(' ')
        setLoggingIn(true)
        let phoneNumber = ''
        let email = ''
        
        console.log(emailOrPhone, password)
        // check if emailOrPhone is either a phonenumber of emailaddress
        let emailRE = /\S+@\S+\.\S+/;
        let numRe = /^\d+$/;
        if(emailRE.test(emailOrPhone)){
            console.log('this is email')
            email = emailOrPhone

            // fire
            const response = await dispatch(logInUser({email, password})).unwrap()
            setLoggingIn(false)
            if(response.status===200){
                console.log('okaokaoa email')
                window.location.href='/home'
            } else if(response.status === 400){
                serError(response.message)
            }


        } else if(numRe.test(emailOrPhone)){
            console.log('this is phone')
            if(emailOrPhone.length !==10){
                return serError('Please enter a valid phone number of length 10')
            } else {
                phoneNumber = emailOrPhone
                const response = await dispatch(logInUser({phoneNumber, password})).unwrap();
                setLoggingIn(false)
                // console.log(response)
                if(response.status===200){
                    console.log('okaokaoa phone')
                    window.location.href='/home'
                } else if(response.status === 400){
                    serError(response.message)
                }
            }

        } else{
            serError('Please enter a valid phone number or email')
        } 
        

        // const response = await dispatch(logInUser({ , password })).unwrap();
      
        
    }


  return (
    <React.Fragment>
        <Navbar />

        <section className="bg-grayBackground   h-full">
        <div className='flex justify-center items-center w-full h-full pt-8 sm:pt-32  sm:px-10'>
        <div className="mx-auto rounded bg-white p-10 shadow w-full sm:w-3/4 md:w-3/4 lg:w-1/2">
            <h3 className="text-center text-2xl md:text-3xl font-bold mb-4">Sign in to Continue</h3>

            <div className='mb-5'>
            <div className='block pr-1 mb-2'>
            <ContinueWithGoogle />
            </div>

            <div className='mt-2 block pr-1 mb-5'>
            <ContinueWithFacebook />
            </div>
            </div>

            {/* or section */}
            <OrDivider />

            <form className='mt-[20px]' onSubmit={onSubmitHandler}>
            <div className="mt-2 block pr-1 mb-4">
                <input  
                    name='email/phone'
                    type='text'
                    className="w-full rounded border bg-grayBackground p-2 border-secondaryBlue focus:outline-none focus:ring-2 focus:ring-purple-600" 
                    placeholder='Email or Phone'
                    required={true}
                    title='Please enter a valid email or phone number'
                    value={emailOrPhone}
                    onChange={(e)=>setEmailOrPhone(e.target.value)}
                />
            </div>

            <div className="mt-2 block pr-1 mb-4">
                <input  
                    name='password'
                    type='password'
                    className="w-full rounded border bg-grayBackground p-2 border-secondaryBlue focus:outline-none focus:ring-2 focus:ring-purple-600" 
                    placeholder='Password'
                    required={true}
                    title='Please enter a valid password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
                
                {/* <AccountInput 
                    name='password'
                    type='password'
                    placeholder='Password'
                    required={true}
                    title='Please enter a valid password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                /> */}

            

                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300  " required="" />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 ">Remember me</label>
                    </div>
                    <Link to="/forgotpassword" className="ml-auto text-sm text-se hover:underline">Lost Password?</Link>
                </div>
            
                <p className='mt-3 text-center text-sm text-red-700'>{error}</p>
                <div className=" mt-2 mb-10 sm:mb-0">
                    <SubmitButton  name= {loggingIn ? 'Loggin In...' : 'Log in'} />
                    <p className='text-center mt-2'>New User? <Link to='/signUp'><span className='font-bold text-secondaryBlue'>Create an Account</span></Link></p>
                </div>
            </form>
        </div>
      
        </div>
        <div className='pt-0 sm:pt-[100px]'></div>
        </section>

        <Footer />




    </React.Fragment>
  )
}

export default SignIn