"use client";

import { useState } from "react";
import Link from "next/link";

export default function AIGame() {
  const questions = [
    { emoji: "⛏️🧱🧟‍♂️🗡️", answer: "Minecraft", options: ["Roblox", "Minecraft", "Terraria", "Fortnite"] },
    { emoji: "🪂🏝️🔫🚌", answer: "Fortnite", options: ["PUBG", "Apex Legends", "Fortnite", "Free Fire"] },
    { emoji: "🏎️⚽🚗", answer: "Rocket League", options: ["FIFA", "Rocket League", "Need for Speed", "Gran Turismo"] },
    { emoji: "🤠🐎🔫🚂", answer: "Red Dead Redemption", options: ["GTA V", "Red Dead Redemption", "Cyberpunk", "Mafia"] },
    { emoji: "🧱🟥🟧🟨🟩🟦", answer: "Roblox", options: ["Minecraft", "Lego Worlds", "Roblox", "Tetris"] }
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected: string) => {
    if (selected === questions[currentQ].answer) {
      setScore(score + 1);
    }
    
    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowResult(true);
    }
  };

  const restartGame = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 text-center">
      <Link href="/" className="text-emerald-400 hover:text-emerald-300 mb-6 inline-block">&larr; Back to Home</Link>
      
      <h1 className="text-4xl font-extrabold text-white mb-4">AI Emoji Guesser</h1>
      <p className="text-slate-400 mb-10">Can you guess the video game based on the AI-generated emojis? Test your gaming knowledge!</p>

      {/* مساحة إعلانية ستكون نشطة جداً هنا بسبب تفاعل اللاعب */}
      <div className="w-full h-24 bg-slate-800 flex items-center justify-center border border-dashed border-slate-600 mb-10 rounded-lg">
        <span className="text-slate-500 text-sm">AdSense Banner (High CTR Area)</span>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl max-w-xl mx-auto">
        {showResult ? (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-4">Game Over!</h2>
            <p className="text-xl text-slate-300 mb-6">You scored {score} out of {questions.length}</p>
            {score === questions.length ? (
              <p className="text-emerald-400 font-bold mb-8 text-2xl">Perfect Score! You are a True Gamer! 🏆</p>
            ) : (
              <p className="text-blue-400 font-bold mb-8 text-xl">Good effort! But you can do better. 🎮</p>
            )}
            <button onClick={restartGame} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg">
              Play Again
            </button>
          </div>
        ) : (
          <div className="animate-fade-in">
            <p className="text-slate-400 mb-4 font-semibold uppercase tracking-wider">Question {currentQ + 1} of {questions.length}</p>
            <div className="text-6xl mb-10 bg-slate-900 py-6 rounded-xl border border-slate-700">
              {questions[currentQ].emoji}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQ].options.map((option, index) => (
                <button 
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="bg-slate-700 hover:bg-emerald-500 hover:text-slate-900 text-white font-bold py-4 px-6 rounded-lg transition duration-200 border border-slate-600 hover:border-emerald-500"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}