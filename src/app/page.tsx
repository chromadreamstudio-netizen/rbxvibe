import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen animate-fade-in">
      
      {/* ========================================= */}
      {/* 1. HERO SECTION (البوابة الرئيسية) */}
      {/* ========================================= */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
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
            Your all-in-one arsenal for competitive gaming. Access live trading calculators, deep-dive wiki databases, and pro-level masterclasses.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="#explore" className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:-translate-y-1 bg-cyan-500 text-black hover:bg-cyan-400">
              Explore The Hub 👇
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. FEATURED TOOL (تسليط الضوء على أفضل أداة) */}
      {/* ========================================= */}
      <section id="explore" className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* النص والـ CTA */}
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 mb-6 text-rose-400 font-bold text-sm tracking-widest uppercase">
                Featured Tool
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Design Your <br/><span className="text-rose-400">Perfect Aim.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Stop missing easy shots. Use our live interactive <strong>Crosshair Generator</strong> to design, tweak, and preview professional reticles for Valorant and CS2 before you even open the game.
              </p>
              
              <div className="flex items-center gap-4">
                <Link href="/crosshair-generator" className="px-8 py-4 rounded-xl font-bold bg-rose-600 hover:bg-rose-500 text-white transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:-translate-y-1">
                  Launch Crosshair Maker
                </Link>
                <div className="relative group">
                  <span className="text-slate-400 font-bold px-4 py-4 cursor-default group-hover:text-white transition-colors">Or see all tools ▾</span>
                  {/* Mini Dropdown for other tools */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#111827] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2 z-20">
                    <Link href="/trade-calculator" className="px-4 py-2 hover:bg-white/5 rounded-lg text-sm text-cyan-400 font-bold">Trade Calc</Link>
                    <Link href="/pc-bottleneck-calculator" className="px-4 py-2 hover:bg-white/5 rounded-lg text-sm text-emerald-400 font-bold">PC FPS Calc</Link>
                    <Link href="/strat-roulette" className="px-4 py-2 hover:bg-white/5 rounded-lg text-sm text-fuchsia-400 font-bold">Strat Roulette</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* صورة/واجهة الأداة الوهمية (Preview) */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-orange-500/20 rounded-[3rem] blur-2xl transform rotate-3"></div>
              <div className="bg-[#0B0F19] border border-white/10 rounded-[3rem] p-6 shadow-2xl relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-slate-500 text-xs font-mono ml-2">live-preview.exe</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Game Preview" 
                  className="rounded-2xl w-full h-64 object-cover opacity-60"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-green-400 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. FEATURED WIKI (تسليط الضوء على الموسوعة) */}
      {/* ========================================= */}
      <section className="py-24 px-4 bg-[#0B0F19] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6 text-emerald-400 font-bold text-sm tracking-widest uppercase">
            Global Database
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Discover Game <span className="text-emerald-400">Secrets.</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Dive into our massive Wiki. From precise weapon damage multipliers to hidden fruit stats, knowledge is power.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-black/40 border border-white/10 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          {/* Card Preview */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-[#111827] border border-white/10 rounded-2xl overflow-hidden group">
              <img src="https://images.pexels.com/photos/1750056/pexels-photo-1750056.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Kitsune" className="w-full h-48 object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"/>
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-widest uppercase">Blox Fruits</div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-white mb-2">Kitsune Fruit</h3>
                <p className="text-slate-400 text-sm mb-4">Mythical Beast • 8,000,000 Beli</p>
                <div className="flex items-center text-emerald-400 font-bold text-sm">Read Wiki Stats &rarr;</div>
              </div>
            </div>
          </div>
          
          {/* Text & CTA */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-black text-white mb-4">Deep Game Lore & Stats</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              Don't guess the meta. We have documented hundreds of items across Blox Fruits, Fortnite, and Valorant so you always know exactly what you are equipping.
            </p>
            <Link href="/wiki" className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold bg-white/10 hover:bg-emerald-500 text-white hover:text-black transition-all border border-white/10 hover:border-emerald-500">
              Browse Full Database 📚
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 4. FEATURED BLOG (تسليط الضوء على مقال السيو) */}
      {/* ========================================= */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#0B1221] to-[#0A0F1A] border border-cyan-500/20 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6 text-blue-400 font-bold text-sm tracking-widest uppercase">
                  Pro Masterclass
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Stop Falling For <br/><span className="text-cyan-400">Fake Generators.</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  The internet is full of scams promising free V-Bucks and Skins. We wrote the ultimate 2026 guide exposing these scams and showing you the <strong>100% legitimate, Epic Games-approved methods</strong> to expand your locker for free.
                </p>
                <Link href="/blog/how-to-get-free-fortnite-skins" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 transition-transform shadow-xl">
                  Read The Guide 📖
                </Link>
                <div className="mt-6 text-sm text-slate-500 font-bold">
                  <Link href="/blog" className="hover:text-white transition-colors">Or view all articles &rarr;</Link>
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="https://images.pexels.com/photos/7915225/pexels-photo-7915225.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Fortnite Guide" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-md text-cyan-400 text-xs font-black uppercase tracking-widest mb-3 inline-block">Fortnite</span>
                  <h3 className="text-2xl font-black text-white">How to Get Free Skins in Fortnite (Legit Methods)</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 5. FAQ SECTION (لزيادة الثقة والسيو) */}
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
                Yes! All our tools, including the Trade Calculator, Bottleneck Estimator, and Crosshair Maker are completely free to use. We maintain the servers through the ads displayed on the website.
              </div>
            </details>

            <details className="group bg-[#0B0F19] rounded-2xl border border-white/5 p-6 cursor-pointer hover:border-purple-500/30 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-xl text-white outline-none">
                How often are the Blox Fruits values updated?
                <span className="text-purple-400 transition group-open:rotate-180 text-2xl">▾</span>
              </summary>
              <div className="mt-4 text-slate-400 font-medium leading-relaxed">
                We monitor the top trading Discord servers daily. If a fruit's demand shifts due to a new game update or PvP meta change, our database values are updated within 24 hours to reflect the true market price.
              </div>
            </details>

            <details className="group bg-[#0B0F19] rounded-2xl border border-white/5 p-6 cursor-pointer hover:border-purple-500/30 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-xl text-white outline-none">
                Can I get banned for using the Crosshair codes?
                <span className="text-purple-400 transition group-open:rotate-180 text-2xl">▾</span>
              </summary>
              <div className="mt-4 text-slate-400 font-medium leading-relaxed">
                Absolutely not. Our Crosshair Maker generates official profile codes formatted exactly how Riot Games designed them. You are simply copying and pasting a text string directly into the game's official settings menu.
              </div>
            </details>
          </div>
        </div>
      </section>

    </div>
  );
}