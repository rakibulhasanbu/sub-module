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
import { ISection } from "@/type";

const PricingPage = () => {
    const components = [
        { comp: Pricing01, data: pricing01Data as ISection },
        { comp: Pricing02, data: pricing02Data as ISection },
        { comp: Pricing03, data: pricing03Data as ISection },
        { comp: Pricing04, data: pricing04Data as ISection },
        { comp: Pricing05, data: pricing05Data as ISection },
        { comp: Pricing06, data: pricing06Data as ISection },
    ];
    return <RenderComponent components={components} />;
};

export default PricingPage;
