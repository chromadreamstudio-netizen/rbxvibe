"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ReactionTestPage() {
  const [gameState, setGameState] = useState<"idle" | "waiting" | "ready" | "finished">("idle");
  const [startTime, setStartTime] = useState<number>(0);
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [attempts, setAttempts] = useState<number[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startGame = () => {
    setGameState("waiting");
    setReactionTime(null);
    const randomDelay = Math.floor(Math.random() * 3000) + 1500; // 1.5s to 4.5s
    timeoutRef.current = setTimeout(() => {
      setStartTime(Date.now());
      setGameState("ready");
    }, randomDelay);
  };

  const handleClick = () => {
    if (gameState === "idle" || gameState === "finished") {
      if (attempts.length >= 5) setAttempts([]); // Reset after 5
      startGame();
    } else if (gameState === "waiting") {
      clearTimeout(timeoutRef.current!);
      setGameState("idle");
      alert("Too early! Wait for the green screen.");
    } else if (gameState === "ready") {
      const time = Date.now() - startTime;
      setReactionTime(time);
      const newAttempts = [...attempts, time];
      setAttempts(newAttempts);
      setGameState(newAttempts.length >= 5 ? "finished" : "idle");
    }
  };

  const getRank = (avg: number) => {
    if (avg < 170) return { title: "Aimbot / Cheater 🤖", color: "text-rose-500" };
    if (avg < 200) return { title: "Esports Pro 🏆", color: "text-emerald-400" };
    if (avg < 250) return { title: "Radiant / Global Elite 💎", color: "text-cyan-400" };
    if (avg < 300) return { title: "Average Gamer 🎮", color: "text-yellow-400" };
    return { title: "Internet Explorer 🐢", color: "text-slate-400" };
  };

  const average = attempts.length > 0 ? Math.round(attempts.reduce((a, b) => a + b, 0) / attempts.length) : 0;

  return (
    <div className="max-w-5xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-blue-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">Reflex <span className="text-blue-500">Trainer</span></h1>
        <p className="text-xl text-slate-400 font-medium">Test your raw reaction time in milliseconds. Do you have pro-level aim?</p>
      </div>

      <div 
        onClick={handleClick}
        className={`w-full h-96 rounded-[3rem] cursor-pointer transition-colors duration-75 flex flex-col items-center justify-center text-center p-8 select-none shadow-2xl border-4 ${
          gameState === "idle" ? "bg-[#111827] hover:bg-[#1f2937] border-white/10" :
          gameState === "waiting" ? "bg-rose-600 border-rose-500" :
          gameState === "ready" ? "bg-emerald-500 border-emerald-400" :
          "bg-[#0B0F19] border-blue-500/50"
        }`}
      >
        {gameState === "idle" && (
          <>
            <span className="text-6xl mb-4">⚡</span>
            <h2 className="text-4xl font-black text-white">Click to Start</h2>
            <p className="text-slate-400 mt-2 text-lg">Wait for the <span className="text-emerald-400 font-bold">GREEN</span> color, then click as fast as you can.</p>
          </>
        )}
        {gameState === "waiting" && <h2 className="text-5xl font-black text-white tracking-widest">Wait for Green...</h2>}
        {gameState === "ready" && <h2 className="text-6xl font-black text-white tracking-widest">CLICK NOW!</h2>}
        {gameState === "finished" && (
          <div className="animate-fade-in">
            <p className="text-slate-400 font-bold uppercase tracking-widest mb-2">Final Evaluation</p>
            <h2 className="text-6xl font-black text-white mb-2">{average} <span className="text-2xl text-slate-500">ms</span></h2>
            <h3 className={`text-3xl font-black ${getRank(average).color}`}>{getRank(average).title}</h3>
            <p className="text-slate-400 mt-6 text-sm font-bold">Click anywhere to restart</p>
          </div>
        )}
      </div>

      <div className="mt-8 grid grid-cols-5 gap-2">
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} className={`p-4 text-center rounded-2xl border ${attempts[i] ? 'bg-blue-500/20 border-blue-500/50 text-blue-400 font-black text-xl' : 'bg-white/5 border-white/10 text-slate-600 font-medium'}`}>
            {attempts[i] ? `${attempts[i]} ms` : `Attempt ${i + 1}`}
          </div>
        ))}
      </div>

      {/* SEO Content */}
      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/5 p-8 md:p-12 shadow-2xl mt-16">
        <div className="prose prose-invert max-w-none prose-headings:font-black prose-headings:text-white prose-h2:text-3xl prose-p:text-slate-300 prose-p:leading-relaxed">
          <h2>Why Reaction Time Matters in FPS Games</h2>
          <p>In tactical shooters like Valorant and CS2, the Time To Kill (TTK) is practically zero. A single Vandal headshot ends the round. Therefore, having a reaction time lower than the human average (250ms) gives you a massive peek advantage. Professional players like TenZ consistently score around 160ms to 180ms on reflex trainers.</p>
          <h2>How to Improve Your Reflexes</h2>
          <p>Reaction time is partly genetic, but mostly trained. Ensure you are using a 144Hz or 240Hz monitor to reduce hardware latency. Warm up with our Reflex Trainer for 10 minutes before queuing for ranked to "wake up" your nervous system.</p>
        </div>
      </div>
    </div>
  );
}