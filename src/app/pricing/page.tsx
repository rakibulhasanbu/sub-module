import RenderComponent from "@/components/RenderComponent";
import Pricing01 from "@/features/pricing/pricing-01";
import Pricing02 from "@/features/pricing/pricing-02";
import Pricing03 from "@/features/pricing/pricing-03";
import Pricing04 from "@/features/pricing/pricing-04";
import Pricing05 from "@/features/pricing/pricing-05";

const PricingPage = () => {
  const components = [Pricing01, Pricing02, Pricing03, Pricing04, Pricing05];
  return <RenderComponent components={components} />;
};

export default PricingPage;
