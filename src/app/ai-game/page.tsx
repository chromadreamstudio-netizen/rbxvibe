"use client";

import { useState } from "react";
import Link from "next/link";

const db = [
  { emoji: "⛏️🧱🧟‍♂️🗡️", answer: "Minecraft", options: ["Roblox", "Minecraft", "Terraria", "Fortnite"] },
  { emoji: "🪂🏝️🔫🚌", answer: "Fortnite", options: ["PUBG", "Apex Legends", "Fortnite", "Warzone"] },
  { emoji: "🏎️⚽🚗🚀", answer: "Rocket League", options: ["FIFA", "Rocket League", "Need for Speed", "Forza"] },
  { emoji: "🤠🐎🔫🚂", answer: "Red Dead Redemption", options: ["GTA V", "Red Dead Redemption", "Cyberpunk", "Mafia"] },
  { emoji: "🧱🟥🟧🟩🟦", answer: "Roblox", options: ["Minecraft", "Lego Worlds", "Roblox", "Tetris"] },
  { emoji: "⚔️🛡️🐉🔥", answer: "Elden Ring", options: ["Skyrim", "Elden Ring", "Witcher 3", "Dark Souls"] },
  { emoji: "🕵️‍♂️📦🔪🐍", answer: "Metal Gear Solid", options: ["Hitman", "Splinter Cell", "Metal Gear Solid", "Assassin's Creed"] },
  { emoji: "🔫💣💣💣", answer: "CS2", options: ["Valorant", "Call of Duty", "CS2", "Overwatch"] },
  { emoji: "🕷️🏙️🕸️🦸‍♂️", answer: "Spider-Man", options: ["Batman", "Infamous", "Spider-Man", "Prototype"] },
  { emoji: "🪓❄️👦🛶", answer: "God of War", options: ["God of War", "Horizon", "Bloodborne", "Hellblade"] }
];

export default function AIGame() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected: string) => {
    if (selected === db[currentQ].answer) setScore(score + 1);
    const nextQ = currentQ + 1;
    if (nextQ < db.length) setCurrentQ(nextQ);
    else setShowResult(true);
  };

  const reset = () => { setCurrentQ(0); setScore(0); setShowResult(false); };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-yellow-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/10 p-8 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="text-center mb-12 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">AI Emoji <span className="text-yellow-400">Decoder</span></h1>
          <p className="text-slate-400 mt-4">The AI has compressed famous video games into emojis. Can you decode them?</p>
        </div>

        {showResult ? (
          <div className="text-center animate-fade-in relative z-10">
            <div className="text-8xl mb-6">{score >= 8 ? "🏆" : score >= 5 ? "👍" : "💀"}</div>
            <h2 className="text-5xl font-black text-white mb-2">{score} / {db.length}</h2>
            <p className="text-xl text-yellow-400 font-bold mb-8">
              {score >= 8 ? "AI Mastermind! Excellent job." : "The AI defeated you. Try again!"}
            </p>
            <button onClick={reset} className="bg-yellow-500 text-black font-black py-4 px-10 rounded-xl hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.4)]">
              Reboot AI System
            </button>
          </div>
        ) : (
          <div className="relative z-10">
            <div className="w-full bg-white/5 rounded-full h-2 mb-8">
              <div className="bg-yellow-400 h-2 rounded-full transition-all duration-500" style={{ width: `${((currentQ) / db.length) * 100}%` }}></div>
            </div>
            
            <div className="bg-black/50 border border-white/5 rounded-3xl p-10 text-center mb-8 shadow-inner">
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-6">Processing Image Data...</p>
              <div className="text-6xl md:text-8xl tracking-widest filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                {db[currentQ].emoji}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {db[currentQ].options.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(opt)} className="bg-[#111827] border border-white/10 hover:border-yellow-500/50 hover:bg-yellow-500/10 text-white font-bold py-5 rounded-2xl transition-all text-lg">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/5 p-8 md:p-12 shadow-2xl mt-16">
        <div className="prose prose-invert max-w-none prose-headings:font-black prose-headings:text-white prose-h2:text-3xl prose-p:text-slate-300">
          <h2>The Rise of AI in Gaming</h2>
          <p>Artificial Intelligence is changing the landscape of gaming forever. From dynamic NPC behavior in open-world games to procedural generation of assets, AI is the future. Our Emoji Decoder is a fun simulation of how Large Language Models (LLMs) interpret and compress vast amounts of gaming pop culture into simple unicode characters.</p>
        </div>
      </div>
    </div>
  );
}