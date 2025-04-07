import RenderComponent from "@/components/RenderComponent";
import {
    Footer01,
    footer01Data,
    Footer02,
    footer02Data,
    Footer03,
    footer03Data,
    Footer04,
    footer04Data,
    Footer05,
    footer05Data,
} from "@/features/footer";
import { ISection } from "@/type";

const FooterPage = () => {
    const components = [
        { comp: Footer01, data: footer01Data as ISection },
        { comp: Footer02, data: footer02Data as ISection },
        { comp: Footer03, data: footer03Data as ISection },
        { comp: Footer04, data: footer04Data as ISection },
        { comp: Footer05, data: footer05Data as ISection },
    ];
    return <RenderComponent components={components} />;
};

export default FooterPage;
