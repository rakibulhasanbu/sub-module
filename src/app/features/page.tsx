import RenderComponent from "@/components/RenderComponent";
import {
    Features01,
    Features02,
    features01Data,
    features02Data,
} from "@/features/features";
import { ISection } from "@/type";

const FeaturesPage = () => {
    const components = [
        { comp: Features01, data: features01Data as ISection },
        { comp: Features02, data: features02Data as ISection },
    ];

    return <RenderComponent components={components} />;
};

export default FeaturesPage;
