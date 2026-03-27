"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isGamesOpen, setIsGamesOpen] = useState(false);

  return (
    <nav className="border-b border-white/5 bg-[#0B0F19]/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <span className="text-white font-black text-xl">R</span>
            </div>
            <span className="font-black text-2xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              RbxVibe<span className="text-emerald-500">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/wiki" className="text-slate-300 hover:text-cyan-400 font-bold transition-colors">Database</Link>
            <Link href="/blog" className="text-slate-300 hover:text-cyan-400 font-bold transition-colors">Blog</Link>
            
            {/* 🛠️ Pro Tools Dropdown */}
            <div className="relative" onMouseEnter={() => setIsToolsOpen(true)} onMouseLeave={() => setIsToolsOpen(false)}>
              <button className="text-slate-300 hover:text-cyan-400 font-bold transition-colors flex items-center gap-1 py-2">
                Pro Tools <span className="text-[10px]">▼</span>
              </button>
              
              {isToolsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 animate-fade-in">
                  <div className="bg-[#111827] border border-white/10 rounded-2xl shadow-2xl p-2 flex flex-col gap-1">
                    <Link href="/trade-calculator" className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                      <div className="text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">⚖️ Trade Calculator</div>
                    </Link>
                    <Link href="/crosshair-generator" className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                      <div className="text-rose-400 font-bold group-hover:translate-x-1 transition-transform">🎯 Crosshair Maker</div>
                    </Link>
                    <Link href="/pc-bottleneck-calculator" className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                      <div className="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">💻 FPS Estimator</div>
                    </Link>
                    <Link href="/strat-roulette" className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                      <div className="text-fuchsia-400 font-bold group-hover:translate-x-1 transition-transform">🎲 Strat Roulette</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 🎮 Mini Games Dropdown (تم استعادته) */}
            <div className="relative" onMouseEnter={() => setIsGamesOpen(true)} onMouseLeave={() => setIsGamesOpen(false)}>
              <button className="text-slate-300 hover:text-yellow-400 font-bold transition-colors flex items-center gap-1 py-2">
                Mini Games <span className="text-[10px]">▼</span>
              </button>
              
              {isGamesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-4 animate-fade-in">
                  <div className="bg-[#111827] border border-white/10 rounded-2xl shadow-2xl p-2 flex flex-col gap-1">
                    <Link href="/ai-game" className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                      <div className="text-yellow-400 font-bold group-hover:translate-x-1 transition-transform italic">🤖 AI Emoji Test</div>
                    </Link>
                    <Link href="/trivia" className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                      <div className="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform italic">🧠 Gaming Trivia</div>
                    </Link>
                    <Link href="/reaction-test" className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                      <div className="text-blue-400 font-bold group-hover:translate-x-1 transition-transform italic">⚡ Reaction Test</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 🔥 Deals Link (تم استعادته) */}
            <Link href="/deals" className="text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1 font-black underline decoration-2 underline-offset-4">
              🔥 DEALS
            </Link>
          </div>

          {/* CTA Button */}
          <Link href="/trade-calculator" className="hidden lg:inline-flex px-6 py-2.5 rounded-full font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            Open Trade Calc
          </Link>

        </div>
      </div>
    </nav>
  );
}