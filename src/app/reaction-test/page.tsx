"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ReactionTest() {
  const [gameState, setGameState] = useState<"idle" | "waiting" | "ready" | "result">("idle");
  const [message, setMessage] = useState("Click here to start");
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  const handleClick = () => {
    if (gameState === "idle" || gameState === "result") {
      setGameState("waiting");
      setMessage("Wait for green...");
      
      const randomDelay = Math.floor(Math.random() * 3000) + 2000;
      
      timeoutRef.current = setTimeout(() => {
        setGameState("ready");
        setMessage("CLICK NOW!");
        startTimeRef.current = Date.now();
      }, randomDelay);

    } else if (gameState === "waiting") {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setGameState("result");
      setMessage("Too soon! Click to try again.");
      setReactionTime(null);

    } else if (gameState === "ready") {
      const endTime = Date.now();
      const timeTaken = endTime - startTimeRef.current;
      setReactionTime(timeTaken);
      setGameState("result");
      setMessage(`${timeTaken} ms`);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-blue-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Reaction <span className="text-blue-400">Time Test</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          FPS players need lightning-fast reflexes. Test your muscle memory. When the red box turns green, click as fast as you can!
        </p>
      </div>

      <div 
        onClick={handleClick}
        className={`w-full max-w-2xl mx-auto h-80 rounded-[2.5rem] flex flex-col items-center justify-center cursor-pointer transition-colors duration-200 select-none shadow-2xl border border-white/10
          ${gameState === "idle" ? "bg-[#111827] hover:bg-[#1a2333]" : ""}
          ${gameState === "waiting" ? "bg-red-500" : ""}
          ${gameState === "ready" ? "bg-emerald-500" : ""}
          ${gameState === "result" ? "bg-[#111827] hover:bg-[#1a2333]" : ""}
        `}
      >
        <span className="text-5xl mb-6">
          {gameState === "idle" ? "⚡" : gameState === "waiting" ? "⏳" : gameState === "ready" ? "🎯" : "⏱️"}
        </span>
        <h2 className={`text-4xl md:text-5xl font-black ${gameState === "waiting" || gameState === "ready" ? "text-white" : "text-blue-400"}`}>
          {message}
        </h2>
        {gameState === "result" && reactionTime !== null && (
          <p className="text-slate-400 mt-4 text-lg font-medium">Click anywhere to try again.</p>
        )}
        {gameState === "result" && reactionTime === null && (
          <p className="text-slate-400 mt-4 text-lg font-medium">You clicked before the green screen!</p>
        )}
      </div>

      <div className="max-w-2xl mx-auto mt-12 bg-[#0B0F19] rounded-3xl border border-white/5 p-8">
        <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-4">Average Gamer Reflexes:</h3>
        <ul className="space-y-3 text-slate-400 font-medium">
          <li className="flex justify-between"><span>👽 Esports Pro:</span> <span className="text-emerald-400">150 ms - 170 ms</span></li>
          <li className="flex justify-between"><span>🎮 Hardcore Gamer:</span> <span className="text-blue-400">170 ms - 200 ms</span></li>
          <li className="flex justify-between"><span>🙂 Casual Gamer:</span> <span className="text-yellow-400">200 ms - 250 ms</span></li>
          <li className="flex justify-between"><span>🐢 Turtle:</span> <span className="text-red-400">250 ms+</span></li>
        </ul>
      </div>

    </div>
  );
}