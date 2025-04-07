import {
    Blog01,
    blog01Data,
    Blog02,
    blog02Data,
    Blog03,
    blog03Data,
} from "@/features/blog";
import { ISection } from "@/type";

import RenderComponent from "@/components/RenderComponent";

const BlogPage = () => {
    const components = [
        { comp: Blog01, data: blog01Data as ISection },
        { comp: Blog02, data: blog02Data as ISection },
        { comp: Blog03, data: blog03Data as ISection },
    ];

    return <RenderComponent components={components} />;
};

export default BlogPage;
