export type PropertyType =
  | "apartment"
  | "house"
  | "land"
  | "commercial"
  | "project";

export type ListingType = "sale" | "rent";

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  priceUnit: string; // "€" etc.
  type: PropertyType;
  listing: ListingType;
  area: number;       // m²
  rooms: number;
  image: string;
  badge?: string;     // "New" | "Top Offer" etc.
  description: string;
  features: string[];
}