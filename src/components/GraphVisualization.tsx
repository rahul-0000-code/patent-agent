
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Maximize2, ZoomIn, ZoomOut, RotateCcw, BarChart3, Network, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GraphVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, content: "" });
  
  // This is a simulated visualization that would normally use D3.js, React-Force-Graph, or similar
  // For now, we'll render a placeholder canvas with some animated elements
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Simple node data for demonstration
    const nodes = [
      { x: canvas.width * 0.5, y: canvas.height * 0.4, radius: 30, color: 'hsla(var(--primary), 0.7)', type: 'concept', label: 'Quantum Computing' },
      { x: canvas.width * 0.3, y: canvas.height * 0.6, radius: 25, color: 'rgba(54, 162, 235, 0.7)', type: 'patent', label: 'Quantum Error Correction' },
      { x: canvas.width * 0.7, y: canvas.height * 0.6, radius: 25, color: 'rgba(54, 162, 235, 0.7)', type: 'patent', label: 'Quantum Algorithms' },
      { x: canvas.width * 0.25, y: canvas.height * 0.35, radius: 20, color: 'rgba(255, 99, 132, 0.7)', type: 'author', label: 'IBM Research' },
      { x: canvas.width * 0.75, y: canvas.height * 0.35, radius: 20, color: 'rgba(255, 99, 132, 0.7)', type: 'author', label: 'Google AI' },
      { x: canvas.width * 0.2, y: canvas.height * 0.7, radius: 15, color: 'rgba(255, 206, 86, 0.7)', type: 'paper', label: 'Surface Code Protocol' },
      { x: canvas.width * 0.4, y: canvas.height * 0.8, radius: 15, color: 'rgba(255, 206, 86, 0.7)', type: 'paper', label: 'Noise Mitigation' },
      { x: canvas.width * 0.6, y: canvas.height * 0.8, radius: 15, color: 'rgba(255, 206, 86, 0.7)', type: 'paper', label: 'Shor\'s Algorithm' },
      { x: canvas.width * 0.8, y: canvas.height * 0.7, radius: 15, color: 'rgba(255, 206, 86, 0.7)', type: 'paper', label: 'Grover\'s Algorithm' },
    ];
    
    // Edges between nodes
    const edges = [
      { from: 0, to: 1 }, { from: 0, to: 2 },
      { from: 1, to: 3 }, { from: 2, to: 4 },
      { from: 1, to: 5 }, { from: 1, to: 6 },
      { from: 2, to: 7 }, { from: 2, to: 8 },
      { from: 3, to: 5 }, { from: 4, to: 7 },
    ];
    
    // Animation variables
    let animationFrameId: number;
    let angle = 0;
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let hoveredNode: typeof nodes[0] | null = null;
    
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      
      // Check if mouse is over any node
      hoveredNode = nodes.find(node => {
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        return Math.sqrt(dx * dx + dy * dy) < node.radius;
      }) || null;
      
      if (hoveredNode) {
        setTooltip({
          show: true,
          x: e.clientX,
          y: e.clientY,
          content: hoveredNode.label
        });
        canvas.style.cursor = 'pointer';
      } else {
        setTooltip({ show: false, x: 0, y: 0, content: "" });
        canvas.style.cursor = 'default';
      }
    });
    
    canvas.addEventListener('mouseleave', () => {
      setTooltip({ show: false, x: 0, y: 0, content: "" });
    });
    
    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw edges with subtle animation
      edges.forEach(edge => {
        const from = nodes[edge.from];
        const to = nodes[edge.to];
        
        // Animate edge
        const pulseIntensity = 0.5 + Math.sin(angle + edge.from * 0.5) * 0.2;
        
        // Draw edge line
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * pulseIntensity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
      
      // Draw nodes
      nodes.forEach((node, i) => {
        // Gentle floating movement
        node.y += Math.sin(angle + i * 0.5) * 0.3;
        node.x += Math.cos(angle + i * 0.7) * 0.2;
        
        // Draw glow if hovered
        if (hoveredNode === node) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 5, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
            node.x, node.y, node.radius,
            node.x, node.y, node.radius + 15
          );
          gradient.addColorStop(0, node.color.replace('0.7', '0.7'));
          gradient.addColorStop(1, node.color.replace('0.7', '0'));
          ctx.fillStyle = gradient;
          ctx.fill();
        }
        
        // Draw the node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Draw a smaller inner circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fill();
        
        // Draw icon or text indicator based on node type
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        if (node.type === 'patent') {
          ctx.fillText('P', node.x, node.y);
        } else if (node.type === 'author') {
          ctx.fillText('A', node.x, node.y);
        } else if (node.type === 'paper') {
          ctx.fillText('R', node.x, node.y);
        } else {
          ctx.fillText('C', node.x, node.y);
        }
      });
      
      angle += 0.01;
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isFullScreen]);
  
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
  
  return (
    <section id="graph" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-4 py-1">
            <Network className="h-4 w-4 mr-2" />
            Interactive
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Knowledge Graph</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore connections between patents, papers, researchers, and concepts
          </p>
        </div>
        
        <div className={cn(
          "grid gap-6",
          isFullScreen 
            ? "fixed inset-0 z-50 bg-background p-6" 
            : "grid-cols-1 lg:grid-cols-4"
        )}>
          {!isFullScreen && (
            <div className="lg:col-span-1 space-y-6">
              <Card className="glass-card p-5">
                <h3 className="text-base font-medium mb-4 flex items-center">
                  <Filter className="h-4 w-4 mr-2 text-primary" />
                  Graph Filters
                </h3>
                
                <div className="space-y-5">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Node Types</label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="patents" className="mr-2" defaultChecked />
                        <label htmlFor="patents" className="text-sm">Patents</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="papers" className="mr-2" defaultChecked />
                        <label htmlFor="papers" className="text-sm">Academic Papers</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="authors" className="mr-2" defaultChecked />
                        <label htmlFor="authors" className="text-sm">Authors & Organizations</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="concepts" className="mr-2" defaultChecked />
                        <label htmlFor="concepts" className="text-sm">Concepts & Keywords</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Time Range</label>
                    <div className="flex items-center space-x-2">
                      <select className="bg-background/50 text-foreground text-sm py-1 px-2 rounded border border-border flex-1">
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                      </select>
                      <span>-</span>
                      <select className="bg-background/50 text-foreground text-sm py-1 px-2 rounded border border-border flex-1">
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option selected>Present</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Domain Focus</label>
                    <select className="w-full bg-background/50 text-foreground text-sm py-1 px-2 rounded border border-border">
                      <option>All Domains</option>
                      <option>Quantum Computing</option>
                      <option>Artificial Intelligence</option>
                      <option>Biotechnology</option>
                      <option>Nanotechnology</option>
                      <option>Renewable Energy</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">Connection Strength</label>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      defaultValue="3" 
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Weak</span>
                      <span>Strong</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-border flex justify-end">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs">
                    Apply Filters
                  </Button>
                </div>
              </Card>
              
              <Card className="glass-card p-5">
                <h3 className="text-base font-medium mb-4 flex items-center">
                  <BarChart3 className="h-4 w-4 mr-2 text-primary" />
                  Graph Statistics
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Nodes</span>
                    <span className="font-medium">247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Patents</span>
                    <span className="font-medium">86</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Papers</span>
                    <span className="font-medium">112</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Authors</span>
                    <span className="font-medium">43</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Concepts</span>
                    <span className="font-medium">6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time Span</span>
                    <span className="font-medium">2018-2024</span>
                  </div>
                </div>
              </Card>
            </div>
          )}
          
          <div className={cn(
            "relative", 
            isFullScreen ? "" : "lg:col-span-3"
          )}>
            <Card className={cn(
              "glass-card p-0 overflow-hidden",
              isFullScreen ? "h-[calc(100vh-6rem)]" : "h-[500px]"
            )}>
              <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
                <Tabs defaultValue="3d" className="glass">
                  <TabsList className="glass">
                    <TabsTrigger value="3d">3D View</TabsTrigger>
                    <TabsTrigger value="2d">2D View</TabsTrigger>
                    <TabsTrigger value="tree">Tree</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <div className="glass flex items-center rounded-lg">
                  <Button variant="ghost" size="icon" className="hover:bg-white/5">
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-white/5">
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-white/5">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-white/5" onClick={toggleFullScreen}>
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="w-full h-full">
                <canvas 
                  ref={canvasRef}
                  className="w-full h-full"
                ></canvas>
                
                {tooltip.show && (
                  <div 
                    className="absolute glass-card px-3 py-1.5 text-sm pointer-events-none z-10"
                    style={{ 
                      left: `${tooltip.x}px`, 
                      top: `${tooltip.y - 35}px`,
                      transform: 'translate(-50%, -100%)'
                    }}
                  >
                    {tooltip.content}
                  </div>
                )}
              </div>
              
              <div className="absolute bottom-4 left-4 glass rounded-lg p-2 pointer-events-none">
                <div className="text-xs text-muted-foreground mb-2">Legend</div>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary mr-1"></div>
                    <span className="text-xs">Concepts</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[rgba(54,162,235,0.7)] mr-1"></div>
                    <span className="text-xs">Patents</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[rgba(255,99,132,0.7)] mr-1"></div>
                    <span className="text-xs">Authors</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[rgba(255,206,86,0.7)] mr-1"></div>
                    <span className="text-xs">Papers</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
