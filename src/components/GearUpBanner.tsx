import Link from 'next/link';

export default function GearUpBanner() {
  const affiliateLink = "https://www.kqzyfj.com/click-101583061-17235976";

  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between border border-blue-500/30 shadow-2xl my-8 relative overflow-hidden">
      
      {/* شريط الخصم المائل (Ribbon) في الزاوية */}
      <div className="absolute top-6 -right-12 bg-red-600 text-white font-black px-14 py-1.5 rotate-45 shadow-lg tracking-widest uppercase text-sm z-0">
        70% OFF
      </div>

      <div className="text-center md:text-left mb-6 md:mb-0 z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mb-2">
          <h3 className="text-2xl font-black text-white uppercase tracking-wide">
            <span className="text-blue-400">Tired of Lag</span> in Roblox? 🎮
          </h3>
          {/* علامة التنبيه للخصم */}
          <span className="bg-yellow-400 text-black text-xs font-black px-3 py-1 rounded-full uppercase animate-pulse">
            Exclusive Deal
          </span>
        </div>
        <p className="text-slate-300 font-medium max-w-lg mt-2">
          Reduce your ping instantly and get a smoother gameplay experience. 
          Claim your <span className="text-yellow-400 font-bold text-lg">70% discount</span> on <span className="text-white font-bold">GearUP Booster</span> today!
        </p>
      </div>
      
      <div className="flex-shrink-0 z-10 mt-4 md:mt-0">
        <Link 
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black text-lg py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105"
        >
          Claim 70% Off Now ⚡
        </Link>
      </div>
    </div>
  );
}