
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, CheckCircle, MapPin, User, Calendar, Package, PoundSterling, Percent } from 'lucide-react';
import { format } from 'date-fns';
import { QuoteData } from '../QuoteWizard';
import { calculateApproximatePrice } from '@/utils/pricing';
import { useToast } from '@/hooks/use-toast';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

interface ReviewStepProps {
  quoteData: QuoteData;
  onPrev: () => void;
  onSubmit: () => void;
}

const ReviewStep = ({ quoteData, onPrev, onSubmit }: ReviewStepProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const getServiceName = (serviceId: string) => {
    const serviceMap: { [key: string]: string } = {
      'all-services': 'All Services',
      'appliance-removal': 'Appliance Removal',
      'construction-waste': 'Builders / Construction Waste Removal',
      'electronic-removal': 'Electronic Removal',
      'fridge-removal': 'Fridge Removal',
      'furniture-removal': 'Furniture Removal',
      'garden-waste': 'Garden Waste Removal',
      'general-waste': 'General Waste & Load Sizes',
      'hazardous-waste': 'Hazardous Waste Removal',
      'mattress-removal': 'Mattress & Bed Removal',
      'battery-disposal': 'Old Batteries Disposal',
      'sofa-removal': 'Sofa & Chair Removal'
    };
    return serviceMap[serviceId] || serviceId;
  };

  const getFrequencyName = (frequency: string) => {
    const frequencyMap: { [key: string]: string } = {
      'one-time': 'One-time service',
      'weekly': 'Weekly',
      'bi-weekly': 'Bi-weekly',
      'monthly': 'Monthly',
      'quarterly': 'Quarterly'
    };
    return frequencyMap[frequency] || frequency;
  };

  const pricingInfo = calculateApproximatePrice(
    quoteData.service,
    quoteData.quantity,
    quoteData.unit,
    quoteData.schedule.frequency
  );

  const handleSubmit = async () => {
    console.log('Starting quote submission...', quoteData);
    setIsSubmitting(true);
    
    try {
      // Check if Supabase is configured
      if (!isSupabaseConfigured) {
        console.log('Supabase not configured, simulating quote submission...', quoteData);
        
        // Simulate successful submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        toast({
          title: "Quote Submitted Successfully!",
          description: "We'll get back to you within 24 hours with a detailed quote.",
        });
        onSubmit();
      } else {
        console.log('Calling Supabase edge function...');
        const { data, error } = await supabase.functions.invoke('send-quote-email', {
          body: quoteData,
        });

        console.log('Edge function response:', { data, error });

        if (error) {
          console.error('Supabase function error:', error);
          throw error;
        }

        if (data?.success) {
          console.log('Quote submitted successfully');
          toast({
            title: "Quote Submitted Successfully!",
            description: "We'll get back to you within 24 hours with a detailed quote.",
          });
          onSubmit();
        } else {
          console.error('Quote submission failed:', data);
          throw new Error(data?.error || 'Failed to submit quote');
        }
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your quote. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-8">Review your quote request</h3>
      
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Service Information */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Package className="mr-2 h-5 w-5 text-eco-green" />
              Service Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">{getServiceName(quoteData.service)}</p>
                <p className="text-sm text-muted-foreground">
                  Quantity: {quoteData.quantity} {quoteData.unit}
                </p>
                <p className="text-sm text-muted-foreground">
                  Frequency: {getFrequencyName(quoteData.schedule.frequency)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location Information */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <MapPin className="mr-2 h-5 w-5 text-eco-green" />
              Service Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">{quoteData.location.address}</p>
            <p className="text-sm text-muted-foreground">
              {quoteData.location.city}, {quoteData.location.state} {quoteData.location.zipCode}
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <User className="mr-2 h-5 w-5 text-eco-green" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">{quoteData.contact.name}</p>
            <p className="text-sm text-muted-foreground">{quoteData.contact.email}</p>
            <p className="text-sm text-muted-foreground">{quoteData.contact.phone}</p>
          </CardContent>
        </Card>

        {/* Schedule Information */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Calendar className="mr-2 h-5 w-5 text-eco-green" />
              Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">
              {quoteData.schedule.date ? format(quoteData.schedule.date, "PPPP") : 'Date not selected'}
            </p>
            <p className="text-sm text-muted-foreground">{quoteData.schedule.time}</p>
            {quoteData.additionalInfo && (
              <div className="mt-3">
                <p className="text-sm font-medium">Additional Information:</p>
                <p className="text-sm text-muted-foreground">{quoteData.additionalInfo}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pricing Estimate */}
        <Card className="bg-gradient-to-br from-eco-green to-trust-navy text-white border-0 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg text-white">
              <PoundSterling className="mr-2 h-5 w-5" />
              Approximate Starting Price
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">Estimated Cost:</span>
                <span className="text-2xl font-bold">£{pricingInfo.estimatedPrice}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Price Range:</span>
                <span>£{pricingInfo.priceRange.min} - £{pricingInfo.priceRange.max}</span>
              </div>
              {pricingInfo.savings > 0 && (
                <div className="flex items-center justify-between text-sm bg-white/20 rounded-lg p-2">
                  <div className="flex items-center">
                    <Percent className="mr-1 h-4 w-4" />
                    <span>You save vs. market rate:</span>
                  </div>
                  <span className="font-bold">£{pricingInfo.savings}</span>
                </div>
              )}
              <p className="text-xs text-white/80 mt-3">
                * This is an approximate estimate. Final pricing may vary based on actual waste assessment, 
                accessibility, and specific requirements. We'll provide an exact quote after our free consultation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Success Message */}
        <Card className="bg-eco-green-light border-eco-green">
          <CardContent className="pt-6">
            <div className="flex items-center text-eco-green">
              <CheckCircle className="mr-3 h-6 w-6" />
              <div>
                <p className="font-semibold">We'll contact you within 24 hours</p>
                <p className="text-sm">Our team will review your request and provide a detailed quote.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between mt-8">
        <Button
          onClick={onPrev}
          variant="outline"
          className="px-8 py-3"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="bg-eco-green hover:bg-eco-green/90 text-white px-8 py-3"
        >
          <CheckCircle className="mr-2 h-4 w-4" />
          {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
        </Button>
      </div>
    </div>
  );
};

export default ReviewStep;
