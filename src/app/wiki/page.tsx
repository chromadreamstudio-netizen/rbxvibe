"use client";

import { useState } from "react";
import Link from "next/link";
import { wikiData } from "@/data/wiki";

export default function FandomWikiHub() {
  const [activeGame, setActiveGame] = useState("All Universes");
  
  // استخراج أسماء الألعاب (التصنيفات) ديناميكياً من قاعدة البيانات
  const games = ["All Universes", ...Array.from(new Set(wikiData.map(item => item.category)))];

  // فلترة المقالات حسب اللعبة المختارة
  const filteredWiki = activeGame === "All Universes" 
    ? wikiData 
    : wikiData.filter(item => item.category === activeGame);

  return (
    <div className="max-w-7xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      
      {/* 1. رأس الموسوعة (Hero Fandom Style) */}
      <div className="bg-gradient-to-br from-[#0B0F19] to-black rounded-[3rem] border border-white/5 p-12 mb-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 text-center md:text-left md:flex justify-between items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6 backdrop-blur-md text-cyan-400 font-bold text-sm tracking-widest uppercase">
              📚 Global Gaming Database
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">RbxVibe</span> Wiki
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium mb-8">
              Explore thousands of pages created by pro gamers. Discover deep lore, exact damage stats, hidden maps, and unpatched glitches across multiple universes.
            </p>
          </div>
          <div className="hidden md:block text-9xl drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            🌌
          </div>
        </div>
      </div>

      {/* 2. شريط تصنيفات الألعاب (Game Selector) */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-12 border-b border-white/5 pb-8">
        <span className="text-slate-500 font-bold uppercase tracking-widest text-sm mr-4">Select Universe:</span>
        {games.map((game) => (
          <button
            key={game}
            onClick={() => setActiveGame(game)}
            className={`px-6 py-2.5 rounded-full font-bold transition-all border ${
              activeGame === game 
                ? "bg-cyan-500 text-black border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.4)] scale-105" 
                : "bg-[#0B0F19] text-slate-400 border-white/10 hover:border-white/30 hover:text-white"
            }`}
          >
            {game}
          </button>
        ))}
      </div>

      {/* 3. شبكة مقالات الموسوعة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWiki.map((item) => (
          <Link href={`/wiki/${item.slug}`} key={item.id} className="group bg-[#0B0F19] rounded-[2rem] border border-white/5 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-xl flex flex-col h-full hover:-translate-y-2">
            
            {/* الصورة */}
            <div className="relative h-56 w-full overflow-hidden">
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-cyan-400 font-black text-xs uppercase tracking-widest border border-cyan-500/30">
                  {item.category}
                </span>
              </div>
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
            </div>

            {/* تفاصيل العنصر */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow font-medium">
                {item.shortDescription}
              </p>
              
              <div className="flex justify-between items-center text-sm border-t border-white/5 pt-4 mt-auto">
                <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">{item.type}</span>
                <span className="text-cyan-500 font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Read Wiki &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 4. رسالة تحفيزية للـ SEO */}
      {filteredWiki.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-400 text-xl font-medium">No articles found in this universe yet. Our team is updating the database!</p>
        </div>
      )}

    </div>
  );
}