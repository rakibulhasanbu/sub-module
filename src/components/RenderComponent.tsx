import { Section } from "../type";
import { ComponentType } from "react";

interface ComponentWithData<T = Section> {
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
