import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

const quizQuestions = [
  {
    id: "q0",
    title: "Who are we shopping for today?",
    subtitle: "Choose who this gift is for",
    options: [
      { id: "a0", label: "For Him", description: "Boyfriend / Husband", emoji: "👨" },
      { id: "b0", label: "For Her", description: "Girlfriend / Wife", emoji: "👩" },
      { id: "c0", label: "For Both of Us", description: "A Couple's Gift", emoji: "💑" },
    ],
  },
  {
    id: "q1",
    title: "First things first: What's the occasion?",
    subtitle: "Choose the occasion that resonates with you",
    options: [
      { id: "a1", label: "Anniversary / Birthday", description: "Big milestone!", emoji: "🎉" },
      { id: "b1", label: "Just because / Thinking of you", description: "Small gesture", emoji: "💫" },
      { id: "c1", label: "Apology / Making up", description: "Need something sweet", emoji: "🌹" },
      { id: "d1", label: "Holiday / Special Date", description: "Valentine's, Christmas, etc.", emoji: "🎄" },
    ],
  },
  {
    id: "q2",
    title: "How long have they been together?",
    subtitle: "Understanding their relationship stage",
    options: [
      { id: "a2", label: "Brand new", description: "The 'Honeymoon Phase'", emoji: "🌱" },
      { id: "b2", label: "A solid year or two", description: "Comfortable & Sweet", emoji: "💑" },
      { id: "c2", label: "Long-term / Married", description: "Deeply connected", emoji: "💍" },
      { id: "d2", label: "It's complicated", description: "Undefined relationship", emoji: "❓" },
    ],
  },
  {
    id: "q3",
    title: "If their relationship was a movie genre, what would it be?",
    subtitle: "This determines the style of the perfect gift",
    options: [
      { id: "a3", label: "A Classic Rom-Com", description: "Playful, fun, lots of laughter", emoji: "😄" },
      { id: "b3", label: "A Period Drama", description: "Elegant, serious, deep emotions", emoji: "✨" },
      { id: "c3", label: "An Adventure/Action", description: "Always doing things together, active", emoji: "🚀" },
      { id: "d3", label: "An Indie Art Film", description: "Unique, quirky, unconventional", emoji: "🎨" },
    ],
  },
  {
    id: "q4",
    title: "What is their 'Love Language' mostly like?",
    subtitle: "How they prefer to receive love",
    options: [
      { id: "a4", label: "Words of Affirmation", description: "They love sentimental notes and meanings", emoji: "📝" },
      { id: "b4", label: "Physical Touch / Quality Time", description: "They love being close", emoji: "🤝" },
      { id: "c4", label: "Receiving Gifts", description: "They love the unboxing and presentation", emoji: "🎁" },
      { id: "d4", label: "Acts of Service", description: "They love things that make life easier", emoji: "⚙️" },
    ],
  },
  {
    id: "q5",
    title: "How do they handle Public Displays of Affection (PDA)?",
    subtitle: "Crucial for filtering out 'Cringe' vs. 'Classy'",
    options: [
      { id: "a5", label: "They love it!", description: "Matching outfits, shouting it from the rooftops", emoji: "📢" },
      { id: "b5", label: "Subtle hints only", description: "Like matching bracelets or rings", emoji: "💍" },
      { id: "c5", label: "Keep it private", description: "For their eyes only", emoji: "🔒" },
      { id: "d5", label: "Not their thing", description: "They prefer to keep it private", emoji: "😌" },
    ],
  },
  {
    id: "q6",
    title: "What's the budget vibe for this gift?",
    subtitle: "We have amazing gifts at every price point",
    options: [
      { id: "a6", label: "A cute token", description: "Under $10 USD", emoji: "💰" },
      { id: "b6", label: "Something nice but reasonable", description: "$10 - $30 USD", emoji: "💎" },
      { id: "c6", label: "A premium gesture", description: "$30 - $50 USD", emoji: "✨" },
      { id: "d6", label: "Price doesn't matter", description: "Just has to be perfect", emoji: "👑" },
    ],
  },
  {
    id: "q7",
    title: "Finally, do you want this gift to make them:",
    subtitle: "The final emotional hook to decide the specific product category",
    options: [
      { id: "a7", label: "Cry happy tears", description: "Emotional / Sentimental", emoji: "😭" },
      { id: "b7", label: "Laugh out loud", description: "Funny / Witty", emoji: "😂" },
      { id: "c7", label: "Say 'Wow, this is beautiful'", description: "Aesthetic / Luxury", emoji: "😍" },
      { id: "d7", label: "Use it every single day", description: "Practical / Useful", emoji: "🛠️" },
    ],
  },
];

type QuizStep = "q0" | "q1" | "q2" | "q3" | "q4" | "q5" | "q6" | "q7" | "results";

const Quiz = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<QuizStep>("q0");
  const [answers, setAnswers] = useState({
    q0: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
  });

  const steps: QuizStep[] = ["q0", "q1", "q2", "q3", "q4", "q5", "q6", "q7", "results"];
  const currentIndex = steps.indexOf(step);
  const progress = ((currentIndex) / (steps.length - 1)) * 100;

  const handleSelect = (key: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < steps.length) {
      setStep(steps[nextIndex]);
    }
  };

  const prevStep = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setStep(steps[prevIndex]);
    }
  };

  const canProceed = () => {
    switch (step) {
      case "q0":
        return !!answers.q0;
      case "q1":
        return !!answers.q1;
      case "q2":
        return !!answers.q2;
      case "q3":
        return !!answers.q3;
      case "q4":
        return !!answers.q4;
      case "q5":
        return !!answers.q5;
      case "q6":
        return !!answers.q6;
      case "q7":
        return !!answers.q7;
      default:
        return true;
    }
  };

  // Smart filtering based on all quiz answers
  const getRecommendations = () => {
    let filtered = [...products];

    // Q0: Recipient filtering (For Him, For Her, For Both of Us)
    if (answers.q0 === "a0") {
      // For Him - filter for him and couples
      filtered = filtered.filter((p) => p.category === "for-him" || p.category === "for-couples" || p.category === "memory-gifts");
    } else if (answers.q0 === "b0") {
      // For Her - filter for her and couples
      filtered = filtered.filter((p) => p.category === "for-her" || p.category === "for-couples" || p.category === "memory-gifts");
    } else if (answers.q0 === "c0") {
      // For Both of Us - prefer couples items
      filtered = filtered.filter((p) => p.category === "for-couples" || p.category === "memory-gifts");
    }

    // Q1: Budget filtering based on occasion grandeur
    if (answers.q1 === "a1" || answers.q1 === "d1") {
      // Big milestone occasions - prefer higher budget
      filtered = filtered.filter((p) => p.price > 30);
    } else if (answers.q1 === "b1") {
      // Small gesture - prefer lower budget
      filtered = filtered.filter((p) => p.price < 50);
    }

    // Q2: Relationship stage filtering
    if (answers.q2 === "a2") {
      // New couples - prefer lower commitment, playful items
      filtered = filtered.filter((p) => p.price < 100);
    } else if (answers.q2 === "c2") {
      // Long-term/married - prefer sentimental or higher value
      filtered = filtered.filter((p) => p.price > 30);
    }

    // Q3: Style filtering (Rom-Com = Fun, Period Drama = Classy, Adventure = Gear, Indie = Niche)
    if (answers.q3 === "a3") {
      // Rom-Com - fun, kitschy items
      filtered = filtered.filter((p) => 
        p.tags?.some(tag => tag.toLowerCase().includes("playful") || tag.toLowerCase().includes("fun"))
      );
    } else if (answers.q3 === "b3") {
      // Period Drama - classy/jewelry
      filtered = filtered.filter((p) => 
        p.category === "for-her" || p.tags?.some(tag => tag.toLowerCase().includes("elegant") || tag.toLowerCase().includes("jewelry"))
      );
    } else if (answers.q3 === "c3") {
      // Adventure - experiences/gear
      filtered = filtered.filter((p) => 
        p.tags?.some(tag => tag.toLowerCase().includes("adventure") || tag.toLowerCase().includes("experience") || tag.toLowerCase().includes("outdoors"))
      );
    }

    // Q4: Love Language filtering
    if (answers.q4 === "a4") {
      // Words of affirmation - personalized items
      filtered = filtered.filter((p) => 
        p.tags?.some(tag => tag.toLowerCase().includes("personalized"))
      );
    } else if (answers.q4 === "b4") {
      // Physical touch/Quality time - couples items
      filtered = filtered.filter((p) => 
        p.mainCategory === "couples-matching" || 
        (p as any).category === "for-couples" || 
        p.tags?.some(tag => tag.toLowerCase().includes("couples"))
      );
    } else if (answers.q4 === "c4") {
      // Receiving gifts - flashy/aesthetic items
      filtered = filtered.filter((p) => 
        p.tags?.some(tag => tag.toLowerCase().includes("aesthetic") || tag.toLowerCase().includes("luxury") || tag.toLowerCase().includes("jewelry"))
      );
    } else if (answers.q4 === "d4") {
      // Acts of service - practical items
      filtered = filtered.filter((p) => 
        p.tags?.some(tag => tag.toLowerCase().includes("practical") || tag.toLowerCase().includes("useful"))
      );
    }

    // Q5: PDA tolerance filtering
    if (answers.q5 === "a5") {
      // Love PDA - matching items
      filtered = filtered.filter((p) => 
        p.tags?.some(tag => tag.toLowerCase().includes("matching") || tag.toLowerCase().includes("couples"))
      );
    } else if (answers.q5 === "b5" || answers.q5 === "c5" || answers.q5 === "d5") {
      // Subtle/Private - personal items
      filtered = filtered.filter((p) => 
        p.mainCategory === "sentimental-letters" || 
        (p as any).category === "memory-gifts" || 
        p.tags?.some(tag => tag.toLowerCase().includes("subtle") || tag.toLowerCase().includes("personal"))
      );
    }

    // Q6: Budget hard filter
    if (answers.q6 === "a6") {
      filtered = filtered.filter((p) => p.price < 10);
    } else if (answers.q6 === "b6") {
      filtered = filtered.filter((p) => p.price >= 10 && p.price < 30);
    } else if (answers.q6 === "c6") {
      filtered = filtered.filter((p) => p.price >= 30 && p.price < 50);
    }

    // Q7: Final emotional hook
    if (answers.q7 === "a7") {
      // Emotional/sentimental
      filtered = filtered.filter((p) => 
        p.tags?.some(tag => tag.toLowerCase().includes("sentimental") || tag.toLowerCase().includes("personalized") || tag.toLowerCase().includes("romantic"))
      );
    } else if (answers.q7 === "b7") {
      // Funny/witty
      filtered = filtered.filter((p) => 
        p.tags?.some(tag => tag.toLowerCase().includes("funny") || tag.toLowerCase().includes("playful"))
      );
    } else if (answers.q7 === "c7") {
      // Aesthetic/luxury
      filtered = filtered.filter((p) => 
        p.tags?.some(tag => tag.toLowerCase().includes("luxury") || tag.toLowerCase().includes("aesthetic") || tag.toLowerCase().includes("elegant"))
      );
    } else if (answers.q7 === "d7") {
      // Practical/useful
      filtered = filtered.filter((p) => 
        p.tags?.some(tag => tag.toLowerCase().includes("practical") || tag.toLowerCase().includes("useful"))
      );
    }

    // If no exact matches, return top products by rating
    if (filtered.length === 0) {
      filtered = [...products];
    }

    // Sort by rating and return top 8
    return filtered.sort((a, b) => b.rating - a.rating).slice(0, 8);
  };

  const recommendations = getRecommendations();

  const renderStep = () => {
    const currentQuestion = quizQuestions.find((q) => q.id === step);

    if (!currentQuestion) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="text-center space-y-3 sm:space-y-4 px-2">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-2 sm:mb-4">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-foreground">
              Perfect Matches For You!
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
              Based on your answers, we've curated these special gifts just for you.
            </p>
          </div>

          {recommendations.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {recommendations.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12 px-4">
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                No exact matches found, but don't worry!
              </p>
              <Button onClick={() => navigate("/shop")} variant="romantic" className="text-sm sm:text-base">
                Browse All Gifts
              </Button>
            </div>
          )}

          <div className="text-center pt-4 sm:pt-8">
            <Button
              variant="outline"
              onClick={() => {
                setStep("q0");
                setAnswers({ q0: "", q1: "", q2: "", q3: "", q4: "", q5: "", q6: "", q7: "" });
              }}
              className="text-sm sm:text-base"
            >
              Take Quiz Again
            </Button>
          </div>
        </motion.div>
      );
    }

    return (
      <QuizStep
        title={currentQuestion.title}
        subtitle={currentQuestion.subtitle}
        options={currentQuestion.options}
        selected={answers[step as keyof typeof answers]}
        onSelect={(value) => handleSelect(step as keyof typeof answers, value)}
      />
    );
  };

  return (
    <Layout>
      {/* Header */}
      <section className="gradient-hero py-8 sm:py-12">
        <div className="container px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-foreground mb-2 sm:mb-3">
            Find Your Perfect Gift
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto px-2">
            Answer a few questions and we'll find the ideal gift for your special someone.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      {step !== "results" && (
        <div className="container px-4 sm:px-6 py-4 sm:py-6">
          <div className="max-w-xl mx-auto">
            <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-center text-xs sm:text-sm text-muted-foreground mt-2">
              Question {currentIndex + 1} of {steps.length - 1}
            </p>
          </div>
        </div>
      )}

      {/* Quiz Content */}
      <section className="py-4 sm:py-8 pb-8 sm:pb-16">
        <div className="container px-4 sm:px-6">
          <AnimatePresence mode="wait">
            <div key={step}>{renderStep()}</div>
          </AnimatePresence>

          {/* Navigation */}
          {step !== "results" && (
            <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-2">
              {currentIndex > 0 && (
                <Button variant="outline" onClick={prevStep} className="gap-1.5 sm:gap-2 text-sm sm:text-base px-3 sm:px-4">
                  <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Back
                </Button>
              )}
              <Button
                variant="romantic"
                onClick={nextStep}
                disabled={!canProceed()}
                className="gap-1.5 sm:gap-2 min-w-[120px] sm:min-w-[140px] text-sm sm:text-base px-3 sm:px-4"
              >
                {currentIndex === steps.length - 2 ? "See Results" : "Next"}
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

interface QuizStepProps {
  title: string;
  subtitle: string;
  options: { id: string; label: string; description: string; emoji: string }[];
  selected: string;
  onSelect: (value: string) => void;
}

const QuizStep = ({ title, subtitle, options, selected, onSelect }: QuizStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl mx-auto px-1"
    >
      <div className="text-center mb-6 sm:mb-10 px-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-foreground mb-1.5 sm:mb-2">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {options.map((option) => (
          <motion.button
            key={option.id}
            onClick={() => onSelect(option.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl text-left transition-all duration-300 ${
              selected === option.id
                ? "bg-primary text-primary-foreground shadow-hover"
                : "bg-card border border-border shadow-card hover:shadow-hover hover:border-primary/30"
            }`}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl flex-shrink-0">{option.emoji}</span>
              <div className="text-left">
                <p className="font-semibold text-sm sm:text-base leading-tight mb-1">
                  {option.label}
                </p>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  selected === option.id 
                    ? "text-primary-foreground/80" 
                    : "text-muted-foreground"
                }`}>
                  {option.description}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Quiz;
