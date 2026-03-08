import Link from "next/link";

export const metadata = {
  title: "About Us | RbxVibe",
  description: "Learn more about RbxVibe, our mission, and the team of gamers behind the ultimate gaming tools platform.",
};

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto mt-10 pb-20 animate-fade-in">
      <Link href="/" className="text-emerald-400 hover:text-emerald-300 mb-8 inline-block font-semibold">&larr; Back to Home</Link>
      
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-white mb-6 tracking-tight">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">RbxVibe</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Built by gamers, for gamers. We are on a mission to provide the most accurate, up-to-date gaming tools on the web.</p>
      </div>

      <div className="bg-[#111827] p-10 rounded-3xl border border-white/5 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Who We Are</h2>
        <p className="text-slate-300 leading-relaxed mb-8">
          Founded in 2026, RbxVibe started with a simple frustration: finding active promo codes and accurate sensitivity converters was a nightmare filled with spam and fake websites. We decided to build the platform we always wished existed. Our team consists of competitive FPS players, Roblox developers, and software engineers dedicated to giving you the edge.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Our Mission</h2>
        <p className="text-slate-300 leading-relaxed mb-8">
          Our goal is to save you time and maximize your gameplay. Whether you are looking to secure a free Dominus in Roblox, grind the Fortnite Battle Pass efficiently without getting banned, or perfectly translate your aim from Valorant to CS2, we provide 100% free, safe, and verified tools to get you there.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Why Trust Us?</h2>
        <ul className="list-disc pl-6 text-slate-300 space-y-3 mb-8">
          <li><strong className="text-emerald-400">Daily Verification:</strong> We manually test our Roblox codes and Fortnite maps every 24 hours.</li>
          <li><strong className="text-emerald-400">Math-Based Tools:</strong> Our sensitivity converter uses the exact engine multipliers from the game developers.</li>
          <li><strong className="text-emerald-400">No Scams:</strong> We will never ask for your passwords, and we strictly oppose "generators" or illegal hacks.</li>
        </ul>

        <div className="bg-[#0B0F19] p-6 rounded-xl border border-white/5 text-center mt-10">
          <h3 className="text-xl font-bold text-white mb-2">Want to work with us?</h3>
          <p className="text-slate-400 mb-4">We are always open to business inquiries, sponsorships, and community feedback.</p>
          <Link href="/contact" className="bg-emerald-500 hover:bg-emerald-400 text-[#0B0F19] font-bold py-3 px-8 rounded-lg transition-colors inline-block">
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}