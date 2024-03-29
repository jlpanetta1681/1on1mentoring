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

   
     <div className="flex flex-col items-center justify-center h-screen">
  <h1 className="font-bold">Whos idea is this anyway?</h1>
  <div className="my-4">
    <Image src="/images/headshot.jpg" width={300} height={300} alt="headshot" className="mx-auto" />

        <div className="my-4 text-sm">

        <p>
          Hi I am Joseph Panetta the founder of Pathfinders. As a highly skilled Full-Stack Web Developer with over 3 years of experience in tutoring and mentoring, as well as 4 years of professional experience as a website creator, software intern, and Quality assurance engineer, as well as coming from a non-traditional education as well, I am passionate about web application development and helping individuals reach their goals in the field of technology.
        </p>
        <p>
          My expertise lies in the MERN stack that is Mongo.db, Express.js, React using next.js and Node.js. SQL Server is my go-to for database management. I stay updated with the latest industry trends and continuously learn and explore cutting-edge technologies and frameworks to deliver exceptional results.
        </p>
        <p>
          I completed my Full-Stack Web Development endorsement at Lambda School in San Francisco, where I gained proficiency in front-end and back-end development, Data Structures and Algorithms, design patterns, and SDLC.
        </p>
        <p>
          With my strong technical skills in C#, JavaScript, TypeScript, CSS3, HTML5, and frameworks such as .NET Framework, Angular, React, Entity Framework, WCF, MVC, and Web API, I am equipped to provide comprehensive mentoring and guidance to aspiring developers.
        </p>
        <p>
          In addition to my professional experience, I have worked as a Front-end Development Instructor at NIIT delivering engaging curriculum materials, staying updated with emerging technologies, and achieving a 100% graduation and employment rate among my cohorts. I have also provided coding mentorship and tutoring through VeroSkills LLC, guiding students in Python, JavaScript, HTML, CSS, React, SQL, Unity, and Gatsby framework.
        </p>
        <p>
          As the founder and lead engineer of Pathfinders Mentoring and Tutoring Programs, I am dedicated to providing comprehensive educational support to underprivileged students. I have designed and built a web-based platform using React.js, Node.js Brevo and Firebase enabling personalized learning experiences and academic growth. Additionally, I have collaborated with educational experts and potential partners to shape the vision and maximize the programs impact on student success.
        </p>
        <p>
          I have actively contributed to open-source projects on GitHub, participated in hackathons and won top positions, demonstrating my innovation and technical prowess. I actively engage in industry events to stay up-to-date with the latest advancements.
        </p>
        <p>
          I am excited to share my knowledge and experience with aspiring developers helping them navigate the world of web development and achieve their career goals.
        </p>
        </div>
      </div>
    </div>

     


     </div>
      
     <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-xl font-bold mb-8 shadow-lg">Empowering Non-Traditional Coders to Forge Their Path</h2>
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
