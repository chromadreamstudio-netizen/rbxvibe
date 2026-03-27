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
    <div className="max-w-5xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
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

      {/* --- قسم الأداة (الآلة الحاسبة) --- */}
      <div className="bg-[#0B0F19] rounded-[2.5rem] border border-white/10 p-6 md:p-12 shadow-2xl relative overflow-hidden max-w-2xl mx-auto mb-16">
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

      {/* --- قسم السيو (المحتوى الطويل لجوجل أدسنس) --- */}
      <div className="bg-[#0B0F19] rounded-[2.5rem] border border-white/5 p-8 md:p-12 shadow-2xl">
        <div className="prose prose-invert max-w-none 
                        prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
                        prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                        prose-ul:text-slate-300 prose-li:mb-2
                        prose-strong:text-purple-400">
          
          <h2>Why Use a Sensitivity Converter?</h2>
          <p>
            Switching between tactical shooters like Valorant and Counter-Strike 2 (CS2) can ruin your aim if your mouse sensitivity isn't perfectly matched. Your brain develops "muscle memory" for specific flicks and tracking speeds. A pro sensitivity converter uses the exact mathematical engine multipliers programmed by game developers to ensure that moving your mouse 1 inch on your mousepad translates to the exact same rotation in every game.
          </p>

          <h2>Understanding the Math: Valorant to CS2</h2>
          <p>
            Different game engines process raw mouse input differently. For example, Riot Games (Valorant) and Valve (CS2 / Source Engine) use different field of view (FOV) scales and sensitivity multipliers. The golden ratio for converting from Valorant to CS2 is <strong>3.181818</strong>.
          </p>
          <ul>
            <li><strong>Valorant to CS2:</strong> Multiply your Valorant sens by 3.181818.</li>
            <li><strong>CS2 to Valorant:</strong> Divide your CS2 sens by 3.181818.</li>
            <li><strong>CS2 to Apex Legends:</strong> The sensitivity is exactly 1:1, as both games run on heavily modified versions of the Source engine.</li>
          </ul>

          <h2>What is eDPI and Why Does it Matter?</h2>
          <p>
            In-game sensitivity alone doesn't tell the whole story. To find your true sensitivity, you must calculate your <strong>eDPI (Effective Dots Per Inch)</strong>. You can calculate it using this formula: <em>Mouse DPI × In-Game Sensitivity = eDPI</em>. 
          </p>
          <p>
            For example, if you play Valorant at 800 DPI with an in-game sens of 0.35, your eDPI is 280. Most professional tactical shooter players use an eDPI between 200 and 400 in Valorant (or 600 to 1200 in CS2) to maintain pixel-perfect precision for headshots while still being able to turn quickly.
          </p>

          <h2>Tips for Finding Your Perfect Sensitivity</h2>
          <p>
            If you are constantly over-flicking or under-flicking your targets, you might need to adjust your base sensitivity before using our converter. Here are some pro tips:
          </p>
          <ul>
            <li><strong>The 180-Degree Rule:</strong> Place your mouse in the center of your mousepad. Swiping to the far edge should result in exactly a 180-degree turn in-game.</li>
            <li><strong>Turn off Mouse Acceleration:</strong> Ensure "Enhance Pointer Precision" is disabled in your Windows mouse settings. This setting changes your cursor speed based on how fast you move your hand, destroying muscle memory.</li>
            <li><strong>Stick to One DPI:</strong> We recommend setting your mouse software to 800 or 1600 DPI and leaving it there. Only change your in-game sensitivity using our calculator.</li>
          </ul>

        </div>
      </div>

    </div>
  );
}