
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Sparkles, Lightbulb, BookOpen, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const searchTypes = [
  { id: "patents", label: "Patents", icon: Database },
  { id: "papers", label: "Academic Papers", icon: BookOpen },
  { id: "generate", label: "Generate Ideas", icon: Lightbulb },
];

export default function SearchBar() {
  const [searchType, setSearchType] = useState("patents");
  const [query, setQuery] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  
  return (
    <section id="search" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Smart Semantic Search</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover patents, papers, and generate ideas with advanced AI
            </p>
          </div>
          
          <div className={cn(
            "w-full max-w-4xl glass rounded-2xl p-3 transition-all duration-300",
            isInputFocused ? "shadow-lg shadow-primary/20" : ""
          )}>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-wrap gap-2 justify-center p-1">
                {searchTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant={searchType === type.id ? "default" : "ghost"}
                    className={cn(
                      "rounded-full h-10",
                      searchType === type.id ? "bg-primary text-white" : "hover:bg-white/5"
                    )}
                    onClick={() => setSearchType(type.id)}
                  >
                    <type.icon className="mr-2 h-4 w-4" />
                    {type.label}
                  </Button>
                ))}
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  className="w-full h-14 bg-background/50 pl-12 pr-20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 border border-border"
                  placeholder={
                    searchType === "patents" 
                      ? "Search patents, technologies, or inventors..." 
                      : searchType === "papers" 
                        ? "Search academic papers, journals, or researchers..." 
                        : "Describe your research area for idea generation..."
                  }
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Button className="h-10 rounded-full bg-primary">
                    {searchType === "generate" ? <Sparkles className="h-4 w-4" /> : <Search className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              {query && isInputFocused && (
                <div className="flex flex-wrap gap-2 px-4 pb-2 animate-fade-in">
                  <div className="text-sm text-muted-foreground mr-2">Suggestions:</div>
                  <Button variant="outline" size="sm" className="rounded-full border-white/10 hover:bg-white/5 text-xs">
                    quantum computing
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full border-white/10 hover:bg-white/5 text-xs">
                    machine learning
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full border-white/10 hover:bg-white/5 text-xs">
                    neural networks
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
