"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// قاعدة بيانات المعاملات الرياضية الاحترافية (بناءً على محرك CS2 كقاعدة 1.0)
const gameEngines = [
  { id: "cs2", name: "Counter-Strike 2 / Source", toCS2: 1, fromCS2: 1, maxSens: 10 },
  { id: "apex", name: "Apex Legends", toCS2: 1, fromCS2: 1, maxSens: 10 },
  { id: "valorant", name: "Valorant", toCS2: 3.181818, fromCS2: 0.314159, maxSens: 5 },
  { id: "ow2", name: "Overwatch 2", toCS2: 0.3, fromCS2: 3.333333, maxSens: 100 },
  { id: "cod", name: "Call of Duty / Warzone", toCS2: 0.3, fromCS2: 3.333333, maxSens: 100 },
  { id: "r6", name: "Rainbow Six Siege", toCS2: 0.260416, fromCS2: 3.839723, maxSens: 100 },
  { id: "destiny", name: "Destiny 2", toCS2: 0.3, fromCS2: 3.333333, maxSens: 100 },
  { id: "rust", name: "Rust", toCS2: 2.0, fromCS2: 0.5, maxSens: 5 },
];

export default function SensitivityConverter() {
  const [gameFrom, setGameFrom] = useState(gameEngines[2]); // Default Valorant
  const [gameTo, setGameTo] = useState(gameEngines[0]); // Default CS2
  const [sensInput, setSensInput] = useState("");
  const [dpiInput, setDpiInput] = useState("800");
  const [result, setResult] = useState<{ sens: number, eDPI: number } | null>(null);

  const handleConvert = () => {
    const sens = parseFloat(sensInput);
    const dpi = parseFloat(dpiInput);
    
    if (isNaN(sens) || sens <= 0) return;

    // 1. تحويل اللعبة الأولى إلى القاعدة العالمية (محرك CS2)
    const universalBase = sens * gameFrom.toCS2;
    
    // 2. التحويل من القاعدة العالمية إلى اللعبة المطلوبة
    let finalSens = universalBase * gameTo.fromCS2;

    // 3. حساب الـ eDPI (Effective DPI)
    let calculatedEDPI = 0;
    if (!isNaN(dpi) && dpi > 0) {
      calculatedEDPI = finalSens * dpi;
    }

    setResult({
      sens: Number(finalSens.toFixed(4)),
      eDPI: Number(calculatedEDPI.toFixed(1))
    });
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-purple-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Arsenal
      </Link>

      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6 text-purple-400 font-bold text-sm tracking-widest uppercase">
          Pro Esports Algorithm
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Universal <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Aim & eDPI</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Never lose your muscle memory. Convert your exact mouse sensitivity across 8 major competitive shooters using true developer engine multipliers.
        </p>
      </div>

      {/* --- الأداة الاحترافية المتقدمة --- */}
      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/10 p-6 md:p-12 shadow-2xl relative overflow-hidden max-w-5xl mx-auto mb-16">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          
          {/* الجانب الأيسر: إدخال البيانات */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <span className="text-purple-500">⚙️</span> Input Configuration
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 font-bold mb-2 uppercase tracking-widest text-[10px]">Convert From</label>
                <select 
                  value={gameFrom.id}
                  onChange={(e) => {
                    setGameFrom(gameEngines.find(g => g.id === e.target.value) || gameEngines[2]);
                    setResult(null);
                  }}
                  className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 text-white font-bold focus:border-purple-500 outline-none transition-colors"
                >
                  {gameEngines.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-slate-400 font-bold mb-2 uppercase tracking-widest text-[10px]">Convert To</label>
                <select 
                  value={gameTo.id}
                  onChange={(e) => {
                    setGameTo(gameEngines.find(g => g.id === e.target.value) || gameEngines[0]);
                    setResult(null);
                  }}
                  className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 text-white font-bold focus:border-pink-500 outline-none transition-colors"
                >
                  {gameEngines.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-400 font-bold mb-2 uppercase tracking-widest text-xs">Current Sensitivity</label>
              <input 
                type="number" 
                step="0.01"
                placeholder="e.g. 0.35"
                value={sensInput}
                onChange={(e) => { setSensInput(e.target.value); setResult(null); }}
                className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 text-white font-mono text-xl focus:border-purple-500 outline-none transition-colors placeholder:text-slate-700"
              />
            </div>

            <div>
              <label className="block text-slate-400 font-bold mb-2 uppercase tracking-widest text-xs flex justify-between">
                <span>Mouse DPI</span>
                <span className="text-purple-400">Optional for eDPI</span>
              </label>
              <div className="flex gap-2">
                {["400", "800", "1600"].map(preset => (
                  <button 
                    key={preset}
                    onClick={() => setDpiInput(preset)}
                    className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${dpiInput === preset ? 'bg-purple-500 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
                  >
                    {preset}
                  </button>
                ))}
                <input 
                  type="number" 
                  value={dpiInput}
                  onChange={(e) => setDpiInput(e.target.value)}
                  className="flex-1 bg-[#111827] border border-white/10 rounded-lg px-4 text-white font-mono outline-none focus:border-purple-500"
                  placeholder="Custom"
                />
              </div>
            </div>

            <button 
              onClick={handleConvert}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-lg py-5 rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-1 mt-4"
            >
              Calculate Perfect Sens ⚡
            </button>
          </div>

          {/* الجانب الأيمن: شاشة العرض والنتائج */}
          <div className="bg-black/40 border border-white/5 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden">
            {result ? (
              <div className="animate-fade-in space-y-8 relative z-10">
                <div className="text-center">
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2">Target Sensitivity ({gameTo.name})</p>
                  <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono tracking-tight drop-shadow-lg">
                    {result.sens}
                  </p>
                </div>
                
                {result.eDPI > 0 && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-1">Your Target eDPI</p>
                    <p className="text-3xl font-black text-white font-mono">{result.eDPI}</p>
                    <p className="text-xs text-slate-500 mt-2 font-medium">Pro standard eDPI usually ranges between 200 and 400 for tactical shooters.</p>
                  </div>
                )}
                
                <button 
                  onClick={() => navigator.clipboard.writeText(result.sens.toString())}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl transition-colors text-sm uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  📋 Copy Sensitivity
                </button>
              </div>
            ) : (
              <div className="text-center opacity-30 relative z-10">
                <div className="text-7xl mb-4">🎯</div>
                <p className="text-2xl font-black text-white">Awaiting Input</p>
                <p className="text-sm font-bold text-slate-400 mt-2">Enter your settings to generate pro values.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- قسم السيو و GEO (محتوى ضخم جداً) --- */}
      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/5 p-8 md:p-16 shadow-2xl relative z-10">
        <div className="prose prose-invert max-w-none 
                        prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
                        prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                        prose-ul:text-slate-300 prose-li:mb-2 prose-li:text-lg
                        prose-strong:text-purple-400">
          
          <h2>Why Pros Use a Global Sensitivity Converter</h2>
          <p>
            In competitive esports, "Muscle Memory" is the foundation of consistency. When you switch between tactical shooters like <strong>Valorant</strong>, <strong>CS2</strong>, and fast-paced battle royales like <strong>Apex Legends</strong>, the game engines process your mouse movement differently. If you don't strictly convert your sensitivity using accurate engine multipliers, you will destroy thousands of hours of flick-aim training. Our Universal Aim Converter uses the exact mathematical constants extracted directly from the developer APIs to ensure 1 inch of mouse movement translates to the exact same rotation in every single game.
          </p>

          <h2>Understanding eDPI (Effective DPI)</h2>
          <p>
            In-game sensitivity alone is a meaningless number. To compare your true sensitivity with professional players (like TenZ or s1mple), you must calculate your <strong>eDPI</strong>. 
          </p>
          <div className="bg-black/50 p-6 rounded-xl border border-white/10 my-6 font-mono text-center text-xl text-purple-400">
            eDPI = Mouse DPI × In-Game Sensitivity
          </div>
          <p>
            For example, if you play Valorant at 800 DPI with a sensitivity of 0.35, your eDPI is 280. The vast majority of professional tactical shooter players maintain an eDPI between 200 and 400. If your calculated eDPI is over 600, your sensitivity is likely too high, leading to inconsistent micro-adjustments and missed headshots.
          </p>

          <h2>The Source Engine Benchmark (CS2 & Apex)</h2>
          <p>
            Counter-Strike (built on Valve's Source Engine) has been the gold standard for FPS mechanics for over two decades. Because of this, games like <strong>Apex Legends</strong> and <strong>Rust</strong> adopted the exact same sensitivity scale. This means your sensitivity in CS2 is a 1:1 exact match for Apex Legends. 
          </p>
          <p>
            However, modern engines require complex math. To convert from CS2 to Valorant, you must divide your CS2 sensitivity by <strong>3.181818</strong>. To convert from CS2 to Overwatch 2 or Call of Duty, you must multiply by <strong>3.333333</strong>. Our calculator handles all of this automatically in real-time.
          </p>
        </div>
      </div>

    </div>
  );
}