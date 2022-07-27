import React from 'react'
import NavbarDefault from '../components/navbars/NavbarDefault'
import Footer from '../components/Footer'

const Privacy = () => {
  return (
    <React.Fragment>
        <NavbarDefault />
        <section className='w-screen h-full bg-grayBackground items-center justify-center py-36'>
            <div className='container mx-auto px-5 sm:px-0   py-20   bg-white shadow-md rounded w-full'>
            <div className='px-5 sm:px-20 mb-10 '>
            <p className='text-center text-black font-bold text-2xl mb-5'>Privacy Policy</p>

            {/* <h1 className='text-center text-red-700 font-semibold'>PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING OUR WEBSITE. BY USING THIS WEBSITE, YOU AGREE TO THESE TERMS OF USE. IF YOU DO NOT AGREE TO THESE TERMS OF USE, PLEASE DO NOT USE THIS WEBSITE.</h1> */}
 


            <hr className="mt-8 bg-black mb-8" />

            <h1 className='text-left font-bold text-secondaryBlue'>Introduction</h1>
            <p className='leading-relaxed mb-2 '>
                This website is maintained by MorePlex Company Limited.
            </p>
            <p className='leading-relaxed mb-2'>
                The security of that data is very important to us. In this document, we will explain how we
                collect, use and protect your personal data.
            </p>
            <p className='leading-relaxed mb-9 '>
                We will also explain what rights you have with regard to your personal data and how you can
                exercise those rights.
            </p>

        

            <h1 className='font-bold text-left text-secondaryBlue mb-1'>Registered Users</h1>
            <p className='leading-relaxed mb-9'>
            Under the EU’s General Data Protection Regulation (GDPR) personal data is defined as:
            “Any information relating to an identified or identifiable natural person (‘data subject’); an
            identifiable natural person is one who can be identified, directly or indirectly, in particular by
            reference to an identifier such as a name, an identification number, location data, an online
            identifier or to one or more factors specific to the physical, physiological, genetic, mental,
            economic, cultural or social identity of that natural person”.
            </p>

            <h1 className='font-bold text-left text-secondaryBlue mb-1'>How we use your information</h1>
            <p className='leading-relaxed mb-9'>
            This privacy policy tells you how MorePlex Company Limited will collect and use your
            personal data to manage your use of our websites (listed in Section 3, below) software
            applications, products, online learning, and in-person and virtual events.
            </p>


            <h1 className='font-bold text-left text-secondaryBlue mb-1'>Why does MorePlex Company Limited need to collect and store personal data?</h1>
            <p className='leading-relaxed mb-2'>
            In order for us to provide you with the information on our website, deliver products you
            purchase, engage in online learning, and participate in our events we need to collect personal
            data to keep our websites and underlying infrastructure secure, to meet our contractual
            obligations with third parties, to process payments, and for tax and audit purposes. In any event,
            we are committed to ensuring that the information we collect, and use is appropriate for this
            purpose, and does not constitute an invasion of your privacy.
            </p>
            <p className='mb-9'>
            For marketing purposes, MorePlex Company Limited will request your consent before
            contacting you
            </p>

            <h1 className='font-bold text-left text-secondaryBlue mb-1'>Will MorePlex Company Limited share my personal data with anyone else?</h1>
            <p className='leading-relaxed mb-9'>
            We may pass your personal data on to third-party service providers contracted to MorePlex
Company Limited in the course of dealing with you. Any third parties that we may share your
data with are obliged to keep your details securely, and to use them only to process information
for MorePlex Company Limited and fulfil the service they provide to our company on your
behalf. When they no longer need your data to fulfil this service, they will dispose of the details
in line with our company’s procedures. If we wish to pass your sensitive personal data onto a
third party we will only do so once we have obtained your consent, unless we are legally
required to do otherwise.
            </p>


            <h1 className='font-bold text-left text-secondaryBlue mb-1'>How will MorePlex Company Limited use the personal data it collects about me?</h1>
            <p className='leading-relaxed mb-9'>
            MorePlex Company Limited will process (collect, store and use) the information you provide
in a manner compatible with the EU’s General Data Protection Regulation (GDPR). We will
endeavour to keep your information accurate and up to date, and not keep it for longer than is
necessary. MorePlex Company Limited is required to retain information in accordance with
the law, such as information needed for income tax and audit purposes. How long certain kinds
of personal data should be kept may also be governed by specific business-sector requirements
and agreed practices. Personal data may be held in addition to these periods depending on
individual business needs.
            </p>


            <h1 className='font-bold text-left text-secondaryBlue mb-1'>Collection of Personal Data</h1>
            <p className='leading-relaxed mb-2'>
            We collect Personal Data about you when you provide such information directly to us, when third parties such as our business partners or service providers provide us with Personal Data about you, or when Personal Data about you is automatically collected in connection with your use of our Services.
            </p>
            <div className=''>
                <p className='leading-relaxed mb-1'><span className='font-bold'>Information we collect directly from you:</span> We receive Personal Data directly from you when you provide us with such Personal Data, including without limitation the following:</p>
                <ul class='marker:text-secondaryBlue list-outside list-disc ml-10 mb-4'>
                    <li>First and last name</li>
                    <li>Email address</li>
                    <li>Gender</li>
                    <li>Biographical information</li>
                    <li>Geographical information</li>
                    <li>Links to your social media accounts</li>
                    <li>Any other information you choose to share publicly on the Services, for example, anything you post to a public part of your Profile or an online classroom on the Services</li>
                </ul>

                <p className='leading-relaxed mb-1'><span className='font-bold'>Information we automatically collect when you use our Services:</span>  Some Personal Data is automatically collected when you use our Services, such as the following:</p>
                <ul class='marker:text-secondaryBlue list-outside list-disc ml-10 mb-9'>
                    <li>IP Address</li>
                    <li>Your activity on the Services. This includes class usage information such as course enrollment and which courses you’ve watched. It also includes community interaction data, such as which members you’re following, your comments, your projects, or project likes.</li>
                    <li>Device identifiers</li>
                    <li>Web browser information</li>
                    <li>Page view statistics</li>
                    <li>Browsing history</li>
                    <li>Transaction information (e.g. transaction amount, date and time such transaction occurred)</li>
                    <li>Cookies and other tracking technologies (e.g. web beacons, pixel tags, SDKs, etc.).</li>
                    <li>Location information (e.g. IP address)</li>
                    <li>Log data (e.g. access times, hardware and software information)</li>
                </ul>
            </div>

            {/* <h1 className='font-bold text-left text-secondaryBlue mb-1'></h1>
            <p className='leading-relaxed mb-9'>
            
            </p> */}

            <h1 className='font-bold text-left text-secondaryBlue mb-1'>Storage of personal data</h1>
            <p className='leading-relaxed mb-2'>
                MorePlex is a private limited liability company registered in Ghana with offices in Accra and
                Kumasi
            </p>
            <p className='leading-relaxed mb-2'>
                We use a wide range of CSPs (Cloud service providers) as part of our processing environment.
                Unless we specifically state otherwise, we are, in respect of all these CSPs, the data controller.
            </p>
            <p className='leading-relaxed mb-2'>
                Our payment processors and banking arrangements are based in Ghana
            </p>
            <p className='leading-relaxed mb-9'>
                We operate a data retention policy in respect of all data, whether paper-based or digital and
                those aspects of it that relate to personal data are contained in the table at 5, above.
            </p>



            <h1 className='font-bold text-left text-secondaryBlue mb-1'>Security measures</h1>
            <p className='leading-relaxed mb-9'>
            We have what we believe are appropriate security controls in place to protect personal data.
Risk assessment, including assessing risks to the rights and freedoms of data subjects. We do
not, however, have any control over what happens between your device and the boundary of
our information infrastructure. You should be aware of the many information security risks that
exist and take appropriate steps to safeguard your own information. We accept no liability in
respect of breaches that occur beyond our sphere of control.
            </p>


            <h1 className='font-bold text-left text-secondaryBlue mb-1'>Who we Are</h1>
            <p className='leading-relaxed mb-2'>
            Moreplex is a technology-driven cosmetic, home care and household chemical manufacturing
company that provides customer-need tailored organic-based hair and skin care products using
local raw materials and agricultural waste. Our e-skills platform allows our customers to
interact, take courses in basic chemical formulation at the comfort of their homes.
            </p>
            <p className='leading-relaxed mb-2'>
MorePlex Company Limited maintains this website. This means that our company determines
what data is collected, how this data is going to be used and how this data is protected.
            </p>
            <p className='leading-relaxed mb-2'>
            If you have questions about how we process personal data or would like to exercise your data
subject rights, please contact us using the following information
            </p>
            <ol className='ml-10'>
                <li className='mb-3'>
                    <h1 className='font-bold'>Name:</h1>
                    <p className='font-light'>Moreplex Company Ltd</p>
                </li>
                <li className='mb-3'>
                    <h1 className='font-bold'>Office Address:</h1>
                    <p className='font-light'>Moreplex Company Ltd</p>
                    <p className='font-light'>Asante Bekwa</p>
                    <p className='font-light'>Kumasi, Ghana</p>
                </li>
                <li className='mb-3'>
                    <h1 className='font-bold'>Email Address for Contact:</h1>
                    <p className='font-light'>info@eskills.moreplexgh.com</p>
                    <p className='font-light'>info@moreplexgh.com</p>
                </li>
                <li className='mb-3'>
                    <h1 className='font-bold'>Phone:</h1>
                    <p className='font-light'>+233(0)55 7848 787</p>
                </li>
            </ol>

            

            








            </div>
            </div> 
        </section> 

       

{/* 2          */}
        <Footer />
    </React.Fragment>
  ) 
}

export default Privacy