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
        
        {/* شريط عرض NordVPN العلوي الجديد */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-2.5 text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] fixed top-0 w-full z-[110] border-b border-white/10">
          🎮 Stop Lagging! Get NordVPN with 70% OFF & Secure Your Ping 
          <Link href="https://www.tkqlhce.com/click-101702265-14471514" target="_blank" className="ml-3 underline hover:text-white/80 transition-all px-2 py-0.5 rounded border border-white/20 bg-white/10">
            CLAIM DEAL →
          </Link>
        </div>

        <header className="fixed top-10 w-full z-[100] backdrop-blur-xl bg-black/40 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-black tracking-tighter hover:opacity-80 transition-opacity">
              <span className="text-emerald-500">Rbx</span>Vibe<span className="text-emerald-500">.</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <Link href="/roblox-codes" className="hover:text-emerald-400 transition-colors">Roblox Codes</Link>
              <Link href="/fortnite-maps" className="hover:text-cyan-400 transition-colors">Fortnite Maps</Link>
              <Link href="/sensitivity" className="hover:text-purple-400 transition-colors">Sens Converter</Link>
              <Link href="/deals" className="text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1 font-black underline decoration-2 underline-offset-4">🔥 HOT DEALS</Link>
            </nav>

            <Link href="/roblox-codes" className="px-5 py-2 rounded-full bg-emerald-500 text-[#05070a] font-black text-[10px] hover:bg-emerald-400 hover:scale-105 transition-all">
              PRO TOOLS
            </Link>
          </div>
        </header>

        <main className="pt-28 flex-grow">
          {children}
        </main>

        <footer className="bg-[#0B0F19] border-t border-white/5 pt-16 pb-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-slate-500 text-[11px] font-medium uppercase tracking-widest">© 2026 RbxVibe. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}