import RenderComponent from "@/components/RenderComponent";
import {
    FAQ01,
    FAQ02,
    FAQ03,
    FAQ04,
    FAQ05,
    FAQ06,
    FAQ07,
    FAQ08,
    FAQ09,
    FAQ10,
    faq01Data,
    faq02Data,
    faq03Data,
    faq04Data,
    faq05Data,
    faq06Data,
    faq07Data,
    faq08Data,
    faq09Data,
    faq10Data,
} from "@/features/faq";
import { Section } from "@/type";

const FAQPage = () => {
    const components = [
        { comp: FAQ01, data: faq01Data as Section },
        { comp: FAQ02, data: faq02Data as Section },
        { comp: FAQ03, data: faq03Data as Section },
        { comp: FAQ04, data: faq04Data as Section },
        { comp: FAQ05, data: faq05Data as Section },
        { comp: FAQ06, data: faq06Data as Section },
        { comp: FAQ07, data: faq07Data as Section },
        { comp: FAQ08, data: faq08Data as Section },
        { comp: FAQ09, data: faq09Data as Section },
        { comp: FAQ10, data: faq10Data as Section },
    ];
    return <RenderComponent components={components} />;
};
export default FAQPage;
