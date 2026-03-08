import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";

export const metadata = {
  title: "Gaming Blog & Guides | RbxVibe",
  description: "Read the latest guides, tutorials, and hardware reviews for your favorite games.",
};

export default function BlogIndex() {
  return (
    <div className="max-w-6xl mx-auto mt-10 animate-fade-in pb-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black mb-4 text-white tracking-tight">Gaming <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Guides & News</span></h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">In-depth tutorials, hardware reviews, and industry insights built to help you dominate.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link href={`/blog/${article.slug}`} key={article.slug} className="group block bg-[#111827] rounded-[2rem] border border-white/5 overflow-hidden hover:border-emerald-500/50 transition-all duration-500 shadow-xl">
            <div className="relative h-56 w-full overflow-hidden">
              <Image 
                src={article.image} 
                alt={article.title} 
                fill 
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute top-4 left-4 bg-emerald-500 text-[#0B0F19] text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                {article.category}
              </div>
            </div>
            <div className="p-8">
              <p className="text-slate-500 text-xs font-bold mb-3 uppercase tracking-wider">{article.date}</p>
              <h2 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors leading-tight line-clamp-2">{article.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}