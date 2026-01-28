export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  images?: string[];
  rating: number;
  reviews: number;
  likes?: number;
  affiliateUrl: string;
  tags: string[];
  isValentinePick?: boolean;
  mood?: string;
  occasion?: string[];
  relationshipStage?: string[];
  // New category structure
  mainCategory?: string;
  subCategory?: string;
  // Legacy category field (for backward compatibility)
  category?: string;
  // Pricing fields
  originalPrice?: number;
  discount?: string;
  currency?: string;
}

export interface MainCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const mainCategories: MainCategory[] = [
  {
    id: "gifts-for-him",
    name: "Gifts for Him",
    description: "Thoughtful gifts for the men in your life",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=600&fit=crop",
    subCategories: [
      { id: "him-accessories", name: "Accessories", description: "Stylish watches, wallets, and more", icon: "👔" },
      { id: "him-grooming", name: "Grooming", description: "Premium grooming products", icon: "💈" },
      { id: "him-gadgets-desk", name: "Gadgets & Desk", description: "Tech and workspace essentials", icon: "⌨️" },
      { id: "him-fashion", name: "Fashion", description: "Clothing and apparel", icon: "👕" },
    ],
  },
  {
    id: "gifts-for-her",
    name: "Gifts for Her",
    description: "Elegant gifts for the special women in your life",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop",
    subCategories: [
      { id: "her-accessories", name: "Accessories", description: "Jewelry, scarves, and more", icon: "💎" },
      { id: "her-beauty", name: "Beauty & Self-Care", description: "Skincare and wellness", icon: "💄" },
      { id: "her-keepsakes", name: "Keepsakes", description: "Memorable treasures", icon: "📦" },
      { id: "her-soft-toys", name: "Soft Toys", description: "Cuddly companions", icon: "🧸" },
    ],
  },
  {
    id: "couples-matching",
    name: "Couple & Matching",
    description: "Share the moment together with matching gifts",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=600&fit=crop",
    subCategories: [
      { id: "matching-apparel", name: "Matching Apparel", description: "Coordinated clothing", icon: "👕" },
      { id: "matching-accessories", name: "Matching Accessories", description: "His & hers collections", icon: "💍" },
      { id: "bedroom-decor", name: "Bedroom & Decor", description: "Home comfort items", icon: "🛏️" },
      { id: "experiences", name: "Experiences", description: "Create memories together", icon: "✈️" },
    ],
  },
  {
    id: "jewelry",
    name: "Jewelry",
    description: "Timeless pieces for every moment",
    image: "https://images.unsplash.com/photo-1515562141207-6461a4b0b5f4?w=600&h=600&fit=crop",
    subCategories: [
      { id: "jewelry-personalized", name: "Personalized", description: "Custom engraved pieces", icon: "✨" },
      { id: "jewelry-couple-sets", name: "Couple Sets", description: "Matching pair collections", icon: "💑" },
      { id: "jewelry-fashion", name: "Fashion Jewelry", description: "Trendy accessories", icon: "💎" },
      { id: "jewelry-premium", name: "Premium / Precious", description: "Gold, silver, and gemstones", icon: "👑" },
    ],
  },
  {
    id: "games-fun",
    name: "Games & Fun",
    description: "Playful gifts for laughter and bonding",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=600&fit=crop",
    subCategories: [
      { id: "games-party", name: "Party & Group", description: "Games for gatherings", icon: "🎉" },
      { id: "games-intimate", name: "Intimate & Spicy", description: "Adult fun games", icon: "🔥" },
      { id: "games-conversation", name: "Conversation Starters", description: "Getting to know you games", icon: "💬" },
      { id: "games-pranks", name: "Pranks & Gags", description: "Funny surprises", icon: "😂" },
    ],
  },
  {
    id: "sentimental-letters",
    name: "Sentimental & Letters",
    description: "Heartfelt gifts from the heart",
    image: "https://images.unsplash.com/photo-1531256379416-9f000e90aacc?w=600&h=600&fit=crop",
    subCategories: [
      { id: "sentimental-diy", name: "DIY Kits", description: "Create together kits", icon: "🎨" },
      { id: "sentimental-letters", name: "Written Words", description: "Love letters and journals", icon: "📝" },
      { id: "sentimental-memories", name: "Printed Memories", description: "Photo gifts and albums", icon: "📸" },
      { id: "sentimental-cards", name: "Greeting Cards", description: "Special occasion cards", icon: "💌" },
    ],
  },
  {
    id: "flowers-chocolates",
    name: "Flowers & Chocolates",
    description: "Classic romantic gifts",
    image: "https://images.unsplash.com/photo-1518972911457-f6b7851e4872?w=600&h=600&fit=crop",
    subCategories: [
      { id: "flowers-fresh", name: "Fresh Blooms", description: "Fresh cut flowers", icon: "🌹" },
      { id: "flowers-forever", name: "Forever Flowers", description: "Preserved flowers", icon: "🌺" },
      { id: "chocolates-regular", name: "Chocolates", description: "Gourmet chocolate boxes", icon: "🍫" },
      { id: "chocolates-edible", name: "Edible Fun", description: "Playful treats and nibbles", icon: "🍬" },
    ],
  },
  {
    id: "combos-hampers",
    name: "Combos & Hampers",
    description: "Complete gift sets for every occasion",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop",
    subCategories: [
      { id: "combos-curated", name: "Curated Boxes", description: "Thoughtfully assembled sets", icon: "📦" },
      { id: "combos-luxury", name: "Luxury Hampers", description: "Premium gift collections", icon: "👑" },
      { id: "combos-budget", name: "Budget Combos", description: "Affordable multi-item sets", icon: "💰" },
    ],
  },
  {
    id: "health-lifestyle",
    name: "Health & Lifestyle",
    description: "Wellness gifts for self-care",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop",
    subCategories: [
      { id: "health-fitness", name: "Fitness Gear", description: "Exercise and workout items", icon: "🏋️" },
      { id: "health-wellness", name: "Wellness", description: "Yoga, meditation, and relaxation", icon: "🧘" },
      { id: "health-eco", name: "Eco-Friendly", description: "Sustainable and green products", icon: "🌱" },
    ],
  },
  {
    id: "tech-gadgets",
    name: "Tech & Gadgets",
    description: "Modern tech gifts",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    subCategories: [
      { id: "tech-music", name: "Music & Audio", description: "Speakers, headphones, and more", icon: "🎵" },
      { id: "tech-charging", name: "Utility & Charging", description: "Chargers and power banks", icon: "🔌" },
      { id: "tech-smart", name: "Smart Accessories", description: "Smart home devices", icon: "📱" },
    ],
  },
  {
    id: "home-living",
    name: "Home & Living",
    description: "Create a cozy space together",
    image: "https://images.unsplash.com/photo-1567538096051-b6643a25f319?w=600&h=600&fit=crop",
    subCategories: [
      { id: "home-kitchen", name: "Kitchen & Dining", description: "Cookware and dining essentials", icon: "🍽️" },
      { id: "home-comfort", name: "Comfort & Bedding", description: "Luxurious linens and pillows", icon: "🛏️" },
      { id: "home-wall-art", name: "Wall Art & Decor", description: "Art prints and decorations", icon: "🖼️" },
    ],
  },
];

// Flatten categories for compatibility
export const categories = mainCategories;

export const moods = [
  { id: "romantic", name: "Romantic", emoji: "💕" },
  { id: "playful", name: "Playful", emoji: "✨" },
  { id: "cozy", name: "Cozy", emoji: "🧸" },
  { id: "adventurous", name: "Adventurous", emoji: "🌟" },
  { id: "sentimental", name: "Sentimental", emoji: "📖" },
];

export const occasions = [
  { id: "anniversary", name: "Anniversary", emoji: "💍" },
  { id: "valentines", name: "Valentine's Day", emoji: "💝" },
  { id: "birthday", name: "Birthday", emoji: "🎂" },
  { id: "just-because", name: "Just Because", emoji: "💫" },
  { id: "apology", name: "Apology", emoji: "🌹" },
  { id: "long-distance", name: "Long Distance", emoji: "✈️" },
];

export const relationshipStages = [
  { id: "new", name: "Just Started Dating", emoji: "🌱" },
  { id: "dating", name: "Dating (6+ months)", emoji: "💑" },
  { id: "serious", name: "Serious Relationship", emoji: "💕" },
  { id: "engaged", name: "Engaged", emoji: "💍" },
  { id: "married", name: "Married", emoji: "👫" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "TreasureBox Wooden Personalized Photo Jigsaw Puzzle (A4)",
    description: "Turn your favorite memory into a fun activity. This 120-piece personalized jigsaw puzzle is made of high-quality engineered wood (MDF) and can be customized with any photo—perfect for couples, families, or a unique proposal.",
    price: 379,
    originalPrice: 699,
    discount: "46%",
    currency: "INR",
    images: [
      "https://m.media-amazon.com/images/I/71RQjFIr1cL._SX500_.jpg",
      "https://m.media-amazon.com/images/I/611a+7XsxRL._SX500_.jpg",
      "https://m.media-amazon.com/images/I/61jK6LUDVtL._SX500_.jpg",
      "https://m.media-amazon.com/images/I/51Mb97J+BAL.jpg"
    ],
    image: "https://m.media-amazon.com/images/I/71RQjFIr1cL._SX500_.jpg",
    mainCategory: "sentimental-letters",
    subCategory: "printed-memories",
    category: "sentimental-letters",
    rating: 4.4,
    reviews: 0,
    likes: 0,
    affiliateUrl: "https://amzn.to/4q3yPDo",
    tags: ["personalized", "puzzle", "wood", "interactive", "photo-gift"],
    isValentinePick: true,
    mood: "playful",
    occasion: ["anniversary", "birthday", "valentines", "house-warming"],
    relationshipStage: ["new", "serious", "married", "friends"],
  },
  {
    id: "3",
    name: "Taboo Board Game - Hasbro Gaming",
    description: "It's the game of unspeakable fun! Race against the timer to get your team to say the Guess word without saying any of the forbidden Taboo words. This classic party game now features trendy pop culture topics and includes 212 cards with 848 guess words. Perfect for 4+ players.",
    price: 1354,
    originalPrice: 1999,
    discount: "32%",
    currency: "INR",
    images: [
      "https://m.media-amazon.com/images/I/51vRAvDi7qL._SX500_.jpg",
      "https://m.media-amazon.com/images/I/51IVWR-TW-L._SX500_.jpg",
      "https://m.media-amazon.com/images/I/41gZwRZJo6L._SX500_.jpg",
      "https://m.media-amazon.com/images/I/61MzwMJiHdL._SX500_.jpg"
    ],
    image: "https://m.media-amazon.com/images/I/51IVWR-TW-L._SX500_.jpg",
    mainCategory: "games-fun",
    subCategory: "games-party",
    category: "games-fun",
    rating: 4.6,
    reviews: 0,
    likes: 0,
    affiliateUrl: "https://amzn.to/4k4cpAF",
    tags: ["party-game", "word-game", "group-activity", "fun", "classic"],
    isValentinePick: false,
    mood: "playful",
    occasion: ["game-night", "party", "birthday", "get-together"],
    relationshipStage: ["friends", "dating", "married", "family"],
  },
  {
    id: "4",
    name: "MAGMATE Original Magnetic Board Game (Classic)",
    description: "A fun and portable strategy game for all ages. This set includes 24 uniquely shaped magnets, a rope, and a travel pouch. It challenges players to place their magnets without letting them attract together—perfect for building focus and problem-solving skills during travel or family game nights.",
    price: 425,
    originalPrice: 1499,
    discount: "72%",
    currency: "INR",
    images: [
      "https://m.media-amazon.com/images/I/81LPcvcxZkL._SX500_.jpg",
      "https://m.media-amazon.com/images/I/81PoPe1pFrL._SX500_.jpg",
      "https://m.media-amazon.com/images/I/813knjph1RL._SX500_.jpg",
      "https://m.media-amazon.com/images/I/81O++EZVLsL._SX500_.jpg"
    ],
    image: "https://m.media-amazon.com/images/I/81LPcvcxZkL._SX500_.jpg",
    mainCategory: "games-fun",
    subCategory: "games-party",
    category: "games-fun",
    rating: 4.5,
    reviews: 0,
    likes: 0,
    affiliateUrl: "https://amzn.to/3Z3SYOS",
    tags: ["magnetic", "strategy", "travel-friendly", "family-game", "puzzle"],
    isValentinePick: false,
    mood: "playful",
    occasion: ["game-night", "travel", "birthday", "family-gathering"],
    relationshipStage: ["friends", "family", "married"],
  },
  {
    id: "5",
    name: "ROSTON Triggle Game: Triangle Building Board Game",
    description: "A fun strategy board game where players use elastic ropes to build triangles. Perfect for family gatherings and parties, it helps exercise observation and spatial skills. The first player to use up all their chess pieces by claiming triangles wins.",
    price: 349,
    originalPrice: 999,
    discount: "65%",
    currency: "INR",
    images: [
      "https://m.media-amazon.com/images/I/61WRNciEugL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/91R41EmdHaL._SX569_.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/e3283d70-e647-41b2-821d-af9b3d209e7c.__CR0,0,970,600_PT0_SX970_V1___.jpg",
      "https://m.media-amazon.com/images/I/81UVXpo7wzL._SL1500_.jpg"
    ],
    image: "https://m.media-amazon.com/images/I/61WRNciEugL._SX569_.jpg",
    mainCategory: "games-fun",
    subCategory: "games-party",
    category: "games-fun",
    rating: 4.6,
    reviews: 0,
    likes: 0,
    affiliateUrl: "https://amzn.to/3ZBzukJ",
    tags: ["strategy", "board-game", "family", "kids", "educational"],
    isValentinePick: false,
    mood: "playful",
    occasion: ["game-night", "family-gathering", "kids-party"],
    relationshipStage: ["family", "friends", "married"],
  },
  {
    id: "6",
    name: "Clapjoy Slingo Fastest Finger First Board Game",
    description: "A fast-paced, 2-player wooden string hockey game. Use the elastic rope to launch pucks through the gate until your side is empty. Portable and battery-free, it improves hand-eye coordination and is perfect for parties, family bonding, and screen-free fun.",
    price: 601,
    originalPrice: 849,
    discount: "29%",
    currency: "INR",
    images: [
      "https://m.media-amazon.com/images/I/41eOi-mhF1L._SX500_.jpg",
      "https://m.media-amazon.com/images/I/51oZVSqQSNL._SX500_.jpg",
      "https://m.media-amazon.com/images/I/51-lmw2xf-L._SX500_.jpg",
      "https://m.media-amazon.com/images/S/aplus-media-library-service-media/4e2c8158-2589-4694-bf8b-f77dd26ab16f.__CR0,1,1207,747_PT0_SX970_V1___.jpg"
    ],
    image: "https://m.media-amazon.com/images/I/41eOi-mhF1L._SX500_.jpg",
    mainCategory: "games-fun",
    subCategory: "games-party",
    category: "games-fun",
    rating: 4.2,
    reviews: 0,
    likes: 0,
    affiliateUrl: "https://amzn.to/3LXzIzm",
    tags: ["wooden", "sling-puck", "fast-paced", "family-game", "coordination", "table-hockey"],
    isValentinePick: false,
    mood: "playful",
    occasion: ["game-night", "birthday", "christmas", "family-gathering"],
    relationshipStage: ["friends", "family", "dating", "married"],
  },
];

export const getValentinePicks = () => {
  return products.filter((product) => product.isValentinePick);
};

export const getProductsByMood = (moodId: string) => {
  return products.filter((product) => product.mood === moodId);
};

export const searchProducts = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      (product.mainCategory?.toLowerCase().includes(lowerQuery) ?? false) ||
      (product.subCategory?.toLowerCase().includes(lowerQuery) ?? false) ||
      (product.category?.toLowerCase().includes(lowerQuery) ?? false)
  );
};

// New helper functions for category organization
export const getMainCategoryById = (mainCategoryId: string) => {
  return mainCategories.find((cat) => cat.id === mainCategoryId);
};

export const getSubCategoryById = (mainCategoryId: string, subCategoryId: string) => {
  const mainCat = getMainCategoryById(mainCategoryId);
  return mainCat?.subCategories.find((sub) => sub.id === subCategoryId);
};

export const getProductsByMainCategory = (mainCategoryId: string) => {
  return products.filter(
    (product) => product.mainCategory === mainCategoryId || (product as any).category === mainCategoryId
  );
};

export const getProductsBySubCategory = (mainCategoryId: string, subCategoryId: string) => {
  return products.filter(
    (product) =>
      (product.mainCategory === mainCategoryId && product.subCategory === subCategoryId)
  );
};

export const getProductsByCategory = (categoryId: string) => {
  // For backward compatibility, treat categoryId as either mainCategory or old category
  return products.filter(
    (product) => 
      product.mainCategory === categoryId || 
      (product as any).category === categoryId
  );
};

export const getQuizRecommendations = (
  stage: string,
  budget: string,
  occasion: string,
  recipient: string
) => {
  let filtered = [...products];

  // Filter by relationship stage
  if (stage) {
    filtered = filtered.filter((p) => p.relationshipStage?.includes(stage));
  }

  // Filter by occasion
  if (occasion) {
    filtered = filtered.filter((p) => p.occasion?.includes(occasion));
  }

  // Filter by recipient (category) - works with both old and new structure
  if (recipient === "her") {
    filtered = filtered.filter(
      (p) => 
        p.mainCategory === "gifts-for-her" || 
        p.mainCategory === "couples-matching" ||
        p.mainCategory === "sentimental-letters" ||
        p.mainCategory === "jewelry" ||
        (p as any).category === "for-her" || 
        (p as any).category === "for-couples" || 
        (p as any).category === "memory-gifts"
    );
  } else if (recipient === "him") {
    filtered = filtered.filter(
      (p) => 
        p.mainCategory === "gifts-for-him" || 
        p.mainCategory === "couples-matching" ||
        p.mainCategory === "sentimental-letters" ||
        p.mainCategory === "jewelry" ||
        (p as any).category === "for-him" || 
        (p as any).category === "for-couples" || 
        (p as any).category === "memory-gifts"
    );
  }

  // Filter by budget
  if (budget === "under-50") {
    filtered = filtered.filter((p) => p.price < 50);
  } else if (budget === "50-100") {
    filtered = filtered.filter((p) => p.price >= 50 && p.price <= 100);
  } else if (budget === "100-150") {
    filtered = filtered.filter((p) => p.price > 100 && p.price <= 150);
  } else if (budget === "over-150") {
    filtered = filtered.filter((p) => p.price > 150);
  }

  // Sort by rating
  return filtered.sort((a, b) => b.rating - a.rating).slice(0, 8);
};
