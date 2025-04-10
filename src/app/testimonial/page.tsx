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
    Testimonial07,
    testimonial07Data,
    Testimonial08,
    testimonial08Data,
    Testimonial09,
    testimonial09Data,
} from "@/features/testimonial";
import { Section } from "@/type";

const TestimonialPage = () => {
    const components = [
        { comp: Testimonial01, data: testimonial01Data as Section },
        { comp: Testimonial02, data: testimonial02Data as Section },
        { comp: Testimonial03, data: testimonial03Data as Section },
        { comp: Testimonial04, data: testimonial04Data as Section },
        { comp: Testimonial05, data: testimonial05Data as Section },
        { comp: Testimonial06, data: testimonial06Data as Section },
        { comp: Testimonial07, data: testimonial07Data as Section },
        { comp: Testimonial08, data: testimonial08Data as Section },
        { comp: Testimonial09, data: testimonial09Data as Section },
    ];
    return <RenderComponent components={components} />;
};

export default TestimonialPage;
