import { Property } from "./types";

export const properties: Property[] = [
  {
    id: "p1",
    title: "HYGGE Living — Scandinavian style in Wels",
    location: "4600 Wels, Neustadt",
    price: 246700,
    priceUnit: "€",
    type: "project",
    listing: "sale",
    area: 72,
    rooms: 2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    badge: "New Project",
    description:
      "Modern Scandinavian design meets Alpine comfort. 15 units available from 50 to 94 m².",
    features: ["Underfloor heating", "Balcony", "Cellar", "EV charging"],
  },
  {
    id: "p2",
    title: "Exclusive Family Home in Schleißheim",
    location: "4600 Schleißheim",
    price: 405000,
    priceUnit: "€",
    type: "house",
    listing: "sale",
    area: 87,
    rooms: 4,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    badge: "Top Offer",
    description:
      "High-quality new build at Farnholz. Peaceful location, generous garden, double garage.",
    features: ["Garden", "Double garage", "Smart home", "Fireplace"],
  },
  {
    id: "p3",
    title: "Penthouse with Panoramic Alps View",
    location: "4020 Linz, Old Town",
    price: 890000,
    priceUnit: "€",
    type: "apartment",
    listing: "sale",
    area: 145,
    rooms: 4,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    badge: "Exclusive",
    description:
      "Breathtaking views over the Danube and the Alps. Roof terrace, concierge service, private lift.",
    features: ["Roof terrace", "Concierge", "Private lift", "Wine cellar"],
  },
  {
    id: "p4",
    title: "Mountain Retreat — Renovated Farmhouse",
    location: "4800 Attnang-Puchheim",
    price: 320000,
    priceUnit: "€",
    type: "house",
    listing: "sale",
    area: 190,
    rooms: 6,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    description:
      "Completely renovated traditional farmhouse. Mountain views, large plot, holiday let potential.",
    features: ["Mountain view", "2400 m² plot", "Barn", "Holiday potential"],
  },
  {
    id: "p5",
    title: "Premium Office Space in City Centre",
    location: "1030 Vienna",
    price: 3800,
    priceUnit: "€/mo",
    type: "commercial",
    listing: "rent",
    area: 280,
    rooms: 8,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description:
      "Prestigious office address near the Belvedere. Fully fitted, parking, roof terrace for events.",
    features: ["Parking", "Roof terrace", "Fully fitted", "24h access"],
  },
  {
    id: "p6",
    title: "Building Plot — Alpine Village",
    location: "4844 Regau",
    price: 145000,
    priceUnit: "€",
    type: "land",
    listing: "sale",
    area: 800,
    rooms: 0,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    badge: "Land",
    description:
      "Approved building plot in a quiet Alpine village. All utilities at boundary.",
    features: ["Planning approved", "800 m²", "Mountain views", "Utilities connected"],
  },
];

export const stats = [
  { value: 1200, label: "Properties Sold",    suffix: "+" },
  { value: 98,   label: "Client Satisfaction", suffix: "%" },
  { value: 15,   label: "Years of Experience", suffix: "" },
  { value: 320,  label: "Active Listings",     suffix: "+" },
];