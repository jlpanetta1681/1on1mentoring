import NavBar from './components/NavBar';
const HomePage = () => {
  return (
    <div className="text-center">
      
        <NavBar />  
      
      
      <div
        className="bg-cover bg-center py-16"
        style={{
          backgroundImage: "url('/images/desks.jpg')",
        }}
      >
      
        <div className="bg-white bg-opacity-75 p-8 max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-4">Experience Unmatched Personalized One-on-One Mentorship</h2>
          <p className="text-lg text-gray-800">
            Are you a graduate of an online coding boot camp or another non-traditional educational institution? Are you ready to take your skills to the next level and excel in the world of technology? Look no further! Our program is designed specifically for individuals like you who have taken alternative paths to acquire their knowledge and expertise.
            <br />
             I understand the unique challenges and opportunities that graduates from non-traditional institutions face. While you may have gained valuable skills through online coding boot camps or other similar programs, you might find it challenging to navigate the complexities of the tech industry and bridge the gap between your education and professional development. That is where I come in.
            <br />
            <br />
            <br />
            My Mentorship and Tutoring Program offers an exclusive one-on-one experience like no other. As your dedicated mentor, I will work closely with you to identify your goals, assess your strengths and areas for improvement, and create a personalized road-map for your professional growth. Together, we will embark on a transformative journey that provides unmatched guidance, direction, and support for as long as you are with us.
            <br />
            <br />
            With my extensive industry experience, I am passionate about helping non-traditional graduates like you succeed. I am committed to providing you with tailored tutoring sessions, ongoing feedback, and valuable insights to help you overcome challenges, expand your skill set, and stay ahead in the rapidly evolving tech landscape. Together, we will bridge the gap between your education and the practical demands of the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
