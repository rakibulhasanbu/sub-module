import { ISection } from "@/type";
import { ComponentType } from "react";

// Make the interface generic to accept any data type
interface ComponentWithData<T = ISection> {
    comp: ComponentType<{ data: T }>;
    data: T;
}

interface RenderComponentProps {
    components: ComponentWithData[];
}

const RenderComponent = ({ components }: RenderComponentProps) => {
    return (
        <div className="space-y-32">
            {components.map((Component, index) => {
                const Comp = Component.comp;
                return <Comp key={index} data={Component.data} />;
            })}
        </div>
    );
};

export default RenderComponent;
