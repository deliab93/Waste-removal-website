
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ContactData {
  name: string;
  email: string;
  phone: string;
}

interface ContactStepProps {
  contactData: ContactData;
  onContactUpdate: (contact: ContactData) => void;
  onNext: () => void;
  onPrev: () => void;
}

const ContactStep = ({ contactData, onContactUpdate, onNext, onPrev }: ContactStepProps) => {
  const handleInputChange = (field: keyof ContactData, value: string) => {
    onContactUpdate({
      ...contactData,
      [field]: value
    });
  };

  const canProceed = contactData.name && contactData.email && contactData.phone;

  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-8">Your contact information</h3>
      
      <div className="max-w-md mx-auto space-y-6">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={contactData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="John Doe"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={contactData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="john@example.com"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            value={contactData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="(555) 123-4567"
            className="mt-1"
          />
        </div>
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
          onClick={onNext}
          disabled={!canProceed}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3"
        >
          Next step <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ContactStep;
