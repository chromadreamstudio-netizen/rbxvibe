import Link from 'next/link';

export default function GearUpBanner() {
  // هذا هو رابطك السري الذي استخرجناه من الكود الخاص بك
  const affiliateLink = "https://www.kqzyfj.com/click-101583061-17235976";

  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between border border-blue-500/30 shadow-2xl my-8">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">
          <span className="text-blue-400">Tired of Lag</span> in Roblox? 🎮
        </h3>
        <p className="text-slate-300 font-medium max-w-lg">
          Reduce your ping instantly and get a smoother gameplay experience. 
          Try <span className="text-white font-bold">GearUP Booster</span> today and never disconnect again!
        </p>
      </div>
      
      <div className="flex-shrink-0">
        <Link 
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-black text-lg py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105"
        >
          Boost My Game Now ⚡
        </Link>
      </div>
    </div>
  );
}