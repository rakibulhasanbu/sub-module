import RenderComponent from "@/components/RenderComponent";
import {
  Features01,
  Features02,
  Features03,
  Features04,
  Features05,
  Features06,
  Features07,
} from "@/features/features";

const FeaturesPage = () => {
  const components = [
    Features01,
    Features02,
    Features03,
    Features04,
    Features05,
    Features06,
    Features07,
  ];

  return <RenderComponent components={components} />;
};

export default FeaturesPage;
