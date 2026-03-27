"use client";

import { useState } from "react";
import Link from "next/link";

// بيانات تجريبية لخرائط فورتنايت (يمكنك تعديلها لاحقاً)
const mapsData = [
  { id: 1, name: "1v1 Build Fights + XP", code: "1234-5678-9012", type: "PvP / Passive XP", status: "Active" },
  { id: 2, name: "Red vs Blue Rumble", code: "9876-5432-1098", type: "Combat XP", status: "Active" },
  { id: 3, name: "Parkour Deathrun 500 Levels", code: "4567-8901-2345", type: "Milestone XP", status: "Active" },
  { id: 4, name: "AFK XP Lounge", code: "1111-2222-3333", type: "AFK / Timer", status: "Patched" },
];

export default function FortniteMapsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-cyan-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-16">
        <div className="w-20 h-20 mx-auto bg-cyan-500/20 flex items-center justify-center rounded-3xl border border-cyan-500/30 mb-6 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          <span className="text-4xl">🗺️</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Fortnite <span className="text-cyan-400">XP Maps</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Level up your Battle Pass instantly. Copy the most rewarding and active Creative map codes for massive XP gains.
        </p>
      </div>

      {/* --- قسم الأداة (أكواد الخرائط) --- */}
      <div className="bg-[#0B0F19] rounded-[2.5rem] border border-white/10 p-6 md:p-12 shadow-2xl relative overflow-hidden mb-16">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 relative z-10">
          <h2 className="text-3xl font-black text-white">Top Rated Maps</h2>
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm border border-cyan-500/30">
            Updated Daily
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 overflow-x-auto">
          {mapsData.map((map) => (
            <div key={map.id} className="bg-[#111827] p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-black text-xl text-white group-hover:text-cyan-400 transition-colors whitespace-nowrap">{map.name}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider ${map.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                    {map.status}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4 font-medium border-l-2 border-cyan-500/30 pl-3">Type: {map.type}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <code className={`flex-1 bg-black/50 p-3 rounded-xl font-mono text-center font-bold tracking-widest overflow-x-auto whitespace-nowrap ${map.status === 'Patched' ? 'text-slate-500 line-through' : 'text-cyan-400'}`}>
                  {map.code}
                </code>
                <button 
                  onClick={() => handleCopy(map.code)}
                  disabled={map.status === 'Patched'}
                  className={`p-3 rounded-xl font-bold transition-all ${
                    map.status === 'Patched'
                    ? "bg-white/5 text-slate-500 cursor-not-allowed"
                    : copiedCode === map.code 
                    ? "bg-cyan-500 text-[#0B0F19] shadow-[0_0_20px_rgba(34,211,238,0.5)]" 
                    : "bg-white/10 text-white hover:bg-cyan-500 hover:text-[#0B0F19]"
                  }`}
                  title="Copy Code"
                >
                  {copiedCode === map.code ? "✔" : "📋"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🚀 2. INTERNAL LINKING BANNER (اللافتة الجديدة) 🚀 */}
      <div className="mb-24 bg-gradient-to-r from-blue-900 via-purple-700 to-cyan-800 p-1 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(34,211,238,0.3)] animate-pulse">
        <Link href="/blog/how-to-get-free-fortnite-skins" className="block bg-[#0B0F19] rounded-[2rem] p-8 md:p-12 hover:bg-white/5 transition-colors relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6 backdrop-blur-md text-cyan-400 font-bold text-sm tracking-widest uppercase">
                🚀 SEO Article
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-tight">
                How to Get Free <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Fortnite Skins</span> (Legit Methods)
              </h2>
              <p className="text-xl text-slate-400 max-w-xl font-medium mb-6">
                Stop falling for scam generators. Discover safe, Epic Games-approved methods to expand your locker without spending V-Bucks.
              </p>
            </div>
            <div className="text-cyan-500 font-bold text-xl uppercase tracking-widest group-hover:translate-x-2 transition-transform whitespace-nowrap">
              Read Guide &rarr;
            </div>
          </div>
        </Link>
      </div>

      {/* --- قسم السيو وتطبيق فكرتك الذكية (المحتوى الطويل لجوجل أدسنس) --- */}
      <div className="bg-[#0B0F19] rounded-[2.5rem] border border-white/5 p-8 md:p-12 shadow-2xl">
        <div className="prose prose-invert max-w-none 
                        prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
                        prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                        prose-ul:text-slate-300 prose-li:mb-2
                        prose-strong:text-cyan-400">
          
          <h2>How to Use Fortnite XP Maps to Level Up Fast</h2>
          <p>
            Leveling up your Battle Pass in Fortnite can be a long grind if you only play traditional Battle Royale or Zero Build matches. Creative XP Maps offer a highly efficient alternative. These are custom-built islands by community creators that utilize Epic Games' "Accolade Device" to reward players with experience points for completing specific tasks—such as finding hidden buttons, surviving in Red vs Blue combat, or completing deathruns. To use them, simply copy a map code from our active list above, enter it into the Island Code tab in the game lobby, and start playing!
          </p>

          <h2>Can You Get Banned for Using XP Glitches?</h2>
          <p>
            A common question among the Fortnite community is whether utilizing "XP Glitches" or high-yield AFK maps will result in an account ban. The short answer is <strong>No</strong>, as long as the map is built using the official Creative tools provided by Epic Games. When creators place XP accolades in their maps, Epic Games' system automatically calibrates them. If a map gives too much XP too quickly, the system simply reduces the XP output (this is why maps eventually become "Patched"). You will not be banned for playing a map that Epic Games themselves approved and published.
          </p>

          <h2>How to Get Free Skins in Fortnite (Legit Methods)</h2>
          <p>
            Many players search for a "Free Skin Generator," but it's important to know that <strong>skin generators do not exist</strong>. Any website asking for your Epic Games password or offering to generate free V-Bucks or Skins via a script is a scam designed to steal your account. However, Epic Games provides several 100% legitimate ways to get free cosmetics:
          </p>
          <ul>
            <li><strong>Winterfest & Holiday Events:</strong> Every December, Fortnite hosts Winterfest, giving away 2 to 3 completely free outfits just for logging in and opening presents in the Winterfest Cabin.</li>
            <li><strong>PlayStation Plus Celebration Packs:</strong> If you are a PS Plus subscriber, you can regularly claim free exclusive skins and pickaxes directly from the PlayStation Store.</li>
            <li><strong>Free PC Offerings (Epic Games Store):</strong> Occasionally, the Epic Games Store offers a free promotional skin for PC players in the Item Shop (e.g., the Blizzabelle or Underworld Desdemona quests).</li>
            <li><strong>Competitive Cups:</strong> Epic frequently hosts promotional tournaments. Placing high enough in your region rewards you with the skin before it even hits the Item Shop.</li>
            <li><strong>Battle Pass V-Bucks:</strong> Even without buying the Battle Pass, the free tier track gives you 300 free V-Bucks per season. Save these up over a few seasons, and you can buy a premium skin or the Battle Pass itself for free!</li>
          </ul>

        </div>
      </div>

    </div>
  );
}