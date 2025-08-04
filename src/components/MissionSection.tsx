import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, TreePine, Dumbbell, Heart, Globe, HandHeart } from "lucide-react";

export const MissionSection = () => {
  const coreValues = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Supporting educational initiatives that empower individuals with knowledge and skills for the future."
    },
    {
      icon: Dumbbell,
      title: "Sports & Recreation",
      description: "Promoting physical wellness and community building through sports and outdoor activities."
    },
    {
      icon: TreePine,
      title: "Environmental Conservation",
      description: "Protecting our planet through sustainable practices and conservation efforts."
    },
    {
      icon: Heart,
      title: "Humanitarian Aid",
      description: "Providing support to communities in need through compassionate charitable work."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating lasting positive change in communities around the world."
    },
    {
      icon: HandHeart,
      title: "Alternative Causes",
      description: "Supporting innovative charitable initiatives that align with our mission of building a better world."
    }
  ];

  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Our Mission</h2>
          <div className="bg-card p-8 rounded-2xl shadow-soft border border-border">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              The JOLTS Foundation is committed to empowering future generations to lead healthy, 
              purposeful lives while protecting and preserving our planet. Our mission is to support 
              organizations and initiatives that align with our core values of education, sports, 
              outdoor recreation, environmental conservation, humanitarian aid, and alternative charitable causes.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-6">
              Through strategic and impactful charitable giving, we aim to make a positive and lasting 
              difference in communities around the globe. We invite charities and nonprofit organizations 
              to submit grant proposals that demonstrate a clear commitment to creating a sustainable 
              and equitable future for all.
            </p>
            <p className="text-xl font-semibold text-primary mt-8">
              Together, let's build a better world for generations to come.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};