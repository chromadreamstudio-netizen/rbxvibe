"use client";

import { useState } from "react";
import Link from "next/link";

const dropSpots = ["Reckless Railways", "Snooty Steppes", "Classy Courts", "Lavish Lair", "Fencing Fields", "Grand Glacier", "Pleasant Piazza", "Ruined Reels"];
const weapons = ["Shotguns Only", "Snipers Only", "Grey Weapons Only", "Pistols & Melee", "Mythics/Boss Weapons Only", "Any Weapon (Normal)"];
const challenges = ["No Healing Items", "Cannot Drive Vehicles", "Must Emote After Every Kill", "No Shields (Health Only)", "Pacifist Until Top 10", "Only Move by Jumping"];

export default function StratRoulettePage() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<{ drop: string, weapon: string, challenge: string } | null>(null);

  const spinRoulette = () => {
    setIsSpinning(true);
    setResult(null);

    // محاكاة الدوران (Spinning)
    setTimeout(() => {
      const randomDrop = dropSpots[Math.floor(Math.random() * dropSpots.length)];
      const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];
      const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];

      setResult({ drop: randomDrop, weapon: randomWeapon, challenge: randomChallenge });
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-fuchsia-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/30 mb-6 text-fuchsia-400 font-bold text-sm tracking-widest uppercase">
          Streamer Challenges
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Fortnite <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">Strat Roulette</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Bored of regular Battle Royale? Spin the wheel to generate an insane, random gameplay challenge for you and your squad.
        </p>
      </div>

      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/10 p-6 md:p-16 shadow-2xl mb-16 relative overflow-hidden text-center max-w-3xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fuchsia-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <button 
            onClick={spinRoulette}
            disabled={isSpinning}
            className={`w-48 h-48 rounded-full font-black text-2xl transition-all shadow-[0_0_40px_rgba(217,70,239,0.4)] ${isSpinning ? 'animate-spin border-4 border-fuchsia-500/50 bg-transparent text-transparent' : 'bg-gradient-to-tr from-fuchsia-600 to-purple-600 hover:scale-105 text-white'}`}
          >
            {isSpinning ? "" : "SPIN!"}
          </button>

          {result && !isSpinning && (
            <div className="mt-12 space-y-4 animate-fade-in">
              <div className="bg-black/50 p-6 rounded-2xl border border-white/10">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-sm block mb-2">📍 Where we dropping?</span>
                <span className="text-3xl font-black text-white">{result.drop}</span>
              </div>
              <div className="bg-black/50 p-6 rounded-2xl border border-white/10">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-sm block mb-2">🔫 Weapon Class</span>
                <span className="text-3xl font-black text-fuchsia-400">{result.weapon}</span>
              </div>
              <div className="bg-fuchsia-500/20 p-6 rounded-2xl border border-fuchsia-500/30">
                <span className="text-fuchsia-300 font-bold uppercase tracking-widest text-sm block mb-2">⚠️ Extreme Challenge</span>
                <span className="text-3xl font-black text-white">{result.challenge}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/5 p-8 md:p-16 shadow-2xl relative z-10">
        <div className="prose prose-invert max-w-none 
                        prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
                        prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                        prose-ul:text-slate-300 prose-li:mb-2 prose-li:text-lg
                        prose-strong:text-fuchsia-400">
          
          <h2>What is Strat Roulette?</h2>
          <p>
            <strong>Strat Roulette</strong> (Strategy Roulette) is a massively popular mini-game played within tactical shooters and Battle Royale games. Instead of playing the game normally to win, players use a randomizer tool (like the one above) to dictate highly specific, often hilarious rules for that match. It forces players out of their comfort zones and creates incredibly memorable moments, making it a favorite tool for YouTubers and Twitch streamers looking to create entertaining content.
          </p>

          <h2>How to Play with a Squad</h2>
          <p>
            Playing Strat Roulette solo is fun, but playing with a full squad is pure chaos. Here is how you do it:
          </p>
          <ul>
            <li><strong>The Shot Caller:</strong> Assign one person in your Discord call to be the "Shot Caller". Before the Battle Bus launches, this person clicks "SPIN!".</li>
            <li><strong>Strict Compliance:</strong> Read the results out loud. Every member of the squad must obey the rules. If the challenge says "Snipers Only," and you find a Gold Pump Shotgun, you must leave it behind.</li>
            <li><strong>The Punishment:</strong> Agree on a punishment before the game starts. If a squad member breaks the Strat Roulette rules (e.g., uses a healing item when they aren't supposed to), they must drop all their loot to the rest of the team.</li>
          </ul>

        </div>
      </div>
    </div>
  );
}