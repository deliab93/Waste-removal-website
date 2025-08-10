import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';

interface QuantityStepProps {
  selectedService: string;
  quantity: number;
  unit: string;
  onQuantityUpdate: (quantity: number, unit: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

const QuantityStep = ({ selectedService, quantity, unit, onQuantityUpdate, onNext, onPrev }: QuantityStepProps) => {
  const serviceConfig: Record<string, { name: string; units: { value: string; label: string; description: string }[] }> = {
    'all-services': {
      name: 'All Services',
      units: [{ value: 'items', label: 'Items', description: 'Individual pieces' }]
    },
    'appliance-removal': {
      name: 'Appliances',
      units: [{ value: 'items', label: 'Items', description: 'Individual appliances' }]
    },
    'construction-waste': {
      name: 'Construction Waste',
      units: [
        { value: 'skips', label: 'Skips', description: 'Skip containers' },
        { value: 'tonnes', label: 'Tonnes', description: 'Weight in tonnes' },
        { value: 'cubic-meters', label: 'Cubic Meters', description: 'Volume measurement' }
      ]
    },
    'electronic-removal': {
      name: 'Electronic Items',
      units: [{ value: 'items', label: 'Items', description: 'Individual electronics' }]
    },
    'fridge-removal': {
      name: 'Fridges/Freezers',
      units: [{ value: 'items', label: 'Items', description: 'Individual units' }]
    },
    'furniture-removal': {
      name: 'Furniture Items',
      units: [{ value: 'items', label: 'Items', description: 'Individual pieces' }]
    },
    'garden-waste': {
      name: 'Garden Waste',
      units: [
        { value: 'bags', label: 'Bags', description: 'Standard waste bags' },
        { value: 'loads', label: 'Loads', description: 'Truck loads' },
        { value: 'cubic-meters', label: 'Cubic Meters', description: 'Volume measurement' }
      ]
    },
    'general-waste': {
      name: 'General Waste',
      units: [
        { value: 'bags', label: 'Bags', description: 'Standard waste bags' },
        { value: 'loads', label: 'Loads', description: 'Truck loads' }
      ]
    },
    'hazardous-waste': {
      name: 'Hazardous Waste',
      units: [
        { value: 'items', label: 'Items', description: 'Individual containers' },
        { value: 'litres', label: 'Litres', description: 'Liquid volume' },
        { value: 'kg', label: 'Kilograms', description: 'Weight measurement' }
      ]
    },
    'mattress-removal': {
      name: 'Mattresses/Beds',
      units: [{ value: 'items', label: 'Items', description: 'Individual pieces' }]
    },
    'battery-disposal': {
      name: 'Batteries',
      units: [
        { value: 'items', label: 'Items', description: 'Individual batteries' },
        { value: 'kg', label: 'Kilograms', description: 'Weight measurement' }
      ]
    },
    'sofa-removal': {
      name: 'Sofas/Chairs',
      units: [{ value: 'items', label: 'Items', description: 'Individual pieces' }]
    }
  };

  const currentService = serviceConfig[selectedService] || serviceConfig['all-services'];
  const availableUnits = currentService.units;

  const incrementQuantity = () => {
    onQuantityUpdate(quantity + 1, unit);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      onQuantityUpdate(quantity - 1, unit);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    if (value >= 1) {
      onQuantityUpdate(value, unit);
    }
  };

  const handleUnitChange = (newUnit: string) => {
    onQuantityUpdate(quantity, newUnit);
  };

  const canProceed = quantity >= 1;

  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-8 text-trust-navy">
        How much {currentService.name.toLowerCase()} do you need removed?
      </h3>
      
      <div className="max-w-lg mx-auto">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border-2 border-gray-200 shadow-lg">
          
          {/* Unit Selection */}
          {availableUnits.length > 1 && (
            <div className="mb-6">
              <Label className="text-lg font-semibold text-trust-navy mb-3 block text-center">
                Measurement Unit
              </Label>
              <Select value={unit} onValueChange={handleUnitChange}>
                <SelectTrigger className="w-full h-12 text-lg border-2">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  {availableUnits.map((unitOption) => (
                    <SelectItem key={unitOption.value} value={unitOption.value}>
                      <div className="flex flex-col">
                        <span className="font-medium">{unitOption.label}</span>
                        <span className="text-xs text-muted-foreground">{unitOption.description}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          {/* Quantity Input */}
          <div>
            <Label htmlFor="quantity" className="text-lg font-semibold text-trust-navy mb-4 block text-center">
              Quantity ({availableUnits.find(u => u.value === unit)?.label || 'Items'})
            </Label>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
                className="h-12 w-12 rounded-full border-2"
              >
                <Minus className="h-4 w-4" />
              </Button>
              
              <Input
                id="quantity"
                type="number"
                min="1"
                step={unit === 'tonnes' || unit === 'kg' ? '0.1' : '1'}
                value={quantity}
                onChange={handleInputChange}
                className="w-32 h-12 text-center text-xl font-bold border-2 rounded-lg"
              />
              
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={incrementQuantity}
                className="h-12 w-12 rounded-full border-2"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-center text-muted-foreground text-sm">
              You can adjust this quantity later if needed
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button onClick={onPrev} variant="outline" size="lg">
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button
          onClick={onNext}
          disabled={!canProceed}
          variant="cta"
          size="lg"
        >
          Next Step <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuantityStep;