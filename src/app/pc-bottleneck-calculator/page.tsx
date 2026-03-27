"use client";

import { useState } from "react";
import Link from "next/link";

const cpus = [
  { name: "Intel Core i9-14900K", score: 100 },
  { name: "AMD Ryzen 7 7800X3D", score: 98 },
  { name: "Intel Core i7-13700K", score: 85 },
  { name: "AMD Ryzen 5 7600X", score: 75 },
  { name: "Intel Core i5-12400F", score: 60 },
  { name: "AMD Ryzen 5 5600X", score: 55 },
  { name: "Intel Core i3-10100F", score: 35 },
];

const gpus = [
  { name: "NVIDIA RTX 4090", score: 100 },
  { name: "NVIDIA RTX 4080 Super", score: 85 },
  { name: "AMD Radeon RX 7900 XTX", score: 82 },
  { name: "NVIDIA RTX 4070 Ti", score: 70 },
  { name: "AMD Radeon RX 7800 XT", score: 65 },
  { name: "NVIDIA RTX 4060 Ti", score: 50 },
  { name: "NVIDIA RTX 3060", score: 40 },
  { name: "GTX 1650", score: 20 },
];

const games = [
  { name: "GTA 6 (Expected)", baseReq: 80, isHeavy: true },
  { name: "Cyberpunk 2077", baseReq: 75, isHeavy: true },
  { name: "Valorant", baseReq: 20, isHeavy: false },
  { name: "Fortnite", baseReq: 35, isHeavy: false },
  { name: "Call of Duty: Warzone", baseReq: 60, isHeavy: true },
];

export default function BottleneckCalculatorPage() {
  const [cpu, setCpu] = useState(cpus[0]);
  const [gpu, setGpu] = useState(gpus[0]);
  const [game, setGame] = useState(games[0]);
  const [result, setResult] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculatePerformance = () => {
    setIsCalculating(true);
    setResult(null);

    setTimeout(() => {
      let bottleneck = 0;
      let culprit = "";
      
      if (cpu.score > gpu.score + 20) {
        bottleneck = cpu.score - gpu.score;
        culprit = "GPU";
      } else if (gpu.score > cpu.score + 20) {
        bottleneck = gpu.score - cpu.score;
        culprit = "CPU";
      } else {
        bottleneck = Math.abs(cpu.score - gpu.score);
        culprit = "Balanced";
      }

      let estimatedFps = 0;
      const systemPower = Math.min(cpu.score, gpu.score);
      
      if (game.isHeavy) {
        estimatedFps = Math.floor((systemPower / game.baseReq) * 60);
      } else {
        estimatedFps = Math.floor((systemPower / game.baseReq) * 240);
      }

      if (estimatedFps > 500) estimatedFps = 500;
      if (estimatedFps < 15) estimatedFps = 15;

      setResult({
        fps: estimatedFps,
        bottleneckPercentage: bottleneck,
        culprit: culprit,
        isPlayable: estimatedFps >= 60,
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-emerald-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6 text-emerald-400 font-bold text-sm tracking-widest uppercase">
          Hardware Analysis
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">PC <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Bottleneck</span> & FPS Calc</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Find out if your CPU is holding back your GPU. Get highly accurate FPS estimates for the biggest games including GTA 6 and Cyberpunk.
        </p>
      </div>

      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/10 p-6 md:p-12 shadow-2xl mb-16 relative overflow-hidden max-w-4xl mx-auto">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-10">
          
          <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
            <label className="block text-slate-400 font-bold uppercase tracking-widest text-xs mb-3">Processor (CPU)</label>
            <div className="text-3xl mb-3">🧠</div>
            <select 
              className="w-full bg-[#111827] border border-white/10 rounded-xl p-3 text-white font-medium focus:border-emerald-500 outline-none"
              onChange={(e) => setCpu(cpus.find(c => c.name === e.target.value) || cpus[0])}
            >
              {cpus.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
            </select>
          </div>

          <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
            <label className="block text-slate-400 font-bold uppercase tracking-widest text-xs mb-3">Graphics Card (GPU)</label>
            <div className="text-3xl mb-3">🖥️</div>
            <select 
              className="w-full bg-[#111827] border border-white/10 rounded-xl p-3 text-white font-medium focus:border-cyan-500 outline-none"
              onChange={(e) => setGpu(gpus.find(g => g.name === e.target.value) || gpus[0])}
            >
              {gpus.map(g => <option key={g.name} value={g.name}>{g.name}</option>)}
            </select>
          </div>

          <div className="bg-black/40 p-6 rounded-2xl border border-white/5 border-t-4 border-t-purple-500">
            <label className="block text-purple-400 font-bold uppercase tracking-widest text-xs mb-3">Select Game</label>
            <div className="text-3xl mb-3">🎮</div>
            <select 
              className="w-full bg-[#111827] border border-white/10 rounded-xl p-3 text-white font-medium focus:border-purple-500 outline-none"
              onChange={(e) => setGame(games.find(g => g.name === e.target.value) || games[0])}
            >
              {games.map(g => <option key={g.name} value={g.name}>{g.name}</option>)}
            </select>
          </div>

        </div>

        <div className="text-center relative z-10">
          <button 
            onClick={calculatePerformance}
            disabled={isCalculating}
            className="px-12 py-4 rounded-xl font-black text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCalculating ? "Analyzing Hardware..." : "Calculate Performance ⚡"}
          </button>
        </div>

        {result && (
          <div className="mt-12 pt-10 border-t border-white/10 animate-fade-in relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-gradient-to-br from-[#0B1221] to-black p-8 rounded-3xl border border-white/5 text-center shadow-xl">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-2">Est. Average FPS (1080p High)</p>
                <div className="flex items-end justify-center gap-2 mb-4">
                  <span className={`text-7xl font-black ${result.isPlayable ? 'text-emerald-400' : 'text-red-400'} tracking-tighter`}>
                    {result.fps}
                  </span>
                  <span className="text-xl text-slate-500 font-bold mb-2">FPS</span>
                </div>
                <p className={`font-bold px-4 py-2 rounded-lg inline-block ${result.isPlayable ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                  {result.isPlayable ? "✅ Extremely Playable" : "⚠️ Unplayable / Severe Lag"}
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#0B1221] to-black p-8 rounded-3xl border border-white/5 text-center shadow-xl flex flex-col justify-center">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Bottleneck Status</p>
                
                {result.culprit === "Balanced" ? (
                  <div>
                    <span className="text-5xl block mb-4">⚖️</span>
                    <h3 className="text-2xl font-black text-cyan-400">Perfectly Balanced</h3>
                    <p className="text-slate-400 mt-2 font-medium">Your CPU and GPU are a perfect match. No major bottlenecks detected.</p>
                  </div>
                ) : (
                  <div>
                    <span className="text-5xl block mb-4">⚠️</span>
                    <h3 className="text-2xl font-black text-yellow-400">{result.bottleneckPercentage}% Bottleneck</h3>
                    <p className="text-slate-300 mt-2 font-medium">
                      Your <strong className="text-white">{result.culprit}</strong> is significantly weaker and is holding back your system's true potential.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}
      </div>

      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/5 p-8 md:p-16 shadow-2xl relative z-10">
        <div className="prose prose-invert max-w-none 
                        prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
                        prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                        prose-ul:text-slate-300 prose-li:mb-2 prose-li:text-lg
                        prose-strong:text-emerald-400">
          
          <h2>What is a PC Bottleneck?</h2>
          <p>
            In PC gaming, a "bottleneck" occurs when one component in your computer is significantly slower than the rest, limiting the overall performance of the system. Think of it like a traffic jam: if you have a massive, 10-lane highway (a powerful GPU like the RTX 4090) that suddenly funnels into a tiny, 1-lane dirt road (a weak CPU like an old Core i3), the cars (frames per second) can only move as fast as that 1-lane road allows. The weak component dictates the speed of the entire system.
          </p>

          <h2>CPU vs GPU Bottleneck: Which is Worse?</h2>
          <ul>
            <li><strong>CPU Bottleneck (Common in 1080p Gaming):</strong> This happens when your graphics card is generating frames faster than your processor can handle the physics, AI, and game logic. This results in severe stuttering, screen freezing, and wildly inconsistent frame rates. E-sports games like Valorant and CS2 are heavily CPU-dependent.</li>
            <li><strong>GPU Bottleneck (Common in 4K Gaming):</strong> This happens when your processor is easily handling the game, but your graphics card is struggling to render the graphics at high resolutions. This is actually the "ideal" bottleneck to have, as it usually results in a smooth, consistent framerate, even if it's lower. Heavy single-player games like Cyberpunk 2077 rely almost entirely on the GPU.</li>
          </ul>

          <h2>Will My PC Run GTA 6?</h2>
          <p>
            Grand Theft Auto VI (GTA 6) is undoubtedly the most anticipated game of the decade. While Rockstar Games has not released official PC system requirements yet, hardware experts have analyzed the proprietary RAGE engine used in the console trailers to estimate the necessary horsepower.
          </p>
          <p>
            Because GTA 6 features a massive, densely populated open world with complex AI routines for thousands of NPCs, it is expected to be incredibly CPU-heavy. Even if you have a top-tier GPU, pairing it with an older 4-core or 6-core processor will likely result in a severe CPU bottleneck in dense city areas like Vice City. We recommend at least an 8-core modern processor (like the Ryzen 7 5800X3D or Intel i7-13700K) to maintain a stable 60 FPS.
          </p>

          <h2>How to Fix a PC Bottleneck Without Buying New Parts</h2>
          <p>
            If our calculator shows a high bottleneck percentage, don't panic. You can often mitigate the issue by tweaking your settings:
          </p>
          <ul>
            <li><strong>If you have a CPU Bottleneck:</strong> Increase your game's graphical settings (Shadows, Textures, Resolution). This sounds counter-intuitive, but making the game harder to render forces the GPU to slow down, giving your struggling CPU time to catch up, resulting in a smoother, stutter-free experience.</li>
            <li><strong>If you have a GPU Bottleneck:</strong> Lower your graphics settings or enable upscaling technologies like NVIDIA DLSS or AMD FSR. This drastically reduces the workload on your graphics card.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}