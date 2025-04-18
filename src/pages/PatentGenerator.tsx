
import Navbar from "@/components/Navbar";
import PatentGenerator from "@/components/PatentGenerator";
import Footer from "@/components/Footer";

const PatentGeneratorPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16">
      <PatentGenerator />
        <div className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              {/* <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Patent Ideaaa Generator
              </h1> */}
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Generate novel patent ideas using our advanced AI that analyzes research gaps and technology trends
              </p>
            </div>
          </div>
        </div>
        
      </main>
      <Footer />
    </div>
  );
};

export default PatentGeneratorPage;
