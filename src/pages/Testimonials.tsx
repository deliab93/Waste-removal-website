import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();
  const averageRating = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / testimonials.length;
  
  const serviceTypes = [...new Set(testimonials.map(t => t.service))];

  const handleGetQuote = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Customer Reviews & Testimonials - EcoWaste Pro Waste Removal"
        description="Read what our customers say about EcoWaste Pro's waste removal and management services. Over 100 five-star reviews from satisfied residential and commercial clients."
        keywords="waste removal reviews, customer testimonials, EcoWaste Pro reviews, trash pickup testimonials, waste management customer feedback"
      />
      
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-eco-green to-trust-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              What Our Customers Say
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
              Don't just take our word for it. See what our satisfied customers 
              have to say about our waste management services.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold">{averageRating.toFixed(1)}/5</span>
              <span className="text-lg">({testimonials.length} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-eco-green mb-2">{testimonials.length}+</div>
              <div className="text-muted-foreground">Customer Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-eco-green mb-2">{averageRating.toFixed(1)}</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-eco-green mb-2">98%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-eco-green mb-2">95%</div>
              <div className="text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-eco-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
              Customer Reviews
            </h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from real customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-trust-navy">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex text-yellow-500 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  
                  <div className="flex-grow">
                    <Quote className="h-6 w-6 text-eco-green mb-2" />
                    <p className="text-muted-foreground italic mb-4">"{testimonial.comment}"</p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="text-sm text-eco-green font-medium mb-1">{testimonial.service}</div>
                    <div className="text-xs text-muted-foreground">{new Date(testimonial.date).toLocaleDateString()}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Filter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
              Reviews by Service
            </h2>
            <p className="text-lg text-muted-foreground">
              See what customers say about our different services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceTypes.map((serviceType) => {
              const serviceTestimonials = testimonials.filter(t => t.service === serviceType);
              const serviceRating = serviceTestimonials.reduce((sum, t) => sum + t.rating, 0) / serviceTestimonials.length;
              
              return (
                <Card key={serviceType} className="p-6 text-center">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-trust-navy mb-2">{serviceType}</h3>
                    <div className="flex justify-center text-yellow-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < Math.round(serviceRating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      {serviceRating.toFixed(1)}/5 ({serviceTestimonials.length} reviews)
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-professional-blue to-eco-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Satisfied Customers
          </h2>
          <p className="text-xl mb-8">
            Experience the exceptional service that our customers rave about. 
            Get your free quote today and see why we're the trusted choice for waste management.
          </p>
          <Button variant="hero" size="lg" className="bg-white text-professional-blue hover:bg-gray-100" onClick={handleGetQuote}>
            Get Your Free Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;