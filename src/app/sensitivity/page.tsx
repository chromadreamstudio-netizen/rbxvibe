"use client";

import { useState } from "react";
import Link from "next/link";

export default function SensitivityConverter() {
  const [gameFrom, setGameFrom] = useState("Valorant");
  const [gameTo, setGameTo] = useState("CS2");
  const [sensInput, setSensInput] = useState("");
  const [result, setResult] = useState<number | null>(null);

  // دالة التحويل الرياضية الحقيقية (محركات الألعاب)
  const handleConvert = () => {
    const sens = parseFloat(sensInput);
    if (isNaN(sens) || sens <= 0) return;

    let finalSens = 0;
    const sourceEngineMultiplier = 3.181818; // معامل التحويل الدقيق

    // من Valorant إلى ألعاب محرك Source (CS2 أو Apex)
    if (gameFrom === "Valorant" && (gameTo === "CS2" || gameTo === "Apex Legends")) {
      finalSens = sens * sourceEngineMultiplier;
    } 
    // من ألعاب محرك Source إلى Valorant
    else if ((gameFrom === "CS2" || gameFrom === "Apex Legends") && gameTo === "Valorant") {
      finalSens = sens / sourceEngineMultiplier;
    } 
    // إذا كانت نفس اللعبة أو نفس المحرك (CS2 إلى Apex)
    else {
      finalSens = sens;
    }

    setResult(Number(finalSens.toFixed(4))); // تقريب الرقم لـ 4 خانات عشرية
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-purple-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-16">
        <div className="w-20 h-20 mx-auto bg-purple-500/20 flex items-center justify-center rounded-3xl border border-purple-500/30 mb-6 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          <span className="text-4xl">🖱️</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Pro <span className="text-purple-400">Sensitivity</span> Converter</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Never lose your muscle memory. Convert your mouse sensitivity exactly between Valorant, CS2, and Apex Legends using true engine multipliers.
        </p>
      </div>

      <div className="bg-[#0B0F19] rounded-[2.5rem] border border-white/10 p-6 md:p-12 shadow-2xl relative overflow-hidden max-w-2xl mx-auto">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 space-y-8">
          
          {/* قسم اختيار الألعاب */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-400 font-bold mb-2">Convert From</label>
              <select 
                value={gameFrom}
                onChange={(e) => {
                  setGameFrom(e.target.value);
                  setResult(null); // مسح النتيجة عند تغيير اللعبة
                }}
                className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 text-white font-medium focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="Valorant">Valorant</option>
                <option value="CS2">Counter-Strike 2</option>
                <option value="Apex Legends">Apex Legends</option>
              </select>
            </div>
            
            <div>
              <label className="block text-slate-400 font-bold mb-2">Convert To</label>
              <select 
                value={gameTo}
                onChange={(e) => {
                  setGameTo(e.target.value);
                  setResult(null);
                }}
                className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 text-white font-medium focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="CS2">Counter-Strike 2</option>
                <option value="Valorant">Valorant</option>
                <option value="Apex Legends">Apex Legends</option>
              </select>
            </div>
          </div>

          {/* قسم إدخال الحساسية */}
          <div>
            <label className="block text-slate-400 font-bold mb-2">Your Current Sensitivity</label>
            <input 
              type="number" 
              step="0.01"
              placeholder="e.g. 0.35"
              value={sensInput}
              onChange={(e) => {
                setSensInput(e.target.value);
                setResult(null);
              }}
              className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 text-white font-mono text-xl focus:outline-none focus:border-purple-500 transition-colors placeholder:text-slate-600"
            />
          </div>

          {/* زر التحويل */}
          <button 
            onClick={handleConvert}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-black text-lg py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-1"
          >
            Calculate Perfect Sens
          </button>

          {/* عرض النتيجة الحقيقية */}
          {result !== null && (
            <div className="mt-8 p-6 bg-purple-500/10 border border-purple-500/30 rounded-2xl text-center animate-fade-in">
              <p className="text-slate-300 font-medium mb-2">Your exact sensitivity for <span className="text-white font-bold">{gameTo}</span> is:</p>
              <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 drop-shadow-lg tracking-wider font-mono">
                {result}
              </p>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}