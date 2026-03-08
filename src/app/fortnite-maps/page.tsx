"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface FortniteMap {
  id: number;
  name: string;
  code: string;
  type: string;
  status: string;
}

export default function FortniteMapsPage() {
  const [maps, setMaps] = useState<FortniteMap[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // جلب البيانات من الخادم فور فتح الصفحة
  useEffect(() => {
    const fetchMaps = async () => {
      try {
        const response = await fetch('/api/fortnite-maps');
        const data = await response.json();
        setMaps(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching maps:", error);
        setIsLoading(false);
      }
    };

    fetchMaps();
  }, []);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-cyan-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-16">
        <div className="w-20 h-20 mx-auto bg-cyan-500/20 flex items-center justify-center rounded-3xl border border-cyan-500/30 mb-6 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
          <span className="text-4xl">🗺️</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Broken <span className="text-cyan-400">Fortnite XP</span> Maps</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Level up your Battle Pass instantly. Copy the map codes below and paste them into Fortnite Creative to start earning massive XP.
        </p>
      </div>

      <div className="bg-[#0B0F19] rounded-[2.5rem] border border-white/10 p-6 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full"></div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-white/10 relative z-10 gap-4">
          <h2 className="text-3xl font-black text-white">Live Map Database</h2>
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 font-bold text-sm border border-cyan-500/20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Auto-Updating Server
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 relative z-10">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
              <p className="text-slate-400 font-medium animate-pulse">Scanning Epic Games servers...</p>
            </div>
          ) : (
            maps.map((map) => (
              <div key={map.id} className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group shadow-lg">
                <div className="mb-6 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-black text-white">{map.name}</h3>
                    <span className="px-3 py-1 rounded-lg bg-white/5 text-slate-300 text-xs font-bold border border-white/10 uppercase tracking-wider">
                      {map.type}
                    </span>
                  </div>
                  <p className={`font-mono text-xl tracking-widest ${map.status === 'Patched' ? 'text-red-500 line-through' : 'text-cyan-400'}`}>
                    {map.code}
                  </p>
                </div>
                
                <button 
                  onClick={() => handleCopy(map.code)}
                  disabled={map.status === 'Patched'}
                  className={`px-8 py-4 rounded-xl font-bold transition-all w-full md:w-auto ${
                    map.status === 'Patched'
                    ? "bg-red-500/10 text-red-500 cursor-not-allowed border border-red-500/20"
                    : copiedCode === map.code 
                    ? "bg-cyan-500 text-[#0B0F19] shadow-[0_0_20px_rgba(6,182,212,0.5)]" 
                    : "bg-white/5 text-white hover:bg-cyan-500 hover:text-[#0B0F19] border border-white/10 hover:border-transparent"
                  }`}
                >
                  {map.status === 'Patched' ? "Patched" : copiedCode === map.code ? "Code Copied!" : "Copy Map Code"}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}