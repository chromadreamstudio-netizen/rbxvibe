"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  return (
    <nav className="border-b border-white/5 bg-[#0B0F19]/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              <span className="text-white font-black text-xl">R</span>
            </div>
            <span className="font-black text-2xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              RbxVibe
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/wiki" className="text-slate-300 hover:text-cyan-400 font-bold transition-colors">Database</Link>
            <Link href="/blog" className="text-slate-300 hover:text-cyan-400 font-bold transition-colors">Blog</Link>
            
            {/* Tools Dropdown */}
            <div className="relative" onMouseEnter={() => setIsToolsOpen(true)} onMouseLeave={() => setIsToolsOpen(false)}>
              <button className="text-slate-300 hover:text-cyan-400 font-bold transition-colors flex items-center gap-1 py-2">
                Pro Tools <span className="text-xs">▼</span>
              </button>
              
              {isToolsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 animate-fade-in">
                  <div className="bg-[#111827] border border-white/10 rounded-2xl shadow-2xl p-2 flex flex-col gap-1">
                    <Link href="/trade-calculator" className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                      <div className="text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">⚖️ Trade Calculator</div>
                      <div className="text-xs text-slate-500 mt-1">Blox Fruits W/F/L Values</div>
                    </Link>
                    <Link href="/crosshair-generator" className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                      <div className="text-rose-400 font-bold group-hover:translate-x-1 transition-transform">🎯 Crosshair Maker</div>
                      <div className="text-xs text-slate-500 mt-1">Valorant & CS2 Live Aim</div>
                    </Link>
                    <Link href="/pc-bottleneck-calculator" className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                      <div className="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">💻 FPS & Bottleneck</div>
                      <div className="text-xs text-slate-500 mt-1">Check your PC limits</div>
                    </Link>
                    <Link href="/strat-roulette" className="px-4 py-3 hover:bg-white/5 rounded-xl transition-colors group">
                      <div className="text-fuchsia-400 font-bold group-hover:translate-x-1 transition-transform">🎲 Strat Roulette</div>
                      <div className="text-xs text-slate-500 mt-1">Fortnite Challenge Wheel</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/trade-calculator" className="hidden md:inline-flex px-6 py-2.5 rounded-full font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            Open Trade Calc
          </Link>

        </div>
      </div>
    </nav>
  );
}