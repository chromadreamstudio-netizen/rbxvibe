import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-400 font-bold text-sm tracking-widest uppercase">The Ultimate Gaming Hub 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
            Play Smarter.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600">
              Dominate Everyone.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Your all-in-one arsenal. Access live trading calculators, design pro crosshairs, play mini-games, and discover exclusive gamer deals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#explore" className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:-translate-y-1 bg-emerald-500 text-black hover:bg-emerald-400">
              Explore The Hub 👇
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PRO TOOLS ARSENAL */}
      <section id="explore" className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Pro <span className="text-cyan-400">Arsenal</span></h2>
            <p className="text-slate-400 text-lg font-medium">Free, powerful tools engineered to give you the competitive edge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/trade-calculator" className="group bg-[#0B0F19] p-8 rounded-3xl border border-white/5 hover:border-cyan-500/50 transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-black text-white mb-2 group-hover:text-cyan-400">Trade Calc</h3>
              <p className="text-slate-400 text-sm">Calculate Blox Fruits W/F/L values instantly.</p>
            </Link>

            <Link href="/crosshair-generator" className="group bg-[#0B0F19] p-8 rounded-3xl border border-white/5 hover:border-rose-500/50 transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-black text-white mb-2 group-hover:text-rose-400">Crosshair Maker</h3>
              <p className="text-slate-400 text-sm">Design custom reticles for Valorant and CS2.</p>
            </Link>

            <Link href="/pc-bottleneck-calculator" className="group bg-[#0B0F19] p-8 rounded-3xl border border-white/5 hover:border-emerald-500/50 transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-black text-white mb-2 group-hover:text-emerald-400">FPS Estimator</h3>
              <p className="text-slate-400 text-sm">Check your PC limits for games like GTA 6.</p>
            </Link>

            <Link href="/strat-roulette" className="group bg-[#0B0F19] p-8 rounded-3xl border border-white/5 hover:border-fuchsia-500/50 transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="text-4xl mb-4">🎲</div>
              <h3 className="text-xl font-black text-white mb-2 group-hover:text-fuchsia-400">Strat Roulette</h3>
              <p className="text-slate-400 text-sm">Generate random challenges for Fortnite.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 🎮 3. MINI GAMES & DEALS (القسم الذي تم استعادته ببراعة) 🎮 */}
      <section className="py-24 px-4 bg-black/40 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 flex items-center gap-3">
              <span className="text-yellow-400">🎮</span> Take a Break: Mini Games
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link href="/ai-game" className="bg-[#111827] border border-white/10 rounded-2xl p-6 hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all group text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🤖</div>
                <h3 className="text-white font-bold mb-1">AI Emoji Test</h3>
                <p className="text-xs text-slate-400">Guess the game!</p>
              </Link>
              <Link href="/trivia" className="bg-[#111827] border border-white/10 rounded-2xl p-6 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all group text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🧠</div>
                <h3 className="text-white font-bold mb-1">Gaming Trivia</h3>
                <p className="text-xs text-slate-400">Test your knowledge.</p>
              </Link>
              <Link href="/reaction-test" className="bg-[#111827] border border-white/10 rounded-2xl p-6 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all group text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-white font-bold mb-1">Reaction Test</h3>
                <p className="text-xs text-slate-400">Are you fast enough?</p>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 flex items-center gap-3">
              <span className="text-rose-500">🔥</span> Top Deals
            </h2>
            <Link href="/deals" className="block relative bg-gradient-to-br from-rose-600 to-orange-600 rounded-3xl p-8 overflow-hidden group hover:shadow-[0_0_30px_rgba(225,29,72,0.4)] transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-[30px] rounded-full pointer-events-none"></div>
              <h3 className="text-2xl font-black text-white mb-2 relative z-10">Gamer Discounts</h3>
              <p className="text-rose-100 font-medium mb-6 relative z-10">Up to 82% off on VPNs, gear, and software.</p>
              <span className="bg-white text-rose-600 font-black px-4 py-2 rounded-xl group-hover:bg-black group-hover:text-white transition-colors relative z-10">
                View Deals &rarr;
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* 4. FEATURED WIKI */}
      <section className="py-24 px-4 bg-[#0B0F19] border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6 text-cyan-400 font-bold text-sm tracking-widest uppercase">
            Global Database
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Discover Game <span className="text-cyan-400">Secrets.</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Dive into our massive Wiki. From precise weapon damage multipliers to hidden fruit stats, knowledge is power.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-black/40 border border-white/10 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-[#111827] border border-white/10 rounded-2xl overflow-hidden group">
              <img src="https://images.pexels.com/photos/1750056/pexels-photo-1750056.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Kitsune" className="w-full h-48 object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"/>
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-400 text-xs font-black tracking-widest uppercase">Blox Fruits</div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-white mb-2">Kitsune Fruit</h3>
                <p className="text-slate-400 text-sm mb-4">Mythical Beast • 8,000,000 Beli</p>
                <div className="flex items-center text-cyan-400 font-bold text-sm">Read Wiki Stats &rarr;</div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-black text-white mb-4">Deep Game Lore & Stats</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              Don't guess the meta. We have documented hundreds of items across Blox Fruits, Fortnite, and Valorant so you always know exactly what you are equipping.
            </p>
            <Link href="/wiki" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-white/10 hover:bg-cyan-500 text-white hover:text-black transition-all border border-white/10 hover:border-cyan-500">
              Browse Full Database 📚
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FEATURED BLOG */}
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
                  The internet is full of scams promising free V-Bucks and Robux. We wrote the ultimate 2026 guide exposing these scams and showing you the <strong>100% legitimate methods</strong> to expand your locker.
                </p>
                <Link href="/blog/ultimate-guide-free-robux-2026" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-lg bg-gradient-to-r from-emerald-500 to-cyan-600 text-white hover:scale-105 transition-transform shadow-xl">
                  Read The Guide 📖
                </Link>
                <div className="mt-6 text-sm text-slate-500 font-bold">
                  <Link href="/blog" className="hover:text-white transition-colors">Or view all articles &rarr;</Link>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?q=80&w=2000&auto=format&fit=crop" 
                  alt="Roblox Guide" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-md text-emerald-400 text-xs font-black uppercase tracking-widest mb-3 inline-block">Roblox</span>
                  <h3 className="text-2xl font-black text-white">How to Get Free Robux Safely in 2026</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION (الأسئلة الشائعة التي تحبها محركات البحث) */}
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
                How often are the Blox Fruits values updated?
                <span className="text-purple-400 transition group-open:rotate-180 text-2xl">▾</span>
              </summary>
              <div className="mt-4 text-slate-400 font-medium leading-relaxed">
                We monitor the top trading Discord servers daily. If a fruit's demand shifts due to a new game update, our database values are updated within 24 hours.
              </div>
            </details>
          </div>
        </div>
      </section>

    </div>
  );
}