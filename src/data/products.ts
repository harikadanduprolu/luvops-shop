export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  affiliateUrl: string;
  tags: string[];
  isValentinePick?: boolean;
  mood?: string;
  occasion?: string[];
  relationshipStage?: string[];
}

export const categories = [
  {
    id: "for-her",
    name: "For Her",
    description: "Thoughtful gifts she'll treasure",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
  },
  {
    id: "for-him",
    name: "For Him",
    description: "Gifts he'll actually use",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&h=400&fit=crop",
  },
  {
    id: "for-couples",
    name: "For Couples",
    description: "Share the moment together",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop",
  },
  {
    id: "memory-gifts",
    name: "Memory Gifts",
    description: "Preserve your precious moments",
    image: "https://images.unsplash.com/photo-1531256379416-9f000e90aacc?w=400&h=400&fit=crop",
  },
  {
    id: "romantic-nights",
    name: "Romantic Nights",
    description: "Set the mood for love",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: "surprise-gifts",
    name: "Surprise Gifts",
    description: "Unexpected delights",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
  },
];

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
  // Memory Gifts
  {
    id: "1",
    name: "Personalized Star Map",
    description: "Capture the night sky from your special moment - first date, proposal, or anniversary. A beautiful reminder of when your stars aligned.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&h=600&fit=crop",
    category: "memory-gifts",
    rating: 4.9,
    reviews: 2341,
    affiliateUrl: "https://www.amazon.com/dp/B08XYZ1234",
    tags: ["personalized", "romantic", "wall art"],
    isValentinePick: true,
    mood: "romantic",
    occasion: ["anniversary", "valentines", "birthday"],
    relationshipStage: ["serious", "engaged", "married"],
  },
  {
    id: "2",
    name: "Couple's Massage Set",
    description: "Premium aromatherapy oils and tools for the perfect at-home spa night. Everything you need for relaxation together.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=600&fit=crop",
    category: "romantic-nights",
    rating: 4.8,
    reviews: 1567,
    affiliateUrl: "https://www.amazon.com/dp/B08ABC5678",
    tags: ["spa", "relaxation", "self-care"],
    isValentinePick: true,
    mood: "cozy",
    occasion: ["anniversary", "valentines", "just-because"],
    relationshipStage: ["dating", "serious", "engaged", "married"],
  },
  {
    id: "3",
    name: "Love Letter Blanket",
    description: "Cozy fleece blanket with your personal love letter woven into the design. Wrap yourselves in your own words.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop",
    category: "for-couples",
    rating: 4.7,
    reviews: 892,
    affiliateUrl: "https://www.amazon.com/dp/B09DEF9012",
    tags: ["personalized", "cozy", "home"],
    mood: "cozy",
    occasion: ["anniversary", "valentines", "birthday"],
    relationshipStage: ["serious", "engaged", "married"],
  },
  {
    id: "4",
    name: "Adventure Date Jar",
    description: "50 unique date ideas on elegant cards. Shake, pick, and create new memories together every week.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600&h=600&fit=crop",
    category: "for-couples",
    rating: 4.6,
    reviews: 2103,
    affiliateUrl: "https://www.amazon.com/dp/B08GHI3456",
    tags: ["dates", "experiences", "fun"],
    isValentinePick: true,
    mood: "adventurous",
    occasion: ["valentines", "just-because", "anniversary"],
    relationshipStage: ["new", "dating", "serious"],
  },
  {
    id: "5",
    name: "Silk Robe Set",
    description: "Matching his and hers luxury silk robes. Because mornings are better when you match.",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=600&fit=crop",
    category: "for-couples",
    rating: 4.9,
    reviews: 743,
    affiliateUrl: "https://www.amazon.com/dp/B08JKL7890",
    tags: ["luxury", "matching", "loungewear"],
    isValentinePick: true,
    mood: "romantic",
    occasion: ["anniversary", "valentines"],
    relationshipStage: ["engaged", "married"],
  },
  {
    id: "6",
    name: "Vintage Love Journal",
    description: "A beautifully bound journal for writing love notes, memories, and dreams together.",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop",
    category: "memory-gifts",
    rating: 4.8,
    reviews: 1234,
    affiliateUrl: "https://www.amazon.com/dp/B08MNO1234",
    tags: ["journal", "memories", "writing"],
    mood: "sentimental",
    occasion: ["anniversary", "valentines", "just-because"],
    relationshipStage: ["dating", "serious", "engaged", "married"],
  },
  {
    id: "7",
    name: "Rose Gold Jewelry Set",
    description: "Delicate matching necklace and bracelet set. Subtle elegance for everyday wear.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
    category: "for-her",
    rating: 4.9,
    reviews: 1876,
    affiliateUrl: "https://www.amazon.com/dp/B08PQR5678",
    tags: ["jewelry", "elegant", "gift set"],
    isValentinePick: true,
    mood: "romantic",
    occasion: ["anniversary", "valentines", "birthday"],
    relationshipStage: ["serious", "engaged", "married"],
  },
  {
    id: "8",
    name: "Premium Watch Box",
    description: "Handcrafted wooden watch case with velvet interior. A gift that shows you pay attention.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1587836374828-a58e58c91c81?w=600&h=600&fit=crop",
    category: "for-him",
    rating: 4.7,
    reviews: 654,
    affiliateUrl: "https://www.amazon.com/dp/B08STU9012",
    tags: ["accessories", "organization", "luxury"],
    mood: "sentimental",
    occasion: ["birthday", "anniversary", "just-because"],
    relationshipStage: ["dating", "serious", "engaged", "married"],
  },
  {
    id: "9",
    name: "Scented Candle Collection",
    description: "Set of 6 hand-poured soy candles in romantic scents. Rose, vanilla, jasmine, and more.",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1602607753066-6e1b0e56536e?w=600&h=600&fit=crop",
    category: "romantic-nights",
    rating: 4.8,
    reviews: 2987,
    affiliateUrl: "https://www.amazon.com/dp/B08VWX3456",
    tags: ["candles", "ambiance", "scented"],
    isValentinePick: true,
    mood: "romantic",
    occasion: ["valentines", "anniversary", "just-because"],
    relationshipStage: ["new", "dating", "serious", "engaged", "married"],
  },
  {
    id: "10",
    name: "Couple's Game Night Set",
    description: "Curated collection of games designed for two. From deep conversations to playful challenges.",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=600&h=600&fit=crop",
    category: "for-couples",
    rating: 4.6,
    reviews: 1432,
    affiliateUrl: "https://www.amazon.com/dp/B08YZA7890",
    tags: ["games", "fun", "quality time"],
    mood: "playful",
    occasion: ["valentines", "just-because", "anniversary"],
    relationshipStage: ["new", "dating", "serious"],
  },
  {
    id: "11",
    name: "Mystery Gift Box",
    description: "A curated surprise box delivered to your door. Different theme each month.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=600&fit=crop",
    category: "surprise-gifts",
    rating: 4.5,
    reviews: 876,
    affiliateUrl: "https://www.amazon.com/dp/B09BCD1234",
    tags: ["surprise", "subscription", "curated"],
    mood: "playful",
    occasion: ["birthday", "just-because"],
    relationshipStage: ["dating", "serious"],
  },
  {
    id: "12",
    name: "Leather Photo Album",
    description: "Hand-stitched leather album with space for 200 photos. A timeless keepsake.",
    price: 74.99,
    image: "https://images.unsplash.com/photo-1531256379416-9f000e90aacc?w=600&h=600&fit=crop",
    category: "memory-gifts",
    rating: 4.9,
    reviews: 1654,
    affiliateUrl: "https://www.amazon.com/dp/B09EFG5678",
    tags: ["photos", "memories", "leather"],
    isValentinePick: true,
    mood: "sentimental",
    occasion: ["anniversary", "valentines"],
    relationshipStage: ["serious", "engaged", "married"],
  },
  // NEW PRODUCTS - For Her
  {
    id: "13",
    name: "Preserved Rose Box",
    description: "Real roses that last a year, elegantly displayed in a luxurious velvet box.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600&h=600&fit=crop",
    category: "for-her",
    rating: 4.8,
    reviews: 2134,
    affiliateUrl: "https://www.amazon.com/dp/B09HIJ9012",
    tags: ["roses", "luxury", "romantic"],
    isValentinePick: true,
    mood: "romantic",
    occasion: ["valentines", "anniversary", "apology"],
    relationshipStage: ["dating", "serious", "engaged", "married"],
  },
  {
    id: "14",
    name: "Silk Pajama Set",
    description: "Luxuriously soft mulberry silk pajamas in blush pink. The ultimate self-care gift.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1564568979181-0c05d43d8e12?w=600&h=600&fit=crop",
    category: "for-her",
    rating: 4.9,
    reviews: 987,
    affiliateUrl: "https://www.amazon.com/dp/B09KLM3456",
    tags: ["sleepwear", "luxury", "silk"],
    mood: "cozy",
    occasion: ["birthday", "valentines", "just-because"],
    relationshipStage: ["serious", "engaged", "married"],
  },
  {
    id: "15",
    name: "Personalized Birth Flower Necklace",
    description: "Dainty gold necklace featuring her birth month flower. Thoughtful and unique.",
    price: 68.99,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
    category: "for-her",
    rating: 4.7,
    reviews: 1543,
    affiliateUrl: "https://www.amazon.com/dp/B09NOP7890",
    tags: ["necklace", "personalized", "gold"],
    mood: "sentimental",
    occasion: ["birthday", "anniversary", "just-because"],
    relationshipStage: ["new", "dating", "serious"],
  },
  {
    id: "16",
    name: "Luxury Perfume Set",
    description: "Collection of 5 mini designer perfumes in romantic florals and warm vanillas.",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop",
    category: "for-her",
    rating: 4.8,
    reviews: 2876,
    affiliateUrl: "https://www.amazon.com/dp/B09QRS1234",
    tags: ["perfume", "luxury", "fragrance"],
    mood: "romantic",
    occasion: ["birthday", "valentines", "anniversary"],
    relationshipStage: ["dating", "serious", "engaged", "married"],
  },
  // NEW PRODUCTS - For Him
  {
    id: "17",
    name: "Leather Wallet & Card Holder",
    description: "Handcrafted Italian leather wallet with RFID protection. Personalize with initials.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop",
    category: "for-him",
    rating: 4.8,
    reviews: 1876,
    affiliateUrl: "https://www.amazon.com/dp/B09TUV5678",
    tags: ["leather", "wallet", "personalized"],
    mood: "sentimental",
    occasion: ["birthday", "anniversary", "just-because"],
    relationshipStage: ["dating", "serious", "engaged", "married"],
  },
  {
    id: "18",
    name: "Whiskey Decanter Set",
    description: "Crystal decanter with 4 glasses and wooden presentation box. Sophisticated and timeless.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=600&fit=crop",
    category: "for-him",
    rating: 4.9,
    reviews: 1234,
    affiliateUrl: "https://www.amazon.com/dp/B09WXY9012",
    tags: ["barware", "luxury", "crystal"],
    mood: "sentimental",
    occasion: ["birthday", "anniversary"],
    relationshipStage: ["serious", "engaged", "married"],
  },
  {
    id: "19",
    name: "Cologne Discovery Set",
    description: "8 premium cologne samples to find his signature scent. Perfect for the undecided.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=600&fit=crop",
    category: "for-him",
    rating: 4.6,
    reviews: 987,
    affiliateUrl: "https://www.amazon.com/dp/B09ZAB3456",
    tags: ["cologne", "fragrance", "discovery"],
    mood: "playful",
    occasion: ["birthday", "valentines", "just-because"],
    relationshipStage: ["new", "dating"],
  },
  {
    id: "20",
    name: "Premium Shaving Kit",
    description: "Complete grooming set with safety razor, brush, and artisan shaving soap.",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&h=600&fit=crop",
    category: "for-him",
    rating: 4.7,
    reviews: 765,
    affiliateUrl: "https://www.amazon.com/dp/B0ACDE7890",
    tags: ["grooming", "shaving", "self-care"],
    mood: "cozy",
    occasion: ["birthday", "just-because"],
    relationshipStage: ["dating", "serious", "engaged", "married"],
  },
  // NEW PRODUCTS - For Couples
  {
    id: "21",
    name: "Couple's Cooking Class Box",
    description: "Everything for a romantic Italian dinner at home. Recipe cards, ingredients list, and wine pairing guide.",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=600&fit=crop",
    category: "for-couples",
    rating: 4.8,
    reviews: 1432,
    affiliateUrl: "https://www.amazon.com/dp/B0AFGH1234",
    tags: ["cooking", "date night", "experience"],
    mood: "adventurous",
    occasion: ["valentines", "anniversary", "just-because"],
    relationshipStage: ["dating", "serious", "engaged", "married"],
  },
  {
    id: "22",
    name: "Long Distance Touch Bracelets",
    description: "Connected bracelets that let you send touches across any distance. Light up when your partner is thinking of you.",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop",
    category: "for-couples",
    rating: 4.5,
    reviews: 3456,
    affiliateUrl: "https://www.amazon.com/dp/B0AIJK5678",
    tags: ["technology", "long distance", "connection"],
    isValentinePick: true,
    mood: "sentimental",
    occasion: ["long-distance", "anniversary", "just-because"],
    relationshipStage: ["dating", "serious", "engaged"],
  },
  {
    id: "23",
    name: "Couples Bucket List Scratch Poster",
    description: "100 romantic activities to do together. Scratch off as you complete each adventure.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=600&fit=crop",
    category: "for-couples",
    rating: 4.7,
    reviews: 2345,
    affiliateUrl: "https://www.amazon.com/dp/B0ALMN9012",
    tags: ["experiences", "adventure", "poster"],
    mood: "adventurous",
    occasion: ["valentines", "anniversary", "just-because"],
    relationshipStage: ["new", "dating", "serious"],
  },
  // NEW PRODUCTS - Romantic Nights
  {
    id: "24",
    name: "Starlight Projector",
    description: "Transform any room into a starry night sky. Bluetooth speaker included for romantic playlists.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=600&fit=crop",
    category: "romantic-nights",
    rating: 4.6,
    reviews: 4567,
    affiliateUrl: "https://www.amazon.com/dp/B0AOPQ3456",
    tags: ["ambiance", "technology", "romantic"],
    mood: "romantic",
    occasion: ["valentines", "anniversary", "just-because"],
    relationshipStage: ["new", "dating", "serious", "engaged", "married"],
  },
  {
    id: "25",
    name: "Champagne Toast Set",
    description: "Two crystal champagne flutes with a bottle of premium sparkling wine.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=600&h=600&fit=crop",
    category: "romantic-nights",
    rating: 4.8,
    reviews: 876,
    affiliateUrl: "https://www.amazon.com/dp/B0ARST7890",
    tags: ["celebration", "wine", "toast"],
    mood: "romantic",
    occasion: ["anniversary", "engaged", "valentines"],
    relationshipStage: ["serious", "engaged", "married"],
  },
  {
    id: "26",
    name: "Couples Question Cards",
    description: "200 deep conversation starters to rediscover each other. From playful to profound.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=600&fit=crop",
    category: "romantic-nights",
    rating: 4.7,
    reviews: 2134,
    affiliateUrl: "https://www.amazon.com/dp/B0AUVW1234",
    tags: ["conversation", "connection", "cards"],
    mood: "sentimental",
    occasion: ["valentines", "anniversary", "just-because"],
    relationshipStage: ["new", "dating", "serious"],
  },
  // NEW PRODUCTS - Surprise Gifts
  {
    id: "27",
    name: "Flower Subscription Box",
    description: "Fresh seasonal flowers delivered monthly. Each arrangement tells a story.",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&h=600&fit=crop",
    category: "surprise-gifts",
    rating: 4.8,
    reviews: 1876,
    affiliateUrl: "https://www.amazon.com/dp/B0AXYZ5678",
    tags: ["flowers", "subscription", "fresh"],
    mood: "romantic",
    occasion: ["just-because", "apology"],
    relationshipStage: ["dating", "serious", "engaged", "married"],
  },
  {
    id: "28",
    name: "Love Coupon Book",
    description: "30 customizable coupons for dates, favors, and romantic gestures. Fill in your own promises.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=600&fit=crop",
    category: "surprise-gifts",
    rating: 4.5,
    reviews: 3456,
    affiliateUrl: "https://www.amazon.com/dp/B0BABC9012",
    tags: ["coupons", "personalized", "fun"],
    mood: "playful",
    occasion: ["valentines", "birthday", "just-because"],
    relationshipStage: ["new", "dating", "serious"],
  },
  {
    id: "29",
    name: "Breakfast in Bed Kit",
    description: "Everything for the perfect morning surprise: heart waffle maker, tray, and gourmet pancake mix.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&h=600&fit=crop",
    category: "surprise-gifts",
    rating: 4.7,
    reviews: 987,
    affiliateUrl: "https://www.amazon.com/dp/B0BDEF3456",
    tags: ["breakfast", "morning", "surprise"],
    mood: "cozy",
    occasion: ["birthday", "valentines", "anniversary"],
    relationshipStage: ["dating", "serious", "engaged", "married"],
  },
  // NEW PRODUCTS - Memory Gifts
  {
    id: "30",
    name: "Custom Spotify Plaque",
    description: "Acrylic display of your song with scannable Spotify code. Press play on your memories.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
    category: "memory-gifts",
    rating: 4.8,
    reviews: 4321,
    affiliateUrl: "https://www.amazon.com/dp/B0BGHI7890",
    tags: ["music", "personalized", "display"],
    isValentinePick: true,
    mood: "sentimental",
    occasion: ["anniversary", "valentines", "birthday"],
    relationshipStage: ["dating", "serious", "engaged", "married"],
  },
  {
    id: "31",
    name: "Couple's Fingerprint Ring",
    description: "Matching rings engraved with each other's fingerprints. Uniquely yours, forever.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=600&fit=crop",
    category: "memory-gifts",
    rating: 4.9,
    reviews: 654,
    affiliateUrl: "https://www.amazon.com/dp/B0BJKL1234",
    tags: ["rings", "personalized", "jewelry"],
    mood: "romantic",
    occasion: ["anniversary", "engaged"],
    relationshipStage: ["engaged", "married"],
  },
  {
    id: "32",
    name: "Relationship Timeline Print",
    description: "Custom illustrated timeline of your love story with key dates and milestones.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=600&fit=crop",
    category: "memory-gifts",
    rating: 4.7,
    reviews: 1234,
    affiliateUrl: "https://www.amazon.com/dp/B0BMNO5678",
    tags: ["art", "personalized", "timeline"],
    mood: "sentimental",
    occasion: ["anniversary", "valentines"],
    relationshipStage: ["serious", "engaged", "married"],
  },
];

export const getProductsByCategory = (categoryId: string) => {
  return products.filter((product) => product.category === categoryId);
};

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
      product.category.toLowerCase().includes(lowerQuery)
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

  // Filter by recipient (category)
  if (recipient === "her") {
    filtered = filtered.filter((p) => p.category === "for-her" || p.category === "for-couples" || p.category === "memory-gifts");
  } else if (recipient === "him") {
    filtered = filtered.filter((p) => p.category === "for-him" || p.category === "for-couples" || p.category === "memory-gifts");
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
