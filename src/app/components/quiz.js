import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: 'what does SDLC stand for',
      options: ['software developer list control', 'simple defined life components', 'software development life cycle', 'none of the above'],
      correctAnswer: 'software development life cycle',
    },
    {
      question: 'what is an SPA?',
      options: ['simple process application', 'single process application', 'single page application', 'service process association'],
      correctAnswer: 'single page application',
    },
    {
     question: 'What does CSS stanf for?',
     options: ['controlled style system', 'constant style supply', 'cascading shade sheets', 'cascading style sheets'],
     answer: 'cascading style sheets'
    },
    {
        question: 'who is considered to have founded the internet?',
        options: ['Bill Gates', 'Elon Musk', 'Tim Berners Lee', 'Alvin Theodore'],
        answer: 'Tim Berners Lee'
    }
  ];

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div>
      {quizCompleted ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} out of {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(option)}>{option}</button>
              </li>
            ))}
          </ul>
          <p>Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
