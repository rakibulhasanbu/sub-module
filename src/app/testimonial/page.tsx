import RenderComponent from "@/components/RenderComponent";
import {
    Testimonial01,
    testimonial01Data,
    Testimonial02,
    testimonial02Data,
    Testimonial03,
    testimonial03Data,
    Testimonial04,
    testimonial04Data,
    Testimonial05,
    testimonial05Data,
    Testimonial06,
    testimonial06Data,
} from "@/features/testimonial";
import { ISection } from "@/type";

const TestimonialPage = () => {
    const components = [
        { comp: Testimonial01, data: testimonial01Data as ISection },
        { comp: Testimonial02, data: testimonial02Data as ISection },
        { comp: Testimonial03, data: testimonial03Data as ISection },
        { comp: Testimonial04, data: testimonial04Data as ISection },
        { comp: Testimonial05, data: testimonial05Data as ISection },
        { comp: Testimonial06, data: testimonial06Data as ISection },
    ];
    return <RenderComponent components={components} />;
};

export default TestimonialPage;
