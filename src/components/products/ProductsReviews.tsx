import { Star, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
  verified: boolean;
}

const sampleReviews: Review[] = [
  {
    id: "1",
    author: "Sarah M.",
    avatar: "SM",
    rating: 5,
    date: "2 weeks ago",
    title: "Perfect anniversary gift!",
    content: "My partner absolutely loved this! The quality exceeded my expectations and it arrived beautifully packaged. Will definitely be ordering again for future occasions.",
    helpful: 24,
    verified: true,
  },
  {
    id: "2",
    author: "James L.",
    avatar: "JL",
    rating: 5,
    date: "1 month ago",
    title: "Made her day special",
    content: "Was looking for something unique for Valentine's Day and this was perfect. She couldn't stop smiling. Highly recommend!",
    helpful: 18,
    verified: true,
  },
  {
    id: "3",
    author: "Emily R.",
    avatar: "ER",
    rating: 4,
    date: "1 month ago",
    title: "Great quality, fast shipping",
    content: "Really happy with the purchase. The item looks exactly like the photos. Shipping was faster than expected too.",
    helpful: 12,
    verified: true,
  },
];

interface ProductReviewsProps {
  productRating: number;
  reviewCount: number;
}

const ProductReviews = ({ productRating, reviewCount }: ProductReviewsProps) => {
  const ratingDistribution = [
    { stars: 5, percentage: 72 },
    { stars: 4, percentage: 18 },
    { stars: 3, percentage: 7 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 },
  ];

  return (
    <section className="mt-12 sm:mt-20 max-w-6xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-serif font-medium text-foreground mb-6 sm:mb-8">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
        {/* Rating Summary */}
        <div className="lg:col-span-1">
          <div className="p-4 sm:p-6 rounded-2xl bg-muted/50 border border-border/50">
            <div className="text-center mb-4">
              <p className="text-4xl sm:text-5xl font-semibold text-foreground mb-1">
                {productRating}
              </p>
              <div className="flex items-center justify-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
                      i < Math.floor(productRating)
                        ? "fill-primary text-primary"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Based on {reviewCount.toLocaleString()} reviews
              </p>
            </div>

            {/* Rating Bars */}
            <div className="space-y-2">
              {ratingDistribution.map((item) => (
                <div key={item.stars} className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xs sm:text-sm text-muted-foreground w-6 sm:w-8">
                    {item.stars}★
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 0.8, delay: 0.1 * (5 - item.stars) }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground w-8 sm:w-10 text-right">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {sampleReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 sm:p-6 rounded-2xl bg-card border border-border/50"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Avatar */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xs sm:text-sm font-medium text-primary">
                    {review.avatar}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-medium text-foreground text-sm sm:text-base">
                      {review.author}
                    </span>
                    {review.verified && (
                      <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] sm:text-xs">
                        Verified
                      </span>
                    )}
                  </div>

                  {/* Rating & Date */}
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 sm:h-4 sm:w-4 ${
                            i < review.rating
                              ? "fill-primary text-primary"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {review.date}
                    </span>
                  </div>

                  {/* Content */}
                  <h4 className="font-medium text-foreground text-sm sm:text-base mb-1 sm:mb-2">
                    {review.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                    {review.content}
                  </p>

                  {/* Helpful */}
                  <button className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <ThumbsUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Load More */}
          <button className="w-full py-3 sm:py-4 rounded-xl border border-border text-sm sm:text-base text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors">
            View all {reviewCount.toLocaleString()} reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;