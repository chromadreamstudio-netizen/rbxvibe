"use client";

import { useState } from "react";
import Link from "next/link";

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
    link: "https://www.tkqlhce.com/click-101702265-14471514",
    color: "from-blue-600 to-indigo-600",
    glow: "shadow-blue-500/20",
    badge: "Best for Gaming"
  },
  {
    id: 2,
    title: "Surfshark VPN - Special Offer",
    description: "Unlimited devices, ultra-fast speeds, and top-tier privacy. Perfect for households with multiple gaming setups.",
    oldPrice: "$12.95/mo",
    newPrice: "$2.49/mo",
    discount: "82% OFF",
    image: "https://images.pexels.com/photos/5380665/pexels-photo-5380665.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Services",
    link: "https://www.jdoqocy.com/click-101702265-17178839",
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/20",
    badge: "Unlimited Devices"
  },
  {
    id: 3,
    title: "Hostinger - Premium Web Hosting",
    description: "Start your own gaming blog, community, or store. Claim an EXTRA 20% discount on secure, fast hosting with a free domain.",
    oldPrice: "Regular Price",
    newPrice: "Extra 20% OFF",
    discount: "Exclusive Deal",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Services",
    link: "https://www.hostinger.com/tr?REFERRALCODE=137WALIDSDBF", // رابط الإحالة الخاص بك
    color: "from-purple-600 to-fuchsia-600",
    glow: "shadow-purple-500/20",
    badge: "Free Domain Included"
  },
  {
    id: 4,
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
    id: 5,
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
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">Exclusive affiliate offers curated for the RbxVibe community.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-8 py-3 rounded-full font-bold transition-all border ${
              activeFilter === category ? "bg-white text-black border-white shadow-lg scale-105" : "bg-[#0B0F19] text-slate-400 border-white/10 hover:border-white/30"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDeals.map((deal) => (
          <div key={deal.id} className={`group bg-[#0B0F19] rounded-[2.5rem] border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl hover:${deal.glow}`}>
            <div className="relative h-64 w-full overflow-hidden">
              <div className="absolute top-4 left-4 z-20">
                <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white font-black text-xs uppercase tracking-widest">{deal.category}</span>
              </div>
              <div className="absolute top-4 right-4 z-20">
                <span className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${deal.color} text-white font-black text-xs uppercase shadow-lg`}>{deal.badge}</span>
              </div>
              <img src={deal.image} alt={deal.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
            </div>

            <div className="p-8 pt-4">
              <h3 className="text-2xl font-black text-white mb-3">{deal.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 h-10 line-clamp-2">{deal.description}</p>
              <div className="flex items-end justify-between mb-8 border-t border-white/5 pt-6">
                <div>
                  <p className="text-slate-500 line-through text-sm font-bold mb-1">{deal.oldPrice}</p>
                  <p className="text-4xl font-black text-white">{deal.newPrice}</p>
                </div>
                <span className="text-rose-400 font-black text-lg bg-rose-500/10 px-3 py-1 rounded-lg border border-rose-500/20">{deal.discount}</span>
              </div>
              <Link href={deal.link} target="_blank" className={`block w-full text-center py-4 rounded-xl text-white font-black text-lg bg-gradient-to-r ${deal.color} hover:opacity-90 shadow-lg transform active:scale-95`}>
                Claim Deal &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}