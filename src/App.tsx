import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { WishlistProvider } from "@/contexts/WishlistContext";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import Product from "./pages/Product";
import ValentinePicks from "./pages/ValentinePicks";
import About from "./pages/About";
import Search from "./pages/Search";
import Mood from "./pages/Mood";
import Quiz from "./pages/Quiz";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/valentine-picks" element={<ValentinePicks />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mood/:moodId" element={<Mood />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WishlistProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </WishlistProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
