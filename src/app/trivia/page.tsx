"use client";

import { useState } from "react";
import Link from "next/link";

const db = [
  { q: "What is the maximum achievable rank in Valorant?", options: ["Radiant", "Immortal 3", "Global Elite", "Predator"], a: "Radiant" },
  { q: "Which game engine powers Fortnite Chapter 5?", options: ["Source 2", "Unity", "Unreal Engine 5", "CryEngine"], a: "Unreal Engine 5" },
  { q: "In CS2, what does 'eDPI' stand for?", options: ["Effective DPI", "Engine DPI", "Enhanced Dots", "Exact DPI"], a: "Effective DPI" },
  { q: "Which company developed the hit game 'Elden Ring'?", options: ["Bethesda", "FromSoftware", "Naughty Dog", "Ubisoft"], a: "FromSoftware" },
  { q: "What was the original name of Roblox before release?", options: ["Dynablox", "Blockland", "Robuxia", "Builderman"], a: "Dynablox" },
  { q: "In Blox Fruits, which fruit is famous for running on water?", options: ["Magma", "Kitsune", "Leopard", "Portal"], a: "Kitsune" },
  { q: "What is the ticking damage area in Battle Royales commonly called?", options: ["The Storm", "The Gas", "The Zone", "All of the above"], a: "All of the above" },
  { q: "Which of these is NOT a real graphics card?", options: ["RTX 4090", "RX 7900 XTX", "GTX 1080 Ti", "RTX 6090"], a: "RTX 6090" },
  { q: "Who won the first Fortnite World Cup (Solos)?", options: ["Ninja", "Bugha", "Mongraal", "TFue"], a: "Bugha" },
  { q: "What is a 'Bottleneck' in PC building?", options: ["Broken cooling", "A component slowing down others", "Low internet speed", "Too much RAM"], a: "A component slowing down others" }
];

export default function TriviaPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected: string) => {
    if (selected === db[currentQ].a) setScore(score + 1);
    const nextQ = currentQ + 1;
    if (nextQ < db.length) setCurrentQ(nextQ);
    else setShowResult(true);
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-emerald-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/10 p-8 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-12 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">Hardcore <span className="text-emerald-400">Trivia</span></h1>
          <p className="text-slate-400 mt-4">Prove you are a real gamer. Answer these 10 hardcore industry questions.</p>
        </div>

        {showResult ? (
          <div className="text-center animate-fade-in relative z-10">
            <h2 className="text-5xl font-black text-white mb-4">{score} / 10</h2>
            <p className="text-2xl text-emerald-400 font-bold mb-8">
              {score >= 9 ? "Esports Analyst Level! 🧠" : score >= 5 ? "Decent Gamer. Keep playing! 🎮" : "Did you just buy your first PC? 💀"}
            </p>
            <button onClick={() => {setCurrentQ(0); setScore(0); setShowResult(false);}} className="bg-emerald-500 text-black font-black py-4 px-10 rounded-xl hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              Restart Exam
            </button>
          </div>
        ) : (
          <div className="relative z-10">
            <div className="mb-8 flex items-center justify-between text-slate-400 font-bold uppercase tracking-widest text-sm border-b border-white/5 pb-4">
              <span>Question {currentQ + 1} of 10</span>
              <span className="text-emerald-400">Score: {score}</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-black text-white mb-10 leading-relaxed text-center">
              {db[currentQ].q}
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {db[currentQ].options.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(opt)} className="bg-[#111827] border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-white font-bold py-5 px-6 rounded-2xl transition-all text-left flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 text-sm">{["A", "B", "C", "D"][i]}</span>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* SEO Section */}
      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/5 p-8 md:p-12 shadow-2xl mt-16">
        <div className="prose prose-invert max-w-none prose-headings:font-black prose-headings:text-white prose-h2:text-3xl prose-p:text-slate-300">
          <h2>Testing Your Gaming Knowledge</h2>
          <p>Being a pro gamer isn't just about raw aim and reaction time. It is about understanding the meta, the hardware, and the history of the industry. From knowing the exact capabilities of Unreal Engine 5 to understanding the difference between CPU and GPU bottlenecks, game sense separates the casuals from the pros.</p>
        </div>
      </div>
    </div>
  );
}