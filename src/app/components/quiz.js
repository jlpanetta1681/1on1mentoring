import React, { useState } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the API
    fetch('https://quizapi.io/api/v1/questions?apiKey=sExlT4YYM30zZ8py99eMb2KTsKZI3kD284DlYl8k&category=code&difficulty=Easy&limit=10')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => {
        console.log('Error fetching questions:', error);
      });
  }, []);

  return (
    <div>
      <h1>Quiz Page</h1>
      {questions.length > 0 ? (
        <Quiz questions={questions} />
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default Quiz;

