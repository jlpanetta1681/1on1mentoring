'use client'

import React, { useState, useEffect } from 'react';
import Quiz from '../components/quiz';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://quizapi.io/api/v1/questions?apiKey=sExlT4YYM30zZ8py99eMb2KTsKZI3kD284DlYl8k&category=code&difficulty=Easy&limit=10');
        const data = await response.json();
        console.log('Fetched data:', data);
        setQuestions(data.questions);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  console.log('Questions:', questions);

  return (
    <div>
      <h1>Assessment</h1>
      {loading ? (
        <p>Loading questions...</p>
      ) : questions.length > 0 ? (
        <Quiz questions={questions} />
      ) : (
        <p>No questions available.</p>
      )}
    </div>
  );
};

export default QuizPage;
