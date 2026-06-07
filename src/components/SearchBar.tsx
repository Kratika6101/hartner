"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar() {
  const router = useRouter();
  const [type,     setType]     = useState("all");
  const [listing,  setListing]  = useState("sale");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams({ type, listing, location });
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-0 rounded-2xl overflow-hidden
                    bg-white/10 backdrop-blur-md border border-white/20
                    max-w-2xl shadow-2xl shadow-stone-900/30">
      {/* Listing type toggle */}
      <div className="flex border-b sm:border-b-0 sm:border-r border-white/20">
        {["sale", "rent"].map((l) => (
          <button
            key={l}
            onClick={() => setListing(l)}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors capitalize
              ${listing === l
                ? "bg-terra-500 text-white"
                : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
          >
            {l === "sale" ? "Buy" : "Rent"}
          </button>
        ))}
      </div>

      {/* Property type */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="px-4 py-4 bg-transparent text-white/80 text-sm
                   border-b sm:border-b-0 sm:border-r border-white/20
                   focus:outline-none cursor-pointer
                   [&>option]:bg-stone-900 [&>option]:text-white"
      >
        <option value="all">All Types</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="land">Land</option>
        <option value="commercial">Commercial</option>
        <option value="project">New Project</option>
      </select>

      {/* Location input */}
      <input
        type="text"
        placeholder="City, zip code or region…"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="flex-1 px-6 py-4 bg-transparent text-white placeholder-white/40
                   text-sm focus:outline-none"
      />

      {/* Search button */}
      <button
        onClick={handleSearch}
        className="px-6 py-4 bg-forest-700 hover:bg-forest-500 text-white
                   transition-colors flex items-center gap-2 text-sm font-medium
                   group"
      >
        <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">Search</span>
      </button>
    </div>
  );
}