import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

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
        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-6313859650856618" />
        <Script
          id="adsense-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6313859650856618"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q5EE5D100M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q5EE5D100M');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-[#05070a] text-white flex flex-col min-h-screen`}>
        
        {/* شريط العرض المزدوج العلوي - ثابت في القمة */}
        <div className="bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-800 py-2 text-center text-[10px] md:text-xs font-bold uppercase tracking-wider fixed top-0 w-full z-[110] border-b border-white/10 shadow-2xl flex items-center justify-center gap-4 px-2">
          <span className="hidden sm:inline">🎮 GAMER DEALS:</span>
          <Link href="https://www.tkqlhce.com/click-101702265-14471514" target="_blank" className="bg-white/10 px-2 py-0.5 rounded border border-white/20 hover:bg-blue-500 transition-colors">
            NORDVPN (71% OFF)
          </Link>
          <span className="opacity-30">|</span>
          <Link href="https://www.jdoqocy.com/click-101702265-17178839" target="_blank" className="bg-white/10 px-2 py-0.5 rounded border border-white/20 hover:bg-cyan-500 transition-colors">
            SURFSHARK (82% OFF)
          </Link>
        </div>

        {/* الهيدر الكامل - يحتوي على المدونة والألعاب وكل الأدوات */}
        <header className="fixed top-10 w-full z-[100] backdrop-blur-xl bg-black/40 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-black tracking-tighter hover:opacity-80 transition-opacity">
              <span className="text-emerald-500">Rbx</span>Vibe<span className="text-emerald-500">.</span>
            </Link>

            {/* Navigation - تم إعادة المدونة والألعاب هنا */}
            <nav className="hidden lg:flex items-center gap-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/roblox-codes" className="hover:text-emerald-400 transition-colors">Roblox</Link>
              <Link href="/fortnite-maps" className="hover:text-cyan-400 transition-colors">Fortnite</Link>
              <Link href="/sensitivity" className="hover:text-purple-400 transition-colors">Sensitivity</Link>
              
              {/* قائمة الألعاب المنسدلة */}
              <div className="group relative py-4">
                <button className="flex items-center gap-1 hover:text-yellow-400 transition-colors uppercase">
                  Games <span className="text-[8px]">▼</span>
                </button>
                <div className="absolute top-full left-0 w-48 bg-[#0B0F19] border border-white/10 rounded-2xl p-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform group-hover:translate-y-1">
                  <div className="space-y-1">
                    <Link href="/ai-game" className="block p-2 rounded-lg hover:bg-white/5 hover:text-yellow-400 transition-all lowercase italic">🤖 AI Emoji</Link>
                    <Link href="/trivia" className="block p-2 rounded-lg hover:bg-white/5 hover:text-emerald-400 transition-all lowercase italic">🧠 Trivia</Link>
                    <Link href="/reaction-test" className="block p-2 rounded-lg hover:bg-white/5 hover:text-blue-400 transition-all lowercase italic">⚡ Reaction</Link>
                  </div>
                </div>
              </div>

              <Link href="/deals" className="text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1 font-black underline decoration-2 underline-offset-4">🔥 DEALS</Link>
            </nav>

            {/* Action Button */}
            <Link href="/roblox-codes" className="px-4 py-2 rounded-full bg-emerald-500 text-[#05070a] font-black text-[10px] hover:bg-emerald-400 transition-all">
              PRO TOOLS
            </Link>
          </div>
        </header>

        <main className="pt-28 flex-grow">
          {children}
        </main>

        {/* فوتر كامل يحتوي على روابط الألعاب والمدونة لتعزيز الـ SEO */}
        <footer className="bg-[#0B0F19] border-t border-white/5 py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-white font-black mb-4 uppercase text-sm">Navigation</h4>
              <div className="flex flex-col gap-2 text-slate-500 text-xs font-bold">
                <Link href="/blog">Blog</Link>
                <Link href="/deals">Hot Deals</Link>
                <Link href="/sitemap.xml">Sitemap</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-black mb-4 uppercase text-sm">Mini Games</h4>
              <div className="flex flex-col gap-2 text-slate-500 text-xs font-bold">
                <Link href="/ai-game">AI Emoji Game</Link>
                <Link href="/trivia">Gaming Trivia</Link>
                <Link href="/reaction-test">Reaction Test</Link>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end justify-center">
               <p className="text-slate-500 text-[10px] font-medium uppercase tracking-widest">© 2026 RbxVibe. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}