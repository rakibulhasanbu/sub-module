import RenderComponent from "@/components/RenderComponent";
import { Contact01, Contact02, Contact03 } from "@/features/contact";

const ContactPage = () => {
  const components = [Contact01, Contact02, Contact03];
  return <RenderComponent components={components} />;
};

export default ContactPage;
