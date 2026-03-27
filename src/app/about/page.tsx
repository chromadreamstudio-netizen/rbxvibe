import Link from "next/link";

export const metadata = {
  title: "About Us | RbxVibe",
  description: "Learn more about RbxVibe, our mission, and the expert team behind the ultimate gaming tools platform.",
};

const experts = [
  {
    name: "Walid Taha",
    role: "Founder & Chief Technology Officer (CTO)",
    bio: "With over 25 years of executive experience as a Chief Technology Officer, Walid leads the architecture and development at RbxVibe. Leveraging his deep background in enterprise-grade security and software engineering, he ensures that every tool on the platform is mathematically precise, strictly safe from scams, and built to the highest industry standards.",
    image: "https://image2url.com/r2/default/images/1768731731915-a8da5100-43ee-4e13-ab0c-0e3001c80de9.png"
  }
];

export default function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      <Link href="/" className="text-slate-400 hover:text-emerald-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to Home
      </Link>
      
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">RbxVibe</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">Built by industry experts, for gamers. We are on a mission to provide the most accurate, secure, and up-to-date gaming tools on the web.</p>
      </div>

      <div className="bg-[#0B0F19] p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden mb-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-black text-white mb-4 border-b border-white/10 pb-4">Who We Are</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Founded in 2026, RbxVibe started with a simple frustration: finding active promo codes and accurate gaming calculators was a nightmare filled with spam and fake websites. We decided to build the platform we always wished existed. Our team consists of competitive FPS players and senior software engineers dedicated to giving you the edge.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black text-white mb-4 border-b border-white/10 pb-4">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Our goal is to save you time and maximize your gameplay. Whether you are looking to grind the Fortnite Battle Pass efficiently without getting banned, or perfectly translate your aim from Valorant to CS2, we provide 100% free, safe, and mathematically verified tools to get you there.
            </p>
          </div>
        </div>

        <div className="mt-12 relative z-10">
          <h2 className="text-3xl font-black text-white mb-6 border-b border-white/10 pb-4">Why Trust Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-lg font-bold text-emerald-400 mb-2">No Scams</h3>
              <p className="text-slate-400 text-sm">We will never ask for your passwords, and we strictly oppose illegal hacks or fake generators.</p>
            </div>
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
              <div className="text-3xl mb-3">🧮</div>
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Math-Based</h3>
              <p className="text-slate-400 text-sm">Our converters use the exact engine multipliers extracted from the game developers' code.</p>
            </div>
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-lg font-bold text-blue-400 mb-2">Daily Verification</h3>
              <p className="text-slate-400 text-sm">We manually test our Roblox codes and Fortnite maps every 24 hours to ensure they work.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* MEET THE LEADERSHIP (القسم الجديد الخاص بك) */}
      {/* ========================================= */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white mb-4">Meet The <span className="text-emerald-400">Leadership</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {experts.map((expert, i) => (
            <div key={i} className="bg-[#0B0F19] p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/5 hover:border-emerald-500/40 transition-all duration-500 group w-full max-w-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center gap-8">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-slate-800 rounded-full overflow-hidden border-4 border-slate-700 shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:border-emerald-500 transition-colors">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
              
              <div>
                <h3 className="text-3xl font-black text-white mb-1">{expert.name}</h3>
                <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4">{expert.role}</p>
                <p className="text-slate-400 text-base leading-relaxed">{expert.bio}</p>
              </div>
            </div> 
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#0B1221] to-[#0A0F1A] p-10 md:p-12 rounded-[3rem] border border-cyan-500/20 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <h3 className="text-3xl font-black text-white mb-4 relative z-10">Want to work with us?</h3>
        <p className="text-slate-400 mb-8 text-lg max-w-xl mx-auto relative z-10">We are always open to business inquiries, sponsorships, and community feedback.</p>
        <Link href="/contact" className="relative z-10 bg-white text-[#0B0F19] hover:bg-emerald-400 hover:text-black font-black text-lg py-4 px-10 rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-1 inline-block">
          Contact Our Team
        </Link>
      </div>

    </div>
  );
}