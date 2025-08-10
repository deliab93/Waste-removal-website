
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import QuoteWizard from '@/components/QuoteWizard';

const Quote = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Get Free Quote - EcoWaste Pro | Step-by-Step Quote Form"
        description="Get your free waste removal quote in minutes with our easy step-by-step form. Fast, accurate pricing for all waste management services."
        keywords="waste removal quote, free quote, step by step quote form, waste management pricing"
      />
      
      <Header />
      
      <div className="py-16">
        <QuoteWizard />
      </div>

      <Footer />
    </div>
  );
};

export default Quote;
