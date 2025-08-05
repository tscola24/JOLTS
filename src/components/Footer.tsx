import { Leaf, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-primary mr-2" />
              <h3 className="text-2xl font-bold text-foreground">JOLTS Foundation</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empowering future generations 
              <br>with technology to lead healthy, 
              purposeful lives while protecting 
              <br>and preserving our planet
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span>stephanie@joltsfoundation.org</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                <span>Building Communities Worldwide</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Our Focus Areas</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Education & Learning</li>
              <li>• Sports & Outdoor Recreation</li>
              <li>• Environmental Conservation</li>
              <li>• Humanitarian Aid</li>
              <li>• Community Development</li>
              <li>• Sustainable Initiatives</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 JOLTS Foundation. All rights reserved. Building a better world for generations to come.
          </p>
        </div>
      </div>
    </footer>
  );
};
