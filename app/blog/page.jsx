import PostCard from "@/components/PostCard";
import Categories from "@/components/Categories";
import PostWidget from "@/components/PostWidget";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { getPosts } from "@/services/index";

export default async function BlogPage() {
  // Fetch posts data
  const posts = (await getPosts()) || [];

  return (
    <div className="container mx-auto px-10 mb-8 bg-black-100">
      <FloatingNav navItems={navItems} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
