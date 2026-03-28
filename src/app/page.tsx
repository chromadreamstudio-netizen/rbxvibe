import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen animate-fade-in">
      
      {/* ========================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================= */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">The Ultimate Gaming Hub 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
            Play Smarter.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Dominate Everyone.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Your all-in-one arsenal. Access live trading calculators, daily promo codes, active XP maps, and professional FPS optimization tools.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#arsenal" className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:-translate-y-1 bg-cyan-500 text-black hover:bg-cyan-400">
              Explore The Arsenal 👇
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. DAILY ESSENTIALS (الأدوات القديمة المستعادة) */}
      {/* ========================================= */}
      <section id="arsenal" className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-4 text-emerald-400 font-bold text-sm tracking-widest uppercase">Daily Grinding</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Your Daily <span className="text-emerald-400">Essentials</span></h2>
            <p className="text-slate-400 text-lg font-medium">The most popular tools used by thousands of gamers every day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/roblox-codes" className="group relative bg-[#0B0F19] rounded-[2.5rem] p-8 border border-white/5 hover:border-emerald-500/50 transition-all overflow-hidden hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-5xl mb-6 relative z-10">🎁</div>
              <h3 className="text-2xl font-black text-white mb-2 relative z-10">Roblox Promo Codes</h3>
              <p className="text-slate-400 relative z-10">Live database of active codes for Blox Fruits and top experiences.</p>
            </Link>

            <Link href="/fortnite-maps" className="group relative bg-[#0B0F19] rounded-[2.5rem] p-8 border border-white/5 hover:border-cyan-500/50 transition-all overflow-hidden hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-5xl mb-6 relative z-10">🗺️</div>
              <h3 className="text-2xl font-black text-white mb-2 relative z-10">Fortnite XP Maps</h3>
              <p className="text-slate-400 relative z-10">Unpatched creative map codes to max out your Battle Pass instantly.</p>
            </Link>

            <Link href="/sensitivity" className="group relative bg-[#0B0F19] rounded-[2.5rem] p-8 border border-white/5 hover:border-purple-500/50 transition-all overflow-hidden hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-5xl mb-6 relative z-10">🖱️</div>
              <h3 className="text-2xl font-black text-white mb-2 relative z-10">Sens Converter</h3>
              <p className="text-slate-400 relative z-10">Convert your perfect mouse sensitivity between Valorant, CS2, and Apex.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. PRO ARSENAL (الأدوات التفاعلية الجديدة) */}
      {/* ========================================= */}
      <section className="py-24 px-4 bg-black/40 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4 text-cyan-400 font-bold text-sm tracking-widest uppercase">Advanced Tech</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">The Pro <span className="text-cyan-400">Arsenal</span></h2>
            <p className="text-slate-400 text-lg font-medium">Interactive calculators and generators to give you the competitive edge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/trade-calculator" className="bg-[#111827] p-8 rounded-3xl border border-white/5 hover:border-cyan-500/40 transition-all group">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-black text-white mb-2 group-hover:text-cyan-400">Trade Calc</h3>
              <p className="text-slate-400 text-sm">Real-time Blox Fruits W/F/L values.</p>
            </Link>
            <Link href="/crosshair-generator" className="bg-[#111827] p-8 rounded-3xl border border-white/5 hover:border-rose-500/40 transition-all group">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-black text-white mb-2 group-hover:text-rose-400">Crosshair Maker</h3>
              <p className="text-slate-400 text-sm">Design custom reticles with live preview.</p>
            </Link>
            <Link href="/pc-bottleneck-calculator" className="bg-[#111827] p-8 rounded-3xl border border-white/5 hover:border-emerald-500/40 transition-all group">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-black text-white mb-2 group-hover:text-emerald-400">FPS Estimator</h3>
              <p className="text-slate-400 text-sm">Will your PC bottleneck GTA 6? Find out.</p>
            </Link>
            <Link href="/strat-roulette" className="bg-[#111827] p-8 rounded-3xl border border-white/5 hover:border-fuchsia-500/40 transition-all group">
              <div className="text-4xl mb-4">🎲</div>
              <h3 className="text-xl font-black text-white mb-2 group-hover:text-fuchsia-400">Strat Roulette</h3>
              <p className="text-slate-400 text-sm">Generate random challenges for squad nights.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 4. ESPORTS TRAINING ARENA (استعادة جميع الـ 8 ألعاب باحترافية) */}
      {/* ========================================= */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 flex items-center gap-3">
              <span className="text-yellow-400">⚡</span> Esports Training Arena
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/reaction-test" className="bg-[#0B0F19] border border-white/5 rounded-2xl p-5 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all group text-center shadow-lg flex flex-col justify-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🎯</div>
                <h3 className="text-white font-bold mb-1 text-sm">Reflex Trainer</h3>
                <p className="text-[10px] text-slate-400">Test raw MS reaction.</p>
              </Link>
              <Link href="/typing-test" className="bg-[#0B0F19] border border-white/5 rounded-2xl p-5 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all group text-center shadow-lg flex flex-col justify-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">⌨️</div>
                <h3 className="text-white font-bold mb-1 text-sm">APM Tracker</h3>
                <p className="text-[10px] text-slate-400">Typing speed stats.</p>
              </Link>
              <Link href="/spacebar-test" className="bg-[#0B0F19] border border-white/5 rounded-2xl p-5 hover:bg-rose-500/10 hover:border-rose-500/50 transition-all group text-center shadow-lg flex flex-col justify-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🚀</div>
                <h3 className="text-white font-bold mb-1 text-sm">CPS Benchmark</h3>
                <p className="text-[10px] text-slate-400">Clicks per second.</p>
              </Link>
              <Link href="/memory-game" className="bg-[#0B0F19] border border-white/5 rounded-2xl p-5 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all group text-center shadow-lg flex flex-col justify-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🧩</div>
                <h3 className="text-white font-bold mb-1 text-sm">Cognitive Matrix</h3>
                <p className="text-[10px] text-slate-400">Working memory lab.</p>
              </Link>
              <Link href="/trivia" className="bg-[#0B0F19] border border-white/5 rounded-2xl p-5 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all group text-center shadow-lg flex flex-col justify-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🧠</div>
                <h3 className="text-white font-bold mb-1 text-sm">Hardcore Trivia</h3>
                <p className="text-[10px] text-slate-400">Pro gaming exams.</p>
              </Link>
              <Link href="/ai-game" className="bg-[#0B0F19] border border-white/5 rounded-2xl p-5 hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all group text-center shadow-lg flex flex-col justify-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🤖</div>
                <h3 className="text-white font-bold mb-1 text-sm">AI Decoder</h3>
                <p className="text-[10px] text-slate-400">Decode LLM emojis.</p>
              </Link>
              <Link href="/snake-game" className="bg-[#0B0F19] border border-white/5 rounded-2xl p-5 hover:bg-green-500/10 hover:border-green-500/50 transition-all group text-center shadow-lg flex flex-col justify-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🐍</div>
                <h3 className="text-white font-bold mb-1 text-sm">Retro Snake</h3>
                <p className="text-[10px] text-slate-400">Classic path warmup.</p>
              </Link>
              <Link href="/tic-tac-toe" className="bg-[#0B0F19] border border-white/5 rounded-2xl p-5 hover:bg-red-500/10 hover:border-red-500/50 transition-all group text-center shadow-lg flex flex-col justify-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">❌⭕</div>
                <h3 className="text-white font-bold mb-1 text-sm">Tactical X-O</h3>
                <p className="text-[10px] text-slate-400">Quick strategy duel.</p>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 flex items-center gap-3">
              <span className="text-rose-500">🔥</span> Top Deals
            </h2>
            <Link href="/deals" className="block relative bg-gradient-to-br from-rose-600 to-orange-600 rounded-3xl p-8 overflow-hidden group hover:shadow-[0_0_30px_rgba(225,29,72,0.4)] transition-all h-[calc(100%-4rem)] flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-[30px] rounded-full pointer-events-none"></div>
              <h3 className="text-3xl font-black text-white mb-4 relative z-10">Gamer Discounts</h3>
              <p className="text-rose-100 font-medium mb-8 relative z-10 text-lg">Up to 82% off on VPNs, gear, and software.</p>
              <span className="bg-white text-rose-600 font-black px-6 py-3 rounded-xl group-hover:bg-black group-hover:text-white transition-colors relative z-10 inline-block text-center">
                View Deals &rarr;
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* 5. FEATURED WIKI */}
      {/* ========================================= */}
      <section className="py-24 px-4 bg-[#0B0F19] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6 text-cyan-400 font-bold text-sm tracking-widest uppercase">
            Global Database
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Discover Game <span className="text-cyan-400">Secrets.</span></h2>
        </div>

        <div className="max-w-5xl mx-auto bg-black/40 border border-white/10 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-[#111827] border border-white/10 rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop" alt="Gaming Database" className="w-full h-56 object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"/>
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-400 text-xs font-black tracking-widest uppercase">Library</div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-white mb-2">Item Meta & Stats</h3>
                <p className="text-slate-400 text-sm mb-4">Weapon multipliers, fruit abilities, and rare drops.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-black text-white mb-4">Deep Game Lore & Stats</h3>
            <p className="text-slate-400 leading-relaxed mb-8 text-lg">
              Don't guess the meta. We have documented hundreds of items across Blox Fruits, Fortnite, and Valorant so you always know exactly what you are equipping.
            </p>
            <Link href="/wiki" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-white/10 hover:bg-cyan-500 text-white hover:text-black transition-all border border-white/10 hover:border-cyan-500">
              Browse Full Database 📚
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 6. FEATURED BLOG */}
      {/* ========================================= */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#0B1221] to-[#0A0F1A] border border-emerald-500/20 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6 text-emerald-400 font-bold text-sm tracking-widest uppercase">
                  Pro Masterclass
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Stop Falling For <br/><span className="text-emerald-400">Fake Generators.</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  The internet is full of scams promising free V-Bucks and Skins. We wrote the ultimate 2026 guide exposing these scams and showing you the <strong>100% legitimate, Epic Games-approved methods</strong>.
                </p>
                <Link href="/blog/how-to-get-free-fortnite-skins" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-lg bg-gradient-to-r from-emerald-500 to-cyan-600 text-white hover:scale-105 transition-transform shadow-xl">
                  Read The Guide 📖
                </Link>
              </div>

              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1589241062272-c0a1f4360181?q=80&w=1000&auto=format&fit=crop" 
                  alt="Fortnite Guide" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-md text-emerald-400 text-xs font-black uppercase tracking-widest mb-3 inline-block">Fortnite</span>
                  <h3 className="text-2xl font-black text-white">How to Get Free Skins in Fortnite (Legit Methods)</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 7. FAQ */}
      {/* ========================================= */}
      <section className="py-24 px-4 bg-black/40 border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Frequently Asked <span className="text-purple-400">Questions</span></h2>
            <p className="text-slate-400 text-lg font-medium">Everything you need to know about our platform.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-[#0B0F19] rounded-2xl border border-white/5 p-6 cursor-pointer hover:border-purple-500/30 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-xl text-white outline-none">
                Are these tools really 100% free?
                <span className="text-purple-400 transition group-open:rotate-180 text-2xl">▾</span>
              </summary>
              <div className="mt-4 text-slate-400 font-medium leading-relaxed">
                Yes! All our tools, mini-games, and calculators are completely free to use. We maintain the servers through the ads displayed on the website.
              </div>
            </details>
            <details className="group bg-[#0B0F19] rounded-2xl border border-white/5 p-6 cursor-pointer hover:border-purple-500/30 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-xl text-white outline-none">
                Can I get banned for using the Crosshair codes?
                <span className="text-purple-400 transition group-open:rotate-180 text-2xl">▾</span>
              </summary>
              <div className="mt-4 text-slate-400 font-medium leading-relaxed">
                Absolutely not. Our Crosshair Maker generates official profile codes formatted exactly how Riot Games designed them. You are simply copying and pasting a text string.
              </div>
            </details>
          </div>
        </div>
      </section>

    </div>
  );
}