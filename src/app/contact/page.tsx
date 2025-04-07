import RenderComponent from "@/components/RenderComponent";
import {
    Contact01,
    contact01Data,
    Contact02,
    contact02Data,
    Contact03,
    contact03Data,
} from "@/features/contact";
import { Section } from "@/type";

const ContactPage = () => {
    const components = [
        { comp: Contact01, data: contact01Data as Section },
        { comp: Contact02, data: contact02Data as Section },
        { comp: Contact03, data: contact03Data as Section },
    ];
    return <RenderComponent components={components} />;
};

export default ContactPage;
