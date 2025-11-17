import Header from './components/Header';
import QuestionCard from './components/QuestionCard';
import { useState } from 'react';
import ScoreCard from './components/ScoreCard';
import questions from './utils/question.js';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setGameStarted(true); // Restart the game
  };

  return (
    <main className="min-h-screen w-full relative flex flex-col justify-center items-center">
      {/* Dashed Grid */}
      <div
        className="absolute inset-0 -z-1"
        style={{
          backgroundImage: `
                linear-gradient(to right, #e7e5e4 1px, transparent 1px),
                linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
              `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 0',
          maskImage: `
                repeating-linear-gradient(
                  to right,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                repeating-linear-gradient(
                  to bottom,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                )
              `,
          WebkitMaskImage: `
                repeating-linear-gradient(
                  to right,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                repeating-linear-gradient(
                  to bottom,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                )
              `,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      />
      {/* Your Content/Components */}
      {showScore ? (
        <ScoreCard
          score={score}
          totalQuestions={questions.length}
          onReset={resetQuiz} // Pass reset function to the ScoreCard
        />
      ) : gameStarted ? (
        <QuestionCard
          currentQuestion={questions[currentQuestion]}
          handleAnswerOptionClick={handleAnswerOptionClick}
          questionIndex={currentQuestion}
          totalQuestions={questions.length}
        />
      ) : (
        <Header onStartGame={() => setGameStarted(true)} />
      )}
    </main>
  );
};

export default App;
