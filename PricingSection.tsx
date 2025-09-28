import PricingSection from '../PricingSection';

export default function PricingSectionExample() {
  const handlePlanSelect = (planId: string) => {
    console.log('Plan selected:', planId);
  };

  return <PricingSection onPlanSelect={handlePlanSelect} />;
}