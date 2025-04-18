
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, SunMoon, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-accent">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">PatentAgent</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#search" className="text-sm font-medium text-foreground-muted hover:text-primary transition-colors">
            Search
          </a>
          <a href="#trends" className="text-sm font-medium text-foreground-muted hover:text-primary transition-colors">
            Trends
          </a>
          <a href="#generator" className="text-sm font-medium text-foreground-muted hover:text-primary transition-colors">
            Idea Generator
          </a>
          <a href="#about" className="text-sm font-medium text-foreground-muted hover:text-primary transition-colors">
            About
          </a>
          <Button variant="ghost" size="icon" className="rounded-full text-foreground-muted hover:text-primary">
            <SunMoon className="h-4 w-4" />
          </Button>
          <Button className="rounded-full bg-primary text-background hover:bg-primary/90">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-foreground-muted">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="bg-background/80 px-4 pb-3 pt-2 space-y-3">
          <a href="#search" className="block text-sm font-medium text-foreground-muted hover:text-primary transition-colors py-2">
            Search
          </a>
          <a href="#trends" className="block text-sm font-medium text-foreground-muted hover:text-primary transition-colors py-2">
            Trends
          </a>
          <a href="#generator" className="block text-sm font-medium text-foreground-muted hover:text-primary transition-colors py-2">
            Idea Generator
          </a>
          <a href="#about" className="block text-sm font-medium text-foreground-muted hover:text-primary transition-colors py-2">
            About
          </a>
          <div className="flex items-center justify-between pt-2">
            <Button variant="ghost" size="icon" className="rounded-full text-foreground-muted hover:text-primary">
              <SunMoon className="h-4 w-4" />
            </Button>
            <Button className="rounded-full w-full ml-3 bg-primary text-background hover:bg-primary/90">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
