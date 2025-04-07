import RenderComponent from "@/components/RenderComponent";
import {
    Timeline01,
    timeline01Data,
    Timeline02,
    timeline02Data,
    Timeline03,
    timeline03Data,
    Timeline04,
    timeline04Data,
    Timeline05,
    timeline05Data,
    Timeline06,
    timeline06Data,
    Timeline07,
    timeline07Data,
} from "@/features/timeline";
import { Section } from "@/type";

const TimelinePage = () => {
    const components = [
        { comp: Timeline01, data: timeline01Data as Section },
        { comp: Timeline02, data: timeline02Data as Section },
        { comp: Timeline03, data: timeline03Data as Section },
        { comp: Timeline04, data: timeline04Data as Section },
        { comp: Timeline05, data: timeline05Data as Section },
        { comp: Timeline06, data: timeline06Data as Section },
        { comp: Timeline07, data: timeline07Data as Section },
    ];
    return <RenderComponent components={components} />;
};

export default TimelinePage;
