"use client";

import { useState } from "react";
import Link from "next/link";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares: any[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-cyan-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Neon <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">Tic-Tac-Toe</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The classic game, upgraded. Grab a friend and settle the score in this retro-arcade style arena.
        </p>
      </div>

      <div className="max-w-md mx-auto bg-[#0B0F19] rounded-[2.5rem] border border-white/10 p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            {winner ? (
              <h2 className="text-3xl font-black text-white animate-bounce">
                Winner: <span className={winner === "X" ? "text-cyan-400 shadow-cyan-500" : "text-pink-500"}>{winner}</span> 🎉
              </h2>
            ) : isDraw ? (
              <h2 className="text-3xl font-black text-yellow-400">It's a Draw! 🤝</h2>
            ) : (
              <h2 className="text-2xl font-bold text-slate-300">
                Next Player: <span className={xIsNext ? "text-cyan-400" : "text-pink-500"}>{xIsNext ? "X" : "O"}</span>
              </h2>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {board.map((square, i) => (
              <button
                key={i}
                onClick={() => handleClick(i)}
                className={`h-24 md:h-28 rounded-2xl text-5xl font-black flex items-center justify-center transition-all bg-[#111827] border-2 border-white/5 hover:border-white/20
                  ${square === "X" ? "text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] border-cyan-500/30" : ""}
                  ${square === "O" ? "text-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.2)] border-pink-500/30" : ""}
                `}
              >
                {square}
              </button>
            ))}
          </div>

          <button 
            onClick={resetGame}
            className="w-full py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10"
          >
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
}