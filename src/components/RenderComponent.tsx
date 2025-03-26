import { ComponentType } from "react";

interface RenderComponentProps {
  components: ComponentType[];
}

const RenderComponent = ({ components }: RenderComponentProps) => {
  return (
    <div className="space-y-32">
      {components.map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );
};

export default RenderComponent;
