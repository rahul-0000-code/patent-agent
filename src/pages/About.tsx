
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Users, GraduationCap, Lightbulb, Briefcase, 
  Github, Linkedin, Twitter, Mail
} from "lucide-react";

const teamMembers = [
  {
    name: "Pratyush Sahoo",
    role: "Lead AI Researcher",
    image: "",
    // contribution: "Developed the core patent analysis algorithms and semantic search functionality"
  },
  {
    name: "Rahul Bhandari",
    role: "Still Figuring Out",
    image: "",
    // contribution: "Provided legal expertise and patent classification guidance"
  },
  {
    name: "Md Sarfraz Alam",
    role: "Full-stack Developer",
    image: "",
    // contribution: "Built the platform architecture and data visualization components"
  },
  {
    name: "Abu Bakar Siddiqui Thakur",
    role: "Lead AI Researcher",
    image: "",
    // contribution: "Created predictive models and trend analysis algorithms"
  },
  {
    name: "Nutan Choudhary",
    role: "Data Scientist",
    image: "",
    // contribution: "Created predictive models and trend analysis algorithms"
  }
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 px-4 py-1">
                <Users className="h-4 w-4 mr-2" />
                Our Team
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Meet the Innovators
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The brilliant minds behind PatentAgent working to revolutionize patent research and innovation
              </p>
            </div>

            <div className="mb-12 glassmorphic rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">About PatentPulse Team</h2>
              <p className="text-center max-w-3xl mx-auto text-muted-foreground mb-6">
                We are a diverse team of researchers, developers, designers, and legal experts united by our passion for innovation. 
                Our mission is to democratize access to patent intelligence and accelerate technological advancement.
              </p>
              
              <Tabs defaultValue="team" className="w-full mt-8">
                <div className="flex justify-center mb-8">
                  <TabsList className="bg-background/50 backdrop-blur-sm border border-accent p-1 rounded-xl">
                    <TabsTrigger value="team" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      Our Team
                    </TabsTrigger>
                    <TabsTrigger value="mission" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Our Mission
                    </TabsTrigger>
                    <TabsTrigger value="background" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Background
                    </TabsTrigger>
                    <TabsTrigger value="partners" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Partners
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="team">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                      <Card key={index} className="overflow-hidden glassmorphic">
                        <CardContent className="p-0">
                          <div className="aspect-video relative overflow-hidden bg-accent/20">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                            <p className="text-primary text-sm mb-3">{member.role}</p>
                            <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                            <div>
                              <h4 className="text-sm font-semibold mb-2">Key Contribution:</h4>
                              <p className="text-sm text-muted-foreground">{member.contribution}</p>
                            </div>
                            <div className="flex space-x-2 mt-4">
                              <a href="#" className="p-2 rounded-full bg-background/30 hover:bg-primary/20 transition-colors">
                                <Linkedin className="h-4 w-4" />
                              </a>
                              <a href="#" className="p-2 rounded-full bg-background/30 hover:bg-primary/20 transition-colors">
                                <Twitter className="h-4 w-4" />
                              </a>
                              <a href="#" className="p-2 rounded-full bg-background/30 hover:bg-primary/20 transition-colors">
                                <Github className="h-4 w-4" />
                              </a>
                              <a href="#" className="p-2 rounded-full bg-background/30 hover:bg-primary/20 transition-colors">
                                <Mail className="h-4 w-4" />
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="mission">
                  <div className="glassmorphic rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Our Vision & Mission</h3>
                    <p className="text-muted-foreground mb-4">
                      At PatentAgent, we envision a world where innovation is accelerated through democratized access to patent intelligence. 
                      Our mission is to break down the barriers to effective patent research and ideation through advanced AI technology.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      We are committed to providing researchers, inventors, and organizations with powerful tools that unlock insights from 
                      millions of patents and research papers, helping to identify trends, gaps, and opportunities for innovation.
                    </p>
                    <p className="text-muted-foreground">
                      By combining cutting-edge AI with intuitive design, we're transforming how people interact with the global knowledge base 
                      of patents and empowering the next generation of world-changing ideas.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="background">
                  <div className="glassmorphic rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Our Story</h3>
                    <p className="text-muted-foreground mb-4">
                      PatentAgent was born at the intersection of artificial intelligence and intellectual property. Our founders, who worked 
                      at leading research institutions and technology companies, experienced firsthand the challenges of navigating the complex 
                      patent landscape.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Seeing an opportunity to revolutionize this process, they assembled a team of AI researchers, data scientists, patent attorneys, 
                      and software engineers to build a platform that could not only search and analyze patents but also generate novel ideas based on 
                      innovation gaps.
                    </p>
                    <p className="text-muted-foreground">
                      After three years of development and collaboration with leading universities and research organizations, PatentAgent 
                      launched its platform, which now serves thousands of researchers, inventors, and companies worldwide.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="partners">
                  <div className="glassmorphic rounded-xl p-6 text-center">
                    <h3 className="text-xl font-bold mb-4">Our Partners</h3>
                    <p className="text-muted-foreground mb-8">
                      We collaborate with leading organizations across academia, industry, and government to advance innovation.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center opacity-60">
                      <div className="w-32 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                        <div className="font-bold text-primary">CCAI</div>
                      </div>
                      <div className="w-32 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                        <div className="font-bold text-primary">Drishti</div>
                      </div>
                      <div className="w-32 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                        <div className="font-bold text-primary">Chat App</div>
                      </div>
                      <div className="w-32 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                        <div className="font-bold text-primary">Agentic AI</div>
                      </div>
                      <div className="w-32 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                        <div className="font-bold text-primary">Coding Agent</div>
                      </div>
                      <div className="w-32 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                        <div className="font-bold text-primary">Bhashik</div>
                      </div>
                      <div className="w-32 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                        <div className="font-bold text-primary">Krutrim Cloud</div>
                      </div>
                      <div className="w-32 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                        <div className="font-bold text-primary">Coming Soon</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
