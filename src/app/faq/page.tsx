import RenderComponent from "@/components/RenderComponent";
import {
  FAQ01,
  FAQ02,
  FAQ03,
  FAQ04,
  FAQ05,
  FAQ06,
  FAQ07,
} from "@/features/faq";

const FAQPage = () => {
  const components = [FAQ01, FAQ02, FAQ03, FAQ04, FAQ05, FAQ06, FAQ07];
  return <RenderComponent components={components} />;
};

export default FAQPage;
