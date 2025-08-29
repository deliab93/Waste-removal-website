import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Recycle, Truck, Shield, Clock, CheckCircle, Users, Award, Leaf, Phone } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Link, useNavigate } from "react-router-dom";
import heroTruck from "@/assets/hero-truck.jpg";
import servicesImage from "@/assets/services-image.jpg";

const Index = () => {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate('/prices');
     window.scrollTo(0, 0);
  };

  const handleCallNow = () => {
    window.open('tel:1-800-326-9278', '_self');
  };

  const handleViewServices = () => {
    navigate('/services');
     window.scrollTo(0, 0);
  };

  const handleViewTestimonials = () => {
    navigate('/testimonials');
     window.scrollTo(0, 0);
  };
  const features = [
    {
      icon: <Truck className="h-12 w-12 text-eco-green" />,
      title: "Fast & Reliable",
      description: "Same-day and scheduled pickup services with guaranteed punctuality"
    },
    {
      icon: <Recycle className="h-12 w-12 text-eco-green" />,
      title: "Eco-Friendly",
      description: "Committed to environmental sustainability with advanced recycling programs"
    },
    {
      icon: <Shield className="h-12 w-12 text-eco-green" />,
      title: "Fully Licensed",
      description: "Licensed and insured with full compliance to all safety regulations"
    },
    {
      icon: <Clock className="h-12 w-12 text-eco-green" />,
      title: "24/7 Service",
      description: "Emergency waste removal available around the clock"
    }
  ];

  const services = [
    "Residential Waste Removal",
    "Commercial Waste Management", 
    "Construction Debris Cleanup",
    "Hazardous Waste Disposal",
    "Recycling Services",
    "Emergency Cleanup"
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "500+", label: "Tons Recycled Monthly" },
    { number: "15", label: "Years Experience" },
    { number: "24/7", label: "Emergency Service" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="EcoWaste Pro - Professional Waste Removal & Management Services"
        description="Leading waste removal company offering residential, commercial, and industrial waste management services. Eco-friendly, reliable, and fully licensed. Get your free quote today!"
        keywords="waste removal, trash pickup, recycling services, commercial waste management, construction debris, hazardous waste disposal"
      />
      
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-eco-green via-professional-blue to-trust-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Waste Removal You Can Trust
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Eco-friendly waste management solutions for homes and businesses. 
                Fast, reliable, and environmentally responsible service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" className="bg-white text-eco-green text-lg px-8 py-4 hover:text-white" onClick={handleGetQuote}>
                  Get Free Quote
                </Button>
                <Button variant="outline-white" size="lg" className="text-lg px-8 py-4" onClick={handleCallNow}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroTruck} 
                alt="Professional waste removal truck in action collecting residential waste" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
              Why Choose EcoWaste Pro?
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine professional service with environmental responsibility
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-trust-navy">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-6">
                Comprehensive Waste Management Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From residential pickup to industrial waste management, we handle it all 
                with professionalism and environmental responsibility.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-eco-green" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
              <Button variant="cta" size="lg" onClick={handleViewServices}>
                View All Services
              </Button>
            </div>
            <div>
              <img 
                src={servicesImage} 
                alt="Comprehensive waste management services with professional workers handling recycling and industrial containers" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-trust-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-300">
              Our track record speaks for itself
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-eco-green mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-eco-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-trust-navy">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-500 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" onClick={handleViewTestimonials}>
              Read More Reviews
            </Button>
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
            Get your free quote today and experience the difference professional waste management makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" onClick={handleGetQuote}>
              Get Free Quote
            </Button>
            <Button variant="outline-white" size="lg" onClick={handleCallNow}>
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

export default Index;
