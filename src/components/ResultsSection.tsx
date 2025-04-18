
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Calendar, User, Building, ChevronDown, Maximize, Link, Download, BookOpen, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for demonstration
const mockResults = [
  {
    id: 1,
    type: "patent",
    title: "Quantum Computing Device with Superconducting Qubits",
    summary: "A quantum computing device that utilizes superconducting qubits to perform quantum calculations with reduced error rates and improved coherence times.",
    inventors: ["Sarah Johnson", "Michael Chen"],
    organization: "Quantum Technologies Inc.",
    date: "2023-06-15",
    score: 92,
    novelty: "High",
    source: "USPTO",
  },
  {
    id: 2,
    type: "patent",
    title: "System for Natural Language Processing in Specialized Medical Domains",
    summary: "A system for natural language processing that specializes in medical terminology and contexts, utilizing transformer-based neural networks with domain-specific pre-training.",
    inventors: ["David Rodriguez", "Emily Zhang"],
    organization: "HealthTech Solutions",
    date: "2023-04-22",
    score: 88,
    novelty: "Medium",
    source: "EPO",
  },
  {
    id: 3,
    type: "paper",
    title: "Advances in Graph Neural Networks for Molecular Property Prediction",
    summary: "This paper presents novel approaches to molecular property prediction using graph neural networks with attention mechanisms and multi-task learning frameworks.",
    authors: ["Dr. Alex Williams", "Dr. Lisa Chen", "Dr. Robert Kim"],
    organization: "Stanford University",
    date: "2023-01-18",
    citations: 42,
    source: "Nature Machine Intelligence",
  },
];

const FilterSection = () => {
  return (
    <div className="glass-card p-5">
      <div className="mb-4">
        <h3 className="text-base font-medium mb-2">Filters</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <label className="text-sm text-muted-foreground">Source</label>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-2 space-y-1">
              <div className="flex items-center">
                <input type="checkbox" id="uspto" className="mr-2" />
                <label htmlFor="uspto" className="text-sm">USPTO</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="epo" className="mr-2" />
                <label htmlFor="epo" className="text-sm">EPO</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="nature" className="mr-2" />
                <label htmlFor="nature" className="text-sm">Nature</label>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between">
              <label className="text-sm text-muted-foreground">Date Range</label>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-2 flex items-center space-x-2">
              <input 
                type="text" 
                placeholder="From"
                className="flex-1 py-1 px-2 text-sm bg-background/50 rounded border border-border"
              />
              <span>-</span>
              <input 
                type="text" 
                placeholder="To"
                className="flex-1 py-1 px-2 text-sm bg-background/50 rounded border border-border"
              />
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between">
              <label className="text-sm text-muted-foreground">Domain</label>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-2 space-y-1">
              <div className="flex items-center">
                <input type="checkbox" id="ai" className="mr-2" />
                <label htmlFor="ai" className="text-sm">Artificial Intelligence</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="biotech" className="mr-2" />
                <label htmlFor="biotech" className="text-sm">Biotechnology</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="quantum" className="mr-2" />
                <label htmlFor="quantum" className="text-sm">Quantum Computing</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-border pt-4 flex justify-between">
        <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 text-xs">
          Reset
        </Button>
        <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs">
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default function ResultsSection() {
  const [expandedResult, setExpandedResult] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    setExpandedResult(expandedResult === id ? null : id);
  };
  
  return (
    <section id="results" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <FilterSection />
          </div>
          
          <div className="md:col-span-3 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Results</h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <select className="bg-secondary text-foreground text-sm py-1 px-2 rounded border border-border">
                  <option>Most Relevant</option>
                  <option>Newest First</option>
                  <option>Oldest First</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-4">
              {mockResults.map((result) => (
                <Card key={result.id} className={cn(
                  "patent-card overflow-hidden",
                  expandedResult === result.id ? "animate-scale-in" : ""
                )}>
                  <CardHeader className="p-5 pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant={result.type === "patent" ? "default" : "secondary"} className="mb-2">
                          {result.type === "patent" ? "Patent" : "Academic Paper"}
                        </Badge>
                        <CardTitle className="text-lg font-medium">{result.title}</CardTitle>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="rounded-full hover:bg-white/5" 
                        onClick={() => toggleExpand(result.id)}
                      >
                        <Maximize className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-5 pt-0 space-y-4">
                    <p className="text-sm text-muted-foreground">{result.summary}</p>
                    
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {result.date}
                      </div>
                      
                      <div className="flex items-center">
                        {result.type === "patent" ? (
                          <User className="h-3 w-3 mr-1" />
                        ) : (
                          <BookOpen className="h-3 w-3 mr-1" />
                        )}
                        {result.type === "patent" 
                          ? result.inventors.join(", ")
                          : result.authors.join(", ")
                        }
                      </div>
                      
                      <div className="flex items-center">
                        <Building className="h-3 w-3 mr-1" />
                        {result.organization}
                      </div>
                      
                      <div className="flex items-center">
                        <FileText className="h-3 w-3 mr-1" />
                        {result.source}
                      </div>
                    </div>
                    
                    {expandedResult === result.id && (
                      <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                        <Tabs defaultValue="overview">
                          <TabsList className="glass">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="claims">Claims & Insights</TabsTrigger>
                            <TabsTrigger value="related">Related Works</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="overview" className="mt-4 space-y-4">
                            <div className="glass-card p-4">
                              <h4 className="text-sm font-medium mb-2">Abstract</h4>
                              <p className="text-sm text-muted-foreground">
                                {result.summary} This expanded abstract provides more detailed information about the 
                                technology, methodology, and potential applications.
                              </p>
                            </div>
                            
                            {result.type === "patent" && (
                              <div className="glass-card p-4">
                                <h4 className="text-sm font-medium mb-2">AI Analysis</h4>
                                <div className="grid grid-cols-3 gap-4">
                                  <div className="text-center">
                                    <div className="text-lg font-bold text-primary">{result.score}%</div>
                                    <div className="text-xs text-muted-foreground">Relevance Score</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-lg font-bold text-primary">{result.novelty}</div>
                                    <div className="text-xs text-muted-foreground">Novelty Rating</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-lg font-bold text-primary">Medium</div>
                                    <div className="text-xs text-muted-foreground">Implementation Complexity</div>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {result.type === "paper" && (
                              <div className="glass-card p-4">
                                <h4 className="text-sm font-medium mb-2">Academic Impact</h4>
                                <div className="grid grid-cols-3 gap-4">
                                  <div className="text-center">
                                    <div className="text-lg font-bold text-primary">{result.citations}</div>
                                    <div className="text-xs text-muted-foreground">Citations</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-lg font-bold text-primary">8.4</div>
                                    <div className="text-xs text-muted-foreground">Impact Score</div>
                                  </div>
                                  <div className="text-center">
                                    <div className="text-lg font-bold text-primary">92%</div>
                                    <div className="text-xs text-muted-foreground">Methodology Quality</div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </TabsContent>
                          
                          <TabsContent value="claims" className="mt-4">
                            <div className="glass-card p-4 space-y-3">
                              <h4 className="text-sm font-medium">Key Claims & Insights</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  <span className="text-muted-foreground">The patent introduces a novel approach to quantum error correction using topological codes.</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  <span className="text-muted-foreground">Claims specify a method for enhancing qubit coherence time by at least 10x over existing approaches.</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  <span className="text-muted-foreground">The technology could potentially be applied to quantum cryptography and quantum simulation tasks.</span>
                                </li>
                              </ul>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="related" className="mt-4">
                            <div className="glass-card p-4 space-y-3">
                              <h4 className="text-sm font-medium">Related Patents & Papers</h4>
                              <ul className="space-y-3 text-sm">
                                <li className="flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  <div>
                                    <div className="font-medium">Scalable Quantum Computing Architecture</div>
                                    <div className="text-xs text-muted-foreground">IBM Research (2022) - 82% similarity</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  <div>
                                    <div className="font-medium">Quantum Error Mitigation Techniques for NISQ Devices</div>
                                    <div className="text-xs text-muted-foreground">Nature Physics (2022) - 75% similarity</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  <div>
                                    <div className="font-medium">Superconducting Qubit Design for Improved Coherence</div>
                                    <div className="text-xs text-muted-foreground">Google AI Quantum (2021) - 68% similarity</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>
                    )}
                  </CardContent>
                  
                  <CardFooter className="p-5 pt-0 flex justify-between">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
                        <Link className="h-4 w-4 mr-1" /> View Original
                      </Button>
                      <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
                        <Download className="h-4 w-4 mr-1" /> Save
                      </Button>
                    </div>
                    
                    {result.type === "patent" && (
                      <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10">
                        {result.score >= 90 ? "High Impact" : result.score >= 80 ? "Notable" : "Standard"}
                      </Badge>
                    )}
                    
                    {result.type === "paper" && (
                      <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10">
                        {result.citations >= 40 ? "Highly Cited" : result.citations >= 20 ? "Well Cited" : "Recent"}
                      </Badge>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
