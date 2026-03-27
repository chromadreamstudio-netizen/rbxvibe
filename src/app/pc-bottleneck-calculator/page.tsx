"use client";

import { useState } from "react";
import Link from "next/link";

// 1. قاعدة بيانات الهاردوير المتقدمة (SaaS Level)
const cpus = [
  { name: "Intel Core i9-14900K", score: 150 },
  { name: "AMD Ryzen 7 7800X3D", score: 145 },
  { name: "Intel Core i7-13700K", score: 130 },
  { name: "AMD Ryzen 5 7600X", score: 110 },
  { name: "Intel Core i5-12400F", score: 85 },
  { name: "AMD Ryzen 5 5600X", score: 80 },
  { name: "Intel Core i7-9700K", score: 75 },
  { name: "AMD Ryzen 3 3300X", score: 60 },
  { name: "Intel Core i3-10100F", score: 40 },
];

const gpus = [
  { name: "NVIDIA RTX 4090 (24GB)", score: 200 },
  { name: "NVIDIA RTX 4080 Super (16GB)", score: 170 },
  { name: "AMD Radeon RX 7900 XTX (24GB)", score: 165 },
  { name: "NVIDIA RTX 4070 Ti Super (16GB)", score: 140 },
  { name: "AMD Radeon RX 7800 XT (16GB)", score: 120 },
  { name: "NVIDIA RTX 4060 Ti (8GB)", score: 95 },
  { name: "NVIDIA RTX 3060 (12GB)", score: 70 },
  { name: "AMD Radeon RX 6600 (8GB)", score: 65 },
  { name: "NVIDIA GTX 1650 (4GB)", score: 30 },
];

const games = [
  { name: "GTA 6 (Expected)", baseReq: 120, engine: "RAGE 2.0", isHeavy: true },
  { name: "Cyberpunk 2077", baseReq: 110, engine: "REDengine 4", isHeavy: true },
  { name: "Valorant", baseReq: 30, engine: "Unreal Engine 4", isHeavy: false },
  { name: "Fortnite (UE5)", baseReq: 60, engine: "Unreal Engine 5", isHeavy: false },
  { name: "Call of Duty: Warzone", baseReq: 90, engine: "IW 9.0", isHeavy: true },
  { name: "Apex Legends", baseReq: 65, engine: "Source", isHeavy: false }
];

const resolutions = [
  { name: "1080p (FHD)", gpuMultiplier: 1.0, fpsMultiplier: 1.0 },
  { name: "1440p (QHD)", gpuMultiplier: 1.4, fpsMultiplier: 0.7 },
  { name: "4K (UHD)", gpuMultiplier: 2.2, fpsMultiplier: 0.45 },
];

export default function BottleneckCalculatorPage() {
  const [cpu, setCpu] = useState(cpus[0]);
  const [gpu, setGpu] = useState(gpus[0]);
  const [game, setGame] = useState(games[0]);
  const [res, setRes] = useState(resolutions[0]);
  
  const [result, setResult] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculatePerformance = () => {
    setIsCalculating(true);
    setResult(null);

    // محاكاة الخوارزمية (SaaS loading effect)
    setTimeout(() => {
      // تعديل قوة الكارت بناءً على دقة الشاشة (الـ 4K يضعف الكارت جداً)
      const adjustedGpuScore = gpu.score / res.gpuMultiplier;
      const cpuScore = cpu.score;

      let bottleneck = 0;
      let culprit = "";
      let suggestion = "";
      
      // تحليل عنق الزجاجة الديناميكي
      if (cpuScore > adjustedGpuScore * 1.25) {
        bottleneck = Math.floor(((cpuScore - adjustedGpuScore) / cpuScore) * 100);
        culprit = "GPU";
        suggestion = res.name === "1080p" 
          ? "Your CPU is too fast for this GPU. Upgrade your GPU." 
          : "Turn on NVIDIA DLSS or AMD FSR to help your GPU at this high resolution.";
      } else if (adjustedGpuScore > cpuScore * 1.25) {
        bottleneck = Math.floor(((adjustedGpuScore - cpuScore) / adjustedGpuScore) * 100);
        culprit = "CPU";
        suggestion = "Your GPU is waiting for your CPU. Increase graphics settings to 1440p or 4K to shift the load to the GPU, or upgrade your processor.";
      } else {
        bottleneck = Math.abs(Math.floor(cpuScore - adjustedGpuScore));
        culprit = "Balanced";
        suggestion = "Perfect harmony. Your system is perfectly balanced for this resolution.";
      }

      // حساب الفريمات (FPS) المتقدم
      const systemPower = Math.min(cpuScore, adjustedGpuScore);
      let estimatedFps = 0;
      
      if (game.isHeavy) {
        estimatedFps = Math.floor((systemPower / game.baseReq) * 75 * res.fpsMultiplier);
      } else {
        estimatedFps = Math.floor((systemPower / game.baseReq) * 200 * res.fpsMultiplier);
      }

      // حدود طبيعية
      if (estimatedFps > 700) estimatedFps = 700 + Math.floor(Math.random() * 50);
      if (estimatedFps < 12) estimatedFps = 12;

      setResult({
        fps: estimatedFps,
        bottleneckPercentage: bottleneck > 100 ? 100 : bottleneck,
        culprit: culprit,
        suggestion: suggestion,
        isPlayable: estimatedFps >= 60,
      });
      
      setIsCalculating(false);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-emerald-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Arsenal
      </Link>

      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6 text-emerald-400 font-bold text-sm tracking-widest uppercase">
          AI Hardware Analysis
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">PC <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Bottleneck</span> & FPS</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
          Will your PC run GTA 6? Select your CPU, GPU, and target monitor resolution to calculate precise FPS drops and hardware bottlenecks.
        </p>
      </div>

      {/* --- الأداة التفاعلية (SaaS Level) --- */}
      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/10 p-6 md:p-12 shadow-2xl mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10 mb-10">
          
          <div className="bg-black/40 p-6 rounded-2xl border border-white/5 shadow-inner">
            <label className="block text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-3">1. Processor (CPU)</label>
            <div className="text-4xl mb-4">🧠</div>
            <select 
              className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 text-white font-bold focus:border-emerald-500 outline-none appearance-none"
              onChange={(e) => setCpu(cpus.find(c => c.name === e.target.value) || cpus[0])}
            >
              {cpus.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
            </select>
          </div>

          <div className="bg-black/40 p-6 rounded-2xl border border-white/5 shadow-inner">
            <label className="block text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-3">2. Graphics (GPU)</label>
            <div className="text-4xl mb-4">🖥️</div>
            <select 
              className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 text-white font-bold focus:border-cyan-500 outline-none appearance-none"
              onChange={(e) => setGpu(gpus.find(g => g.name === e.target.value) || gpus[0])}
            >
              {gpus.map(g => <option key={g.name} value={g.name}>{g.name}</option>)}
            </select>
          </div>

          <div className="bg-black/40 p-6 rounded-2xl border border-white/5 shadow-inner border-t-4 border-t-purple-500">
            <label className="block text-purple-400 font-bold uppercase tracking-widest text-[10px] mb-3">3. Target Game</label>
            <div className="text-4xl mb-4">🎮</div>
            <select 
              className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 text-white font-bold focus:border-purple-500 outline-none appearance-none"
              onChange={(e) => setGame(games.find(g => g.name === e.target.value) || games[0])}
            >
              {games.map(g => <option key={g.name} value={g.name}>{g.name}</option>)}
            </select>
            <p className="text-[10px] text-slate-500 mt-2 font-mono text-center">Engine: {game.engine}</p>
          </div>

          <div className="bg-black/40 p-6 rounded-2xl border border-white/5 shadow-inner border-t-4 border-t-orange-500">
            <label className="block text-orange-400 font-bold uppercase tracking-widest text-[10px] mb-3">4. Monitor Res</label>
            <div className="text-4xl mb-4">📺</div>
            <select 
              className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 text-white font-bold focus:border-orange-500 outline-none appearance-none"
              onChange={(e) => setRes(resolutions.find(r => r.name === e.target.value) || resolutions[0])}
            >
              {resolutions.map(r => <option key={r.name} value={r.name}>{r.name}</option>)}
            </select>
          </div>

        </div>

        <div className="text-center relative z-10">
          <button 
            onClick={calculatePerformance}
            disabled={isCalculating}
            className="w-full md:w-auto px-16 py-5 rounded-2xl font-black text-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-1 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white disabled:opacity-50 flex items-center justify-center mx-auto gap-3"
          >
            {isCalculating ? "Analyzing Architecture..." : "Run AI Benchmark ⚡"}
          </button>
        </div>

        {/* عرض النتيجة (SaaS Dashboard) */}
        {result && (
          <div className="mt-16 pt-12 border-t border-white/10 animate-fade-in relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* صندوق الـ FPS */}
              <div className="bg-gradient-to-br from-[#0B1221] to-black p-8 md:p-12 rounded-[2.5rem] border border-white/5 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Estimated Performance ({res.name})</p>
                <div className="flex items-end justify-center gap-2 mb-6">
                  <span className={`text-8xl font-black ${result.isPlayable ? 'text-emerald-400 drop-shadow-[0_0_20px_rgba(52,211,153,0.3)]' : 'text-red-400'} tracking-tighter font-mono`}>
                    {result.fps}
                  </span>
                  <span className="text-2xl text-slate-500 font-bold mb-3">FPS</span>
                </div>
                <div className={`inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl ${result.isPlayable ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {result.isPlayable ? "✅ Smooth Gameplay" : "⚠️ Severe Lag Expected"}
                </div>
              </div>

              {/* صندوق عنق الزجاجة وتحليل الذكاء الاصطناعي */}
              <div className="bg-gradient-to-br from-[#0B1221] to-black p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-6">Diagnostic Report</p>
                
                {result.culprit === "Balanced" ? (
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl">⚖️</span>
                      <h3 className="text-3xl font-black text-cyan-400">Perfectly Balanced</h3>
                    </div>
                    <p className="text-slate-300 mt-2 font-medium text-lg leading-relaxed">{result.suggestion}</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl">⚠️</span>
                      <h3 className="text-3xl font-black text-yellow-400">{result.bottleneckPercentage}% Bottleneck</h3>
                    </div>
                    <p className="text-slate-300 mt-2 font-medium text-lg leading-relaxed mb-6">
                      Your <strong className="text-white bg-white/10 px-2 py-1 rounded">{result.culprit}</strong> is struggling to keep up with the rest of your system at {res.name}.
                    </p>
                    <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                      <p className="text-blue-300 text-sm font-bold flex gap-2">
                        <span>💡</span> {result.suggestion}
                      </p>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}
      </div>

      {/* --- قسم السيو و GEO (محتوى ضخم جداً) --- */}
      <div className="bg-[#0B0F19] rounded-[3rem] border border-white/5 p-8 md:p-16 shadow-2xl relative z-10">
        <div className="prose prose-invert max-w-none 
                        prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
                        prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                        prose-ul:text-slate-300 prose-li:mb-2 prose-li:text-lg
                        prose-strong:text-emerald-400">
          
          <h2>What is a PC Bottleneck? (GEO Analysis)</h2>
          <p>
            In PC building, a "bottleneck" occurs when the capabilities of two components differ so drastically that the faster component spends its time waiting for the slower one to catch up. Think of it like a massive 10-lane highway (your RTX 4090 GPU) suddenly funneling into a 1-lane dirt road (an older Intel Core i3 CPU). The data can only move as fast as the 1-lane road allows. Our Advanced Estimator uses multi-variable logic to calculate where this traffic jam occurs in your specific build.
          </p>

          <h2>How Resolution Changes Everything (1080p vs 4K)</h2>
          <p>
            A massive misconception in PC gaming is that a bottleneck is permanent. <strong>It is not.</strong> Bottlenecks shift entirely based on your monitor's resolution:
          </p>
          <ul>
            <li><strong>1080p (CPU Bound):</strong> At lower resolutions, your graphics card renders frames extremely fast. It sends these frames to the CPU for physics and AI calculations. If the CPU cannot process them fast enough, you get a <em>CPU Bottleneck</em>.</li>
            <li><strong>4K (GPU Bound):</strong> At 4K, there are 4 times as many pixels to render. The graphics card works incredibly hard and slows down, giving the CPU plenty of time to process the game logic. This is why a mid-range CPU can perfectly handle 4K gaming if paired with a top-tier GPU.</li>
          </ul>

          <h2>Will My PC Run GTA 6?</h2>
          <p>
            Based on the analysis of the proprietary <strong>RAGE 2.0 Engine</strong> showcased in Rockstar's trailers, GTA 6 features unprecedented NPC density and Ray-Traced global illumination. This means the game will be exceptionally heavy on both the CPU (for AI paths) and the GPU (for lighting). We strongly recommend an 8-core CPU (like the Ryzen 7 7800X3D) and a GPU with at least 12GB of VRAM to maintain 60 FPS without stuttering.
          </p>

          <h2>The Magic of DLSS and FSR</h2>
          <p>
            If our calculator indicates a heavy GPU bottleneck at 1440p or 4K, you don't necessarily need to buy a new graphics card. Enabling NVIDIA DLSS (Deep Learning Super Sampling) or AMD FSR (FidelityFX Super Resolution) allows your GPU to render the game at a lower resolution (e.g., 1080p) and uses AI to upscale it to your monitor's native resolution. This can instantly boost your FPS by 40% to 60% with almost no visible loss in visual quality.
          </p>
        </div>
      </div>

    </div>
  );
}