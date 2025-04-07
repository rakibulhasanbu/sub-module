import RenderComponent from "@/components/RenderComponent";
import {
    Hero01,
    hero01Data,
    Hero02,
    hero02Data,
    Hero03,
    hero03Data,
    Hero04,
    hero04Data,
    Hero05,
    hero05Data,
    Hero06,
    hero06Data,
    Hero07,
    hero07Data,
} from "@/features/hero";
import { Section } from "@/type";

export default function Home() {
    const components = [
        { comp: Hero01, data: hero01Data as Section },
        { comp: Hero02, data: hero02Data as Section },
        { comp: Hero03, data: hero03Data as Section },
        { comp: Hero04, data: hero04Data as Section },
        { comp: Hero05, data: hero05Data as Section },
        { comp: Hero06, data: hero06Data as Section },
        { comp: Hero07, data: hero07Data as Section },
    ];
    return <RenderComponent components={components} />;
}
