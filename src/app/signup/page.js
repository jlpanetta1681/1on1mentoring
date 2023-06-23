'use client'

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/fbaseConfig';
import NavBar from '../components/NavBar';
import Quiz from '../components/Quiz';


// const questions = [
//   {
//     title: "Question 1",
//     choices: ["Choice 1", "Choice 2", "Choice 3"],
//   },
//   {
//     title: "Question 2",
//     choices: ["Choice A", "Choice B", "Choice C"],
//   },
// ];


const SignupForm = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subjects, setSubjects] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [schedule, setSchedule] = useState('');
  const [address, setAddress] = useState('');
  const [onlineTutoring, setOnlineTutoring] = useState(false);
  const [learningGoals, setLearningGoals] = useState('');
  const [previousExperience, setPreviousExperience] = useState('');
  const [agreedToPrivacyPolicy, setAgreedToPrivacyPolicy] = useState(false);
  const [agreedToTermsOfService, setAgreedToTermsOfService] = useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User registered:', user);

      setFullName('');
      setEmail('');
      setPhone('');
      setPassword('')
      setSubjects('');
      setGradeLevel('');
      setSchedule('');
      setAddress('');
      setOnlineTutoring(false);
      setLearningGoals('');
      setPreviousExperience('');
      setAgreedToPrivacyPolicy(false);
      setAgreedToTermsOfService(false);
      setPassword('');
      setShowQuiz(true);
    } catch (error) {
      console.log('Error registering user:', error);
    }

    console.log('Form submitted:', {
      fullName,
      email,
      phone,
      password,
      subjects,
      gradeLevel,
      schedule,
      address,
      onlineTutoring,
      learningGoals,
      previousExperience,
      agreedToPrivacyPolicy,
      agreedToTermsOfService,
    });
  };

  return (
    <>
    <NavBar /> 
    <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Your Full Name"
          autocomplete="off"
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Your Email"
          autocomplete="off"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Your Phone Number"
          autocomplete="off"
          required
        />
      </div>
      <div>
      <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          password
          </label>
       <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="create a password"
          required
        />
      </div>
     
      <div>
        <label htmlFor="subjects">Subjects/Topics</label>
        <input
          type="text"
          id="subjects"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder='Subjects of Interest'
          required
        />
      </div>
      <div>
        <label htmlFor="gradeLevel">Grade Level</label>
        <input
          type="text"
          id="gradeLevel"
          value={gradeLevel}
          onChange={(e) => setGradeLevel(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder='Last Grade Completed'
          required
        />
      </div>
      <div>
        <label htmlFor="schedule">Preferred Schedule</label>
        <input
          type="text"
          id="schedule"
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder='If you have any preferred days/times'
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      
      <div>
        <label htmlFor="learningGoals">Learning Goals</label>
        <textarea
          id="learningGoals"
          value={learningGoals}
          onChange={(e) => setLearningGoals(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="previousExperience">Previous Tutoring Experience</label>
        <textarea
          id="previousExperience"
          value={previousExperience}
          onChange={(e) => setPreviousExperience(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label>
          <input
          id='privacyPolicy'
            type="checkbox"
            checked={agreedToPrivacyPolicy}
            onChange={(e) => setAgreedToPrivacyPolicy(e.target.checked)}
            required
          />
          I agree to the Privacy Policy
        </label>
      </div>
      <div>
        <label>
          <input
          id='terms'
            type="checkbox"
            checked={agreedToTermsOfService}
            onChange={(e) => setAgreedToTermsOfService(e.target.checked)}
            required
          />
          I agree to the Terms of Service
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign Up
      </button>
    </form>
    {showQuiz && <Quiz questions={questions}/>}
    </>
  )
  
};

export default SignupForm;