import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import QuoteWizard from '@/components/QuoteWizard';

const Prices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Pricing & Free Quotes - EcoWaste Pro | Transparent Waste Management Pricing"
        description="Get transparent pricing and free quotes for all waste management services. Step-by-step quote form with instant pricing for residential and commercial waste removal."
        keywords="waste management pricing, free quote, transparent pricing, waste removal costs, commercial waste pricing, residential waste prices"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-professional-blue to-eco-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent Pricing & Free Quotes
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Get instant, transparent pricing for all your waste management needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Quote Wizard Section */}
      <div className="py-16">
        <QuoteWizard />
      </div>

      {/* Pricing Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust-navy mb-4">
              Why Choose Our Transparent Pricing?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in honest, upfront pricing with no hidden fees or surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-eco-green-light">
              <div className="w-16 h-16 bg-eco-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">£</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Hidden Fees</h3>
              <p className="text-gray-600">
                What you see is what you pay. All costs are included in your quote.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-professional-blue-light">
              <div className="w-16 h-16 bg-professional-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Quotes</h3>
              <p className="text-gray-600">
                Get your pricing instantly with our step-by-step quote form.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-eco-green-light">
              <div className="w-16 h-16 bg-trust-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Price Match</h3>
              <p className="text-gray-600">
                We'll match any competitor's price for comparable services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prices;