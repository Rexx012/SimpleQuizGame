import React from 'react';

const ScoreCard = ({ score, totalQuestions, onReset }) => {
  const successURL =
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWg4dDBpZTY0ZTlrMHN3OHcwZDRodnQwMTJvcXIyZDF6eGdyODZ0aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LlYjGi9rErbLjyaMNr/giphy.gif';
  const failureURL =
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazRqOHo2OXBkNng4MTN1cDFtOWo4bDRvY2pkMGR3dmFqMDA0Ym9tYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gzRiZROEyDCznPofKj/giphy.gif';

  return (
    <section className="w-[90%] max-w-2xl bg-white p-6 rounded-lg shadow-xl/30 border-t-1 flex flex-col items-center gap-6">
      <h1 className="font-heading text-center ">
        Your Score:
        <span className="text-blue-500 ml-2">
          {score} / {totalQuestions}
        </span>
      </h1>
      <img
        src={score / totalQuestions >= 0.6 ? successURL : failureURL}
        alt="Score Result"
        className="w-64 h-64 object-contain"
      />
      <button
        onClick={onReset}
        className="border rounded-lg py-2 px-5 hover:bg-gray-600 hover:text-white transition-colors duration-300"
      >
        Restart Quiz
      </button>
    </section>
  );
};

export default ScoreCard;
