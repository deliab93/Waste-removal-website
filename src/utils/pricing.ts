export interface PricingData {
  basePrice: number;
  unitPrice: number;
  minimumCharge: number;
  maxDiscount: number;
}

// Market-competitive pricing structure (slightly below market rates)
export const servicePricing: Record<string, PricingData> = {
  'all-services': {
    basePrice: 80,
    unitPrice: 15,
    minimumCharge: 120,
    maxDiscount: 15
  },
  'appliance-removal': {
    basePrice: 60,
    unitPrice: 25,
    minimumCharge: 85,
    maxDiscount: 12
  },
  'construction-waste': {
    basePrice: 150,
    unitPrice: 45, // per tonne/skip
    minimumCharge: 200,
    maxDiscount: 20
  },
  'electronic-removal': {
    basePrice: 40,
    unitPrice: 15,
    minimumCharge: 65,
    maxDiscount: 10
  },
  'fridge-removal': {
    basePrice: 70,
    unitPrice: 35,
    minimumCharge: 105,
    maxDiscount: 15
  },
  'furniture-removal': {
    basePrice: 50,
    unitPrice: 20,
    minimumCharge: 90,
    maxDiscount: 12
  },
  'garden-waste': {
    basePrice: 45,
    unitPrice: 12,
    minimumCharge: 70,
    maxDiscount: 18
  },
  'general-waste': {
    basePrice: 55,
    unitPrice: 18,
    minimumCharge: 80,
    maxDiscount: 15
  },
  'hazardous-waste': {
    basePrice: 120,
    unitPrice: 40,
    minimumCharge: 180,
    maxDiscount: 8
  },
  'mattress-removal': {
    basePrice: 45,
    unitPrice: 25,
    minimumCharge: 70,
    maxDiscount: 12
  },
  'battery-disposal': {
    basePrice: 35,
    unitPrice: 8,
    minimumCharge: 50,
    maxDiscount: 10
  },
  'sofa-removal': {
    basePrice: 55,
    unitPrice: 30,
    minimumCharge: 85,
    maxDiscount: 15
  }
};

// Unit multipliers for different measurement types
export const unitMultipliers: Record<string, number> = {
  'items': 1,
  'bags': 0.8,
  'loads': 4.5,
  'skips': 3.2,
  'tonnes': 2.8,
  'cubic-meters': 2.2,
  'litres': 0.05,
  'kg': 0.15
};

export function calculateApproximatePrice(
  serviceId: string, 
  quantity: number, 
  unit: string,
  frequency: string = 'one-time'
): {
  estimatedPrice: number;
  priceRange: { min: number; max: number };
  savings: number;
  originalPrice: number;
} {
  const pricing = servicePricing[serviceId] || servicePricing['all-services'];
  const multiplier = unitMultipliers[unit] || 1;
  
  // Calculate base price
  const adjustedQuantity = quantity * multiplier;
  let baseCalculation = pricing.basePrice + (adjustedQuantity * pricing.unitPrice);
  
  // Apply minimum charge
  baseCalculation = Math.max(baseCalculation, pricing.minimumCharge);
  
  // Frequency discounts
  const frequencyDiscounts: Record<string, number> = {
    'one-time': 0,
    'weekly': 0.25,
    'bi-weekly': 0.18,
    'monthly': 0.12,
    'quarterly': 0.08
  };
  
  const frequencyDiscount = frequencyDiscounts[frequency] || 0;
  
  // Apply competitive discount (below market rate)
  const competitiveDiscount = (pricing.maxDiscount + frequencyDiscount * 100) / 100;
  const originalPrice = baseCalculation;
  const estimatedPrice = Math.round(baseCalculation * (1 - competitiveDiscount));
  
  // Calculate price range (±15%)
  const variance = 0.15;
  const priceRange = {
    min: Math.round(estimatedPrice * (1 - variance)),
    max: Math.round(estimatedPrice * (1 + variance))
  };
  
  const savings = originalPrice - estimatedPrice;
  
  return {
    estimatedPrice,
    priceRange,
    savings: Math.round(savings),
    originalPrice: Math.round(originalPrice)
  };
}