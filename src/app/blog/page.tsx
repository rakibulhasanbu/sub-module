import { Blog01, Blog02, Blog03 } from "@/features/blog";

import RenderComponent from "@/components/RenderComponent";

const BlogPage = () => {
  const components = [Blog01, Blog02, Blog03];
  return <RenderComponent components={components} />;
};

export default BlogPage;
