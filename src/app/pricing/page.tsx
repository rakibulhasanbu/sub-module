import RenderComponent from "@/components/RenderComponent";
import {
  Pricing01,
  Pricing02,
  Pricing03,
  Pricing04,
  Pricing05,
  Pricing06,
} from "@/features/pricing";

const PricingPage = () => {
  const components = [
    Pricing01,
    Pricing02,
    Pricing03,
    Pricing04,
    Pricing05,
    Pricing06,
  ];
  return <RenderComponent components={components} />;
};

export default PricingPage;
