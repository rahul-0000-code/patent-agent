import Navbar from "@/components/Navbar";
import GraphVisualization from "@/components/GraphVisualization";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, LineChart, PieChart, BrainCircuit, Microscope, Rocket } from "lucide-react";

const Trends = () => {
  const trendingTechnologies = [
    { name: "Quantum Computing", growth: "+187%", category: "Computing", description: "Advancements in quantum bits stability and error correction" },
    { name: "Neural Interfaces", growth: "+142%", category: "BioTech", description: "Direct brain-computer interfaces for medical applications" },
    { name: "Edge AI", growth: "+118%", category: "AI", description: "AI processing capabilities on resource-constrained devices" },
    { name: "Carbon Capture", growth: "+93%", category: "CleanTech", description: "Industrial-scale atmospheric carbon dioxide sequestration" },
    { name: "Solid-State Batteries", growth: "+87%", category: "Energy", description: "High-density, fast-charging battery technology" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-4 py-1">
                <TrendingUp className="h-4 w-4 mr-2" />
                Analytics
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Patent Trends & Insights
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore emerging technologies, research focus areas, and innovation hotspots
              </p>
            </div>

            <Tabs defaultValue="overview" className="w-full mb-12">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-background/50 backdrop-blur-sm border border-accent p-1 rounded-xl">
                  <TabsTrigger value="overview" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="technologies" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    <BrainCircuit className="h-4 w-4 mr-2" />
                    Technologies
                  </TabsTrigger>
                  <TabsTrigger value="companies" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    <Rocket className="h-4 w-4 mr-2" />
                    Companies
                  </TabsTrigger>
                  <TabsTrigger value="research" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    <Microscope className="h-4 w-4 mr-2" />
                    Research
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview" className="space-y-8">
                <div className="glassmorphic rounded-xl p-6">
                  <h2 className="text-2xl font-bold mb-6">Trending Technologies</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trendingTechnologies.map((tech, index) => (
                      <Card key={index} className="glassmorphic overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="font-medium text-lg">{tech.name}</h3>
                            <Badge className="bg-primary/20 text-primary">{tech.growth}</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground mb-3">
                            Category: <span className="text-primary">{tech.category}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{tech.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <GraphVisualization />
              </TabsContent>
              
              <TabsContent value="technologies">
                <div className="glassmorphic rounded-xl p-6 text-center">
                  <LineChart className="h-12 w-12 mx-auto mb-4 text-primary opacity-50" />
                  <h2 className="text-2xl font-bold mb-2">Technology Trends</h2>
                  <p className="text-muted-foreground">
                    Detailed analysis of emerging technologies and innovation trajectories.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="companies">
                <div className="glassmorphic rounded-xl p-6 text-center">
                  <PieChart className="h-12 w-12 mx-auto mb-4 text-primary opacity-50" />
                  <h2 className="text-2xl font-bold mb-2">Company Analysis</h2>
                  <p className="text-muted-foreground">
                    Comparative studies of corporate innovation portfolios and patent strategies.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="research">
                <div className="glassmorphic rounded-xl p-6 text-center">
                  <Microscope className="h-12 w-12 mx-auto mb-4 text-primary opacity-50" />
                  <h2 className="text-2xl font-bold mb-2">Research Hotspots</h2>
                  <p className="text-muted-foreground">
                    Identification of research concentration areas and emerging academic focus.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Trends;
