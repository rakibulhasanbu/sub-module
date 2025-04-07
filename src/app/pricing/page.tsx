import RenderComponent from "@/components/RenderComponent";
import {
    Pricing01,
    pricing01Data,
    Pricing02,
    pricing02Data,
    Pricing03,
    pricing03Data,
    Pricing04,
    pricing04Data,
    Pricing05,
    pricing05Data,
    Pricing06,
    pricing06Data,
} from "@/features/pricing";
import { Section } from "@/type";

const PricingPage = () => {
    const components = [
        { comp: Pricing01, data: pricing01Data as Section },
        { comp: Pricing02, data: pricing02Data as Section },
        { comp: Pricing03, data: pricing03Data as Section },
        { comp: Pricing04, data: pricing04Data as Section },
        { comp: Pricing05, data: pricing05Data as Section },
        { comp: Pricing06, data: pricing06Data as Section },
    ];
    return <RenderComponent components={components} />;
};

export default PricingPage;
