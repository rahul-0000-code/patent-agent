
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Search, ArrowRight, Moon, Sun, Menu, X, 
  FileText, Lightbulb, BarChart3, Users, Home 
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    // Apply theme change to document
    if (newMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  };
  
  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/90 backdrop-blur-lg shadow-md" : "bg-background/50 backdrop-blur-sm",
      isDarkMode ? "border-b border-accent" : "border-b border-gray-200"
    )}>
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <span className={cn(
              "text-xl font-bold",
              isDarkMode ? "text-primary" : "text-blue-600"
            )}>PatentAgent</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-1">
          <Link 
            to="/" 
            className={cn(
              "px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center",
              isDarkMode 
                ? "text-foreground-muted hover:text-primary hover:bg-primary/10" 
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            )}
          >
            <Home className="h-4 w-4 mr-2" />
            Home
          </Link>
          <Link 
            to="/search" 
            className={cn(
              "px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center",
              isDarkMode 
                ? "text-foreground-muted hover:text-primary hover:bg-primary/10" 
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            )}
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Link>
          <Link 
            to="/trends" 
            className={cn(
              "px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center",
              isDarkMode 
                ? "text-foreground-muted hover:text-primary hover:bg-primary/10" 
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            )}
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Trends
          </Link>
          <Link 
            to="/generator" 
            className={cn(
              "px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center",
              isDarkMode 
                ? "text-foreground-muted hover:text-primary hover:bg-primary/10" 
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            )}
          >
            <Lightbulb className="h-4 w-4 mr-2" />
            Idea Generator
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center",
              isDarkMode 
                ? "text-foreground-muted hover:text-primary hover:bg-primary/10" 
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            )}
          >
            <Users className="h-4 w-4 mr-2" />
            About
          </Link>
          
          {/* <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className={cn(
              "rounded-full ml-2",
              isDarkMode ? "text-foreground-muted hover:text-primary" : "text-gray-600 hover:text-blue-600"
            )}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button> */}
          
          <Button 
            className={cn(
              "rounded-full ml-2",
              isDarkMode 
                ? "bg-primary text-background hover:bg-primary/90" 
                : "bg-blue-600 text-white hover:bg-blue-700"
            )}
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className={cn(
              "rounded-full mr-2",
              isDarkMode ? "text-foreground-muted" : "text-gray-600"
            )}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            className={isDarkMode ? "text-foreground-muted" : "text-gray-600"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      <div className={cn(
        "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
        isMenuOpen ? "max-h-96" : "max-h-0"
      )}>
        <div className={cn(
          "px-4 py-3 space-y-3",
          isDarkMode ? "bg-background/80" : "bg-white/90"
        )}>
          <Link 
            to="/" 
            className={cn(
              "block text-sm font-medium transition-colors py-2 rounded-lg flex items-center px-3",
              isDarkMode 
                ? "text-foreground-muted hover:text-primary hover:bg-primary/10" 
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            <Home className="h-4 w-4 mr-2" />
            Home
          </Link>
          <Link 
            to="/search" 
            className={cn(
              "block text-sm font-medium transition-colors py-2 rounded-lg flex items-center px-3",
              isDarkMode 
                ? "text-foreground-muted hover:text-primary hover:bg-primary/10" 
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Link>
          <Link 
            to="/trends" 
            className={cn(
              "block text-sm font-medium transition-colors py-2 rounded-lg flex items-center px-3",
              isDarkMode 
                ? "text-foreground-muted hover:text-primary hover:bg-primary/10" 
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Trends
          </Link>
          <Link 
            to="/generator" 
            className={cn(
              "block text-sm font-medium transition-colors py-2 rounded-lg flex items-center px-3",
              isDarkMode 
                ? "text-foreground-muted hover:text-primary hover:bg-primary/10" 
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            <Lightbulb className="h-4 w-4 mr-2" />
            Idea Generator
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "block text-sm font-medium transition-colors py-2 rounded-lg flex items-center px-3",
              isDarkMode 
                ? "text-foreground-muted hover:text-primary hover:bg-primary/10" 
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            <Users className="h-4 w-4 mr-2" />
            About
          </Link>
          
          <div className="pt-2">
            <Button 
              className={cn(
                "w-full rounded-lg",
                isDarkMode 
                  ? "bg-primary text-background hover:bg-primary/90" 
                  : "bg-blue-600 text-white hover:bg-blue-700"
              )}
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
