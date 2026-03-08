"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const GAMER_EMOJIS = ["🎮", "👾", "🎧", "🕹️", "🏆", "💻"];

export default function MemoryGame() {
  const [cards, setCards] = useState<{ id: number; emoji: string; isFlipped: boolean; isMatched: boolean }[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  // تهيئة اللعبة وخلط البطاقات
  const initializeGame = () => {
    const shuffledCards = [...GAMER_EMOJIS, ...GAMER_EMOJIS]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setIsLocked(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (id: number) => {
    if (isLocked) return;
    const clickedCardIndex = cards.findIndex((c) => c.id === id);
    if (cards[clickedCardIndex].isFlipped || cards[clickedCardIndex].isMatched) return;

    // قلب البطاقة
    const newCards = [...cards];
    newCards[clickedCardIndex].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    // إذا تم قلب بطاقتين، نقوم بالتحقق
    if (newFlippedCards.length === 2) {
      setIsLocked(true);
      setMoves(moves + 1);

      const card1 = newCards.find((c) => c.id === newFlippedCards[0]);
      const card2 = newCards.find((c) => c.id === newFlippedCards[1]);

      if (card1?.emoji === card2?.emoji) {
        // تطابق صحيح
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((c) =>
              c.id === card1.id || c.id === card2.id ? { ...c, isMatched: true } : c
            )
          );
          setFlippedCards([]);
          setMatches(matches + 1);
          setIsLocked(false);
        }, 500);
      } else {
        // عدم تطابق
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((c) =>
              c.id === card1?.id || c.id === card2?.id ? { ...c, isFlipped: false } : c
            )
          );
          setFlippedCards([]);
          setIsLocked(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-indigo-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Memory <span className="text-indigo-400">Match</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Train your short-term memory. Match all the gaming icons in the fewest moves possible!
        </p>
      </div>

      <div className="flex justify-between items-center max-w-lg mx-auto mb-8 bg-[#0B0F19] p-6 rounded-3xl border border-white/10 shadow-lg">
        <div className="text-center">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-1">Moves</p>
          <p className="text-3xl font-black text-white">{moves}</p>
        </div>
        <button onClick={initializeGame} className="px-6 py-2 bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500 hover:text-white border border-indigo-500/30 rounded-xl font-bold transition-all">
          Restart
        </button>
        <div className="text-center">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-1">Matches</p>
          <p className="text-3xl font-black text-indigo-400">{matches} / 6</p>
        </div>
      </div>

      {matches === 6 && (
        <div className="text-center mb-8 animate-bounce">
          <p className="text-3xl font-black text-emerald-400 bg-emerald-500/10 inline-block px-8 py-4 rounded-2xl border border-emerald-500/30">
            Victory! You completed it in {moves} moves. 🎉
          </p>
        </div>
      )}

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-lg mx-auto perspective-1000">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={\`relative w-full aspect-square rounded-2xl cursor-pointer transition-transform duration-500 transform-style-3d \${
              card.isFlipped || card.isMatched ? "rotate-y-180" : "hover:scale-105"
            }\`}
          >
            {/* وجه البطاقة الخلفي */}
            <div className={\`absolute inset-0 bg-[#111827] border-2 border-white/10 rounded-2xl flex items-center justify-center backface-hidden \${card.isFlipped || card.isMatched ? 'hidden' : 'block'}\`}>
              <span className="text-3xl opacity-20">❓</span>
            </div>
            
            {/* وجه البطاقة الأمامي (الأيقونة) */}
            <div className={\`absolute inset-0 \${card.isMatched ? 'bg-indigo-500/20 border-indigo-500' : 'bg-[#1a2333] border-indigo-400/50'} border-2 rounded-2xl flex items-center justify-center rotate-y-180 backface-hidden \${card.isFlipped || card.isMatched ? 'block' : 'hidden'}\`}>
              <span className="text-5xl drop-shadow-lg">{card.emoji}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}