"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// تعريف شكل البيانات القادمة من قاعدة البيانات
interface PromoCode {
  id: number;
  code: string;
  reward: string;
  status: string;
}

export default function RobloxCodesPage() {
  const [codes, setCodes] = useState<PromoCode[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // هذه الدالة (useEffect) تعمل فور فتح الزائر للصفحة، وتقوم بجلب البيانات من الخادم
  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const response = await fetch('/api/roblox-codes'); // الاتصال بالـ API الخاص بك
        const data = await response.json();
        setCodes(data); // وضع البيانات في حالة التطبيق
        setIsLoading(false); // إيقاف علامة التحميل
      } catch (error) {
        console.error("Error fetching codes:", error);
        setIsLoading(false);
      }
    };

    fetchCodes();
  }, []);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-emerald-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>

      <div className="text-center mb-16">
        <div className="w-20 h-20 mx-auto bg-emerald-500/20 flex items-center justify-center rounded-3xl border border-emerald-500/30 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
          <span className="text-4xl">🎁</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">Active <span className="text-emerald-400">Roblox Codes</span> Database</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Copy the latest working promo codes for Blox Fruits and other top Roblox games. Updated dynamically from our live database!
        </p>
      </div>

      <div className="bg-[#0B0F19] rounded-[2.5rem] border border-white/10 p-6 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full"></div>
        
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 relative z-10">
          <h2 className="text-3xl font-black text-white">Blox Fruits Codes</h2>
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm border border-emerald-500/30">
            Live Database
          </span>
        </div>

        <div className="space-y-4 relative z-10">
          {/* عرض علامة تحميل احترافية أثناء جلب البيانات */}
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-4"></div>
              <p className="text-slate-400 font-medium animate-pulse">Fetching latest codes from server...</p>
            </div>
          ) : (
            /* عرض الأكواد بعد وصولها من قاعدة البيانات */
            codes.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#111827] p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all group">
                <div className="mb-4 md:mb-0">
                  <p className={`font-black text-2xl tracking-wider font-mono mb-1 ${item.status === 'Expired' ? 'text-red-500 line-through' : 'text-emerald-400'}`}>
                    {item.code}
                  </p>
                  <p className="text-slate-400 font-medium">Reward: <span className="text-white">{item.reward}</span></p>
                </div>
                
                <button 
                  onClick={() => handleCopy(item.code)}
                  disabled={item.status === 'Expired'}
                  className={`px-8 py-3 rounded-xl font-bold transition-all ${
                    item.status === 'Expired'
                    ? "bg-red-500/10 text-red-500 cursor-not-allowed border border-red-500/20"
                    : copiedCode === item.code 
                    ? "bg-emerald-500 text-[#0B0F19] shadow-[0_0_20px_rgba(16,185,129,0.5)]" 
                    : "bg-white/10 text-white hover:bg-emerald-500 hover:text-[#0B0F19]"
                  }`}
                >
                  {item.status === 'Expired' ? "Expired" : copiedCode === item.code ? "Copied! ✔" : "Copy Code"}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}