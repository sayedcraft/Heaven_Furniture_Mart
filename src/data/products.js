export const products = [
  // Flagship pieces
  {
    id: "flagship-1",
    name: "The Signature Sofa",
    category: "sofa",
    image: "/image/Livingroom.jpg",
    collection: "Flagship",
    description: "A considered centerpiece for everyday life",
    featured: true,
  },
  {
    id: "flagship-2",
    name: "The Haven Bed",
    category: "bed",
    image: "/image/Bedroom.jpg",
    collection: "Flagship",
    description: "A calm foundation for the room you return to",
    featured: true,
  },
  {
    id: "flagship-3",
    name: "The Dining Statement",
    category: "dining-table",
    image: "/image/Diningroom.jpg",
    collection: "Flagship",
    description: "Made for long conversations and shared meals",
    featured: true,
  },
  {
    id: "flagship-4",
    name: "The Executive Desk",
    category: "other",
    image: "/image/Office.jpg",
    collection: "Flagship",
    description: "A focused surface, made to fit the way you work",
    featured: true,
  },
  {
    id: "flagship-5",
    name: "The Media Console",
    category: "other",
    image: "/image/TV_Unit.jpg",
    collection: "Flagship",
    description: "Quiet utility with a strong architectural line",
    featured: true,
  },

  // Popular pieces
  {
    id: "popular-1",
    name: "The Lounge Chair",
    category: "chair",
    image: "/image/Custom.jpg",
    collection: "Popular",
    description: "Comfort meets contemporary design",
  },
  {
    id: "popular-2",
    name: "The Wardrobe",
    category: "other",
    image: "/image/Wardrobe.jpg",
    collection: "Popular",
    description: "Storage shaped around the character of your space",
  },
  {
    id: "popular-3",
    name: "The Accent Mirror",
    category: "mirror",
    image: "/image/Bespoke.jpg",
    collection: "Popular",
    description: "A tailored detail that completes a room",
  },
  {
    id: "popular-4",
    name: "The Corner Console",
    category: "other",
    image: "/image/bes.jpg",
    collection: "Popular",
    description: "Elegant utility for refined spaces",
  },

  // Artistic/New pieces
  {
    id: "artistic-1",
    name: "The Sculptural Sofa",
    category: "sofa",
    image: "/image/Livingroom.jpg",
    collection: "Artistic",
    description: "Where form and function become art",
  },
  {
    id: "artistic-2",
    name: "The Statement Bed",
    category: "bed",
    image: "/image/Bedroom.jpg",
    collection: "Artistic",
    description: "A dramatic presence in your personal sanctuary",
  },
];

export function getProductsByCategory(categoryId) {
  return products.filter((p) => p.category === categoryId);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getProductsByCollection(collection) {
  return products.filter((p) => p.collection === collection);
}
