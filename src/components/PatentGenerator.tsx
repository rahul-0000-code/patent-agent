
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Sparkles, Lightbulb, Download, ArrowRight, BarChart3, ShieldCheck, BrainCircuit,
  Zap, Lock, Copy, MessagesSquare, Send, CornerDownRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const mockGeneratedIdeas = [
  {
    id: 1,
    title: "Neural Network Architecture for Efficient Edge Computing on IoT Devices",
    description: "A novel neural network architecture designed specifically for edge computing on IoT devices, utilizing layer compression and dynamic pruning to achieve high performance with minimal computational resources.",
    feasibility: 87,
    novelty: 78,
    impact: 92,
    tags: ["AI", "Edge Computing", "IoT", "Neural Networks"]
  },
  {
    id: 2,
    title: "Blockchain-Based System for Verifiable AI Training Provenance",
    description: "A system that combines blockchain technology with cryptographic proofs to establish verifiable provenance for AI model training data and processes, ensuring transparency and trustworthiness in AI development.",
    feasibility: 81,
    novelty: 85,
    impact: 76,
    tags: ["Blockchain", "AI Ethics", "Data Provenance", "Cryptography"]
  }
];

export default function PatentGenerator() {
  const [showChat, setShowChat] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<typeof mockGeneratedIdeas>([]);
  const [chat, setChat] = useState<{role: string, content: string}[]>([
    {role: 'system', content: 'Welcome to the Patent Idea Generator. Describe your research area or interests, and I will suggest novel patent ideas based on cutting-edge technologies and market gaps.'}
  ]);

  const handleGenerate = () => {
    if (!userInput.trim()) return;
    
    setChat([...chat, {role: 'user', content: userInput}]);
    setIsGenerating(true);
    setUserInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setChat(prevChat => [...prevChat, 
        {role: 'user', content: userInput},
        {role: 'assistant', content: 'Based on your interest in advanced computing paradigms, I\'ve generated some novel patent ideas that combine cutting-edge technologies with practical applications. These ideas address emerging market needs while building on recent research advances.'}
      ]);
      setIsGenerating(false);
      setGeneratedIdeas(mockGeneratedIdeas);
    }, 2000);
  };

  const handleTryExample = () => {
    setShowChat(true);
    setChat([
      {role: 'system', content: 'Welcome to the Patent Idea Generator. I\'m here to help you explore innovative patent ideas. Let\'s start with an example in quantum computing and neural interfaces.'},
      {role: 'assistant', content: 'Would you like to explore patent opportunities in quantum computing or neural interfaces? I can help you generate novel ideas in these cutting-edge fields.'}
    ]);
  };
  
  if (!showChat) {
    return (
      <section id="generator" className="py-12 md:py-24 relative">
        <div className="absolute inset-0 -z-10 gradient-bg opacity-40"></div>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-10">
            <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-4 py-1">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Patent Idea Generator</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Generate novel patent ideas using our advanced AI that analyzes research gaps and technology trends
            </p>
            <Button 
              className="mt-6 bg-primary hover:bg-primary/90"
              onClick={handleTryExample}
            >
              <Sparkles className="h-4 w-4 mr-2" /> Try an Example
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col relative">
      <div className="absolute inset-0 -z-10 gradient-bg opacity-40"></div>
      
      <div className="container flex-1 py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-full max-h-[calc(100vh-8rem)]">
          <div className="lg:col-span-2 glass flex flex-col rounded-xl border border-white/10">
            <div className="p-4 border-b border-border">
              <h3 className="text-lg font-medium flex items-center">
                <MessagesSquare className="h-5 w-5 mr-2 text-primary" />
                AI Assistant
              </h3>
            </div>
            
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {chat.map((message, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex",
                      message.role === 'user' ? "justify-end" : "justify-start",
                      message.role === 'system' ? "justify-center" : ""
                    )}
                  >
                    {message.role === 'system' ? (
                      <div className="glass px-4 py-2 rounded-lg max-w-[80%] text-sm text-center text-muted-foreground">
                        {message.content}
                      </div>
                    ) : message.role === 'user' ? (
                      <div className="bg-primary/20 text-foreground px-4 py-2 rounded-lg rounded-tr-none max-w-[80%] text-sm">
                        {message.content}
                      </div>
                    ) : (
                      <div className="glass px-4 py-2 rounded-lg rounded-tl-none max-w-[80%] text-sm">
                        {message.content}
                      </div>
                    )}
                  </div>
                ))}
                
                {isGenerating && (
                  <div className="flex justify-start">
                    <div className="glass px-4 py-2 rounded-lg rounded-tl-none max-w-[80%]">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                        <div className="h-2 w-2 bg-primary rounded-full animate-pulse [animation-delay:300ms]"></div>
                        <div className="h-2 w-2 bg-primary rounded-full animate-pulse [animation-delay:600ms]"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t border-border">
              <div className="relative">
                <textarea 
                  className="w-full bg-background/50 p-3 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:ring-opacity-50 border border-border resize-none"
                  placeholder="Describe your research area or technology interest..."
                  rows={3}
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleGenerate();
                    }
                  }}
                ></textarea>
                <Button 
                  className="absolute bottom-3 right-3 rounded-full p-2"
                  size="icon"
                  disabled={!userInput.trim() || isGenerating}
                  onClick={handleGenerate}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-3">
                <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 text-xs rounded-full">
                  <Zap className="h-3 w-3 mr-1" /> Quantum Computing
                </Button>
                <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 text-xs rounded-full">
                  <BrainCircuit className="h-3 w-3 mr-1" /> Neural Interfaces
                </Button>
                <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 text-xs rounded-full">
                  <ShieldCheck className="h-3 w-3 mr-1" /> Cybersecurity
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-primary" />
                Generated Patent Ideas
              </h3>
              <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5">
                <Download className="h-4 w-4 mr-2" /> Export All
              </Button>
            </div>
            
            {generatedIdeas.length > 0 ? (
              <div className="space-y-5">
                {generatedIdeas.map((idea) => (
                  <Card key={idea.id} className="patent-card overflow-hidden glass">
                    <CardContent className="p-0">
                      <div className="p-5">
                        <h4 className="text-lg font-medium mb-2">{idea.title}</h4>
                        <p className="text-sm text-muted-foreground mb-4">{idea.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {idea.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="border-primary/20 text-primary text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Tabs defaultValue="metrics">
                          <TabsList className="glass">
                            <TabsTrigger value="metrics">AI Analysis</TabsTrigger>
                            <TabsTrigger value="details">Patent Details</TabsTrigger>
                            <TabsTrigger value="market">Market Potential</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="metrics" className="mt-4">
                            <div className="glass-card p-4">
                              <div className="grid grid-cols-3 gap-4">
                                <div>
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs text-muted-foreground">Feasibility</span>
                                    <span className="text-xs font-medium">{idea.feasibility}%</span>
                                  </div>
                                  <div className="w-full bg-background/50 rounded-full h-2">
                                    <div 
                                      className="bg-green-500 h-2 rounded-full" 
                                      style={{ width: `${idea.feasibility}%` }}
                                    ></div>
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs text-muted-foreground">Novelty</span>
                                    <span className="text-xs font-medium">{idea.novelty}%</span>
                                  </div>
                                  <div className="w-full bg-background/50 rounded-full h-2">
                                    <div 
                                      className="bg-blue-500 h-2 rounded-full" 
                                      style={{ width: `${idea.novelty}%` }}
                                    ></div>
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs text-muted-foreground">Impact</span>
                                    <span className="text-xs font-medium">{idea.impact}%</span>
                                  </div>
                                  <div className="w-full bg-background/50 rounded-full h-2">
                                    <div 
                                      className="bg-purple-500 h-2 rounded-full" 
                                      style={{ width: `${idea.impact}%` }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="details" className="mt-4">
                            <div className="glass-card p-4 space-y-3">
                              <div>
                                <h5 className="text-sm font-medium mb-1">Potential Claims</h5>
                                <ul className="text-xs text-muted-foreground space-y-1">
                                  <li className="flex items-start">
                                    <CornerDownRight className="h-3 w-3 mr-1 shrink-0 mt-0.5" />
                                    <span>A method for optimizing neural network architecture based on device constraints and computational capacity.</span>
                                  </li>
                                  <li className="flex items-start">
                                    <CornerDownRight className="h-3 w-3 mr-1 shrink-0 mt-0.5" />
                                    <span>A system for dynamic pruning of neural network layers during inference on resource-constrained devices.</span>
                                  </li>
                                </ul>
                              </div>
                              
                              <div>
                                <h5 className="text-sm font-medium mb-1">Possible Embodiments</h5>
                                <p className="text-xs text-muted-foreground">
                                  The system could be implemented as a software library, hardware accelerator component, 
                                  or integrated circuit design specifically optimized for edge computing applications.
                                </p>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="market" className="mt-4">
                            <div className="glass-card p-4 space-y-3">
                              <div>
                                <h5 className="text-sm font-medium mb-1">Market Opportunity</h5>
                                <p className="text-xs text-muted-foreground">
                                  The edge AI market is projected to grow at 26% CAGR through 2028, with particular 
                                  demand for energy-efficient solutions that can operate on low-power IoT devices.
                                </p>
                              </div>
                              
                              <div>
                                <h5 className="text-sm font-medium mb-1">Competitive Landscape</h5>
                                <p className="text-xs text-muted-foreground">
                                  Current solutions from Google (TensorFlow Lite), Meta (PyTorch Mobile), and specialized 
                                  startups like Edge Impulse focus on model compression, but few address dynamic adaptation
                                  to changing device conditions.
                                </p>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>
                      
                      <div className="border-t border-border p-4 flex justify-between">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 text-xs">
                            <Copy className="h-3 w-3 mr-1" /> Copy
                          </Button>
                          <Button variant="outline" size="sm" className="border-white/10 hover:bg-white/5 text-xs">
                            <Lock className="h-3 w-3 mr-1" /> IP Check
                          </Button>
                        </div>
                        
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs">
                          Refine Idea <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="glass-card flex flex-col items-center justify-center py-16">
                <Lightbulb className="h-12 w-12 text-muted-foreground mb-4" />
                <h4 className="text-lg font-medium mb-2">No Ideas Generated Yet</h4>
                <p className="text-sm text-muted-foreground mb-4 max-w-md text-center">
                  Describe your research area or technology interest in the chat to generate novel patent ideas with our AI.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  <Sparkles className="h-4 w-4 mr-2" /> Try an Example
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
