import Blog01Page from "@/features/blog/blog-01";
import Blog02Page from "@/features/blog/blog-02";
import Blog03Page from "@/features/blog/blog-03";
import RenderComponent from "@/components/RenderComponent";

const BlogPage = () => {
  const components = [Blog01Page, Blog02Page, Blog03Page];
  return <RenderComponent components={components} />;
};

export default BlogPage;
