import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Globe, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMission = () => {
    document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="People working together on environmental and community projects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo/Icon */}
          <div className="flex items-center justify-center mb-8 animate-float">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mr-4">
              <Leaf className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              JOLTS
              <span className="block text-3xl md:text-4xl font-normal text-primary">Foundation</span>
            </h1>
          </div>

          {/* Mission Statement */}
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90 font-light">
            Empowering future generations with technology to lead healthy, purposeful lives 
            while protecting and preserving our planet
          </p>

          {/* Key Values Icons */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center text-white/80">
              <Heart className="h-6 w-6 mr-2 text-accent" />
              <span className="font-medium">Education</span>
            </div>
            <div className="flex items-center text-white/80">
              <Globe className="h-6 w-6 mr-2 text-accent" />
              <span className="font-medium">Conservation</span>
            </div>
            <div className="flex items-center text-white/80">
              <Leaf className="h-6 w-6 mr-2 text-accent" />
              <span className="font-medium">Sustainability</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg px-8 py-3"
            >
              Submit Grant Proposal
            </Button>
            <p className="text-sm text-white/80 mt-2">501(c)(3) organizations only</p>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToMission}
              className="text-lg px-8 py-3 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              Learn More
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={scrollToMission}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Scroll to mission section"
            >
              <ArrowDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
