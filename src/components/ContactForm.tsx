import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `JOLTS Foundation Inquiry - ${formData.inquiryType}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}
Inquiry Type: ${formData.inquiryType}

Message:
${formData.message}
    `;
    
    const mailtoLink = `mailto:info@joltsfoundation.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Your default email client has been opened with your message. Please send the email to complete your inquiry.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      inquiryType: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-4xl font-bold text-foreground">Get in Touch</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to make a difference? Contact us to learn more about grant opportunities 
              or to discuss how we can support your organization's mission.
            </p>
          </div>

          <Card className="shadow-glow border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Contact JOLTS Foundation</CardTitle>
              <CardDescription>
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="transition-all duration-300 focus:shadow-soft"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="transition-all duration-300 focus:shadow-soft"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      type="text"
                      placeholder="Your organization name"
                      value={formData.organization}
                      onChange={(e) => handleInputChange("organization", e.target.value)}
                      className="transition-all duration-300 focus:shadow-soft"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type *</Label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                      <SelectTrigger className="transition-all duration-300 focus:shadow-soft">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grant-proposal">Grant Proposal</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="general">General Information</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your organization, project, or inquiry. For grant proposals, please include details about your mission, project scope, expected impact, and funding requirements."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    rows={6}
                    className="transition-all duration-300 focus:shadow-soft resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full md:w-auto"
                    disabled={!formData.name || !formData.email || !formData.inquiryType || !formData.message}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};