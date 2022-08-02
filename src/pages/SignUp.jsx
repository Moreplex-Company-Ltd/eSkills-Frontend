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
import { useDispatch } from 'react-redux';
import { signupUser } from '../redux/userSlice';



const SignUp = () => {
    const dispatch = useDispatch();

    const [signUpWith, setSignUpWith] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState();

    const [loggingIn, setLoggingIn] = useState("");
    const [error, setError] = useState('')


    const onSubmitHandler = async(e) => {
        e.preventDefault()
        setLoggingIn(true)
        setError('')
        if(signUpWith === 'phone'){
            const response = await dispatch(signupUser({
                type:'phone',
                phoneNumber,
                firstName,
                lastName,
                password
            })).unwrap();

            if(response.status === 200){
                console.log('sign up successfull, proceeding to select interests');
                window.location.href='/interests'
            }else if(response.status === 400){
                setError(response.message)
            }else {
                setError(response.message)
            }

            console.log(response)

        } else if (signUpWith === 'email') {
            const response = await dispatch(signupUser({
                type:'email',
                email,
                firstName,
                lastName,
                password
            })).unwrap();

            if(response.status === 200){
                console.log('sign up successfull, proceeding to select interests');
                window.location.href='/interests'
            }else if(response.status === 400){
                setError(response.message)
            }else{
                setError(response.message)
            }
        }
        setLoggingIn(false)


        // console.log(firstName, lastName, email, phoneNumber, password)


    }


    // console.log(signUpWith)
    // console.log(password)

  return (
    <React.Fragment>
        <Navbar />

        <section className="bg-grayBackground   h-full">
        <div className='flex justify-center items-center w-full h-full pt-8 sm:pt-40 sm:px-10'>
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
            <form className='mt-[20px]'  onSubmit={onSubmitHandler}>
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <AccountInput  
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    required={true}
                    title='Please enter your first name'
                    value={firstName}
                    onChange={e=>setFirstName(e)}
                />
                <AccountInput  
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    required={true}
                    title='Please enter your last name'
                    value={lastName}
                    onChange={(e)=>setLastName(e)}
                />
                </div>

                {signUpWith === 'phone' ? 
                    <AccountInput  
                        name='phoneNumber'
                        type='text'
                        placeholder='Phone Number'
                        pattern="[0]{1}[0-9]{9}"
                        required={true}
                        title='Please enter a valid phone number starting with 0 and of length 10'
                        value={phoneNumber}
                        onChange={e=>setPhoneNumber(e)}
                    /> 
                    : 
                    <AccountInput  
                        name='email'
                        type='email'
                        placeholder='Email'
                        required={true}
                        title='Please enter a valid email'
                        value={email}
                        onChange={e=>setEmail(e)}
                    /> 
                }

                

                <AccountInput 
                    name='password'
                    type='password'
                    placeholder='Password'
                    required={true}
                    title='Please enter a valid password'
                    value={password}
                    onChange={(e)=>setPassword(e)}
                />

                
                <p className='mt-3 text-center text-sm text-red-700'>{error}</p>
                <div className=" mt-3 mb-10 sm:mb-0">
                    <SubmitButton   name= {loggingIn ? 'Creating Account...' : 'Create Account'} />
                    <p className='text-center mt-2'>Already have an Account? <Link to='/signin'><span className='font-bold text-secondaryBlue'>Sign In</span></Link></p>
                </div>
            </form>
            }


            
        </div>
        
        </div>
        <div className='pt-0 sm:pt-[100px]'></div>
        </section>
        <Footer />




    </React.Fragment>
  )
}

export default SignUp