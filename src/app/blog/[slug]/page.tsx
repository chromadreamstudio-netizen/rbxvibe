import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Article Not Found' };
  return { title: article.metaTitle, description: article.metaDescription };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <div className="max-w-6xl mx-auto mt-10 pb-20 px-4 animate-fade-in">
      <Link href="/blog" className="text-slate-400 hover:text-emerald-400 mb-8 inline-flex items-center gap-2 font-bold transition-all hover:-translate-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
        <span>&larr;</span> Back to All Guides
      </Link>

      <div className="text-center max-w-4xl mx-auto mb-12">
        <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 font-black uppercase tracking-widest text-xs mb-6 border border-emerald-500/20">
          {article.category}
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl tracking-tight">{article.title}</h1>
        <div className="flex items-center justify-center gap-4 text-slate-400 font-medium text-sm md:text-base bg-[#111827] inline-flex px-6 py-3 rounded-2xl border border-white/5">
          <span className="flex items-center gap-2">📅 {article.date}</span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-2">⏱️ 5 min read</span>
        </div>
      </div>

      <div className="relative w-full h-[350px] md:h-[550px] rounded-[2.5rem] overflow-hidden mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
        <Image src={article.image} alt={article.title} fill unoptimized className="object-cover group-hover:scale-105 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="w-full h-24 bg-[#111827] flex items-center justify-center border border-dashed border-white/10 mb-12 rounded-2xl shadow-md">
            <span className="text-slate-500 text-sm font-bold tracking-widest uppercase">Advertisement</span>
          </div>

          <article 
            className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed
            prose-headings:font-black prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:mb-6
            prose-a:text-cyan-400 hover:prose-a:text-cyan-300
            prose-strong:text-white prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-20 bg-gradient-to-br from-[#111827] to-[#0D1321] p-8 md:p-10 rounded-[2.5rem] border border-emerald-500/20 shadow-2xl flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full"></div>
            <div className="w-28 h-28 relative rounded-full overflow-hidden border-4 border-[#0B0F19] shadow-[0_0_0_2px_rgba(16,185,129,0.5)] flex-shrink-0">
              <Image src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=200&auto=format&fit=crop" alt="RbxVibe Team" fill className="object-cover" />
            </div>
            <div className="text-center md:text-left relative z-10">
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2 block">Content Creator</span>
              <h4 className="text-2xl font-black text-white mb-3">The RbxVibe Editorial Team</h4>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Written by our dedicated team of gaming experts. We spend hundreds of hours testing games, verifying promo codes, and analyzing hardware so you don't have to.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-32 space-y-8">
            <div className="w-full h-[600px] bg-gradient-to-b from-[#111827] to-[#0D1321] rounded-[2rem] border border-white/5 flex flex-col items-center justify-center p-6 text-center shadow-xl">
               <span className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-4">Advertisement (300x600)</span>
               <div className="w-full h-full bg-[#0B0F19]/50 rounded-xl border border-dashed border-white/10 flex items-center justify-center">
                  <p className="text-slate-600 font-medium">Ad Space Ready</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}