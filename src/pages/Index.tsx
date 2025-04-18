
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ResultsSection from "@/components/ResultsSection";
import PatentGenerator from "@/components/PatentGenerator";
import GraphVisualization from "@/components/GraphVisualization";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SearchBar />
        <ResultsSection />
        <PatentGenerator />
        <GraphVisualization />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
