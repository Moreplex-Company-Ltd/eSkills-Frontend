import React from 'react'
import Navbar from '../components/navbars/Navbar'
import { Link } from 'react-router-dom'
import ContinueWithGoogle from '../components/Accounts/ContinueWithGoogle'
import ContinueWithFacebook from '../components/Accounts/ContinueWithFacebook';
import AccountInput from '../components/Accounts/AccountInput';
import SubmitButton from '../components/Accounts/SubmitButton';
import OrDivider from '../components/Accounts/OrDivider';
import { useState } from 'react';
import Footer from '../components/Footer';



const SignUp = () => {
    const [signUpWith, setSignUpWith] = useState('');

    console.log(signUpWith)

  return (
    <React.Fragment>
        <Navbar />

        <section className="bg-grayBackground   h-full">
        <div className='flex justify-center items-center w-full h-full pt-40 sm:px-10'>
        <div className="mx-auto rounded bg-white p-10 shadow w-full sm:w-3/4 md:w-3/4 lg:w-1/2">
            <h3 className="text-center text-2xl md:text-3xl font-bold mb-4">Create an Account</h3>

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

            <div className='flex justify-between mt-8 '>
                <button className='font-bold text-primaryBlue py-2 px-2   hover:py-2 hover:bg-primaryBlue hover:text-white rounded' onClick={()=>setSignUpWith('phone')}>Sign Up with Phone</button>
                <button className='font-bold text-primaryBlue  py-2 px-2  hover:py-2 hover:bg-primaryBlue hover:text-white rounded' onClick={()=>setSignUpWith('email')}>Sign Up with Email</button>
            </div>

            {/* conditional render base on either phone or email */}

            { signUpWith !=='' && 
            <form className='mt-[20px]' >
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <AccountInput  
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    required={false}
                    title='Please enter your first name'
                    // value={}
                    // onChange={}
                />
                <AccountInput  
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    required={false}
                    title='Please enter your last name'
                    // value={}
                    // onChange={}
                />
                </div>

                {signUpWith === 'phone' ? 
                    <AccountInput  
                        name='phoneNumber'
                        type='text'
                        placeholder='Phone Number'
                        required={false}
                        title='Please enter a valid phone number'
                        // value={}
                        // onChange={}
                    /> 
                    : 
                    <AccountInput  
                        name='email'
                        type='email'
                        placeholder='Email'
                        required={false}
                        title='Please enter a valid email'
                        // value={}
                        // onChange={}
                    /> 
                }

                

                <AccountInput 
                    name='password'
                    type='password'
                    placeholder='Password'
                    required={true}
                    title='Please enter a valid password'
                    // value={}
                    // onChange={}
                />

                
            
                <div className=" mt-3">
                    <Link to='/interests'><SubmitButton  name='Create Account'/></Link>
                    <p className='text-center mt-2'>New User? <Link to='/signin'><span className='font-bold text-secondaryBlue'>Create an Account</span></Link></p>
                </div>
            </form>
            }


            
        </div>
        
        </div>
        <div className='pt-[100px]'></div>
        </section>
        <Footer />




    </React.Fragment>
  )
}

export default SignUp