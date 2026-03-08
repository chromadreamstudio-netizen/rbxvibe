"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const GAMER_TEXT = "Rush B do not stop flashing mid planting the bomb. We need to secure the objective before the enemy team respawns. Drop me a weapon I have no economy left this round.";

export default function TypingTest() {
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds
  const [isTestActive, setIsTestActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTestActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && isTestActive) {
      endTest();
    }
    return () => clearTimeout(timer);
  }, [isTestActive, timeLeft]);

  const startTest = () => {
    setIsTestActive(true);
    setIsFinished(false);
    setUserInput("");
    setTimeLeft(30);
    setWpm(0);
    setAccuracy(100);
    if (inputRef.current) inputRef.current.focus();
  };

  const endTest = () => {
    setIsTestActive(false);
    setIsFinished(true);
    
    // Calculate WPM (Words Per Minute)
    const wordsTyped = userInput.trim().split(" ").length;
    const calculatedWpm = Math.round((wordsTyped / 30) * 60);
    setWpm(calculatedWpm);

    // Calculate Accuracy
    let correctChars = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === GAMER_TEXT[i]) {
        correctChars++;
      }
    }
    const calcAccuracy = userInput.length > 0 ? Math.round((correctChars / userInput.length) * 100) : 0;
    setAccuracy(calcAccuracy);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isTestActive && !isFinished && e.target.value.length === 1) {
      setIsTestActive(true);
    }
    
    if (e.target.value.length <= GAMER_TEXT.length) {
      setUserInput(e.target.value);
    }

    if (e.target.value === GAMER_TEXT) {
      endTest();
    }
  };

  // تلوين الحروف (صحيح = أخضر، خطأ = أحمر)
  const renderText = () => {
    return GAMER_TEXT.split("").map((char, index) => {
      let color = "text-slate-500";
      if (index < userInput.length) {
        color = userInput[index] === char ? "text-emerald-400" : "text-rose-500 bg-rose-500/20 rounded-sm";
      }
      return <span key={index} className={\`text-2xl font-mono transition-colors \${color}\`}>{char}</span>;
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-rose-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Gamer <span className="text-rose-500">Typing Test</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          How fast can you communicate in-game? Type the text below as fast and accurately as possible in 30 seconds.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
        <div className="bg-[#0B0F19] p-6 rounded-3xl border border-white/10 text-center shadow-lg">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-2">Time</p>
          <p className="text-3xl font-black text-white">{timeLeft}s</p>
        </div>
        <div className="bg-[#0B0F19] p-6 rounded-3xl border border-white/10 text-center shadow-lg">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-2">WPM</p>
          <p className="text-3xl font-black text-rose-500">{isFinished ? wpm : "--"}</p>
        </div>
        <div className="bg-[#0B0F19] p-6 rounded-3xl border border-white/10 text-center shadow-lg">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-2">Accuracy</p>
          <p className="text-3xl font-black text-emerald-400">{isFinished ? \`\${accuracy}%\` : "--"}</p>
        </div>
      </div>

      <div className="bg-[#0B0F19] rounded-[2.5rem] border border-white/10 p-8 shadow-2xl relative overflow-hidden max-w-3xl mx-auto">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="mb-8 select-none tracking-wide leading-relaxed">
          {renderText()}
        </div>

        <textarea
          ref={inputRef}
          value={userInput}
          onChange={handleInputChange}
          disabled={isFinished}
          placeholder={isTestActive ? "" : "Start typing here to begin the test..."}
          className="w-full bg-[#111827] border border-white/10 rounded-2xl p-6 text-white font-mono text-xl focus:outline-none focus:border-rose-500 transition-colors resize-none h-32"
          spellCheck="false"
        />

        {isFinished && (
          <div className="mt-6 text-center animate-fade-in">
            <button 
              onClick={startTest}
              className="px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-black text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:scale-105"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}