import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen animate-fade-in">
      
      {/* ========================================= */}
      {/* 1. HERO SECTION (البطل: حاسبة التداول) */}
      {/* ========================================= */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">Live Value Database Updated</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
            Stop Taking L's.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Calculate Your Wins.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            The ultimate companion for competitive gamers. Calculate exact Blox Fruits trade values, design pro crosshairs, and check your PC bottlenecks instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/trade-calculator" className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:-translate-y-1 bg-cyan-500 text-black hover:bg-cyan-400">
              Launch Trade Calc ⚖️
            </Link>
            <Link href="/wiki" className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-xl transition-all border border-white/10 text-white hover:bg-white/5 hover:border-white/30 backdrop-blur-sm">
              Explore Database 📚
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. THE ARSENAL (شبكة الأدوات القوية) */}
      {/* ========================================= */}
      <section className="py-24 px-4 bg-black/40 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Your Gaming <span className="text-cyan-400">Arsenal</span></h2>
            <p className="text-slate-400 text-lg font-medium">Free, powerful tools engineered to give you the competitive edge.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tool 1 */}
            <Link href="/crosshair-generator" className="group bg-[#0B0F19] p-8 rounded-[2.5rem] border border-white/5 hover:border-rose-500/50 transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-[50px] rounded-full"></div>
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-rose-400 transition-colors">Pro Crosshair Maker</h3>
              <p className="text-slate-400 font-medium mb-6">Design and preview your custom Valorant & CS2 reticles on a live map.</p>
              <div className="text-rose-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Open Tool &rarr;
              </div>
            </Link>

            {/* Tool 2 */}
            <Link href="/pc-bottleneck-calculator" className="group bg-[#0B0F19] p-8 rounded-[2.5rem] border border-white/5 hover:border-emerald-500/50 transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full"></div>
              <div className="text-5xl mb-6">💻</div>
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-emerald-400 transition-colors">FPS & Bottleneck Calc</h3>
              <p className="text-slate-400 font-medium mb-6">Will your PC run GTA 6? Find out if your CPU is holding back your GPU.</p>
              <div className="text-emerald-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Run Analysis &rarr;
              </div>
            </Link>

            {/* Tool 3 */}
            <Link href="/strat-roulette" className="group bg-[#0B0F19] p-8 rounded-[2.5rem] border border-white/5 hover:border-fuchsia-500/50 transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 blur-[50px] rounded-full"></div>
              <div className="text-5xl mb-6">🎲</div>
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-fuchsia-400 transition-colors">Strat Roulette</h3>
              <p className="text-slate-400 font-medium mb-6">Generate insane random challenges for your next Fortnite squad match.</p>
              <div className="text-fuchsia-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Spin The Wheel &rarr;
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. TESTIMONIALS (آراء العملاء / مجتمع اللاعبين) */}
      {/* ========================================= */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6 text-blue-400 font-bold text-sm tracking-widest uppercase">
              Community Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Pro Players</span></h2>
            <p className="text-slate-400 text-lg font-medium">Join thousands of gamers who leveled up their experience with RbxVibe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-[#0B0F19] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="text-blue-500 mb-4 text-2xl">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-300 mb-6 font-medium leading-relaxed">
                "The Trade Calculator saved me from getting scammed out of my Kitsune fruit. The W/F/L values are insanely accurate and updated fast!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center font-black text-blue-400">K</div>
                <div>
                  <h4 className="font-bold text-white">KingSlayer99</h4>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">Blox Fruits Player</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#0B0F19] p-8 rounded-3xl border border-white/5 hover:border-rose-500/30 transition-all">
              <div className="text-rose-500 mb-4 text-2xl">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-300 mb-6 font-medium leading-relaxed">
                "I used the Crosshair Maker to copy TenZ's exact settings, and my headshot percentage in Valorant literally went up by 15%. Highly recommend."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center font-black text-rose-400">V</div>
                <div>
                  <h4 className="font-bold text-white">ViperMain</h4>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">Valorant Immortal</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#0B0F19] p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all">
              <div className="text-emerald-500 mb-4 text-2xl">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-300 mb-6 font-medium leading-relaxed">
                "Before I bought my new PC for GTA 6, I used the Bottleneck Calculator. Realized my old CPU would have ruined the FPS. Life saver tool."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center font-black text-emerald-400">T</div>
                <div>
                  <h4 className="font-bold text-white">TechGeek_</h4>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">PC Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 4. FAQ SECTION (الأسئلة الشائعة - ممتازة للسيو) */}
      {/* ========================================= */}
      <section className="py-24 px-4 bg-black/40 border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Frequently Asked <span className="text-purple-400">Questions</span></h2>
            <p className="text-slate-400 text-lg font-medium">Everything you need to know about our tools and services.</p>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-[#0B0F19] rounded-2xl border border-white/5 p-6 cursor-pointer hover:border-purple-500/30 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-xl text-white outline-none">
                Are these tools really 100% free?
                <span className="text-purple-400 transition group-open:rotate-180 text-2xl">▾</span>
              </summary>
              <div className="mt-4 text-slate-400 font-medium leading-relaxed">
                Yes! All our tools, including the Trade Calculator, Bottleneck Estimator, and Crosshair Maker are completely free to use. We maintain the servers through the ads displayed on the website.
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-[#0B0F19] rounded-2xl border border-white/5 p-6 cursor-pointer hover:border-purple-500/30 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-xl text-white outline-none">
                How often are the Blox Fruits values updated?
                <span className="text-purple-400 transition group-open:rotate-180 text-2xl">▾</span>
              </summary>
              <div className="mt-4 text-slate-400 font-medium leading-relaxed">
                We monitor the top trading Discord servers daily. If a fruit's demand shifts due to a new game update or PvP meta change, our database values are updated within 24 hours to reflect the true market price.
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-[#0B0F19] rounded-2xl border border-white/5 p-6 cursor-pointer hover:border-purple-500/30 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-xl text-white outline-none">
                Can I get banned for using the Crosshair codes?
                <span className="text-purple-400 transition group-open:rotate-180 text-2xl">▾</span>
              </summary>
              <div className="mt-4 text-slate-400 font-medium leading-relaxed">
                Absolutely not. Our Crosshair Maker generates official profile codes formatted exactly how Riot Games designed them. You are simply copying and pasting a text string directly into the game's official settings menu.
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-[#0B0F19] rounded-2xl border border-white/5 p-6 cursor-pointer hover:border-purple-500/30 transition-all [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-xl text-white outline-none">
                Are your Fortnite Free Skin methods legit?
                <span className="text-purple-400 transition group-open:rotate-180 text-2xl">▾</span>
              </summary>
              <div className="mt-4 text-slate-400 font-medium leading-relaxed">
                Yes. We strictly prohibit "Skin Generators" or hacks. Our masterclass guides teach you how to claim rewards through official Epic Games events (like Winterfest), PlayStation Plus packs, and Battle Pass V-Bucks saving strategies.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 5. SEO HIGHLIGHT (المقالة الذهبية) */}
      {/* ========================================= */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-cyan-900/40 border border-white/10 rounded-[3rem] p-8 md:p-16 text-center backdrop-blur-md">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Don't Miss Out on Free Rewards</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Stop using fake generators. Read our massive 2026 masterclass on how to unlock real, legitimate skins and items approved by game developers.
          </p>
          <Link href="/blog/how-to-get-free-fortnite-skins" className="inline-block px-8 py-4 rounded-xl font-bold bg-white text-black hover:bg-slate-200 transition-colors shadow-xl">
            Read The SEO Masterclass
          </Link>
        </div>
      </section>

    </div>
  );
}