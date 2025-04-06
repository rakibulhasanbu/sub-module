import RenderComponent from "@/components/RenderComponent";
import {
  Testimonial01,
  Testimonial02,
  Testimonial03,
  Testimonial04,
  Testimonial05,
  Testimonial06,
} from "@/features/testimonial";

const TestimonialPage = () => {
  const components = [
    Testimonial01,
    Testimonial02,
    Testimonial03,
    Testimonial04,
    Testimonial05,
    Testimonial06,
  ];
  return <RenderComponent components={components} />;
};

export default TestimonialPage;
