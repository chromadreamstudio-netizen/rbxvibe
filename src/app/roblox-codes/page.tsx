"use client";

import { useState } from "react";
import Link from "next/link";

// قاعدة بيانات وهمية متقدمة لأكواد روبلوكس
const codesDB = [
  { id: 1, game: "Blox Fruits", code: "SUB2GAMERROBOT_RESET1", reward: "Free Stat Reset", status: "Active", verified: "Today" },
  { id: 2, game: "Blox Fruits", code: "KittGaming", reward: "20 Mins 2x EXP", status: "Active", verified: "Today" },
  { id: 3, game: "Blox Fruits", code: "Sub2Fer999", reward: "2x EXP Boost", status: "Active", verified: "Yesterday" },
  { id: 4, game: "Blade Ball", code: "FREESPIN", reward: "1x Wheel Spin", status: "Active", verified: "Today" },
  { id: 5, game: "Blade Ball", code: "2BTHANKS", reward: "Special Sword", status: "Active", verified: "2 Days Ago" },
  { id: 6, game: "King Legacy", code: "Update4.7", reward: "20 Gems", status: "Active", verified: "Today" },
  { id: 7, game: "Anime Defenders", code: "RELEASE", reward: "1000 Crystals", status: "Active", verified: "Today" },
  { id: 8, game: "Blox Fruits", code: "OLD_CODE_2025", reward: "Free Pet", status: "Expired", verified: "Last Month" },
];

const categories = ["All Games", "Blox Fruits", "Blade Ball", "King Legacy", "Anime Defenders"];

export default function RobloxCodesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Games");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const filteredCodes = codesDB.filter(c => {
    const matchesSearch = c.code.toLowerCase().includes(search.toLowerCase()) || c.reward.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All Games" || c.game === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-emerald-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6 text-emerald-400 font-bold text-sm tracking-widest uppercase">
          Live Code Database
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Active <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Roblox Codes</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Stop searching for fake codes. Browse our live, daily-verified database of promotional codes for the top Roblox experiences.
        </p>
      </div>

      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden mb-16 p-8 md:p-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        {/* أدوات البحث والفلاتر (SaaS Tools) */}
        <div className="relative z-10 flex flex-col md:flex-row gap-6 mb-10">
          <div className="flex-1 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔍</span>
            <input 
              type="text" 
              placeholder="Search codes or rewards..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#111827] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-emerald-500 outline-none transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-4 rounded-2xl font-bold text-sm transition-all ${activeCategory === cat ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-[#111827] text-slate-400 border border-white/10 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* عرض الأكواد بشكل ديناميكي */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {filteredCodes.map(item => (
            <div key={item.id} className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${item.status === 'Active' ? 'bg-[#111827] border-white/5 hover:border-emerald-500/30' : 'bg-black/40 border-red-900/30 opacity-70'}`}>
              <div className="mb-6 flex justify-between items-start">
                <div>
                  <span className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-1 block">{item.game}</span>
                  <h3 className="text-2xl font-black text-white font-mono">{item.status === 'Expired' ? '••••••••' : item.code}</h3>
                  <p className="text-slate-400 mt-2 font-medium">Reward: <strong className="text-white">{item.reward}</strong></p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${item.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                  {item.status}
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => handleCopy(item.code)}
                  disabled={item.status === 'Expired'}
                  className={`flex-1 py-3 rounded-xl font-bold transition-all flex justify-center items-center gap-2 ${item.status === 'Expired' ? 'bg-white/5 text-slate-600 cursor-not-allowed' : copiedCode === item.code ? 'bg-emerald-500 text-black' : 'bg-white/10 hover:bg-emerald-500 hover:text-black text-white'}`}
                >
                  {copiedCode === item.code ? "Copied! ✔" : item.status === 'Expired' ? "Expired" : "Copy Code"}
                </button>
                <div className="text-xs text-slate-500 font-bold flex flex-col items-end">
                  <span>Verified</span>
                  <span className="text-slate-400">{item.verified}</span>
                </div>
              </div>
            </div>
          ))}
          {filteredCodes.length === 0 && (
            <div className="col-span-1 md:col-span-2 text-center py-12">
              <span className="text-4xl mb-4 block">🏜️</span>
              <h3 className="text-2xl font-black text-white">No codes found</h3>
              <p className="text-slate-400 mt-2">Try a different search term or category.</p>
            </div>
          )}
        </div>
      </div>

      {/* SEO Section remains same */}
      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/5 p-8 md:p-16 shadow-2xl relative z-10">
        <div className="prose prose-invert max-w-none prose-headings:font-black prose-headings:text-white prose-h2:text-3xl prose-h2:mt-8 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4 prose-p:text-slate-300 prose-p:leading-relaxed prose-strong:text-emerald-400">
          <h2>What Are Roblox Promo Codes?</h2>
          <p>Roblox promo codes are special, limited-time alphanumeric strings released by game developers or the official Roblox platform. When redeemed, these codes grant players free in-game items, currency, stat resets, or experience boosts like 2x EXP.</p>
          <h2>How to Redeem Blox Fruits Codes</h2>
          <ul>
            <li>Step 1: Launch Roblox and open the Blox Fruits game.</li>
            <li>Step 2: Once spawned, look for the small Twitter bird icon on the left side.</li>
            <li>Step 3: Click the icon, paste a working code from our database, and press Redeem.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}