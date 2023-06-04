import Link from 'next/link';
import AboutSection from "../components/AboutSection";

const About = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Pathfinder!
      </h1>
      <ul className="flex justify-center space-x-4 mb-8">
        <li>
          <Link href="/">
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Home</span>
          </Link>
        </li>
        
        <li>
          <Link href="/paths">
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Paths</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Contact</span>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Sign-Up/Register</span>
          </Link>
        </li>
        <li>
          <Link href="/signin">
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Sign In</span>
          </Link>
        </li>
      </ul>
      <div
        className="bg-cover bg-center py-16"
        style={{
          backgroundImage: "url('/images/digital.jpg')",
        }}
      >
      <AboutSection />
      

      <div/>  
      </div>  
      </div>
  );
};

export default About;
