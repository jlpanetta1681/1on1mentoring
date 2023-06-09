'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SuccessPage from '../success/page';
import axios from 'axios';

const Contact = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    try {
      const response = await axios.post(
        'https://api.brevo.com/v3/contacts',
        {
          email,
        },
        {
          headers: {
            'content-type': 'application/json',
            'api-key': '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',
          },
        }
      );
      console.log(response.status);

      if (response.status === 201) {
        console.log('Email sent successfully');
        // Redirect to success page
        router.push('/success');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      // Handle error response here
      if (error.response && error.response.status === 400) {
        console.log('Contact already exists.');
      } else {
        console.log('Error sending email:', error);
      }
    }
  };

  return (
    <div className="text-center">
       <style jsx>{`
        .background-container {
          background-image: url('/images/cntct-bckgrd.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .main-container {
          background-color: rgba(255, 255, 255, 0.8); /* Adjust the alpha value as needed */
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          max-width: 600px;
        }
        .form-field {
          display: block;
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 0.25rem;
          box-sizing: border-box;
          font-size: 1rem;
        }
        .form-submit {
          display: block;
          width: 100%;
          padding: 0.75rem;
          background-color: #4a90e2;
          color: #fff;
          font-weight: bold;
          text-align: center;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .form-submit:hover {
          background-color: #2566c6;
        }
      `}</style>
      
      <div className="background-container py-16"></div>
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <ul className="flex justify-center space-x-4 mb-8">
        <li>
          <Link href="/">
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">About</span>
          </Link>
        </li>
        <li>
          <Link href="/paths">
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Paths</span>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">SignUp</span>
          </Link>
        </li>
        <li>
          <Link href="/signin">
            <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Sign In</span>
          </Link>
        </li>
      </ul>

      <div className="main-container">
        <div className="content-container">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-800 mb-8">
            Have a question, feedback, or interested in our services? Fill out the form below to send us a message or a
            question, and we will get back to you as soon as possible. For a free evaluation meeting to determine if what
            we have to offer is right for you, please click on Signup above and fill out the form, and I will reach out to
            you as soon as possible.
          </p>

          <form className="text-left" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
