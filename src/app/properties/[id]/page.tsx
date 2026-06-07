import { properties } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Maximize2, BedDouble, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const property = properties.find((p) => p.id === params.id);
  if (!property) notFound();

  return (
    <div className="min-h-screen bg-cream-50 pt-24">
      {/* Hero image */}
      <div className="relative h-72 md:h-[480px] w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6">
          <span className="px-3 py-1 rounded-full bg-terra-500 text-white text-xs font-medium">
            {property.listing === "sale" ? "For Sale" : "For Rent"}
          </span>
          <h1 className="font-display text-3xl md:text-5xl text-white mt-3">
            {property.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-stone-500 text-sm mb-6">
              <MapPin className="w-4 h-4" /> {property.location}
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              {property.description}
            </p>
            <h2 className="font-display text-2xl text-stone-900 mb-4">Features</h2>
            <ul className="grid grid-cols-2 gap-3">
              {property.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-stone-600 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm sticky top-28">
              <p className="font-display text-3xl font-semibold text-forest-700 mb-1">
                €{property.price.toLocaleString("de-DE")}
              </p>
              {property.priceUnit.includes("mo") && (
                <p className="text-stone-400 text-sm mb-4">per month</p>
              )}
              <div className="flex gap-4 text-stone-500 text-sm py-4 border-y border-stone-100 mb-6">
                <span className="flex items-center gap-1.5">
                  <Maximize2 className="w-4 h-4" /> {property.area} m²
                </span>
                {property.rooms > 0 && (
                  <span className="flex items-center gap-1.5">
                    <BedDouble className="w-4 h-4" /> {property.rooms} rooms
                  </span>
                )}
              </div>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 rounded-xl
                           bg-forest-700 text-white font-medium hover:bg-forest-500 transition-colors"
              >
                Request Info
              </Link>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 mt-3 rounded-xl
                           border border-stone-200 text-stone-700 font-medium
                           hover:bg-stone-50 transition-colors text-sm"
              >
                Schedule Viewing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}