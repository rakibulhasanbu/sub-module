import RenderComponent from "@/components/RenderComponent";
import {
  Timeline01,
  Timeline02,
  Timeline03,
  Timeline04,
  Timeline05,
  Timeline06,
  Timeline07,
} from "@/features/timeline";

const TimelinePage = () => {
  const components = [
    Timeline01,
    Timeline02,
    Timeline03,
    Timeline04,
    Timeline05,
    Timeline06,
    Timeline07,
  ];
  return <RenderComponent components={components} />;
};

export default TimelinePage;
