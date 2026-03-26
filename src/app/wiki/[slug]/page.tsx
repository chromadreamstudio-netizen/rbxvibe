import { wikiData } from "@/data/wiki";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function WikiArticlePage({ params }: { params: { slug: string } }) {
  // البحث عن العنصر في قاعدة البيانات بناءً على الرابط
  const item = wikiData.find((w) => w.slug === params.slug);

  // إذا لم يجد العنصر، يعرض صفحة 404
  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      
      {/* زر العودة للموسوعة */}
      <Link href="/wiki" className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 font-bold text-sm uppercase tracking-widest mb-8 transition-colors">
        <span className="text-xl">&larr;</span> Back to Database
      </Link>

      {/* رأس المقال (صورة واسم العنصر) */}
      <div className="bg-[#0B0F19] rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl mb-12">
        <div className="relative h-72 md:h-96 w-full">
          <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent"></div>
          
          <div className="absolute bottom-8 left-8 right-8">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md text-cyan-400 font-black text-xs uppercase tracking-widest border border-cyan-500/30 mb-4 inline-block">
              {item.category} • {item.type}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">{item.title}</h1>
          </div>
        </div>
        
        {/* شريط الإحصائيات السريعة */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 border-t border-white/5 bg-black/40">
          <div className="p-4 text-center">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Type</p>
            <p className="text-white font-medium">{item.type}</p>
          </div>
          <div className="p-4 text-center">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Value</p>
            <p className="text-emerald-400 font-bold">{item.price}</p>
          </div>
          <div className="p-4 text-center hidden md:block">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Category</p>
            <p className="text-white font-medium">{item.category}</p>
          </div>
          <div className="p-4 text-center hidden md:block">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Status</p>
            <p className="text-cyan-400 font-bold">Verified ✅</p>
          </div>
        </div>
      </div>

      {/* المحتوى الطويل (المغناطيس الذي يجذب AdSense و SEO) */}
      <div className="bg-[#0B0F19] rounded-[2rem] border border-white/5 p-8 md:p-12 shadow-2xl">
        <div 
          className="prose prose-invert max-w-none 
                     prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
                     prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
                     prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                     prose-ul:text-slate-300 prose-li:mb-2
                     prose-strong:text-cyan-400"
          dangerouslySetInnerHTML={{ __html: item.seoContent }} 
        />
      </div>

    </div>
  );
}