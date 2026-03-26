import Link from "next/link";
import { wikiData } from "@/data/wiki";

export const metadata = {
  title: "Blox Fruits Wiki & Database - RbxVibe",
  description: "The ultimate Blox Fruits encyclopedia. Deep dive into fruits, swords, fighting styles, and maps with our comprehensive guides.",
};

export default function WikiHubPage() {
  return (
    <div className="max-w-7xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      
      {/* رأس الصفحة - Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
          <span className="text-cyan-400 font-bold text-sm tracking-widest uppercase">📚 Official Database</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Blox Fruits <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Wiki</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Comprehensive guides, tier lists, and deep technical stats for every fruit, sword, and fighting style in the game. Updated for the latest patch.
        </p>
      </div>

      {/* قائمة عناصر الموسوعة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {wikiData.map((item) => (
          <Link href={`/wiki/${item.slug}`} key={item.id} className="group bg-[#0B0F19] rounded-[2rem] border border-white/5 overflow-hidden hover:border-cyan-500/30 transition-all duration-500 shadow-2xl flex flex-col sm:flex-row">
            
            {/* الصورة */}
            <div className="relative h-64 sm:h-auto sm:w-2/5 overflow-hidden">
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-cyan-400 font-black text-xs uppercase tracking-widest border border-cyan-500/30">
                  {item.category}
                </span>
              </div>
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100" />
            </div>

            {/* تفاصيل العنصر */}
            <div className="p-8 sm:w-3/5 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                {item.shortDescription}
              </p>
              
              <div className="flex flex-col gap-2 border-t border-white/5 pt-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Type</span>
                  <span className="text-white font-medium">{item.type}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Value</span>
                  <span className="text-emerald-400 font-bold">{item.price}</span>
                </div>
              </div>
              
              <div className="mt-6 text-cyan-500 font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform flex items-center gap-2">
                Read Full Guide &rarr;
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* نص إضافي للـ SEO في أسفل الصفحة */}
      <div className="mt-20 p-8 bg-[#0B0F19] rounded-[2rem] border border-white/5">
        <h2 className="text-2xl font-black text-white mb-4">Why Use Our Blox Fruits Database?</h2>
        <p className="text-slate-400 leading-relaxed">
          Welcome to the most accurate and up-to-date Blox Fruits Wiki. Unlike other generic game databases, our team manually tests every fruit awakening, sword damage output, and boss drop rate to provide you with the exact meta information. Whether you are a beginner looking for the best grinding fruits in the First Sea, or a Max Level bounty hunter searching for the ultimate PvP one-shot combos, our detailed encyclopedia has everything you need to dominate the server.
        </p>
      </div>

    </div>
  );
}