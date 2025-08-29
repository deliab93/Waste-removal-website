import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Check if Supabase is configured
      if (!isSupabaseConfigured) {
        console.log('Supabase not configured, simulating form submission...', formData);
        
        // Simulate successful submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
        
        setIsSubmitting(false);
        return;
      }
      
      console.log('Submitting contact form...', formData);
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      console.log('Contact form response:', { data, error });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      if (data?.success) {
        console.log('Contact form submitted successfully');
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      } else {
        console.error('Contact form submission failed:', data);
        throw new Error(data?.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Submission Error",
        description: "There was an issue sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-eco-green" />,
      title: "Phone",
      details: ["1-800-ECO-WASTE", "(555) 123-4567"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="h-6 w-6 text-eco-green" />,
      title: "Email",
      details: ["info@ecowastepro.com", "quotes@ecowastepro.com"],
      description: "Send us an email anytime"
    },
    {
      icon: <MapPin className="h-6 w-6 text-eco-green" />,
      title: "Address",
      details: ["123 Green Street", "Eco City, EC 12345"],
      description: "Visit our main office"
    },
    {
      icon: <Clock className="h-6 w-6 text-eco-green" />,
      title: "Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 4:00 PM", "Sun: Emergency Only"],
      description: "We're here when you need us"
    }
  ];

  const services = [
    "Residential Waste Removal",
    "Commercial Waste Management",
    "Construction Debris Removal",
    "Hazardous Waste Disposal",
    "Recycling Services",
    "Emergency Cleanup",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Contact EcoWaste Pro - Get Free Quote | Call 1-800-ECO-WASTE"
        description="Contact EcoWaste Pro for professional waste removal services. Get your free quote today! Call 1-800-ECO-WASTE or fill out our online form. Fast, reliable service."
        keywords="contact ecowaste pro, waste removal quote, trash pickup quote, call waste management, emergency waste removal contact"
      />
      
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-eco-green to-trust-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Get in touch for a free quote or to learn more about our 
              professional waste management services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Multiple ways to reach us for your convenience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-trust-navy">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground font-medium">{detail}</p>
                  ))}
                  <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-eco-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold text-trust-navy mb-6">
                  Request a Free Quote
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Needed</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      rows={5}
                      placeholder="Please describe your waste management needs, preferred schedule, and any specific requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-eco-green-light rounded-lg">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-eco-green mr-2" />
                    <span>We typically respond within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-trust-navy mb-4">
                    Service Areas
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We proudly serve the following areas with our comprehensive waste management services:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-eco-green mr-2" />
                      Eco City and surrounding suburbs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-eco-green mr-2" />
                      Green Valley Metropolitan area
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-eco-green mr-2" />
                      Riverside County communities
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-eco-green mr-2" />
                      Industrial districts and business parks
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-trust-navy mb-4">
                    Emergency Services
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Need immediate waste removal? We offer 24/7 emergency services for:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Storm damage cleanup</li>
                    <li>• Hazardous spill response</li>
                    <li>• Biohazard cleanup</li>
                    <li>• Emergency debris removal</li>
                  </ul>
                  <Button variant="outline" className="mt-4">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Emergency Line
                  </Button>
                </CardContent>
              </Card>

              {/* Placeholder for map */}
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-trust-navy mb-4">
                    Find Us
                  </h3>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-eco-green mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">123 Green Street, Eco City, EC 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-professional-blue to-eco-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Don't wait! Call us now for immediate assistance or to schedule your free consultation.
          </p>
          <Button 
            variant="default" 
            size="lg" 
            className="bg-white text-trust-navy hover:bg-gray-100 font-semibold border-2 border-white shadow-lg"
            onClick={() => {
              console.log('Call button clicked');
              window.location.href = 'tel:1-800-326-9278';
            }}
          >
            <Phone className="h-5 w-5 mr-2" />
            Call 1-800-ECO-WASTE
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;