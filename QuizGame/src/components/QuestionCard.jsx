const QuestionCard = ({
  currentQuestion,
  handleAnswerOptionClick,
  questionIndex,
  totalQuestions,
}) => {
  return (
    <section className="w-[90%] max-w-2xl bg-white p-6 rounded-lg shadow-xl/30 border-t-1 ">
      <div className="text-gray-500 mb-4">
        Question {questionIndex + 1} / {totalQuestions}
      </div>
      <h1>{currentQuestion.questionText}</h1>
      {currentQuestion.answerOptions.map((option) => (
        <button
          key={option.answerText}
          onClick={() => handleAnswerOptionClick(option.isCorrect)}
          className="border rounded-md w-full mt-5 py-5 px-3 flex hover:bg-gray-600 hover:text-white transition-colors duration-300 cursor-pointer"
        >
          {option.answerText}
        </button>
      ))}
    </section>
  );
};

export default QuestionCard;
