"use client";

import { useState } from "react";
import Link from "next/link";

// قاعدة بيانات متقدمة لخرائط فورتنايت (SaaS Directory)
const mapsDB = [
  { id: 1, name: "1v1 Build Fights + XP", code: "1234-5678-9012", category: "1v1 & PvP", xpRate: "Passive", players: "24K", status: "Active" },
  { id: 2, name: "Secret XP Lounge", code: "9876-5432-1098", category: "XP Farm", xpRate: "High", players: "8K", status: "Active" },
  { id: 3, name: "Parkour 500 Levels", code: "4567-8901-2345", category: "Deathrun", xpRate: "Milestone", players: "15K", status: "Active" },
  { id: 4, name: "Red vs Blue Rumble", code: "3333-4444-5555", category: "1v1 & PvP", xpRate: "Combat", players: "32K", status: "Active" },
  { id: 5, name: "Pro Aim Trainer", code: "6666-7777-8888", category: "Practice", xpRate: "Low", players: "5K", status: "Active" },
  { id: 6, name: "AFK Timer Glitch", code: "1111-2222-3333", category: "XP Farm", xpRate: "Extreme", players: "0", status: "Patched" },
];

const categories = ["All Maps", "XP Farm", "1v1 & PvP", "Deathrun", "Practice"];

export default function FortniteMapsPage() {
  const [activeCategory, setActiveCategory] = useState("All Maps");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const filteredMaps = mapsDB.filter(m => activeCategory === "All Maps" || m.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-cyan-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6 text-cyan-400 font-bold text-sm tracking-widest uppercase">
          Creative Directory
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Fortnite <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">XP Maps</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Level up your Battle Pass instantly. Explore our live directory of the most rewarding, unpatched Creative map codes.
        </p>
      </div>

      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden mb-16 p-8 md:p-12">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        {/* فلاتر الخرائط */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-10 border-b border-white/5 pb-8">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeCategory === cat ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(34,211,238,0.4)]' : 'bg-[#111827] text-slate-400 border border-white/10 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* شبكة الخرائط الديناميكية */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          {filteredMaps.map(map => (
            <div key={map.id} className={`bg-[#111827] p-6 rounded-3xl border transition-all flex flex-col ${map.status === 'Active' ? 'border-white/5 hover:border-cyan-500/30' : 'border-red-900/30 opacity-70'}`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-black text-white mb-1">{map.name}</h3>
                  <div className="flex gap-2">
                    <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded text-slate-400">{map.category}</span>
                    <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded text-slate-400">👥 {map.players}</span>
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${map.status === 'Active' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse' : 'bg-red-500'}`}></div>
              </div>
              
              <div className="bg-black/50 p-4 rounded-2xl flex items-center justify-between border border-white/5 mb-4">
                <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">XP Rate</span>
                <span className={`font-black uppercase ${map.status === 'Patched' ? 'text-red-400 line-through' : 'text-cyan-400'}`}>{map.xpRate}</span>
              </div>

              <div className="flex gap-3 mt-auto">
                <code className={`flex-1 bg-black py-3 rounded-xl font-mono text-center font-bold text-lg tracking-wider border border-white/5 ${map.status === 'Patched' ? 'text-slate-600 line-through' : 'text-white'}`}>
                  {map.code}
                </code>
                <button 
                  onClick={() => handleCopy(map.code)}
                  disabled={map.status === 'Patched'}
                  className={`px-6 rounded-xl font-bold transition-all ${map.status === 'Patched' ? 'bg-white/5 text-slate-600 cursor-not-allowed' : copiedCode === map.code ? 'bg-cyan-500 text-black' : 'bg-white/10 hover:bg-cyan-500 hover:text-black text-white'}`}
                >
                  {copiedCode === map.code ? "✔" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Banner */}
      <div className="mb-16 bg-gradient-to-r from-blue-900 via-purple-700 to-cyan-800 p-1 rounded-3xl shadow-[0_0_40px_rgba(34,211,238,0.2)]">
        <Link href="/blog/how-to-get-free-fortnite-skins" className="block bg-[#0B0F19] rounded-[2rem] p-8 md:p-12 hover:bg-white/5 transition-colors relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-4 text-cyan-400 font-bold text-sm tracking-widest uppercase">🚀 Free Rewards</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">How to Get Free Fortnite Skins</h2>
              <p className="text-slate-400">Discover safe, Epic Games-approved methods to expand your locker.</p>
            </div>
            <div className="text-cyan-500 font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform whitespace-nowrap">Read Guide &rarr;</div>
          </div>
        </Link>
      </div>

      {/* SEO Content */}
      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/5 p-8 md:p-16 shadow-2xl relative z-10">
        <div className="prose prose-invert max-w-none prose-headings:font-black prose-headings:text-white prose-h2:text-3xl prose-h2:mt-8 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4 prose-p:text-slate-300 prose-p:leading-relaxed prose-strong:text-cyan-400">
          <h2>How to Use Fortnite XP Maps</h2>
          <p>Leveling up your Battle Pass in Fortnite can be a long grind if you only play traditional Battle Royale. Creative XP Maps offer a highly efficient alternative. These custom-built islands utilize Epic Games' "Accolade Device" to reward players with experience points for completing specific tasks.</p>
          <h2>Can You Get Banned for XP Glitches?</h2>
          <p>A common question is whether utilizing high-yield AFK maps will result in an account ban. The short answer is <strong>No</strong>. When creators place XP accolades in their maps, Epic Games' system automatically calibrates them. If a map gives too much XP, the system simply reduces the output (which is why maps eventually become "Patched").</p>
        </div>
      </div>
    </div>
  );
}