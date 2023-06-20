'use client'

import AboutSection from "../components/AboutSection";
import Navbar from "../components/NavBar";
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
      
     <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 shadow-lg">Empowering Non-Traditional Coders to Forge Their Path</h2>
          <p className="text-lg text-gray-800 mb-8 shadow-md">
            Pathfinder is on a mission to empower individuals with non-traditional education backgrounds and self-taught coders to excel in the world of technology. We believe that talent and passion for coding can be found in various educational journeys, and we are here to bridge the gap between your skills and the opportunities in the industry.
          </p>
          <p className="text-lg text-gray-800 mb-8 shadow-md">
            Our focus on non-traditional education backgrounds is rooted in the understanding that formal degrees are not the sole measure of talent or capability. We recognize the value and potential of those who have acquired their coding skills through online coding boot camps, self-study, or alternative learning paths. We celebrate your determination, resourcefulness, and the unique perspectives you bring to the tech field.
          </p>
          <p className="text-lg text-gray-800 mb-8 shadow-md">
            At Pathfinder, we provide a supportive and personalized learning environment that caters specifically to your needs. We understand the challenges you may face in navigating the tech industry without a traditional degree, and we are committed to helping you overcome those obstacles. Our experienced mentors, who themselves have non-traditional backgrounds, are dedicated to guiding you on your journey, offering tailored advice, and helping you unleash your full potential.
          </p>
          <p className="text-lg text-gray-800 mb-8 shadow-md">
            Whether you are looking to upskill, switch careers, or enhance your existing knowledge, Pathfinder offers a range of mentorship and tutoring programs designed to meet your specific goals. Join us and unlock a world of opportunities, where your unique background and self-taught expertise are celebrated and nurtured.
          </p>
        </div>
      </div>
 
      
      
      

      </div>
      
      
  );
};

export default About;
