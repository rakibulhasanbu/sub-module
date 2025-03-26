import RenderComponent from "@/components/RenderComponent";
import Contact01Page from "@/features/contact/contact-01/contact-01";
import Contact02Page from "@/features/contact/contact-02/contact-02";
import Contact03Page from "@/features/contact/contact-03/contact-03";

const ContactPage = () => {
  const components = [Contact01Page, Contact02Page, Contact03Page];
  return <RenderComponent components={components} />;
};

export default ContactPage;
