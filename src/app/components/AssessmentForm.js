import React, { UseState } from "react";

const AssessmentForm = () => {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      text: 'Software is defined as ___________',
      options: [ " A set of programs", "documentation & configuration of data", "A set of programs",
        "documentation and configuration of data",
        "None of the mentioned"],
        correctAnswer: "A set of programs"
    },
    {
      text: 'Define Agile scrum methodology.',
      options: ["project management that emphasizes incremental progress", "project management that emphasizes decremental progress", "project management that emphasizes neutral progress","project management that emphasizes no progress"],
        correctAnswer: "project management that emphasizes incremental progress"
    },
    {
      text:  'What does SDLC stands for?',
      options: ["System Design Life Cycle", "Software Design Life Cycle","Software Development Life Cycle", "System Development Life cycle"],
        correctAnswer: "project management that emphasizes incremental progress"
    },
];


  const handleSubmit = (event) => {
    event.preventDefault();
   let totalScore = 0;

   for(let index=0; index < questions.length; index++) {
    const question = questions[index];
    const studentAnswer = answers[index];

    if(question.type == 'multiple-choice') {
      if(studentAnswer === question.correctAnswer) {
        totalScore += 1;
      }else if(question.type === 'coding') {
          if(studentAnswer.trim() === question.correctAnswer.trim()) {
            totalScore += 1;
          }
      }
    }
    console.log('Total Score:', totalScore)
   }
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.text}</p>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <input
                  type="radio"
                  id={`option-${index}-${optionIndex}`}
                  name={`question-${index}`}
                  value={option}
                  onChange={(e) => {
                    //update state with students answers
                    setAnswers((prevAnswers) => ({
                      ...prevAnswers,
                      [index]: e.target.value,
                    }));
                  }}
                  />
                  <label htmlFor={`option-${index}-${optionIndex}`}>{option}</label>
            </div>
          ))}
      </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AssessmentForm;