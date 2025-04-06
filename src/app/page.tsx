import RenderComponent from "@/components/RenderComponent";
import {
  Hero01,
  Hero02,
  Hero03,
  Hero04,
  Hero05,
  Hero06,
  Hero07,
} from "@/features/hero";

export default function Home() {
  const components = [Hero01, Hero02, Hero03, Hero04, Hero05, Hero06, Hero07];

  return <RenderComponent components={components} />;
}
