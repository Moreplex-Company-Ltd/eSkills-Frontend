import React from 'react'
import Navbar from '../components/navbars/Navbar'
import { Link } from 'react-router-dom'
import ContinueWithGoogle from '../components/Accounts/ContinueWithGoogle'
import ContinueWithFacebook from '../components/Accounts/ContinueWithFacebook';
import AccountInput from '../components/Accounts/AccountInput';
import SubmitButton from '../components/Accounts/SubmitButton';
import OrDivider from '../components/Accounts/OrDivider';
import Footer from '../components/Footer';



const SignIn = () => {
  return (
    <React.Fragment>
        <Navbar />

        <section className="bg-grayBackground   h-full">
        <div className='flex justify-center items-center w-full h-full pt-40  sm:px-10'>
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

            <form className='mt-[20px]' >
                <AccountInput  
                    name='email/phone'
                    type='text'
                    placeholder='Email or Phone'
                    required={true}
                    title='Please enter a valid email or phone number'
                    // value={}
                    // onChange={}
                />
                <AccountInput 
                    name='password'
                    type='password'
                    placeholder='Password'
                    required={true}
                    title='Please enter a valid password'
                    // value={}
                    // onChange={}
                />

            

                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300  " required="" />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 ">Remember me</label>
                    </div>
                    <Link to="/forgotpassword" className="ml-auto text-sm text-se hover:underline">Lost Password?</Link>
                </div>
            
                <div className=" mt-3">
                    <Link to='/home'><SubmitButton  name='Log In'/></Link>
                    <p className='text-center mt-2'>New User? <Link to='/signUp'><span className='font-bold text-secondaryBlue'>Create an Account</span></Link></p>
                </div>
            </form>
        </div>
      
        </div>
        <div className='pt-[100px]'></div>
        </section>

        <Footer />




    </React.Fragment>
  )
}

export default SignIn