"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SpacebarTest() {
  const [hits, setHits] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds test
  const [isTestActive, setIsTestActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTestActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && isTestActive) {
      setIsTestActive(false);
      setIsFinished(true);
    }
    return () => clearTimeout(timer);
  }, [isTestActive, timeLeft]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault(); // يمنع نزول الصفحة لأسفل عند ضغط المسطرة
        if (!isTestActive && !isFinished) {
          setIsTestActive(true);
          setHits(1);
        } else if (isTestActive) {
          setHits((prev) => prev + 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTestActive, isFinished]);

  const restartTest = () => {
    setHits(0);
    setTimeLeft(10);
    setIsFinished(false);
    setIsTestActive(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-emerald-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Spacebar <span className="text-emerald-400">Challenge</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          How fast can you mash the spacebar? You have 10 seconds. Start hitting the spacebar to begin!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
        <div className="bg-[#0B0F19] p-6 rounded-3xl border border-white/10 text-center shadow-lg">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-2">Time Left</p>
          <p className="text-4xl font-black text-white">{timeLeft}s</p>
        </div>
        <div className="bg-[#0B0F19] p-6 rounded-3xl border border-white/10 text-center shadow-lg">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-2">Spacebar Hits</p>
          <p className="text-4xl font-black text-emerald-400">{hits}</p>
        </div>
      </div>

      <div className={`w-full max-w-2xl mx-auto h-64 rounded-[2.5rem] flex flex-col items-center justify-center transition-all duration-100 shadow-2xl border-4
          ${!isTestActive && !isFinished ? "bg-[#111827] border-dashed border-white/10" : ""}
          ${isTestActive ? "bg-emerald-500/10 border-solid border-emerald-500 scale-[0.99]" : ""}
          ${isFinished ? "bg-[#0B0F19] border-solid border-white/10" : ""}
        `}
      >
        {!isTestActive && !isFinished && (
          <h2 className="text-3xl font-black text-white animate-pulse">PRESS SPACEBAR TO START</h2>
        )}

        {isTestActive && (
          <h2 className="text-7xl font-black text-emerald-500 opacity-50 select-none">{hits}</h2>
        )}

        {isFinished && (
          <div className="flex flex-col items-center justify-center animate-fade-in z-10">
            <h2 className="text-2xl text-slate-400 font-bold mb-2">Your Speed</h2>
            <p className="text-6xl font-black text-white mb-2">{(hits / 10).toFixed(1)} <span className="text-3xl text-emerald-400">Hits/Sec</span></p>
            <p className="text-emerald-400 font-medium mb-6">Total: {hits} hits in 10 seconds</p>
            
            <button 
              onClick={restartTest}
              className="px-8 py-3 bg-white/10 hover:bg-emerald-500 hover:text-[#0B0F19] text-white font-bold rounded-xl transition-all border border-white/10 hover:border-transparent"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}