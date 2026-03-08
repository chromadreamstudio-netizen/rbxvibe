import Link from "next/link";

export default function GamingMiceReview() {
  return (
    <div className="max-w-3xl mx-auto mt-10 pb-20 animate-fade-in">
      <Link href="/" className="text-emerald-400 hover:text-emerald-300 mb-6 inline-block">&larr; Back to Home</Link>
      
      <span className="text-sm font-bold text-blue-500 uppercase tracking-wider mb-2 block">Hardware Review</span>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Top 5 Gaming Mice for FPS Players</h1>
      <p className="text-slate-400 mb-10 text-lg border-l-4 border-blue-500 pl-4">
        Your aim in Valorant or CS2 is only as good as your mouse. We tested the top-tier lightweight gaming mice used by professional e-sports players. Here are our top picks.
      </p>

      {/* مساحة إعلان أدسنس */}
      <div className="w-full h-24 bg-slate-800 flex items-center justify-center border border-dashed border-slate-600 mb-10 rounded-lg">
        <span className="text-slate-500 text-sm">AdSense Banner</span>
      </div>

      <article className="prose prose-invert prose-lg max-w-none text-slate-300">
        
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-8">
          <h2 className="text-2xl font-bold text-white mt-0 mb-2">1. Logitech G Pro X Superlight</h2>
          <p className="text-sm text-slate-400 mb-4">Weight: 63g | Sensor: HERO 25K | Wireless</p>
          <p>The undisputed king of FPS games. It's incredibly light, has zero latency, and the battery lasts for weeks. If you play competitive shooters, this is the standard.</p>
          {/* سنضع رابط الأفيليت هنا في الخطوة القادمة */}
          <button className="mt-4 bg-slate-700 text-slate-400 font-bold py-2 px-6 rounded-lg cursor-not-allowed">Check Price on Amazon (Coming Soon)</button>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-8">
          <h2 className="text-2xl font-bold text-white mt-0 mb-2">2. Razer DeathAdder V3 Pro</h2>
          <p className="text-sm text-slate-400 mb-4">Weight: 63g | Sensor: Focus Pro 30K | Wireless</p>
          <p>For players with larger hands who prefer an ergonomic shape, the DeathAdder V3 Pro offers incredible tracking and very satisfying optical switches.</p>
          {/* سنضع رابط الأفيليت هنا في الخطوة القادمة */}
          <button className="mt-4 bg-slate-700 text-slate-400 font-bold py-2 px-6 rounded-lg cursor-not-allowed">Check Price on Amazon (Coming Soon)</button>
        </div>

        <h3 className="text-xl font-bold text-purple-400 mt-8">Don't Forget Your Sensitivity!</h3>
        <p>If you are buying a new mouse and switching games, make sure your aim stays consistent by using our <Link href="/sensitivity" className="text-blue-400 hover:underline">Pro Sensitivity Converter</Link>.</p>
      </article>
    </div>
  );
}