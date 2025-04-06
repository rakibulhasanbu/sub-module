import RenderComponent from "@/components/RenderComponent";
import {
  Footer01,
  Footer02,
  Footer03,
  Footer04,
  Footer05,
} from "@/features/footer";

const FooterPage = () => {
  const components = [Footer01, Footer02, Footer03, Footer04, Footer05];
  return <RenderComponent components={components} />;
};

export default FooterPage;
