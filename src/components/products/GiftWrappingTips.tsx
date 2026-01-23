import { Gift, Sparkles, Ribbon, Heart, Package } from "lucide-react";
import { motion } from "framer-motion";

const tips = [
  {
    icon: Package,
    title: "Premium Box",
    description: "Use a sturdy matte box in blush pink, navy, or kraft for an elegant base.",
  },
  {
    icon: Ribbon,
    title: "Satin Ribbon",
    description: "Add a luxurious satin or velvet ribbon in a complementary color.",
  },
  {
    icon: Sparkles,
    title: "Personal Touch",
    description: "Include a handwritten note on quality cardstock with a meaningful message.",
  },
  {
    icon: Heart,
    title: "Finishing Details",
    description: "Add dried flowers, a wax seal, or a small charm for an unforgettable reveal.",
  },
];

const GiftWrappingTips = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-12 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-cream/50 via-lavender/20 to-mauve/10 border border-border/30"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-2xl bg-primary/10">
          <Gift className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-serif font-semibold text-foreground">
            Premium Presentation Tips
          </h3>
          <p className="text-sm text-muted-foreground">
            Make the unwrapping as special as the gift itself
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <motion.div
            key={tip.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            className="flex gap-3 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-colors"
          >
            <div className="shrink-0 p-2 rounded-xl bg-primary/10 h-fit">
              <tip.icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-foreground text-sm mb-1">
                {tip.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {tip.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-2xl bg-primary/5 border border-primary/10">
        <p className="text-sm text-muted-foreground text-center">
          💡 <span className="text-foreground font-medium">Pro tip:</span> Layer tissue paper in 2-3 complementary colors for a luxurious reveal experience.
        </p>
      </div>
    </motion.section>
  );
};

export default GiftWrappingTips;
