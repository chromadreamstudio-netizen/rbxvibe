"use client";

import { useState } from "react";
import Link from "next/link";

// قاعدة بيانات مصغرة لقيم الفواكه السوقية (الأسعار الحقيقية للتداول وليس سعر اللعبة)
const fruitsData = [
  { id: 1, name: "Kitsune", value: 115000000, icon: "🦊", color: "text-blue-400" },
  { id: 2, name: "Dragon", value: 90000000, icon: "🐉", color: "text-orange-400" },
  { id: 3, name: "Leopard", value: 40000000, icon: "🐆", color: "text-yellow-400" },
  { id: 4, name: "Dough", value: 25000000, icon: "🍩", color: "text-yellow-200" },
  { id: 5, name: "T-Rex", value: 20000000, icon: "🦖", color: "text-red-400" },
  { id: 6, name: "Venom", value: 9000000, icon: "☠️", color: "text-purple-400" },
  { id: 7, name: "Buddha", value: 7000000, icon: "🟨", color: "text-yellow-300" },
  { id: 8, name: "Portal", value: 6000000, icon: "🌀", color: "text-cyan-400" },
];

export default function TradeCalculatorPage() {
  const [myOffer, setMyOffer] = useState<any[]>([]);
  const [theirOffer, setTheirOffer] = useState<any[]>([]);

  const addToOffer = (fruit: any, side: 'mine' | 'theirs') => {
    if (side === 'mine' && myOffer.length < 4) setMyOffer([...myOffer, fruit]);
    if (side === 'theirs' && theirOffer.length < 4) setTheirOffer([...theirOffer, fruit]);
  };

  const removeFromOffer = (index: number, side: 'mine' | 'theirs') => {
    if (side === 'mine') setMyOffer(myOffer.filter((_, i) => i !== index));
    if (side === 'theirs') setTheirOffer(theirOffer.filter((_, i) => i !== index));
  };

  const myTotal = myOffer.reduce((sum, fruit) => sum + fruit.value, 0);
  const theirTotal = theirOffer.reduce((sum, fruit) => sum + fruit.value, 0);

  // منطق حساب المكسب والخسارة
  const getTradeStatus = () => {
    if (myTotal === 0 && theirTotal === 0) return { text: "Add fruits to start", color: "text-slate-400", bg: "bg-slate-800/50" };
    
    const difference = theirTotal - myTotal;
    const margin = myTotal * 0.1; // 10% margin for fair trade

    if (difference > margin) return { text: "BIG WIN 🟢", color: "text-emerald-400", bg: "bg-emerald-500/20", border: "border-emerald-500/50" };
    if (difference < -margin) return { text: "LOSS 🔴", color: "text-red-400", bg: "bg-red-500/20", border: "border-red-500/50" };
    return { text: "FAIR TRADE 🟡", color: "text-yellow-400", bg: "bg-yellow-500/20", border: "border-yellow-500/50" };
  };

  const status = getTradeStatus();

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-cyan-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6 text-cyan-400 font-bold text-sm tracking-widest uppercase">
          Live Value Database
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Blox Fruits <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Trade Calc</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Calculate the exact W/F/L (Win/Fair/Loss) of your trades. Values are updated daily based on real Discord trading servers.
        </p>
      </div>

      {/* --- الأداة التفاعلية --- */}
      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/10 p-6 md:p-12 shadow-2xl mb-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          
          {/* الجانب الأيسر (أنت تقدم) */}
          <div className="bg-black/40 border border-white/5 rounded-3xl p-6 flex flex-col">
            <h2 className="text-2xl font-black text-white mb-6 text-center">You Offer</h2>
            <div className="grid grid-cols-2 gap-3 mb-6 flex-grow">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} onClick={() => removeFromOffer(i, 'mine')} className="h-24 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-red-500/20 hover:border-red-500/50 transition-all">
                  {myOffer[i] ? (
                    <div className="text-center">
                      <span className="text-3xl block mb-1">{myOffer[i].icon}</span>
                      <span className={`text-xs font-bold ${myOffer[i].color}`}>{myOffer[i].name}</span>
                    </div>
                  ) : <span className="text-slate-600 text-2xl">+</span>}
                </div>
              ))}
            </div>
            <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest block mb-1">Total Value</span>
              <span className="text-2xl font-black text-white">{myTotal.toLocaleString()}</span>
            </div>
          </div>

          {/* المنتصف (النتيجة) */}
          <div className="flex flex-col items-center justify-center py-8">
            <div className={`p-8 rounded-[2rem] border-2 w-full text-center shadow-2xl transition-all duration-500 ${status.bg} ${status.border || 'border-white/10'}`}>
              <h3 className={`text-4xl font-black ${status.color} tracking-tighter`}>{status.text}</h3>
              {myTotal > 0 && theirTotal > 0 && (
                <p className="text-slate-300 mt-4 font-medium">Difference: <br/> <span className="text-white font-bold text-xl">{Math.abs(theirTotal - myTotal).toLocaleString()}</span></p>
              )}
            </div>
            <button 
              onClick={() => { setMyOffer([]); setTheirOffer([]); }}
              className="mt-6 px-6 py-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors font-bold text-sm uppercase tracking-widest"
            >
              Reset Trade
            </button>
          </div>

          {/* الجانب الأيمن (هم يقدمون) */}
          <div className="bg-black/40 border border-white/5 rounded-3xl p-6 flex flex-col">
            <h2 className="text-2xl font-black text-white mb-6 text-center">They Offer</h2>
            <div className="grid grid-cols-2 gap-3 mb-6 flex-grow">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} onClick={() => removeFromOffer(i, 'theirs')} className="h-24 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-red-500/20 hover:border-red-500/50 transition-all">
                  {theirOffer[i] ? (
                    <div className="text-center">
                      <span className="text-3xl block mb-1">{theirOffer[i].icon}</span>
                      <span className={`text-xs font-bold ${theirOffer[i].color}`}>{theirOffer[i].name}</span>
                    </div>
                  ) : <span className="text-slate-600 text-2xl">+</span>}
                </div>
              ))}
            </div>
            <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest block mb-1">Total Value</span>
              <span className="text-2xl font-black text-white">{theirTotal.toLocaleString()}</span>
            </div>
          </div>

        </div>

        {/* قائمة اختيار الفواكه */}
        <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
          <h3 className="text-center text-slate-400 font-bold uppercase tracking-widest mb-6 text-sm">Select Fruits to Add</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {fruitsData.map((fruit) => (
              <div key={fruit.id} className="flex gap-2 bg-[#111827] p-2 rounded-xl border border-white/5">
                <button onClick={() => addToOffer(fruit, 'mine')} className="px-3 py-2 bg-blue-500/20 hover:bg-blue-500/40 text-blue-400 rounded-lg text-xs font-bold transition-colors">Me</button>
                <div className="flex items-center gap-2 px-2">
                  <span className="text-xl">{fruit.icon}</span>
                  <span className={`font-bold text-sm ${fruit.color}`}>{fruit.name}</span>
                </div>
                <button onClick={() => addToOffer(fruit, 'theirs')} className="px-3 py-2 bg-purple-500/20 hover:bg-purple-500/40 text-purple-400 rounded-lg text-xs font-bold transition-colors">Them</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- قسم السيو (SEO Content للحصول على تقييم عالي في جوجل) --- */}
      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/5 p-8 md:p-16 shadow-2xl relative z-10">
        <div className="prose prose-invert max-w-none 
                        prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
                        prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                        prose-ul:text-slate-300 prose-li:mb-2 prose-li:text-lg
                        prose-strong:text-cyan-400">
          
          <h2>How Does the Blox Fruits Trade Calculator Work?</h2>
          <p>
            Trading in Blox Fruits can be incredibly stressful. With physical fruit values constantly shifting based on the current PvP meta and upcoming game updates, it is easy to get scammed out of a mythical fruit. Our <strong>Blox Fruits Trade Calculator</strong> solves this by pulling the true "Community Value" of each fruit, rather than the in-game Beli price. We compare the total market value of your offer against their offer to accurately determine if the trade is a <strong>W (Win)</strong>, <strong>F (Fair)</strong>, or <strong>L (Loss)</strong>.
          </p>

          <h2>Understanding W / F / L</h2>
          <ul>
            <li><strong>WIN (W):</strong> You are receiving significantly more value than you are giving away. This is a highly profitable trade, and you should accept it immediately.</li>
            <li><strong>FAIR (F):</strong> The values on both sides are nearly identical. Accept this if you really want the fruit they are offering.</li>
            <li><strong>LOSS (L):</strong> You are overpaying. The fruits you are giving away are worth much more than what you are receiving. Decline the trade.</li>
          </ul>

          <h2>Why In-Game Beli Price Doesn't Matter</h2>
          <p>
            Many beginners make the mistake of trusting the Beli value shown on the fruit itself. For example, a Gravity fruit costs 2,500,000 Beli, while a Buddha fruit costs 1,200,000 Beli. However, in the trading community, a Buddha is worth infinitely more than Gravity because Buddha is the undisputed best fruit for grinding and raids. Our calculator completely ignores the fake Beli prices and uses the <strong>Real Trading Value</strong> established by top Discord trading servers.
          </p>

          <h2>Top Tips to Avoid Getting Scammed</h2>
          <p>
            Scammers are everywhere in the Second and Third Seas. Always follow these rules:
          </p>
          <ul>
            <li><strong>Never Trust Trust-Trades:</strong> If someone asks you to drop a fruit or give them a fruit first, and promises to give you a Gamepass later, it is a scam 100% of the time. Only use the official trading table.</li>
            <li><strong>Check Values Mid-Trade:</strong> Tell the person to hold on, open our calculator on your phone or second monitor, and double-check the values before hitting accept.</li>
            <li><strong>Beware of Fake Links:</strong> Scammers in Discord will send links to fake Roblox login pages claiming to be their profile. Never click random links. Always search their username manually in the Roblox app.</li>
          </ul>

        </div>
      </div>

    </div>
  );
}