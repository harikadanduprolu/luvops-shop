import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, X, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/contexts/WishlistContext";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { wishlist } = useWishlist();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setMenuOpen(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="container px-4 sm:px-6 flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={closeMenu}>
          <span className="text-lg sm:text-xl font-serif font-semibold text-foreground">
            LuvOps <span className="text-primary">/</span> Shop
          </span>
        </Link>

        {/* Search Bar - Center (Desktop only) */}
        <div className="flex-1 max-w-md mx-4 hidden lg:block">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for the perfect gift..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-11 pr-4 rounded-2xl bg-muted/50 border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
            />
          </form>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Link to="/shop">
            <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
              Shop
            </Button>
          </Link>
          <Link to="/quiz">
            <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
              Gift Quiz
            </Button>
          </Link>
          <Link to="/valentine-picks">
            <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
              Valentine Picks
            </Button>
          </Link>
          <Link to="/wishlist" className="relative ml-1">
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground h-9 w-9">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-medium">
                  {wishlist.length}
                </span>
              )}
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center gap-1">
          {/* Mobile Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => {
              setSearchOpen(!searchOpen);
              setMenuOpen(false);
            }}
          >
            {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </Button>

          {/* Wishlist */}
          <Link to="/wishlist" className="relative" onClick={closeMenu}>
            <Button variant="ghost" size="icon" className="h-9 w-9 text-foreground/80 hover:text-foreground">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-medium">
                  {wishlist.length}
                </span>
              )}
            </Button>
          </Link>

          {/* Hamburger Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setSearchOpen(false);
            }}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Search Dropdown */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-3 animate-fade-in border-t border-border/30">
          <form onSubmit={handleSearch} className="relative mt-3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for the perfect gift..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full h-11 pl-11 pr-4 rounded-2xl bg-muted/50 border border-border/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
            />
          </form>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 animate-fade-in border-t border-border/30">
          <nav className="flex flex-col gap-1 mt-3">
            <Link to="/shop" onClick={closeMenu}>
              <Button variant="ghost" className="w-full justify-start text-foreground/80 hover:text-foreground h-12 text-base">
                Shop
              </Button>
            </Link>
            <Link to="/quiz" onClick={closeMenu}>
              <Button variant="ghost" className="w-full justify-start text-foreground/80 hover:text-foreground h-12 text-base">
                Gift Quiz
              </Button>
            </Link>
            <Link to="/valentine-picks" onClick={closeMenu}>
              <Button variant="ghost" className="w-full justify-start text-foreground/80 hover:text-foreground h-12 text-base">
                Valentine Picks
              </Button>
            </Link>
            <Link to="/about" onClick={closeMenu}>
              <Button variant="ghost" className="w-full justify-start text-foreground/80 hover:text-foreground h-12 text-base">
                About
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;