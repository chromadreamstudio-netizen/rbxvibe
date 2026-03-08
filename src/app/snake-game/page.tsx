"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };

export default function CyberSnake() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState({ x: 15, y: 5 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const moveSnake = useCallback(() => {
    if (gameOver || isPaused || !hasStarted) return;

    setSnake((prev) => {
      const head = prev[0];
      const newHead = { x: head.x + direction.x, y: head.y + direction.y };

      // الاصطدام بالجدران
      if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
        setGameOver(true);
        return prev;
      }

      // الاصطدام بالنفس
      if (prev.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        return prev;
      }

      const newSnake = [newHead, ...prev];

      // أكل الطعام (XP)
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((s) => s + 10);
        setFood({
          x: Math.floor(Math.random() * GRID_SIZE),
          y: Math.floor(Math.random() * GRID_SIZE),
        });
      } else {
        newSnake.pop(); // إزالة الذيل إذا لم يأكل
      }

      return newSnake;
    });
  }, [direction, food, gameOver, isPaused, hasStarted]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!hasStarted && e.key.startsWith("Arrow")) setHasStarted(true);
      
      switch (e.key) {
        case "ArrowUp": if (direction.y !== 1) setDirection({ x: 0, y: -1 }); break;
        case "ArrowDown": if (direction.y !== -1) setDirection({ x: 0, y: 1 }); break;
        case "ArrowLeft": if (direction.x !== 1) setDirection({ x: -1, y: 0 }); break;
        case "ArrowRight": if (direction.x !== -1) setDirection({ x: 1, y: 0 }); break;
        case " ": setIsPaused((p) => !p); break; // مسطرة للإيقاف المؤقت
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction, hasStarted]);

  useEffect(() => {
    const interval = setInterval(moveSnake, 100); // سرعة الثعبان
    return () => clearInterval(interval);
  }, [moveSnake]);

  const restartGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setScore(0);
    setGameOver(false);
    setHasStarted(false);
    setFood({ x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) });
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-emerald-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">Cyber <span className="text-emerald-400">Snake</span></h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Use Arrow Keys to move. Press Spacebar to pause. Collect the glowing XP blocks to grow!
        </p>
      </div>

      <div className="flex justify-between items-center max-w-lg mx-auto mb-6 bg-[#0B0F19] p-4 rounded-2xl border border-white/10 shadow-lg">
        <div className="text-left">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Score</p>
          <p className="text-2xl font-black text-emerald-400">{score}</p>
        </div>
        {!hasStarted && !gameOver ? (
          <p className="text-emerald-400 animate-pulse font-bold text-sm uppercase">Press any arrow key to start</p>
        ) : isPaused ? (
          <p className="text-yellow-400 animate-pulse font-bold text-sm uppercase">Paused</p>
        ) : gameOver ? (
          <button onClick={restartGame} className="px-6 py-2 bg-rose-500 hover:bg-rose-400 text-white font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(225,29,72,0.4)]">
            Restart
          </button>
        ) : (
          <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Playing</p>
        )}
      </div>

      <div className="relative w-full max-w-lg mx-auto aspect-square bg-[#0B0F19] rounded-2xl border-4 border-white/5 overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]">
        {/* شبكة اللعبة (Grid) */}
        <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`, gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)` }}>
          {/* رسم الثعبان */}
          {snake.map((segment, index) => (
            <div
              key={index}
              className={`bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)] border border-[#0B0F19] ${index === 0 ? "rounded-sm z-10" : "rounded-none opacity-80"}`}
              style={{ gridColumnStart: segment.x + 1, gridRowStart: segment.y + 1 }}
            />
          ))}
          {/* رسم الطعام */}
          <div
            className="bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,1)] animate-pulse"
            style={{ gridColumnStart: food.x + 1, gridRowStart: food.y + 1 }}
          />
        </div>

        {gameOver && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-20 animate-fade-in">
            <h2 className="text-5xl font-black text-rose-500 mb-2">GAME OVER</h2>
            <p className="text-white text-xl mb-6 font-medium">Final Score: <span className="text-emerald-400 font-black">{score}</span></p>
            <button onClick={restartGame} className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-[#0B0F19] font-black rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}