
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Grid3X3, Refrigerator, Laptop, Trash2, Sofa, TreePine, Recycle, Biohazard, Bed, Battery, Package } from 'lucide-react';

interface ServiceSelectionStepProps {
  selectedService: string;
  onServiceSelect: (service: string) => void;
  onNext: () => void;
}

const ServiceSelectionStep = ({ selectedService, onServiceSelect, onNext }: ServiceSelectionStepProps) => {
  const services = [
    {
      id: 'all-services',
      name: 'All Services',
      icon: <Grid3X3 className="h-8 w-8" />,
      description: 'Complete waste management'
    },
    {
      id: 'appliance-removal',
      name: 'Appliance Removal',
      icon: <Refrigerator className="h-8 w-8" />,
      description: 'Washing machines, dryers, etc.'
    },
    {
      id: 'construction-waste',
      name: 'Builders / Construction Waste Removal',
      icon: <Package className="h-8 w-8" />,
      description: 'Construction debris & materials'
    },
    {
      id: 'electronic-removal',
      name: 'Electronic Removal',
      icon: <Laptop className="h-8 w-8" />,
      description: 'TVs, computers, electronics'
    },
    {
      id: 'fridge-removal',
      name: 'Fridge Removal',
      icon: <Refrigerator className="h-8 w-8" />,
      description: 'Refrigerators & freezers'
    },
    {
      id: 'furniture-removal',
      name: 'Furniture Removal',
      icon: <Sofa className="h-8 w-8" />,
      description: 'Couches, tables, chairs'
    },
    {
      id: 'garden-waste',
      name: 'Garden Waste Removal',
      icon: <TreePine className="h-8 w-8" />,
      description: 'Branches, leaves, garden debris'
    },
    {
      id: 'general-waste',
      name: 'General Waste & Load Sizes',
      icon: <Trash2 className="h-8 w-8" />,
      description: 'Household & office waste'
    },
    {
      id: 'hazardous-waste',
      name: 'Hazardous Waste Removal',
      icon: <Biohazard className="h-8 w-8" />,
      description: 'Chemicals, paint, dangerous materials'
    },
    {
      id: 'mattress-removal',
      name: 'Mattress & Bed Removal',
      icon: <Bed className="h-8 w-8" />,
      description: 'Mattresses, box springs, beds'
    },
    {
      id: 'battery-disposal',
      name: 'Old Batteries Disposal',
      icon: <Battery className="h-8 w-8" />,
      description: 'Car batteries, household batteries'
    },
    {
      id: 'sofa-removal',
      name: 'Sofa & Chair Removal',
      icon: <Sofa className="h-8 w-8" />,
      description: 'Upholstered furniture removal'
    }
  ];

  const handleServiceSelect = (serviceId: string) => {
    onServiceSelect(serviceId);
  };

  const canProceed = selectedService !== '';

  return (
    <div>
      <h3 className="text-2xl font-bold text-center mb-8 text-trust-navy">Select Your Unwanted Items:</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => handleServiceSelect(service.id)}
            className={`p-4 rounded-xl border-2 transition-all hover:shadow-lg bg-gradient-to-br ${
              selectedService === service.id
                ? 'border-eco-green from-eco-green to-eco-green-light text-white shadow-lg'
                : 'border-gray-200 from-white to-gray-50 hover:border-eco-green hover:shadow-md'
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className={`p-3 rounded-lg ${
                selectedService === service.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-eco-green/10 text-eco-green'
              }`}>
                {service.icon}
              </div>
              <div>
                <h4 className={`font-semibold text-sm leading-tight ${
                  selectedService === service.id ? 'text-white' : 'text-trust-navy'
                }`}>
                  {service.name}
                </h4>
                <p className={`text-xs mt-1 ${
                  selectedService === service.id ? 'text-white/90' : 'text-muted-foreground'
                }`}>
                  {service.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-center">
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

export default ServiceSelectionStep;
