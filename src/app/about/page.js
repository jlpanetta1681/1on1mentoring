'use client'

import AboutSection from "../components/AboutSection";
import Navbar from '../components/NavBar';
import Image from 'next/image'

const About = () => {
  return (
    <div className="text-center">
    <Navbar />
      <h1 className="text-4xl font-bold mb-8">
        A little Bit About Pathfinders.
      </h1>
     <div className="flex justify-center">

      <Image
      src="/images/desks.jpg"
      alt="techImage"
      width={500}
      height={500}
	  quality={100}
    />
     </div>
      <AboutSection />
      
      
      

      
      </div>  
      
  );
};

export default About;
