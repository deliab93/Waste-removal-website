
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceSelectionStep from './quote-wizard/ServiceSelectionStep';
import QuantityStep from './quote-wizard/QuantityStep';
import LocationStep from './quote-wizard/LocationStep';
import ContactStep from './quote-wizard/ContactStep';
import ScheduleStep from './quote-wizard/ScheduleStep';
import ReviewStep from './quote-wizard/ReviewStep';

export interface QuoteData {
  service: string;
  quantity: number;
  unit: string;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  schedule: {
    date: Date | undefined;
    time: string;
    frequency: string;
  };
  additionalInfo: string;
}

const QuoteWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [quoteData, setQuoteData] = useState<QuoteData>({
    service: '',
    quantity: 1,
    unit: 'items',
    location: {
      address: '',
      city: '',
      state: '',
      zipCode: ''
    },
    contact: {
      name: '',
      email: '',
      phone: ''
    },
    schedule: {
      date: undefined,
      time: '',
      frequency: ''
    },
    additionalInfo: ''
  });

  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  const updateQuoteData = (stepData: Partial<QuoteData>) => {
    setQuoteData(prev => ({ ...prev, ...stepData }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ServiceSelectionStep
            selectedService={quoteData.service}
            onServiceSelect={(service) => updateQuoteData({ service })}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <QuantityStep
            selectedService={quoteData.service}
            quantity={quoteData.quantity}
            unit={quoteData.unit}
            onQuantityUpdate={(quantity, unit) => updateQuoteData({ quantity, unit })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <LocationStep
            locationData={quoteData.location}
            onLocationUpdate={(location) => updateQuoteData({ location })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <ContactStep
            contactData={quoteData.contact}
            onContactUpdate={(contact) => updateQuoteData({ contact })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 5:
        return (
          <ScheduleStep
            scheduleData={quoteData.schedule}
            onScheduleUpdate={(schedule) => updateQuoteData({ schedule })}
            additionalInfo={quoteData.additionalInfo}
            onAdditionalInfoUpdate={(additionalInfo) => updateQuoteData({ additionalInfo })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 6:
        return (
          <ReviewStep
            quoteData={quoteData}
            onPrev={prevStep}
            onSubmit={() => {
              console.log('Quote submitted:', quoteData);
              // Here you would typically submit to your backend
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="min-h-[600px]">
        <CardContent className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-trust-navy mb-2">
              GET A QUOTE NOW
            </h2>
            <p className="text-muted-foreground text-lg">
              Get a quote in just a few clicks. It's fast, it's free, and it'll save you money.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>STEP {currentStep} OF {totalSteps}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step Content */}
          <div className="mb-8">
            {renderStep()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteWizard;
