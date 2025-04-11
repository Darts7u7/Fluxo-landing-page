import pricingData from '@/data/pricing-plans.json';

// Define types
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  buttonText: string;
  buttonVariant: 'default' | 'outline' | 'secondary';
  highlighted: boolean;
  discount?: string;
  setupFee?: string;
}

export interface PricingTooltips {
  [key: string]: string;
}

export interface PricingData {
  plans: PricingPlan[];
  tooltips: PricingTooltips;
}

// Load and validate pricing data
export const loadPricingData = (): PricingData => {
  try {
    // Validate that pricingData has the correct structure
    if (!pricingData.plans || !Array.isArray(pricingData.plans) || pricingData.plans.length === 0) {
      console.error('Invalid pricing data: plans is missing or empty');
      throw new Error('Invalid pricing data structure');
    }
    
    return pricingData as PricingData;
  } catch (error) {
    console.error('Error loading pricing data:', error);
    // Return empty data structure in case of error
    return { plans: [], tooltips: {} };
  }
};

// Export the pricing data directly
export const { plans, tooltips } = loadPricingData();

// Helper function to get a specific plan by ID
export const getPlanById = (id: string): PricingPlan | undefined => {
  return plans.find(plan => plan.id === id);
};

// Export default data for ease of use
export default { plans, tooltips, getPlanById }; 