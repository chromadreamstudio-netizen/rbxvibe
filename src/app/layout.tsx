import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

// استيراد الهيدر الاحترافي الجديد الذي قمنا ببرمجته
import Navbar from "@/components/Navbar";

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
        
        {/* شريط العروض العلوية */}
        <div className="bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-800 py-2 text-center text-[10px] md:text-xs font-bold uppercase tracking-wider sticky top-0 w-full z-[110] border-b border-white/10 shadow-2xl flex items-center justify-center gap-4 px-2">
          <span className="hidden sm:inline">🎮 GAMER DEALS:</span>
          <Link href="https://www.tkqlhce.com/click-101702265-14471514" target="_blank" className="bg-white/10 px-2 py-0.5 rounded border border-white/20 hover:bg-blue-500 transition-colors">
            NORDVPN (71% OFF)
          </Link>
          <span className="opacity-30">|</span>
          <Link href="https://www.jdoqocy.com/click-101702265-17178839" target="_blank" className="bg-white/10 px-2 py-0.5 rounded border border-white/20 hover:bg-cyan-500 transition-colors">
            SURFSHARK (82% OFF)
          </Link>
        </div>

        {/* 🚀 إدراج الهيدر الجديد (Navbar) هنا 🚀 */}
        <Navbar />

        {/* تعديل الـ padding-top ليتناسب مع الهيدر الجديد */}
        <main className="pt-8 flex-grow">
          {children}
        </main>

        {/* ========================================= */}
        {/* MEGA FOOTER المحدث بالأدوات الجديدة */}
        {/* ========================================= */}
        <footer className="bg-[#0B0F19] border-t border-white/5 pt-20 pb-10 mt-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              
              {/* Column 1: Brand */}
              <div className="space-y-6">
                <Link href="/" className="flex items-center gap-2 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                    <span className="text-white font-black text-xl">R</span>
                  </div>
                  <span className="text-2xl font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                    RbxVibe
                  </span>
                </Link>
                <p className="text-slate-400 leading-relaxed font-medium pr-4">
                  The ultimate destination for gamers. We provide highly accurate tools, real-time codes, and pro-level masterclasses to help you dominate your favorite games.
                </p>
              </div>

              {/* Column 2: Pro Tools (مُحدث بالروابط الجديدة) */}
              <div>
                <h4 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Pro Arsenal</h4>
                <ul className="space-y-4 text-slate-400 font-medium">
                  <li><Link href="/trade-calculator" className="hover:text-cyan-400 transition-colors">› Blox Fruits Trade Calc</Link></li>
                  <li><Link href="/crosshair-generator" className="hover:text-rose-400 transition-colors">› Pro Crosshair Maker</Link></li>
                  <li><Link href="/pc-bottleneck-calculator" className="hover:text-emerald-400 transition-colors">› PC FPS & Bottleneck Calc</Link></li>
                  <li><Link href="/strat-roulette" className="hover:text-fuchsia-400 transition-colors">› Fortnite Strat Roulette</Link></li>
                  <li><Link href="/wiki" className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold mt-2 inline-block">› Global Wiki Database 📚</Link></li>
                </ul>
              </div>

              {/* Column 3: Classic Pages */}
              <div>
                <h4 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Resources</h4>
                <ul className="space-y-4 text-slate-400 font-medium">
                  <li><Link href="/roblox-codes" className="hover:text-emerald-400 transition-colors">› Roblox Promo Codes</Link></li>
                  <li><Link href="/fortnite-maps" className="hover:text-cyan-400 transition-colors">› Fortnite XP Maps</Link></li>
                  <li><Link href="/sensitivity" className="hover:text-purple-400 transition-colors">› Sensitivity Converter</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">› Gaming Blog</Link></li>
                </ul>
              </div>

              {/* Column 4: Legal & Info */}
              <div>
                <h4 className="text-white font-black text-lg mb-6 uppercase tracking-widest">Company</h4>
                <ul className="space-y-4 text-slate-400 font-medium">
                  <li><Link href="/about" className="hover:text-white transition-colors">› About Us</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">› Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">› Terms of Service</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">› Contact Us</Link></li>
                </ul>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-slate-500 font-medium text-sm">
              <p>© 2026 RbxVibe. All rights reserved. Built for Gamers.</p>
              <p className="mt-4 md:mt-0 flex items-center gap-4">
                <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
              </p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}