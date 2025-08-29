import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Home, Building, HardHat, AlertTriangle, Recycle, Clock, CheckCircle, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

    const handleCallNow = () => {
    window.open('tel:1-800-326-9278', '_self');
  };

  const handleGetQuote = () => {
    navigate('/prices');
     window.scrollTo(0, 0);
  };
  const services = [
    {
      icon: <Home className="h-12 w-12 text-eco-green" />,
      title: "Residential Waste Removal",
      description: "Comprehensive waste pickup services for homes and apartments",
      features: [
        "Weekly and bi-weekly pickup schedules",
        "Bulk item removal",
        "Yard waste collection",
        "Holiday schedule adjustments",
        "Recycling programs"
      ],
      pricing: "Starting at £29/month"
    },
    {
      icon: <Building className="h-12 w-12 text-eco-green" />,
      title: "Commercial Waste Management",
      description: "Tailored solutions for businesses of all sizes",
      features: [
        "Customized pickup schedules",
        "Front-load and rear-load containers",
        "Compactor services",
        "Recycling and composting programs",
        "Waste stream analysis"
      ],
      pricing: "Custom pricing available"
    },
    {
      icon: <HardHat className="h-12 w-12 text-eco-green" />,
      title: "Construction Debris Removal",
      description: "Professional cleanup for construction and renovation projects",
      features: [
        "Roll-off container rentals",
        "On-demand pickup services",
        "Material sorting and recycling",
        "Same-day emergency service",
        "Permit assistance"
      ],
      pricing: "Starting at £299"
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-eco-green" />,
      title: "Hazardous Waste Disposal",
      description: "Safe handling of dangerous materials",
      features: [
        "EPA-compliant disposal",
        "Medical waste services",
        "Chemical waste handling",
        "Electronic waste recycling",
        "Certified documentation"
      ],
      pricing: "Quote on request"
    },
    {
      icon: <Recycle className="h-12 w-12 text-eco-green" />,
      title: "Recycling Services",
      description: "Comprehensive recycling programs for maximum sustainability",
      features: [
        "Single-stream recycling",
        "Material recovery facilities",
        "Cardboard and paper processing",
        "Metal and plastic recycling",
        "Sustainability reporting"
      ],
      pricing: "Included with service"
    },
    {
      icon: <Clock className="h-12 w-12 text-eco-green" />,
      title: "Emergency Cleanup",
      description: "24/7 emergency waste removal and cleanup services",
      features: [
        "24/7 availability",
        "Storm damage cleanup",
        "Flood restoration support",
        "Biohazard cleanup",
        "Rapid response team"
      ],
      pricing: "Emergency rates apply"
    }
  ];

  const additionalServices = [
    "Appliance removal and recycling",
    "Electronics disposal (e-waste)",
    "Furniture and mattress pickup",
    "Document destruction services",
    "Composting programs",
    "Waste audit and consulting",
    "Container cleaning services",
    "Temporary event cleanup"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Waste Removal Services - Residential, Commercial & Industrial | EcoWaste Pro"
        description="Comprehensive waste management services including residential pickup, commercial waste, construction debris, hazardous waste disposal, and recycling programs. Get your free quote today!"
        keywords="waste removal services, residential trash pickup, commercial waste management, construction debris removal, hazardous waste disposal, recycling services"
      />
      
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-eco-green to-trust-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Waste Management Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              From residential pickup to industrial waste management, 
              we provide reliable, eco-friendly solutions for every need.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional waste management solutions tailored to your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <div className="ml-4">
                      <h3 className="text-2xl font-semibold text-trust-navy">{service.title}</h3>
                      <p className="text-eco-green font-medium">{service.pricing}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-eco-green mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="cta" className="w-full" onClick={handleGetQuote}>
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-eco-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer many specialized services to meet your unique needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-eco-green flex-shrink-0" />
                <span className="text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Getting started with EcoWaste Pro is simple and straightforward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-eco-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2 text-trust-navy">Contact Us</h3>
              <p className="text-muted-foreground">Call us or request a quote online</p>
            </div>
            <div className="text-center">
              <div className="bg-eco-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2 text-trust-navy">Free Assessment</h3>
              <p className="text-muted-foreground">We assess your needs and provide a custom quote</p>
            </div>
            <div className="text-center">
              <div className="bg-eco-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2 text-trust-navy">Schedule Service</h3>
              <p className="text-muted-foreground">Choose your pickup schedule and container size</p>
            </div>
            <div className="text-center">
              <div className="bg-eco-green text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2 text-trust-navy">Reliable Service</h3>
              <p className="text-muted-foreground">Enjoy consistent, professional waste management</p>
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
            Contact us today for a free quote and discover how we can help with your waste management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline-white" size="lg" onClick={handleGetQuote}>
              Get Free Quote
            </Button>
            <Button variant="secondary" size="lg" onClick={handleCallNow}>
              <Phone className="h-5 w-5 mr-2" />
              Call 1-800-ECO-WASTE
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;