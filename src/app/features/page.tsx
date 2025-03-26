import RenderComponent from "@/components/RenderComponent";
import Features01Page from "@/features/features/features-01/features-01";
import Features02Page from "@/features/features/features-02/features-02";
import Features03Page from "@/features/features/features-03/features-03";
import Features04Page from "@/features/features/features-04/features-04";
import Features05Page from "@/features/features/features-05/features-05";
import Features06Page from "@/features/features/features-06/features-06";
import Features07Page from "@/features/features/features-07/features-07";

const FeaturesPage = () => {
  const components = [
    Features01Page,
    Features02Page,
    Features03Page,
    Features04Page,
    Features05Page,
    Features06Page,
    Features07Page,
  ];
  return <RenderComponent components={components} />;
};

export default FeaturesPage;
