"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// 1. قاعدة بيانات إعدادات اللاعبين المحترفين (SEO & GEO Magnet)
const proPresets = [
  { id: "custom", name: "🛠️ Custom Build", color: "#00FF00", length: 6, thickness: 2, gap: 3, hasDot: false, hasOutline: false },
  { id: "tenz", name: "👑 TenZ (Sentinels)", color: "#00FFFF", length: 4, thickness: 2, gap: 2, hasDot: false, hasOutline: false },
  { id: "scream", name: "🎯 ScreaM (Karmine Corp)", color: "#00FFFF", length: 0, thickness: 2, gap: 0, hasDot: true, hasOutline: true },
  { id: "demon1", name: "😈 Demon1 (NRG)", color: "#FFFFFF", length: 3, thickness: 1, gap: 2, hasDot: false, hasOutline: false },
  { id: "forsaken", name: "⚡ F0rsakeN (PRX)", color: "#FFFFFF", length: 4, thickness: 1, gap: 1, hasDot: false, hasOutline: true },
  { id: "boaster", name: "🧠 Boaster (Fnatic)", color: "#00FF00", length: 4, thickness: 2, gap: 3, hasDot: false, hasOutline: true }
];

// 2. خرائط حقيقية لاختبار الرؤية
const mapBackgrounds = [
  { name: "Valorant (Ascent Mid)", url: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1000" },
  { name: "CS2 (Dust 2 Long)", url: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1000" },
  { name: "Dark Environment", url: "https://images.pexels.com/photos/1750056/pexels-photo-1750056.jpeg?auto=compress&cs=tinysrgb&w=1000" }
];

export default function CrosshairGeneratorPage() {
  const [activePreset, setActivePreset] = useState(proPresets[0]);
  const [color, setColor] = useState(proPresets[0].color);
  const [length, setLength] = useState(proPresets[0].length);
  const [thickness, setThickness] = useState(proPresets[0].thickness);
  const [gap, setGap] = useState(proPresets[0].gap);
  const [hasDot, setHasDot] = useState(proPresets[0].hasDot);
  const [hasOutline, setHasOutline] = useState(proPresets[0].hasOutline);
  
  const [bgMap, setBgMap] = useState(mapBackgrounds[0]);
  const [copied, setCopied] = useState(false);

  // تطبيق إعدادات اللاعب المحترف عند اختياره
  const handlePresetChange = (presetId: string) => {
    const preset = proPresets.find(p => p.id === presetId) || proPresets[0];
    setActivePreset(preset);
    setColor(preset.color);
    setLength(preset.length);
    setThickness(preset.thickness);
    setGap(preset.gap);
    setHasDot(preset.hasDot);
    setHasOutline(preset.hasOutline);
  };

  // توليد الكود الرسمي للعبة
  const generateCode = () => {
    const code = `0;P;c;1;h;0;0l;${length};0v;${length};0g;${gap};0a;1;0f;0;1b;0;dot;${hasDot ? 1 : 0};out;${hasOutline ? 1 : 0}`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const colors = ["#00FF00", "#00FFFF", "#FFFFFF", "#FF0000", "#FFFF00", "#FF00FF", "#000000"];

  return (
    <div className="max-w-7xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-rose-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Arsenal
      </Link>

      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 mb-6 text-rose-400 font-bold text-sm tracking-widest uppercase">
          Live Rendering Engine V2
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Pro <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-500">Crosshair</span> Studio</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
          The ultimate SaaS tool for FPS players. Load professional esports presets, fine-tune your reticle with pixel-perfect precision, and test it against live in-game environments.
        </p>
      </div>

      {/* --- واجهة الـ SaaS الاحترافية --- */}
      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
          
          {/* الجانب الأيسر (لوحة التحكم - Settings) */}
          <div className="lg:col-span-5 p-8 md:p-12 bg-black/40 border-r border-white/5 flex flex-col h-full">
            <h2 className="text-2xl font-black text-white flex items-center gap-3 mb-8">
              <span className="text-rose-500">⚙️</span> Reticle Engine
            </h2>

            {/* 1. قاعدة بيانات المحترفين */}
            <div className="mb-8">
              <label className="block text-slate-400 font-bold mb-3 uppercase tracking-widest text-[10px]">Load Pro Player Preset</label>
              <select 
                value={activePreset.id}
                onChange={(e) => handlePresetChange(e.target.value)}
                className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 text-white font-bold focus:border-rose-500 outline-none transition-colors appearance-none"
              >
                {proPresets.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
            </div>

            {/* 2. الألوان */}
            <div className="mb-8">
              <label className="block text-slate-400 font-bold mb-3 uppercase tracking-widest text-[10px]">Primary Color</label>
              <div className="flex flex-wrap gap-3">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setColor(c); setActivePreset(proPresets[0]); }}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${color === c ? 'scale-125 shadow-[0_0_15px_rgba(255,255,255,0.5)] border-white' : 'border-transparent hover:scale-110'}`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            {/* 3. المؤشرات الدقيقة */}
            <div className="space-y-6 mb-8 flex-grow">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Inner Lines Offset (Gap)</label>
                  <span className="text-rose-400 font-mono font-bold bg-rose-500/10 px-2 py-0.5 rounded">{gap}</span>
                </div>
                <input type="range" min="0" max="20" value={gap} onChange={(e) => { setGap(Number(e.target.value)); setActivePreset(proPresets[0]); }} className="w-full accent-rose-500" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Line Length</label>
                  <span className="text-rose-400 font-mono font-bold bg-rose-500/10 px-2 py-0.5 rounded">{length}</span>
                </div>
                <input type="range" min="0" max="30" value={length} onChange={(e) => { setLength(Number(e.target.value)); setActivePreset(proPresets[0]); }} className="w-full accent-rose-500" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Line Thickness</label>
                  <span className="text-rose-400 font-mono font-bold bg-rose-500/10 px-2 py-0.5 rounded">{thickness}</span>
                </div>
                <input type="range" min="1" max="10" value={thickness} onChange={(e) => { setThickness(Number(e.target.value)); setActivePreset(proPresets[0]); }} className="w-full accent-rose-500" />
              </div>
            </div>

            {/* 4. الأزرار (Toggles) */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex flex-col items-center justify-center bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => { setHasDot(!hasDot); setActivePreset(proPresets[0]); }}>
                <label className="text-slate-300 font-bold text-sm mb-3 cursor-pointer">Center Dot</label>
                <div className={`w-12 h-6 rounded-full transition-colors relative ${hasDot ? 'bg-rose-500' : 'bg-slate-700'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${hasDot ? 'left-7' : 'left-1'}`}></div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => { setHasOutline(!hasOutline); setActivePreset(proPresets[0]); }}>
                <label className="text-slate-300 font-bold text-sm mb-3 cursor-pointer">Black Outlines</label>
                <div className={`w-12 h-6 rounded-full transition-colors relative ${hasOutline ? 'bg-rose-500' : 'bg-slate-700'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${hasOutline ? 'left-7' : 'left-1'}`}></div>
                </div>
              </div>
            </div>

            <button 
              onClick={generateCode}
              className="w-full py-5 rounded-xl font-black text-lg transition-all shadow-[0_0_30px_rgba(225,29,72,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2 bg-gradient-to-r from-rose-600 to-orange-600 text-white"
            >
              {copied ? "Profile Code Copied! ✔" : "Copy Export Code 📋"}
            </button>
          </div>

          {/* الجانب الأيمن (شاشة العرض الحية المتقدمة - Live Preview) */}
          <div className="lg:col-span-7 relative bg-zinc-900 min-h-[500px] flex flex-col">
            
            {/* أزرار اختيار الخريطة */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/60 backdrop-blur-md p-2 rounded-2xl border border-white/10">
              {mapBackgrounds.map((map) => (
                <button
                  key={map.name}
                  onClick={() => setBgMap(map)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${bgMap.name === map.name ? 'bg-white text-black' : 'text-slate-300 hover:bg-white/20'}`}
                >
                  {map.name.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* شاشة العرض */}
            <div className="relative flex-grow flex items-center justify-center overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/20 blur-[150px] rounded-full pointer-events-none"></div>
              
              <img 
                src={bgMap.url} 
                alt="Game Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              
              {/* عنصر الـ Crosshair المبرمج بتقنية الـ Drop Shadow للحواف */}
              <div className="relative z-10 flex items-center justify-center pointer-events-none">
                <div 
                  className="relative flex items-center justify-center transition-all duration-75" 
                  style={{ filter: hasOutline ? 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black) drop-shadow(1px -1px 0 black) drop-shadow(-1px 1px 0 black)' : 'none' }}
                >
                  {/* النقطة المركزية */}
                  {hasDot && <div style={{ width: thickness, height: thickness, backgroundColor: color }} className="absolute" />}
                  
                  {/* الخطوط الأربعة المتقدمة (مع مراعاة وجود النقطة) */}
                  {length > 0 && (
                    <>
                      {/* Top */}
                      <div style={{ width: thickness, height: length, backgroundColor: color, position: 'absolute', bottom: gap + (hasDot ? thickness/2 : 0) }} />
                      {/* Bottom */}
                      <div style={{ width: thickness, height: length, backgroundColor: color, position: 'absolute', top: gap + (hasDot ? thickness/2 : 0) }} />
                      {/* Left */}
                      <div style={{ width: length, height: thickness, backgroundColor: color, position: 'absolute', right: gap + (hasDot ? thickness/2 : 0) }} />
                      {/* Right */}
                      <div style={{ width: length, height: thickness, backgroundColor: color, position: 'absolute', left: gap + (hasDot ? thickness/2 : 0) }} />
                    </>
                  )}
                </div>
              </div>

              {/* تأثير التقريب (Scope Vignette) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
              
              <div className="absolute bottom-6 right-6 bg-rose-500 text-white font-black px-3 py-1 rounded shadow-lg text-[10px] tracking-widest uppercase">
                Live Server Render
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- قسم السيو (SEO Masterclass لجوجل أدسنس) --- */}
      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/5 p-8 md:p-16 shadow-2xl relative z-10">
        <div className="prose prose-invert max-w-none 
                        prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
                        prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                        prose-ul:text-slate-300 prose-li:mb-2 prose-li:text-lg
                        prose-strong:text-rose-400">
          
          <h2>Why Pro Players Don't Use Default Crosshairs</h2>
          <p>
            When you watch VCT (Valorant Champions Tour) or CS2 Majors, you will notice that zero professional players use the default, dynamic crosshair provided by the game. Default crosshairs expand when you move or shoot (firing error), which introduces massive visual clutter. Our <strong>Pro Crosshair Studio</strong> allows you to build static, compact reticles that focus your eyes entirely on the enemy's head, significantly increasing your first-shot accuracy and headshot percentage.
          </p>

          <h2>The Secret Behind Outlines</h2>
          <p>
            Why do players like <strong>ScreaM</strong> and <strong>F0rsakeN</strong> turn on "Black Outlines" in their settings? Tactical shooters feature maps with incredibly diverse color palettes. For example, a Cyan crosshair looks amazing in dark areas, but completely vanishes against the bright blue skies of the 'Breeze' map. By enabling outlines in our generator, a 1-pixel black border is drawn around your color. This guarantees your crosshair will never blend into the background, regardless of how bright the environment is.
          </p>

          <h2>The "Dot Only" Controversy</h2>
          <p>
            A rising trend in the competitive meta is the "Dot Only" crosshair (Length: 0, Thickness: 2, Dot: On). This provides extreme surgical precision for Vandal or Guardian users who rely strictly on one-taps. However, it requires god-tier mouse control. If you struggle with tracking fast-moving targets (like a dashing Jett or a satcheling Raze), stick to a standard cross (Length: 4) as the horizontal lines assist your brain in tracking sideways movement.
          </p>

          <h2>How to Import Your Profile Code</h2>
          <p>
            Once you have loaded a Pro Preset (like TenZ) or built your own custom reticle in our Live Engine, click the <strong>Copy Export Code</strong> button. Boot up Valorant, open the Settings menu, navigate to the <strong>Crosshair</strong> tab, and click the "Import Profile Code" button (the downward-pointing arrow). Paste the code, and your new aim is ready for Ranked!
          </p>
        </div>
      </div>

    </div>
  );
}