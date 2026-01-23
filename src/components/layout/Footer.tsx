import { Link } from "react-router-dom";
import NewsletterForm from "@/components/newsletter/NewsletterForm";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-cream/30">
      <div className="container px-4 sm:px-6 py-8 sm:py-12">
        {/* Newsletter Section */}
        <div className="mb-8 sm:mb-12">
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1 space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-serif font-semibold text-foreground">
              LuvOps <span className="text-primary">/</span> Shop
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xs">
              Curated gifts for couples who believe in thoughtful gestures and meaningful moments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider">
              Explore
            </h4>
            <nav className="flex flex-col gap-1.5 sm:gap-2">
              <Link to="/shop" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Shop All
              </Link>
              <Link to="/valentine-picks" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Valentine Picks
              </Link>
              <Link to="/category/for-her" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                For Her
              </Link>
              <Link to="/category/for-him" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                For Him
              </Link>
            </nav>
          </div>

          {/* Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-semibold text-foreground uppercase tracking-wider">
              Info
            </h4>
            <nav className="flex flex-col gap-1.5 sm:gap-2">
              <Link to="/about" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <span className="text-xs sm:text-sm text-muted-foreground">
                Affiliate Disclosure
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground">
                Privacy Policy
              </span>
            </nav>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-border/50 text-center">
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            © {new Date().getFullYear()} LuvOps Shop. Made with love for couples everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;