import React from 'react'
import NavbarDefault from '../components/navbars/NavbarDefault'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Terms = () => {
  return (
    <React.Fragment>
        <NavbarDefault />
        <section className='w-screen h-full bg-grayBackground items-center justify-center py-36'>
            <div className='container mx-auto px-5 sm:px-0   py-20   bg-white shadow-md rounded w-full'>
            <div className='px-5 sm:px-20 mb-10 '>
            <p className='text-center text-black font-bold text-2xl mb-5'>Terms of Use</p>

            {/* <h1 className='text-center text-red-700 font-semibold'>PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING OUR WEBSITE. BY USING THIS WEBSITE, YOU AGREE TO THESE TERMS OF USE. IF YOU DO NOT AGREE TO THESE TERMS OF USE, PLEASE DO NOT USE THIS WEBSITE.</h1> */}
 


            <hr className="mt-8 bg-black mb-8" />

            <h1 className='text-left font-bold text-secondaryBlue'>Introduction</h1>
            <p className='leading-relaxed mb-6 '>
              Welcome to Moreplex Eskills Academy (hereby reffered to as MESA), an online learning community to master real-world skills. 
              The MESA website and service including (without limitation) all websites, 
              mobile applications and other interactive properties through which the service is delivered (collectively, the “Service”) 
              are owned, operated and distributed by Moreplex Company Ltd. (referred to in these Terms of Service as “MESA” or “we” 
              and through similar words such as “us,” “our,” etc.). 
              <span className='text-red-700'> By registering, accessing, or using any part of the Service (including the website), you are agreeing to the terms and conditions described below (“these Terms of Service”), 
              the terms and conditions of our privacy policy (the “Privacy Policy”) and any other legal notices published by us on the Service (collectively, 
              the “Governing Documents”). If you do not agree to any of these terms, you should not use the Service</span>.  
              These Terms of Service apply to all users, including both users who are simply viewing content available 
              via the Service and users who have created accounts on the website
            </p>

            <p className='leading-relaxed  mb-10'>
            MESA reserves the right, at its sole discretion, to change, modify, add, or delete portions of these Terms of Use at any time without further notice. 
            If MESA does this, MESA will post the changes to these terms and conditions on the Service. Your continued use of the Service after any such changes constitutes your acceptance of the revised terms and conditions.
            </p>

            <h1 className='font-bold text-left text-secondaryBlue'>Registered Users</h1>
            <p className='leading-relaxed mb-6'>
            The Service is open to the public but certain portions, components, content and features of the Service (including purchases or access to eBooks) are only available to individuals who register with MESA and create a user account on the Service (each, a “Registered User“). 
            If you are a Registered User then you agree to the following:
            </p>

            <ol className='ml-10 marker:text-secondaryBlue list-outside list-disc mb-10'>
              <li className='mb-5'>
              In consideration of your use of the Service, you represent that you are of the age of majority in the jurisdiction in which you reside, or 13 years old or older up to the age of majority in the jurisdiction in which you reside with the express written consent of your parent or legal guardian. 
               You also agree to (a) provide true, accurate, current and complete information about yourself as prompted by any registration form(s) on the Service, including your geographical location and billing address (the “Registration Data“); and (b) maintain and promptly update the Registration Data
                to keep it true, accurate, current and complete. 
              If you provide any information that is untrue, inaccurate, not current or incomplete, MESA has the right to suspend or terminate your account and refuse any and all current or future use of the Service (or any portion thereof);
              </li>
              <li>
              Registered Users will receive a password and account designation upon completing the Service registration process. You are responsible for maintaining the confidentiality of the password and account and are fully responsible for all activities that occur under your password or account. 
              You agree to (a) immediately notify MESA of any unauthorized use of your password or account or any other breach of security, and (b) ensure that you exit from your account at the end of each session. Any personal information you provide in the registration form will be collected in 
              accordance with, and for the express purposes set out in MESA’s <Link to='/privacy'>Privacy Policy</Link>
              </li>
            </ol>


            <h1 className='font-bold text-left text-secondaryBlue'>Restrictions on Use</h1>
            <p className='leading-10'>These terms apply to all users of the Service, whether or not you are a Registered User.</p>
            <ol className='ml-10 marker:text-secondaryBlue list-outside list-decimal mb-10 space-y-3'>
                <li>You will use the Service only for lawful purposes and agree to not use the Service in any way that will infringe upon the use or rights of any other user.</li>
                <li>Your use of the Service is subject to all applicable laws and regulations, and you are solely responsible for the substance of your communications through the Service.</li>
                <li>You will not upload any copyrighted, trademarked, or proprietary materials on the Service without the expressed permission of the owner. You will not post any content that infringes on any patent, trademark, trade secret, copyright, right of publicity, or other intellectual property or proprietary right of any party.</li>
                <li>You assume full responsibility for the content of the Service offered.</li>
                <li>You understand that classes posted are publicly available to be viewed and accessed by any student.</li>
                <li>You agree that you will not engage in any behavior that constitutes unauthorized or unsolicited advertising, junk or bulk email (also known as “spamming”), chain letters, any other form of unauthorized solicitation, or any form of lottery or gambling.</li>
                <li>You will not share content from the Service with anyone who is not properly licensed to access the content.</li>
                <li>You will not upload, share, post, distribute or otherwise partake in any behavior that is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another’s privacy, tortious, contains explicit or graphic descriptions or accounts of sexual acts (including but not limited to sexual language of a violent or threatening nature directed at another individual or group of individuals), or otherwise violates our rules or policies.</li>
                <li>You will not partake in any behavior that victimizes, harasses, degrades, or intimidates an individual or group of individuals on the basis of religion, gender, sexual orientation, race, ethnicity, age, or disability.</li>
                <li>You will not share software viruses or any other computer code, files, or programs that are designed or intended to disrupt, damage, or limit the functioning of any software, hardware, or telecommunications equipment or to damage or obtain unauthorized access to any data or other information of any third party.</li>
                <li>You will not impersonate any person or entity, including any of our employees or representatives.</li>
                <li>You will not use your account to breach security of another account or attempt to gain unauthorized access to another network or server. Not all parts of the Service may be available to you or other authorized users of the Service. You shall not interfere with anyone else’s use and enjoyment of the Service. Users who violate systems or network security may incur criminal or civil liability.</li>
            </ol>


            <h1 className='font-bold text-left text-secondaryBlue mb-2'>Disclaimer of Warranty; Limitation of Liability</h1>
            <ol className='ml-10 marker:text-secondaryBlue list-outside list-decimal mb-10 space-y-4'>
              <li>You expressly agree that use of the website is at your sole risk. Neither MESA, its affiliates nor any of their respective employees, agents, third party content providers, or licensors warrant that the site will be uninterrupted or error free; nor do they make any warranty as to the results that may be obtained from the use of the website, or as to the accuracy or reliability of any information, service or merchandise provided through the website.</li>
              <li>The website is provided on an “as is” basis without warranties of any kind, either express or implied, including, but not limited to, warranties of title or implied warranties of merchantability or fitness for a particular purpose. Additionally, there are no warranties as to the results obtained from the use of the website.</li>
              <li>In no event will MESA, or any person or entity involved in creating, producing or distributing the website or the content included therein, be liable in contract, in tort (including for its own negligence), or under any other legal theory (including strict liability) for any damages, including, without limitation, direct, indirect, incidental, special, punitive, consequential or similar damages, including, without limitation, lost profits or revenues, 
                loss of use or similar economic loss, arising out of the use of or inability to use the website. You hereby acknowledge that the provisions of this section shall apply to all use of and content on the website. 
                Applicable law may not allow the limitation or exclusion of liability or incidental or consequential damages, so the above limitation or exclusion may not apply to you. In no event shall MESA’s total liability to you for all damages, losses and causes of action whether in contract, tort (including its own negligence) or under any other legal theory (including strict liability) exceed the amount paid by you, if any, for accessing this website.</li>
              <li>The above disclaimer of liability applies to any damages or injury caused by any failure of performance, error, omission, inaccuracy, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction or unauthorized access to, alteration of, or use of this website, whether for breach of contract, tortious behavior (including strict liability), negligence, or under any other cause of action. 
                You specifically acknowledge that MESA is not liable for the defamatory, offensive or illegal conduct of other users or third-parties and that the risk of injury from the foregoing rests entirely with you.</li>
            </ol>


            <h1 className='font-bold text-left text-secondaryBlue mb-2'>Indemnification</h1>
            <p className='leading-relaxed mb-10'>
            You agree to defend, indemnify and hold harmless MESA and its affiliates and their respective directors, officers, employees and agents from and against any and all claims, actions, demands, damages, costs, liabilities, losses and expenses (including reasonable attorneys’ fees) arising out of your use of the Service.
            </p>

            
            <h1 className='font-bold text-left text-secondaryBlue mb-2'>Trademark</h1>
            <p className='leading-relaxed mb-10'>
              MESA and related words, domain names and logos are trade-marks and the property of MESA other trade-marks, product names and company names or logos cited herein are the property of their respective owners.
            </p>

            <h1 className='font-bold text-left text-secondaryBlue mb-2'>Third Party Content</h1>
            <p className='leading-relaxed mb-10'>
            Any opinions, advice, statements, services, offers, or other information or content expressed or made available by third parties, including content providers and users, are those of the respective author(s) or distributor(s) and not of MESA. In many instances, the content available through the Service represents the opinions and judgments of the respective content provider or user. 
            MESA neither endorses nor is responsible for the accuracy or reliability of any opinion, advice or statement made on the Service by anyone other than authorized MESA employee spokespersons while acting in their official capacities.
            </p>


            <h1 className='font-bold text-left text-secondaryBlue mb-2'>Website Content</h1>
            <p className='leading-relaxed mb-10'>All literary works  are the exclusive property of the publisher or its licensors and is protected by copyright and other intellectual property laws. The download of these literary works is intended for MESA’s Registered Users’ personal and non-commercial use.
             Any other use of literary works downloaded from MESA is strictly prohibited. Registered Users may not modify, transmit, publish, participate in the transfer or sale of, reproduce, create derivative works from, distribute, perform, display, or in any way exploit, any of the content of these literary works, in whole or in part. 
             By downloading literary works from MESA, the Registered User hereby acknowledges and agrees to these terms.</p>
           
            <p className='leading-relaxed mb-10'>Any rights of MESA not expressly granted herein are reserved.</p>
         
            </div>
            </div> 
        </section> 

       

{/* 2          */}
        <Footer />
    </React.Fragment>
  ) 
}

export default Terms