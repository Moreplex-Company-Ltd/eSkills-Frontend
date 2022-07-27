import React from 'react'
import NavbarSignedIn from '../components/navbars/NavbarSignedIn';
import Footer from '../components/Footer';


const About = () => {
    const desktopheight = 96;
    const mobileHeight = 64;
    const mainText = `Explore, Learn,  Establish yourself`
  return (
    <React.Fragment>
        <NavbarSignedIn />


        <section>
            {/* desktop */}
            <div className={` h-${desktopheight} hidden sm:flex  hero-section-1  items-center `}>
                <div className="container mx-auto  text-white">
                <h1 className="text-2xl sm:text-4xl font-bold sm:font-bold text-white mt-20 text-center">
                    {mainText}
                </h1>
                
                </div>
            </div>

            {/* mobile */}
            <div className={` h-${mobileHeight} sm:hidden hero-section-1 flex items-center justify-center`}>
                <div className=" p-4 mt-14 text-white justify-center items-center">
                <h1 className="text-2xl sm:text-4xl font-bold sm:font-bold text-center text-white">{mainText}</h1>
                
                </div>
            </div>
        </section>

        <section className="bg-white ">
            <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto lg:px-40 md:px-20  text-center">
                    {/* <h1 className="mb-4 text-2xl tracking-tight font-bold text-primaryBlue md:text-4xl ">Online learning Designed for Vocational Skills</h1> */}
                    <p className="mb-4 text-lg md:text-2xl leading-loose">
                    Moreplex ESkills Academy is a personalized online learning community platform designed to teach
vocational and technical skills to economically disadvantaged group. The goal of the
platform is to remove all barriers to technical and vocational training by making it
available to as many people as possible.
                    </p>
                </div>   
            </div>
        </section>


        <aside class="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2">
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="max-w-xl mx-auto text-center sm:text-left">
      <h2 class="text-2xl font-bold text-white md:text-3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit
      </h2>

      <p class="hidden text-gray-300 md:mt-4 md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
        tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
        fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
        duis.
      </p>

      <div class="mt-4 md:mt-8">
        <a
          href="#d"
          class="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>

  <img
    alt="#"
    src="https://flonaws.com/blocks/marketing-ui/content/office-long-1.png"
    class="object-cover w-full h-56 sm:h-full"
  />
</aside>


        {/* <section class="relative bg-white">
            <img
                class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
                src="https://images.unsplash.com/photo-1601758003122-53c40e686a19"
                alt="Couple on a bed with a dog"
            />

            <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

            <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
                <div class="max-w-xl text-center sm:text-left">
                <h1 class="text-3xl font-extrabold sm:text-5xl">
                    Let us find your
                    <strong class="font-extrabold text-rose-700 sm:block">
                    Forever Home.
                    </strong>
                </h1>

                <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>

                <div class="flex flex-wrap gap-4 mt-8 text-center">
                    <a class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring" href="/get-started">
                    Get Started
                    </a>

                    <a class="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring" href="/about">
                    Learn More
                    </a>
                </div>
                </div>
            </div>
        </section> */}
        

        <Footer />
    </React.Fragment>
  )
}

export default About