
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, BookOpen, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

const animatedCounter = (start = 0, end: number, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    if (start === end) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp + delay;
      if (timestamp < startTimestamp) {
        window.requestAnimationFrame(step);
        return;
      }
      
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [start, end, duration, delay]);
  
  return count;
};

export default function Hero() {
  const patentsCount = animatedCounter(0, 0, 3000, 100);
  const ideasCount = animatedCounter(0, 0, 3000, 800);
  const papersCount = animatedCounter(0, 0, 3000, 500);
  
  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 bg-background">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 to-background/90"></div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 animate-fade-in [animation-delay:200ms]">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-primary">Revolutionize Research</span>
              <br />
              with AI-Powered Patent Intelligence
            </h1>
            <p className="max-w-[700px] mx-auto text-foreground-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
  Unlock innovation insights, discover emerging trends, and generate novel patent ideas with our powerful AI platform.
</p>
          </div>
          
          <div className="w-full max-w-md flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 animate-fade-in [animation-delay:400ms]">
            <Button className="flex-1 h-12 rounded-full shadow-blue-glow bg-primary text-background hover:bg-primary/90" size="lg">
              Search Patents <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex-1 h-12 rounded-full text-foreground-muted border-accent hover:bg-accent/30" size="lg">
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 w-full max-w-3xl animate-fade-in [animation-delay:600ms]">
            <div className="bg-background-secondary border border-accent rounded-lg shadow-md flex flex-col items-center justify-center p-6 glassmorphic">
              <Database className="h-10 w-10 text-primary mb-2" />
              <div className="text-3xl font-bold text-accent-foreground">{patentsCount}k+</div>
              <div className="text-sm text-foreground-muted">Patents Analyzed</div>
            </div>
            <div className="bg-background-secondary border border-accent rounded-lg shadow-md flex flex-col items-center justify-center p-6 glassmorphic">
              <BookOpen className="h-10 w-10 text-primary mb-2" />
              <div className="text-3xl font-bold text-accent-foreground">{papersCount}k+</div>
              <div className="text-sm text-foreground-muted">Research Papers</div>
            </div>
            <div className="bg-background-secondary border border-accent rounded-lg shadow-md flex flex-col items-center justify-center p-6 glassmorphic">
              <Lightbulb className="h-10 w-10 text-primary mb-2" />
              <div className="text-3xl font-bold text-accent-foreground">{ideasCount}k+</div>
              <div className="text-sm text-foreground-muted">Ideas Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
