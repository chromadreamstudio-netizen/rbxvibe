import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RbxVibe | Ultimate Gaming Hub",
  description: "The #1 destination for gaming tools, daily codes, and pro guides.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* كود جوجل أدسنس */}
        <meta name="google-adsense-account" content="ca-pub-6313859650856618" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6313859650856618"
          crossOrigin="anonymous"
        ></script>

        {/* كود جوجل أناليتكس لتتبع الزوار */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q5EE5D10QM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q5EE5D10QM');
            `,
          }}
        ></script>
      </head>
      <body className={`${inter.className} bg-[#05070a] text-white flex flex-col min-h-screen`}>
        
        {/* ========================================= */}
        {/* HEADER - الهيدر الزجاجي الاحترافي */}
        {/* ========================================= */}
        <header className="fixed top-0 w-full z-[100] backdrop-blur-xl bg-black/40 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity">
              <span className="text-emerald-500">Rbx</span>Vibe<span className="text-emerald-500">.</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
              <Link href="/roblox-codes" className="hover:text-emerald-400 transition-colors">Roblox Codes</Link>
              <Link href="/fortnite-maps" className="hover:text-cyan-400 transition-colors">Fortnite Maps</Link>
              <Link href="/sensitivity" className="hover:text-purple-400 transition-colors">Sens Converter</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              
              {/* Dropdown Games */}
              <div className="group relative py-4">
                <button className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                  Play Games <span className="text-[10px] ml-1">▼</span>
                </button>
                <div className="absolute top-full left-0 w-64 bg-[#0B0F19] border border-white/10 rounded-2xl p-4 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform group-hover:translate-y-2">
                  <div className="space-y-2">
                    <Link href="/ai-game" className="block p-3 rounded-xl hover:bg-white/5 hover:text-yellow-400 transition-all">🤖 AI Emoji Game</Link>
                    <Link href="/trivia" className="block p-3 rounded-xl hover:bg-white/5 hover:text-emerald-400 transition-all">🧠 Gaming Trivia</Link>
                    <Link href="/reaction-test" className="block p-3 rounded-xl hover:bg-white/5 hover:text-blue-400 transition-all">⚡ Reaction Test</Link>
                    <Link href="/aim-trainer" className="block p-3 rounded-xl hover:bg-white/5 hover:text-red-400 transition-all">🎯 Aim Trainer</Link>
                    <Link href="/cps-test" className="block p-3 rounded-xl hover:bg-white/5 hover:text-orange-400 transition-all">🖱️ CPS Click Test</Link>
                  </div>
                </div>
              </div>

              <Link href="/deals" className="text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1 font-black"><span className="animate-pulse">🔥</span> HOT DEALS</Link>
            </nav>

            {/* CTA Button */}
            <Link href="/roblox-codes" className="px-6 py-2.5 rounded-full bg-emerald-500 text-[#05070a] font-black text-sm hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              PRO TOOLS
            </Link>
          </div>
        </header>

        {/* ========================================= */}
        {/* MAIN CONTENT - محتوى الصفحات */}
        {/* ========================================= */}
        <main className="pt-20 flex-grow">
          {children}
        </main>

        {/* ========================================= */}
        {/* MEGA FOOTER - الفوتر العملاق */}
        {/* ========================================= */}
        <footer className="bg-[#0B0F19] border-t border-white/5 pt-20 pb-10 mt-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              
              {/* Column 1: Brand */}
              <div className="space-y-6">
                <Link href="/" className="text-3xl font-black tracking-tighter">
                  <span className="text-emerald-500">Rbx</span>Vibe<span className="text-emerald-500">.</span>
                </Link>
                <p className="text-slate-400 leading-relaxed font-medium pr-4">
                  The ultimate destination for gamers. We provide highly accurate tools, real-time codes, and pro-level masterclasses to help you dominate your favorite games.
                </p>
                {/* Social Icons Placeholder */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-colors cursor-pointer text-slate-300">X</div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-colors cursor-pointer text-slate-300">YT</div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-black transition-colors cursor-pointer text-slate-300">DC</div>
                </div>
              </div>

              {/* Column 2: Pro Tools */}
              <div>
                <h4 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Pro Arsenal</h4>
                <ul className="space-y-4 text-slate-400 font-medium">
                  <li><Link href="/roblox-codes" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="text-emerald-500">›</span> Roblox Codes</Link></li>
                  <li><Link href="/fortnite-maps" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><span className="text-cyan-500">›</span> Fortnite XP Maps</Link></li>
                  <li><Link href="/sensitivity" className="hover:text-purple-400 transition-colors flex items-center gap-2"><span className="text-purple-500">›</span> Sens Converter</Link></li>
                </ul>
              </div>

              {/* Column 3: Mini-Games */}
              <div>
                <h4 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Mini Games</h4>
                <ul className="space-y-4 text-slate-400 font-medium">
                  <li><Link href="/ai-game" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><span className="text-yellow-500">›</span> AI Emoji Test</Link></li>
                  <li><Link href="/trivia" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><span className="text-emerald-500">›</span> Gaming Trivia</Link></li>
                  <li><Link href="/aim-trainer" className="hover:text-red-400 transition-colors flex items-center gap-2"><span className="text-red-500">›</span> Aim Trainer</Link></li>
                  <li><Link href="/cps-test" className="hover:text-orange-400 transition-colors flex items-center gap-2"><span className="text-orange-500">›</span> CPS Click Test</Link></li>
                </ul>
              </div>

              {/* Column 4: Legal & Info */}
              <div>
                <h4 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Company</h4>
                <ul className="space-y-4 text-slate-400 font-medium">
                  <li><Link href="/about" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-slate-600">›</span> About Us</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-slate-600">›</span> Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-slate-600">›</span> Terms of Service</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-slate-600">›</span> Contact Us</Link></li>
                </ul>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-slate-500 font-medium text-sm">
              <p>© 2026 RbxVibe. All rights reserved. Built for Gamers.</p>
              <p className="mt-4 md:mt-0 flex items-center gap-1">
                Designed with <span className="text-red-500 text-lg">♥</span> for the gaming community.
              </p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}