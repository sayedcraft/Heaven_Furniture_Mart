export const products = [
  // Flagship pieces
  {
    id: "flagship-1",
    name: "The Signature Sofa",
    slug: "the-signature-sofa",
    category: "sofa",
    image: "/image/Livingroom.jpg",
    collection: "Flagship",
    description: "A considered centerpiece for everyday life",
    price: null,
    material: "Solid wood frame with premium upholstery",
    dimensions: "240 × 95 × 82 cm",
    customization: "Available in custom dimensions, fabrics, and finishes.",
    featured: true,
  },
  {
    id: "flagship-2",
    name: "The Haven Bed",
    slug: "the-haven-bed",
    category: "bed",
    image: "/image/Bedroom.jpg",
    collection: "Flagship",
    description: "A calm foundation for the room you return to",
    price: null,
    material: "Solid wood with a hand-finished veneer",
    dimensions: "180 × 210 × 110 cm",
    customization: "Made to order in your preferred size and finish.",
    featured: true,
  },
  {
    id: "flagship-3",
    name: "The Dining Statement",
    slug: "the-dining-statement",
    category: "dining-table",
    image: "/image/Diningroom.jpg",
    collection: "Flagship",
    description: "Made for long conversations and shared meals",
    price: null,
    material: "Engineered wood with a natural wood finish",
    dimensions: "220 × 100 × 76 cm",
    customization: "Choose the length, finish, and seating configuration.",
    featured: true,
  },
  {
    id: "flagship-4",
    name: "The Executive Desk",
    slug: "the-executive-desk",
    category: "other",
    image: "/image/Office.jpg",
    collection: "Flagship",
    description: "A focused surface, made to fit the way you work",
    price: null,
    material: "Solid wood and durable matte laminate",
    dimensions: "160 × 75 × 76 cm",
    customization: "Cable management and storage can be tailored to your work.",
    featured: true,
  },
  {
    id: "flagship-5",
    name: "The Media Console",
    slug: "the-media-console",
    category: "other",
    image: "/image/TV_Unit.jpg",
    collection: "Flagship",
    description: "Quiet utility with a strong architectural line",
    price: null,
    material: "Veneered board with solid wood detailing",
    dimensions: "180 × 45 × 55 cm",
    customization:
      "Configure the storage, dimensions, and finish for your room.",
    featured: true,
  },

  // Popular pieces
  {
    id: "popular-1",
    name: "The Lounge Chair",
    slug: "the-lounge-chair",
    category: "chair",
    image: "/image/Custom.jpg",
    collection: "Popular",
    description: "Comfort meets contemporary design",
    price: null,
    material: "Solid wood frame with tailored upholstery",
    dimensions: "78 × 82 × 80 cm",
    customization:
      "Available in a considered selection of fabrics and finishes.",
  },
  {
    id: "popular-2",
    name: "The Wardrobe",
    slug: "the-wardrobe",
    category: "other",
    image: "/image/Wardrobe.jpg",
    collection: "Popular",
    description: "Storage shaped around the character of your space",
    price: null,
    material: "Moisture-resistant board with wood veneer",
    dimensions: "180 × 60 × 210 cm",
    customization:
      "Interior storage and external dimensions are made to measure.",
  },
  {
    id: "popular-3",
    name: "The Accent Mirror",
    slug: "the-accent-mirror",
    category: "mirror",
    image: "/image/Bespoke.jpg",
    collection: "Popular",
    description: "A tailored detail that completes a room",
    price: null,
    material: "High-clarity mirror with a crafted wood frame",
    dimensions: "90 × 5 × 120 cm",
    customization: "Select the frame finish and preferred dimensions.",
  },
  {
    id: "popular-4",
    name: "The Corner Console",
    slug: "the-corner-console",
    category: "other",
    image: "/image/bes.jpg",
    collection: "Popular",
    description: "Elegant utility for refined spaces",
    price: null,
    material: "Veneered board with solid wood accents",
    dimensions: "120 × 40 × 80 cm",
    customization: "Adapt the size, storage, and finish to your space.",
  },

  // Artistic/New pieces
  {
    id: "artistic-1",
    name: "The Sculptural Sofa",
    slug: "the-sculptural-sofa",
    category: "sofa",
    image: "/image/Livingroom.jpg",
    collection: "Artistic",
    description: "Where form and function become art",
    price: null,
    material: "Solid wood frame with premium textured upholstery",
    dimensions: "260 × 100 × 78 cm",
    customization: "Commission a unique silhouette, fabric, or configuration.",
  },
  {
    id: "artistic-2",
    name: "The Statement Bed",
    slug: "the-statement-bed",
    category: "bed",
    image: "/image/Bedroom.jpg",
    collection: "Artistic",
    description: "A dramatic presence in your personal sanctuary",
    price: null,
    material: "Solid wood with upholstered headboard detailing",
    dimensions: "180 × 210 × 125 cm",
    customization: "Available in custom sizes, upholstery, and wood finishes.",
  },
];

export function getProductsByCategory(categoryId) {
  return products.filter((p) => p.category === categoryId);
}

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getProductsByCollection(collection) {
  return products.filter((p) => p.collection === collection);
}
