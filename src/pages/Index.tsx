
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, Lightbulb, BarChart3, Database, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Feature cards data
  const features = [
    {
      title: "Smart Semantic Search",
      description: "Use AI-powered search to find patents and research papers with natural language queries",
      icon: Search,
      link: "/search",
      color: "bg-blue-500/20 text-blue-500"
    },
    {
      title: "Patent Trends Analysis",
      description: "Explore emerging technologies and innovation hotspots across industries",
      icon: BarChart3,
      link: "/trends",
      color: "bg-purple-500/20 text-purple-500"
    },
    {
      title: "AI Idea Generation",
      description: "Generate novel patent ideas based on research gaps and market opportunities",
      icon: Lightbulb,
      link: "/generator",
      color: "bg-yellow-500/20 text-yellow-500"
    }
  ];

  // Statistics data
  const stats = [
    { value: "Yet to Start", label: "Patents Analyzed", icon: Database },
    { value: "Yet to Start", label: "Research Papers", icon: BookOpen },
    { value: "Yet to Start", label: "Generated Ideas", icon: Lightbulb }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Features section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/20 text-primary px-4 py-1">
                Features
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                Accelerate Your Innovation
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Discover how our platform helps researchers, inventors, and companies innovate faster
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="glassmorphic overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-5`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground flex-grow mb-4">{feature.description}</p>
                    <Link to={feature.link}>
                      <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/10">
                        Explore <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats section */}
        <section className="py-16 md:py-24 bg-background-secondary">
          <div className="container px-4 md:px-6">
            <div className="glassmorphic rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <stat.icon className="h-10 w-10 text-primary mb-4" />
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="glassmorphic rounded-2xl p-8 md:p-12 text-center">
              <Badge className="mb-4 bg-primary/20 text-primary px-4 py-1">
                Get Started
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to Revolutionize Your Research?
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mb-8">
                Join thousands of researchers and innovators using PatentAgent to discover insights and generate ideas
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-primary text-background hover:bg-primary/90">
                  Start Your Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/10">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
