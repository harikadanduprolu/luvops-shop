import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { relationshipStages, occasions, getQuizRecommendations } from "@/data/products";

const budgetOptions = [
  { id: "under-50", label: "Under $50", emoji: "💰" },
  { id: "50-100", label: "$50 - $100", emoji: "💎" },
  { id: "100-150", label: "$100 - $150", emoji: "✨" },
  { id: "over-150", label: "$150+", emoji: "👑" },
];

const recipientOptions = [
  { id: "her", label: "For Her", emoji: "👩" },
  { id: "him", label: "For Him", emoji: "👨" },
  { id: "us", label: "For Us", emoji: "💑" },
];

type Step = "stage" | "budget" | "occasion" | "recipient" | "results";

const Quiz = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("stage");
  const [answers, setAnswers] = useState({
    stage: "",
    budget: "",
    occasion: "",
    recipient: "",
  });

  const steps: Step[] = ["stage", "budget", "occasion", "recipient", "results"];
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
      case "stage":
        return !!answers.stage;
      case "budget":
        return !!answers.budget;
      case "occasion":
        return !!answers.occasion;
      case "recipient":
        return !!answers.recipient;
      default:
        return true;
    }
  };

  const recommendations = getQuizRecommendations(
    answers.stage,
    answers.budget,
    answers.occasion,
    answers.recipient
  );

  const renderStep = () => {
    switch (step) {
      case "stage":
        return (
          <QuizStep
            title="What stage is your relationship?"
            subtitle="This helps us find age-appropriate gifts"
            options={relationshipStages.map((s) => ({
              id: s.id,
              label: s.name,
              emoji: s.emoji,
            }))}
            selected={answers.stage}
            onSelect={(value) => handleSelect("stage", value)}
          />
        );
      case "budget":
        return (
          <QuizStep
            title="What's your budget?"
            subtitle="We have amazing gifts at every price point"
            options={budgetOptions}
            selected={answers.budget}
            onSelect={(value) => handleSelect("budget", value)}
          />
        );
      case "occasion":
        return (
          <QuizStep
            title="What's the occasion?"
            subtitle="The perfect gift for every moment"
            options={occasions.map((o) => ({
              id: o.id,
              label: o.name,
              emoji: o.emoji,
            }))}
            selected={answers.occasion}
            onSelect={(value) => handleSelect("occasion", value)}
          />
        );
      case "recipient":
        return (
          <QuizStep
            title="Who is this gift for?"
            subtitle="Tell us who you're shopping for"
            options={recipientOptions}
            selected={answers.recipient}
            onSelect={(value) => handleSelect("recipient", value)}
          />
        );
      case "results":
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
                  setStep("stage");
                  setAnswers({ stage: "", budget: "", occasion: "", recipient: "" });
                }}
                className="text-sm sm:text-base"
              >
                Take Quiz Again
              </Button>
            </div>
          </motion.div>
        );
    }
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
              Step {currentIndex + 1} of {steps.length - 1}
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
  options: { id: string; label: string; emoji: string }[];
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
      className="max-w-2xl mx-auto px-1"
    >
      <div className="text-center mb-6 sm:mb-10 px-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-foreground mb-1.5 sm:mb-2">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">{subtitle}</p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
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
            <span className="text-xl sm:text-2xl mb-2 sm:mb-3 block">{option.emoji}</span>
            <span className="font-medium text-sm sm:text-lg leading-tight">{option.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Quiz;
