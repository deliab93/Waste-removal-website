import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Users, Award, Leaf, Target, Heart, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-eco-green" />,
      title: "Environmental Responsibility",
      description: "We prioritize sustainable practices and environmental protection in everything we do."
    },
    {
      icon: <Shield className="h-8 w-8 text-eco-green" />,
      title: "Reliability & Trust",
      description: "Our customers count on us for consistent, professional service they can trust."
    },
    {
      icon: <Heart className="h-8 w-8 text-eco-green" />,
      title: "Customer Focus",
      description: "We go above and beyond to exceed customer expectations every time."
    },
    {
      icon: <Award className="h-8 w-8 text-eco-green" />,
      title: "Excellence",
      description: "We maintain the highest standards in safety, efficiency, and service quality."
    }
  ];

  const team = [
    {
      name: "Michael Johnson",
      position: "Founder & CEO",
      bio: "15+ years in waste management with a passion for environmental sustainability.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Chen",
      position: "Operations Director",
      bio: "Expert in logistics and customer service with a background in environmental science.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "David Rodriguez",
      position: "Safety Manager",
      bio: "Certified safety professional ensuring all operations meet the highest standards.",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="About EcoWaste Pro - Professional Waste Management Company"
        description="Learn about EcoWaste Pro's mission, values, and team. 15+ years of experience in professional waste removal and environmental responsibility."
        keywords="about ecowaste pro, waste management company, environmental responsibility, professional waste removal team"
      />
      
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-eco-green to-trust-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About EcoWaste Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Leading the way in sustainable waste management with 15+ years of experience 
              and a commitment to environmental excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At EcoWaste Pro, our mission is to provide exceptional waste management services 
                while protecting and preserving our environment for future generations. We believe 
                that responsible waste handling is not just a service—it's a commitment to our planet.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2009, we've grown from a small local operation to a trusted regional 
                leader in waste management, always maintaining our core values of environmental 
                responsibility, customer service excellence, and community engagement.
              </p>
              <Button variant="cta" size="lg">
                Get Started Today
              </Button>
            </div>
            <div>
              <img 
                src="/api/placeholder/600/400" 
                alt="EcoWaste Pro team at work" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-eco-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide every decision we make and every service we provide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 h-full">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-trust-navy">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-trust-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact by the Numbers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-eco-green mb-2">15+</div>
              <div className="text-lg text-gray-300">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-eco-green mb-2">10,000+</div>
              <div className="text-lg text-gray-300">Satisfied Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-eco-green mb-2">6,000+</div>
              <div className="text-lg text-gray-300">Tons Recycled Annually</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-eco-green mb-2">98%</div>
              <div className="text-lg text-gray-300">Customer Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Experienced professionals dedicated to exceptional service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-trust-navy">{member.name}</h3>
                  <p className="text-eco-green font-medium mb-3">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-professional-blue to-eco-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the EcoWaste Pro Difference?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers who trust us with their waste management needs.
          </p>
          <Button variant="hero" size="lg" className="bg-white text-professional-blue hover:bg-gray-100">
            Get Your Free Quote Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;