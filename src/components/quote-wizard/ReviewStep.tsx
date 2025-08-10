
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, CheckCircle, MapPin, User, Calendar, Package } from 'lucide-react';
import { format } from 'date-fns';
import { QuoteData } from '../QuoteWizard';

interface ReviewStepProps {
  quoteData: QuoteData;
  onPrev: () => void;
  onSubmit: () => void;
}

const ReviewStep = ({ quoteData, onPrev, onSubmit }: ReviewStepProps) => {
  const getServiceName = (serviceId: string) => {
    const serviceMap: { [key: string]: string } = {
      'general-waste': 'General Waste',
      'dry-recycling': 'Dry Recycling',
      'glass-collection': 'Glass Collection',
      'food-waste': 'Food Waste',
      'clinical-waste': 'Clinical Waste',
      'washroom': 'Washroom'
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
            <p className="font-semibold">{getServiceName(quoteData.service)}</p>
            <p className="text-sm text-muted-foreground">
              Frequency: {getFrequencyName(quoteData.schedule.frequency)}
            </p>
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
          onClick={onSubmit}
          className="bg-eco-green hover:bg-eco-green/90 text-white px-8 py-3"
        >
          <CheckCircle className="mr-2 h-4 w-4" />
          Submit Quote Request
        </Button>
      </div>
    </div>
  );
};

export default ReviewStep;
