'use client'

import Navbar from '../components/NavBar';


const Paths = () => {
  return (
    <div className="text-center">
      
      
      <Navbar />
      
      <div className="max-w-4xl mx-auto mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Mentorship Program</h3>
            <p className="text-gray-800">
              Our Mentorship Program provides personalized one-on-one guidance and support to help you achieve your career goals. You will have access to experienced mentors who will assist you in navigating the complexities of the tech industry and provide valuable insights to enhance your skills.
            </p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Tutoring Sessions</h3>
            <p className="text-gray-800">
              Our Tutoring Sessions offer targeted assistance for specific topics or areas you want to improve. Whether mastering a programming language, preparing for technical interviews, or understanding complex concepts, our tutors are here to help you succeed.
            </p>
          </div>
        
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-8">
        <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-2xl font-bold mb-2">John Doe</h3>
            <p className="text-gray-800">
              Thanks to  the Pathfinder mentorship, I landed my dream job at a top tech company. The guidance and support I received throughout the program were invaluable. I highly recommend their services!
            </p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Jane Smith</h3>
            <p className="text-gray-800">
              `The tutoring sessions at Pathfinder helped me fill the gaps in my coding knowledge. The tutors were patient, knowledgeable, and provided me with the necessary tools to excel in my coding journey. I am grateful for their help!`
            </p>
          </div>
          {/*  more success stories */}
        </div>
      </div>
    </div>
  );
};

export default Paths;
