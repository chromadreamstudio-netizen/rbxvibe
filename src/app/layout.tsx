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

        {/* Google Analytics - المصحح بنجاح */}
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
        <header className="fixed top-0 w-full z-[100] backdrop-blur-xl bg-black/40 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
            <Link href="/" className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity">
              <span className="text-emerald-500">Rbx</span>Vibe<span className="text-emerald-500">.</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
              <Link href="/roblox-codes" className="hover:text-emerald-400 transition-colors">Roblox Codes</Link>
              <Link href="/fortnite-maps" className="hover:text-cyan-400 transition-colors">Fortnite Maps</Link>
              <Link href="/sensitivity" className="hover:text-purple-400 transition-colors">Sens Converter</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/deals" className="text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1 font-black"><span className="animate-pulse">🔥</span> HOT DEALS</Link>
            </nav>
            <Link href="/roblox-codes" className="px-6 py-2.5 rounded-full bg-emerald-500 text-[#05070a] font-black text-sm hover:bg-emerald-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              PRO TOOLS
            </Link>
          </div>
        </header>

        <main className="pt-20 flex-grow">
          {children}
        </main>

        <footer className="bg-[#0B0F19] border-t border-white/5 pt-20 pb-10 mt-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="space-y-6">
                <Link href="/" className="text-3xl font-black tracking-tighter">
                  <span className="text-emerald-500">Rbx</span>Vibe<span className="text-emerald-500">.</span>
                </Link>
                <p className="text-slate-400 leading-relaxed font-medium pr-4">
                  The ultimate destination for gamers. We provide highly accurate tools, real-time codes, and pro-level masterclasses to help you dominate your favorite games.
                </p>
              </div>
              <div>
                <h4 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Pro Arsenal</h4>
                <ul className="space-y-4 text-slate-400 font-medium">
                  <li><Link href="/roblox-codes" className="hover:text-emerald-400 transition-colors">› Roblox Codes</Link></li>
                  <li><Link href="/fortnite-maps" className="hover:text-cyan-400 transition-colors">› Fortnite XP Maps</Link></li>
                  <li><Link href="/sensitivity" className="hover:text-purple-400 transition-colors">› Sens Converter</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Mini Games</h4>
                <ul className="space-y-4 text-slate-400 font-medium">
                  <li><Link href="/ai-game" className="hover:text-yellow-400 transition-colors">› AI Emoji Test</Link></li>
                  <li><Link href="/trivia" className="hover:text-emerald-400 transition-colors">› Gaming Trivia</Link></li>
                  <li><Link href="/aim-trainer" className="hover:text-red-400 transition-colors">› Aim Trainer</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Company</h4>
                <ul className="space-y-4 text-slate-400 font-medium">
                  <li><Link href="/privacy" className="hover:text-white transition-colors">› Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">› Terms of Service</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">› Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-slate-500 font-medium text-sm">
              <p>© 2026 RbxVibe. All rights reserved. Built for Gamers.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}