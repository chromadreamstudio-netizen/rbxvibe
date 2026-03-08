"use client";

import { useState } from "react";
import Link from "next/link";

// قاعدة بيانات العروض المحدثة برابط الأفيليت الخاص بك
const affiliateDeals = [
  {
    id: 1,
    title: "NordVPN - 2 Year Pro Plan",
    description: "Zero ping, ultimate security. Bypass IP bans and play in any region securely. Trusted by pro gamers.",
    oldPrice: "$286.00",
    newPrice: "$83.76",
    discount: "71% OFF",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Services",
    link: "https://www.tkqlhce.com/click-101702265-14471514", // تم إضافة رابطك الخاص هنا بنجاح
    color: "from-blue-600 to-indigo-600",
    glow: "shadow-blue-500/20",
    badge: "Best for Gaming"
  },
  {
    id: 2,
    title: "GameFly - 1 Month Free Trial",
    description: "Stop paying full price. Rent the latest PS5 and Xbox games delivered to your door.",
    oldPrice: "$15.95",
    newPrice: "$0.00",
    discount: "100% FREE",
    image: "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Services",
    link: "#",
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-cyan-500/20",
    badge: "Hot Deal"
  },
  {
    id: 3,
    title: "Razer DeathAdder V3 Pro",
    description: "Ultra-lightweight wireless esports mouse. Dominate your aim training with perfect tracking.",
    oldPrice: "$149.99",
    newPrice: "$119.99",
    discount: "20% OFF",
    image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Hardware",
    link: "#",
    color: "from-emerald-500 to-green-500",
    glow: "shadow-emerald-500/20",
    badge: "Pro Gear"
  },
  {
    id: 4,
    title: "Roblox 10,000 Robux Code",
    description: "Instant digital delivery. Max out your Blox Fruits account and get limited items.",
    oldPrice: "$100.00",
    newPrice: "$89.99",
    discount: "10% OFF",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Game Keys",
    link: "#",
    color: "from-yellow-500 to-orange-500",
    glow: "shadow-yellow-500/20",
    badge: "Instant Delivery"
  },
  {
    id: 5,
    title: "GTA VI - Secure Pre-order",
    description: "Secure your copy of the most anticipated game of the decade at a discounted rate.",
    oldPrice: "$69.99",
    newPrice: "$59.99",
    discount: "14% OFF",
    image: "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Game Keys",
    link: "#",
    color: "from-rose-500 to-pink-500",
    glow: "shadow-rose-500/20",
    badge: "Trending"
  },
  {
    id: 6,
    title: "Secretlab TITAN Evo Chair",
    description: "The ultimate gaming chair. Play for 12 hours straight without back pain.",
    oldPrice: "$549.00",
    newPrice: "$499.00",
    discount: "Save $50",
    image: "https://images.pexels.com/photos/7862553/pexels-photo-7862553.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Hardware",
    link: "#",
    color: "from-slate-400 to-slate-600",
    glow: "shadow-slate-500/20",
    badge: "Premium"
  }
];

export default function AffiliateDealsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Hardware", "Game Keys", "Services"];

  const filteredDeals = activeFilter === "All" 
    ? affiliateDeals 
    : affiliateDeals.filter(deal => deal.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto mt-12 px-4 pb-24 animate-fade-in">
      
      <div className="text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-rose-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
          <span className="text-rose-400 font-bold text-sm tracking-widest uppercase">💸 Partner Offers</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Pro Gaming <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-500">Loot</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Stop paying full price. We scrape the web for the best gaming deals, hardware discounts, and exclusive affiliate offers.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-8 py-3 rounded-full font-bold transition-all border ${
              activeFilter === category
                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                : "bg-[#0B0F19] text-slate-400 border-white/10 hover:border-white/30 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {filteredDeals.map((deal) => (
          <div key={deal.id} className={`group bg-[#0B0F19] rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl hover:${deal.glow}`}>
            
            <div className="relative h-64 w-full overflow-hidden bg-[#111827]">
              <div className="absolute top-4 left-4 z-20">
                <span className={`px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white font-black text-xs uppercase tracking-widest border border-white/10`}>
                  {deal.category}
                </span>
              </div>
              <div className="absolute top-4 right-4 z-20">
                <span className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${deal.color} text-white font-black text-xs uppercase tracking-widest shadow-lg`}>
                  {deal.badge}
                </span>
              </div>
              <img 
                src={deal.image} 
                alt={deal.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-10"></div>
            </div>

            <div className="p-8 pt-4 relative z-20">
              <h3 className="text-2xl font-black text-white mb-3 line-clamp-1">{deal.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium h-10 line-clamp-2">{deal.description}</p>
              
              <div className="flex items-end justify-between mb-8 border-t border-white/5 pt-6">
                <div>
                  <p className="text-slate-500 line-through text-sm font-bold mb-1">{deal.oldPrice}</p>
                  <p className="text-4xl font-black text-white">{deal.newPrice}</p>
                </div>
                <div className="text-right">
                  <span className="text-rose-400 font-black text-lg bg-rose-500/10 px-3 py-1 rounded-lg border border-rose-500/20">{deal.discount}</span>
                </div>
              </div>

              <Link href={deal.link} target="_blank" className={`block w-full text-center py-4 rounded-xl text-white font-black text-lg bg-gradient-to-r ${deal.color} hover:opacity-90 transition-opacity shadow-lg transform active:scale-95`}>
                Claim Deal &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}