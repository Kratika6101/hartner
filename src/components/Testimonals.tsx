"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie & Markus W.",
    location: "Linz",
    rating: 5,
    text: "Alpine Estates found us our dream home in just three weeks. Their team listened to every detail we cared about and never wasted our time with wrong suggestions.",
  },
  {
    name: "Dr. Gerhard H.",
    location: "Vienna",
    rating: 5,
    text: "Selling our investment property was effortless. They handled everything professionally, achieved a price above our expectation, and kept us informed throughout.",
  },
  {
    name: "Familie Gruber",
    location: "Salzburg",
    rating: 5,
    text: "Moving from Germany, we knew nothing about the Austrian market. The team guided us through every step — legal, financial, neighbourhood advice. Outstanding service.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-terra-500 text-xs tracking-widest uppercase font-medium mb-4">
          Client stories
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-16">
          What our clients say
        </h2>

        {/* Quote */}
        <div className="relative bg-white rounded-3xl p-10 md:p-14 shadow-xl shadow-stone-100
                        border border-stone-100 mb-8">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-terra-400 fill-terra-400" />
            ))}
          </div>

          {/* Quote mark */}
          <span className="absolute top-6 left-8 font-display text-8xl text-cream-200 leading-none select-none">
            "
          </span>

          <blockquote className="font-display text-xl md:text-2xl text-stone-700 italic
                                  leading-relaxed mb-8 relative z-10">
            {t.text}
          </blockquote>

          <div>
            <p className="font-medium text-stone-900">{t.name}</p>
            <p className="text-stone-400 text-sm">{t.location}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center
                       hover:bg-stone-100 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-stone-600" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-terra-500" : "w-2 bg-stone-200"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center
                       hover:bg-stone-100 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-stone-600" />
          </button>
        </div>
      </div>
    </section>
  );
}