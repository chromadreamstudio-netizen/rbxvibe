"use client";

import { useState } from "react";
import Link from "next/link";

export default function CrosshairGeneratorPage() {
  const [color, setColor] = useState("#00FF00");
  const [length, setLength] = useState(6);
  const [thickness, setThickness] = useState(2);
  const [gap, setGap] = useState(3);
  const [hasDot, setHasDot] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateCode = () => {
    // تم إصلاح السطر لتجنب أي أخطاء في Vercel
    const code = `0;P;c;1;h;0;0l;${length};0v;${length};0g;${gap};0a;1;0f;0;1b;0;dot;${hasDot ? 1 : 0}`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const colors = ["#00FF00", "#00FFFF", "#FFFFFF", "#FF0000", "#FFFF00", "#FF00FF"];

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-rose-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 mb-6 text-rose-400 font-bold text-sm tracking-widest uppercase">
          Live Aim Designer
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Pro <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-500">Crosshair</span> Maker</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Design your perfect custom crosshair for Valorant and CS2. Preview it live in-game, fine-tune the settings, and copy your profile code instantly.
        </p>
      </div>

      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/10 p-6 md:p-12 shadow-2xl mb-16 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          
          <div className="space-y-8 bg-black/40 p-8 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-black text-white flex items-center gap-3">
              <span className="text-rose-500">⚙️</span> Reticle Settings
            </h2>

            <div>
              <label className="block text-slate-400 font-bold mb-3 uppercase tracking-widest text-xs">Primary Color</label>
              <div className="flex gap-3">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${color === c ? 'scale-125 shadow-[0_0_15px_rgba(255,255,255,0.5)] border-white' : 'border-transparent hover:scale-110'}`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-slate-400 font-bold uppercase tracking-widest text-xs">Inner Lines Offset (Gap)</label>
                <span className="text-rose-400 font-bold">{gap}</span>
              </div>
              <input type="range" min="0" max="20" value={gap} onChange={(e) => setGap(Number(e.target.value))} className="w-full accent-rose-500" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-slate-400 font-bold uppercase tracking-widest text-xs">Line Length</label>
                <span className="text-rose-400 font-bold">{length}</span>
              </div>
              <input type="range" min="2" max="30" value={length} onChange={(e) => setLength(Number(e.target.value))} className="w-full accent-rose-500" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-slate-400 font-bold uppercase tracking-widest text-xs">Line Thickness</label>
                <span className="text-rose-400 font-bold">{thickness}</span>
              </div>
              <input type="range" min="1" max="10" value={thickness} onChange={(e) => setThickness(Number(e.target.value))} className="w-full accent-rose-500" />
            </div>

            <div className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/5">
              <label className="text-slate-300 font-bold">Center Dot</label>
              <button 
                onClick={() => setHasDot(!hasDot)}
                className={`w-14 h-8 rounded-full transition-colors relative ${hasDot ? 'bg-rose-500' : 'bg-slate-700'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all ${hasDot ? 'left-7' : 'left-1'}`}></div>
              </button>
            </div>

            <button 
              onClick={generateCode}
              className="w-full py-4 rounded-xl font-black text-lg transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 text-white"
            >
              {copied ? "Profile Code Copied! ✔" : "Copy Export Code"}
            </button>
          </div>

          <div className="relative rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl flex items-center justify-center bg-zinc-900 h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" 
              alt="Game Background" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[2px]"
            />
            
            <div className="relative z-10">
              {hasDot && (
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ width: `${thickness}px`, height: `${thickness}px`, backgroundColor: color }}
                ></div>
              )}
              
              <div 
                className="absolute left-1/2 -translate-x-1/2"
                style={{ bottom: `${gap + (hasDot ? thickness : 0)}px`, width: `${thickness}px`, height: `${length}px`, backgroundColor: color }}
              ></div>
              
              <div 
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: `${gap + (hasDot ? thickness : 0)}px`, width: `${thickness}px`, height: `${length}px`, backgroundColor: color }}
              ></div>
              
              <div 
                className="absolute top-1/2 -translate-y-1/2"
                style={{ right: `${gap + (hasDot ? thickness : 0)}px`, height: `${thickness}px`, width: `${length}px`, backgroundColor: color }}
              ></div>
              
              <div 
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: `${gap + (hasDot ? thickness : 0)}px`, height: `${thickness}px`, width: `${length}px`, backgroundColor: color }}
              ></div>
            </div>

            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs font-mono text-slate-300">
              LIVE PREVIEW: 1920x1080
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/5 p-8 md:p-16 shadow-2xl relative z-10">
        <div className="prose prose-invert max-w-none 
                        prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
                        prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                        prose-ul:text-slate-300 prose-li:mb-2 prose-li:text-lg
                        prose-strong:text-rose-400">
          
          <h2>Why Your Crosshair Settings Matter in FPS Games</h2>
          <p>
            In highly competitive tactical shooters like <strong>Valorant</strong> and <strong>Counter-Strike 2 (CS2)</strong>, your crosshair is the most important visual element on your screen. It is the bridge between your hand's physical movement and your in-game accuracy. Using a default, bulky, or dynamic crosshair can obstruct your vision, making it incredibly difficult to land precise headshots at long distances. Professional players spend hours perfecting their reticle settings to ensure maximum visibility with minimum screen clutter.
          </p>

          <h2>The Anatomy of a Perfect Crosshair</h2>
          <p>
            When designing a crosshair using our Live Generator, there are four main components you must balance to create a pro-level reticle:
          </p>
          <ul>
            <li><strong>Color Psychology:</strong> Never use dark colors (like dark blue or black) or colors that blend into the map environment. Cyan, Green, and Neon Pink are the most popular choices among Esports pros because they sharply contrast against almost every map texture.</li>
            <li><strong>Inner Lines vs Outer Lines:</strong> Most professionals disable "Outer Lines" entirely. Keeping only the inner lines creates a compact, focused center point that doesn't distract your peripheral vision.</li>
            <li><strong>The Center Dot Debate:</strong> To dot or not to dot? A center dot provides a specific pixel to aim with, which is fantastic for one-tapping with a Vandal or AK-47. However, if the dot is too thick, it will completely cover an enemy's head at long range (like looking down Mid on Ascent). Keep it thin!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}