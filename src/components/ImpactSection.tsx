import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Award } from "lucide-react";

export const ImpactSection = () => {
  const impactAreas = [
    {
      icon: Target,
      title: "Strategic Giving",
      description: "We carefully evaluate each proposal to ensure maximum impact and alignment with our mission.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Our grants prioritize initiatives that create lasting positive change in local communities.",
      color: "text-nature"
    },
    {
      icon: Lightbulb,
      title: "Innovation Support",
      description: "We embrace creative solutions and innovative approaches to addressing global challenges.",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Excellence Recognition",
      description: "We celebrate and support organizations that demonstrate exceptional commitment to their cause.",
      color: "text-earth"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Making an Impact</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our approach to charitable giving focuses on creating meaningful, measurable impact 
            that benefits both current and future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {impactAreas.map((area, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors">
                    <area.icon className={`h-8 w-8 ${area.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-gradient-hero border-0 shadow-glow max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Ready to Apply for a Grant?
              </h3>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                We welcome applications from qualified 501(c)(3) tax-exempt organizations 
                whose missions align with our core values. Please include your IRS determination 
                letter with your proposal submission to verify tax-exempt status.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};