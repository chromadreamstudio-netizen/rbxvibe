"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    questionText: "What is the best-selling video game of all time?",
    answerOptions: [
      { answerText: "Grand Theft Auto V", isCorrect: false },
      { answerText: "Minecraft", isCorrect: true },
      { answerText: "Tetris", isCorrect: false },
      { answerText: "Super Mario Bros", isCorrect: false },
    ],
  },
  {
    questionText: "In Valorant, which agent has the ultimate ability 'Resurrection'?",
    answerOptions: [
      { answerText: "Sage", isCorrect: true },
      { answerText: "Reyna", isCorrect: false },
      { answerText: "Omen", isCorrect: false },
      { answerText: "Jett", isCorrect: false },
    ],
  },
  {
    questionText: "What is the maximum level you can reach in the First Sea in Blox Fruits?",
    answerOptions: [
      { answerText: "Level 500", isCorrect: false },
      { answerText: "Level 1000", isCorrect: false },
      { answerText: "Level 700", isCorrect: true },
      { answerText: "Level 850", isCorrect: false },
    ],
  },
  {
    questionText: "Which company developed the game 'Fortnite'?",
    answerOptions: [
      { answerText: "EA Sports", isCorrect: false },
      { answerText: "Activision", isCorrect: false },
      { answerText: "Rockstar Games", isCorrect: false },
      { answerText: "Epic Games", isCorrect: true },
    ],
  },
  {
    questionText: "In CS2 (Counter-Strike 2), what is the most expensive sniper rifle?",
    answerOptions: [
      { answerText: "SSG 08", isCorrect: false },
      { answerText: "AWP", isCorrect: true },
      { answerText: "SCAR-20", isCorrect: false },
      { answerText: "G3SG1", isCorrect: false },
    ],
  },
];

export default function TriviaGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-yellow-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-16">
        <div className="w-20 h-20 mx-auto bg-yellow-500/20 flex items-center justify-center rounded-3xl border border-yellow-500/30 mb-6 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
          <span className="text-4xl">🧠</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Ultimate <span className="text-yellow-400">Gaming Trivia</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Think you know everything about video games? Test your knowledge and prove you are a true gamer.
        </p>
      </div>

      <div className="bg-[#0B0F19] rounded-[2.5rem] border border-white/10 p-6 md:p-12 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          {showScore ? (
            <div className="text-center py-10 animate-fade-in">
              <h2 className="text-4xl font-black text-white mb-4">You scored <span className="text-yellow-400">{score}</span> out of {questions.length}</h2>
              <p className="text-slate-400 mb-8 text-lg">
                {score === questions.length ? "Flawless Victory! You are a gaming legend. 🏆" : "Good effort! Brush up on your gaming lore and try again. 🎮"}
              </p>
              <button 
                onClick={restartGame}
                className="px-8 py-4 bg-yellow-500 text-[#0B0F19] font-black rounded-xl hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)]"
              >
                Play Again
              </button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">Question {currentQuestion + 1} / {questions.length}</span>
                  <span className="text-slate-500 font-medium text-sm">Score: {score}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">{questions[currentQuestion].questionText}</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                    className="w-full text-left p-5 rounded-xl bg-[#111827] border border-white/5 text-slate-300 font-medium hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:text-yellow-400 transition-all text-lg"
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}