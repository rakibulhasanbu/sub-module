import {
    Blog01,
    blog01Data,
    Blog02,
    blog02Data,
    Blog03,
    blog03Data,
} from "@/features/blog";
import { Section } from "@/type";

import RenderComponent from "@/components/RenderComponent";

const BlogPage = () => {
    const components = [
        { comp: Blog01, data: blog01Data as Section },
        { comp: Blog02, data: blog02Data as Section },
        { comp: Blog03, data: blog03Data as Section },
    ];

    return <RenderComponent components={components} />;
};

export default BlogPage;
