
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LocationData {
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

interface LocationStepProps {
  locationData: LocationData;
  onLocationUpdate: (location: LocationData) => void;
  onNext: () => void;
  onPrev: () => void;
}

const LocationStep = ({ locationData, onLocationUpdate, onNext, onPrev }: LocationStepProps) => {
  const handleInputChange = (field: keyof LocationData, value: string) => {
    onLocationUpdate({
      ...locationData,
      [field]: value
    });
  };

  const canProceed = locationData.address && locationData.city && locationData.state && locationData.zipCode;

  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-8">Where do you need our service?</h3>
      
      <div className="max-w-md mx-auto space-y-6">
        <div>
          <Label htmlFor="address">Street Address *</Label>
          <Input
            id="address"
            value={locationData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            placeholder="123 Main Street"
            className="mt-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              value={locationData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              placeholder="Eco City"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="state">State *</Label>
            <Input
              id="state"
              value={locationData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              placeholder="EC"
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="zipCode">ZIP Code *</Label>
          <Input
            id="zipCode"
            value={locationData.zipCode}
            onChange={(e) => handleInputChange('zipCode', e.target.value)}
            placeholder="12345"
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

export default LocationStep;
