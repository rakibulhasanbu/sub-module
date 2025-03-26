import RenderComponent from "@/components/RenderComponent";
import Hero01 from "@/features/hero/hero-01/hero-01";
import Hero02 from "@/features/hero/hero-02/hero-02";
import Hero03 from "@/features/hero/hero-03/hero-03";
import Hero04 from "@/features/hero/hero-04/hero-04";
import Hero05 from "@/features/hero/hero-05/hero-05";
import Hero06 from "@/features/hero/hero-06/hero-06";

export default function Home() {
  const components = [Hero01, Hero02, Hero03, Hero04, Hero05, Hero06];

  return <RenderComponent components={components} />;
}
