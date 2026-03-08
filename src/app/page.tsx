import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles"; 

export default function Home() {
  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION - الانطباع الأول */}
      <section className="relative w-full py-24 md:py-36 flex items-center justify-center overflow-hidden">
        {/* تأثيرات خلفية نيون (تمت زيادة القوة وتقليل الشفافية لضمان الظهور) */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-emerald-500/30 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/30 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase">✨ Welcome to the Future of Gaming</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter leading-tight">
            Level Up Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500">Gaming Experience.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Access pro tools, real-time codes, and 3000+ word expert guides. Built for dedicated players who want to dominate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/roblox-codes" className="px-10 py-5 rounded-2xl bg-emerald-500 text-black font-black text-lg hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              Get Free Codes
            </Link>
            <Link href="/ai-game" className="px-10 py-5 rounded-2xl bg-white/5 text-white border border-white/10 font-black text-lg hover:bg-white/10 transition-all backdrop-blur-md">
              Start Playing
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* 2. PRO TOOLS SECTION */}
        <div className="mb-32">
          <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-8">
            <div>
              <h2 className="text-4xl font-black text-white mb-2 tracking-tight">The Pro <span className="text-emerald-400">Arsenal</span></h2>
              <p className="text-slate-500 text-lg font-medium">Highly accurate tools designed to give you the ultimate edge.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/roblox-codes" className="group p-8 rounded-[2.5rem] bg-[#0B0F19] border border-white/5 hover:border-emerald-500/50 transition-all duration-500 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full"></div>
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">🎁</div>
              <h3 className="text-2xl font-black text-white mb-3">Roblox Codes DB</h3>
              <p className="text-slate-400 leading-relaxed font-medium">Live database of working promo codes for Blox Fruits and top titles.</p>
              <div className="mt-8 flex items-center text-emerald-500 font-bold text-sm uppercase tracking-widest group-hover:gap-2 transition-all">
                Access Database <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>

            <Link href="/fortnite-maps" className="group p-8 rounded-[2.5rem] bg-[#0B0F19] border border-white/5 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[50px] rounded-full"></div>
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">🗺️</div>
              <h3 className="text-2xl font-black text-white mb-3">Fortnite XP Maps</h3>
              <p className="text-slate-400 leading-relaxed font-medium">Secret creative maps to max your battle pass faster than anyone else.</p>
              <div className="mt-8 flex items-center text-cyan-400 font-bold text-sm uppercase tracking-widest group-hover:gap-2 transition-all">
                Get Map Codes <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>

            <Link href="/sensitivity" className="group p-8 rounded-[2.5rem] bg-[#0B0F19] border border-white/5 hover:border-purple-500/50 transition-all duration-500 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-[50px] rounded-full"></div>
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">🖱️</div>
              <h3 className="text-2xl font-black text-white mb-3">Sens Converter</h3>
              <p className="text-slate-400 leading-relaxed font-medium">Perfect mathematical conversion between Valorant, CS2, and Apex.</p>
              <div className="mt-8 flex items-center text-purple-400 font-bold text-sm uppercase tracking-widest group-hover:gap-2 transition-all">
                Open Calculator <i className="fa-solid fa-arrow-right"></i>
              </div>
            </Link>
          </div>
        </div>

        {/* 3. GAMES HUB (الألعاب الـ 10 الكاملة) */}
        <div className="mb-32 bg-gradient-to-br from-[#0B0F19] to-black p-12 rounded-[3.5rem] border border-white/5 shadow-2xl">
          <div className="text-center mb-16">
             <h2 className="text-5xl font-black text-white mb-4 tracking-tighter">The Ultimate <span className="text-yellow-400">Gaming Portal</span></h2>
             <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">10 Custom Mini-Games. Challenge your skills, earn high scores, and never get bored.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "AI Emoji", path: "/ai-game", icon: "🤖", color: "text-yellow-400", bg: "hover:bg-yellow-400/10" },
              { name: "Trivia", path: "/trivia", icon: "🧠", color: "text-emerald-400", bg: "hover:bg-emerald-400/10" },
              { name: "Reaction", path: "/reaction-test", icon: "⚡", color: "text-blue-400", bg: "hover:bg-blue-400/10" },
              { name: "Aim Test", path: "/aim-trainer", icon: "🎯", color: "text-red-400", bg: "hover:bg-red-400/10" },
              { name: "CPS Test", path: "/cps-test", icon: "🖱️", color: "text-orange-400", bg: "hover:bg-orange-400/10" },
              { name: "Memory", path: "/memory-game", icon: "🃏", color: "text-indigo-400", bg: "hover:bg-indigo-400/10" },
              { name: "Typing", path: "/typing-test", icon: "⌨️", color: "text-rose-400", bg: "hover:bg-rose-400/10" },
              { name: "TicTacToe", path: "/tic-tac-toe", icon: "❌", color: "text-cyan-400", bg: "hover:bg-cyan-400/10" },
              { name: "Spacebar", path: "/spacebar-test", icon: "🚀", color: "text-emerald-400", bg: "hover:bg-emerald-400/10" },
              { name: "Cyber Snake", path: "/snake-game", icon: "🐍", color: "text-emerald-500", bg: "hover:bg-emerald-500/10" },
            ].map((game) => (
              <Link href={game.path} key={game.name} className={`p-6 rounded-[2rem] bg-black/40 border border-white/5 ${game.bg} transition-all text-center group`}>
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{game.icon}</div>
                <h4 className={`font-black text-[13px] uppercase tracking-widest ${game.color}`}>{game.name}</h4>
              </Link>
            ))}
          </div>
        </div>

        {/* 4. LATEST ARTICLES */}
        <div className="mb-32">
          <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-8">
            <div>
              <h2 className="text-4xl font-black text-white mb-2 tracking-tight">Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Intel</span></h2>
              <p className="text-slate-500 text-lg font-medium">Deep-dive masterclasses to help you stay ahead of the meta.</p>
            </div>
            <Link href="/blog" className="text-white font-bold hover:text-emerald-400 transition-colors uppercase text-sm tracking-widest">
              View All Guides &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => (
              <Link href={`/blog/${article.slug}`} key={article.slug} className="group block bg-[#0B0F19] rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-emerald-500/30 transition-all duration-500 shadow-2xl">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100" unoptimized />
                </div>
                <div className="p-8">
                  <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-3 block">{article.category}</span>
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors leading-tight line-clamp-2">{article.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 font-medium">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 5. TESTIMONIALS SECTION */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Loved by the <span className="text-purple-400">Community</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Don't just take our word for it. See what thousands of gamers are saying about our tools.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#0B0F19] rounded-[2rem] border border-white/5 shadow-2xl hover:border-emerald-500/30 transition-colors">
              <div className="flex text-yellow-400 mb-6 text-xl">★★★★★</div>
              <p className="text-slate-300 mb-8 font-medium leading-relaxed">"The sensitivity converter is flawlessly accurate. Kept my muscle memory intact switching to CS2. Highly recommended for any competitive player."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/30">T.J</div>
                <div>
                  <h4 className="text-white font-bold">Tyler J.</h4>
                  <span className="text-sm text-emerald-500 font-medium">Pro Player</span>
                </div>
              </div>
            </div>
            <div className="p-8 bg-[#0B0F19] rounded-[2rem] border border-white/5 shadow-2xl hover:border-purple-500/30 transition-colors md:-translate-y-4">
              <div className="flex text-yellow-400 mb-6 text-xl">★★★★★</div>
              <p className="text-slate-300 mb-8 font-medium leading-relaxed">"I literally got a free permanent fruit using one of the Blox Fruits codes here before it expired. Bookmarked instantly! Best database on the web."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold border border-purple-500/30">S.K</div>
                <div>
                  <h4 className="text-white font-bold">Sarah K.</h4>
                  <span className="text-sm text-purple-500 font-medium">Roblox Creator</span>
                </div>
              </div>
            </div>
            <div className="p-8 bg-[#0B0F19] rounded-[2rem] border border-white/5 shadow-2xl hover:border-cyan-500/30 transition-colors">
              <div className="flex text-yellow-400 mb-6 text-xl">★★★★★</div>
              <p className="text-slate-300 mb-8 font-medium leading-relaxed">"The Fortnite XP maps are crazy. Reached level 100 in just a few days of AFK grinding while studying. Saved me so many hours."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/30">M.D</div>
                <div>
                  <h4 className="text-white font-bold">Mike D.</h4>
                  <span className="text-sm text-cyan-500 font-medium">Casual Gamer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. FAQ SECTION */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Frequently Asked <span className="text-emerald-400">Questions</span></h2>
            <p className="text-slate-500 text-lg">Got questions? We've got answers.</p>
          </div>
          <div className="space-y-6">
            <details className="group bg-[#0B0F19] rounded-2xl border border-white/5 p-6 cursor-pointer shadow-xl">
              <summary className="font-bold text-lg text-white flex justify-between items-center outline-none">
                Are the Roblox codes updated regularly?
                <span className="text-emerald-500 group-open:rotate-45 transition-transform text-3xl font-light">+</span>
              </summary>
              <div className="mt-4 text-slate-400 leading-relaxed border-t border-white/5 pt-4 font-medium">
                Yes! Our database is checked daily. If a code expires, it is immediately marked as patched so you don't waste your time.
              </div>
            </details>
            <details className="group bg-[#0B0F19] rounded-2xl border border-white/5 p-6 cursor-pointer shadow-xl">
              <summary className="font-bold text-lg text-white flex justify-between items-center outline-none">
                Is the Sensitivity Converter exact?
                <span className="text-purple-500 group-open:rotate-45 transition-transform text-3xl font-light">+</span>
              </summary>
              <div className="mt-4 text-slate-400 leading-relaxed border-t border-white/5 pt-4 font-medium">
                We use the exact mathematical engine multipliers that the game developers use (e.g., 3.181818 for Valorant to CS2). It provides a flawless 1:1 translation ensuring your muscle memory stays intact.
              </div>
            </details>
            <details className="group bg-[#0B0F19] rounded-2xl border border-white/5 p-6 cursor-pointer shadow-xl">
              <summary className="font-bold text-lg text-white flex justify-between items-center outline-none">
                Can I get banned for using Fortnite XP maps?
                <span className="text-cyan-500 group-open:rotate-45 transition-transform text-3xl font-light">+</span>
              </summary>
              <div className="mt-4 text-slate-400 leading-relaxed border-t border-white/5 pt-4 font-medium">
                No. We only list maps that utilize Epic Games' official Creative Mode XP "Accolade" mechanics. We never promote hacks or external software that violates Terms of Service.
              </div>
            </details>
          </div>
        </div>

      </div>
    </div>
  );
}