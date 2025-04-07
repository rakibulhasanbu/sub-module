import RenderComponent from "@/components/RenderComponent";
import {
    Features01,
    Features02,
    features01Data,
    features02Data,
} from "@/features/features";
import { Section } from "@/type";

const FeaturesPage = () => {
    const components = [
        { comp: Features01, data: features01Data as Section },
        { comp: Features02, data: features02Data as Section },
    ];

    return <RenderComponent components={components} />;
};

export default FeaturesPage;
