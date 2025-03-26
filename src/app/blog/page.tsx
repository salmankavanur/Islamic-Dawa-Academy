import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import blogPostsStatic from "@/data/blogData";

export const metadata: Metadata = {
  title: "Blog | Islamic Da'wa Academy",
  description: "Explore articles, insights, and educational content from the Islamic Da'wa Academy.",
};

async function fetchBlogPosts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const url = `${baseUrl}/api/admin/blog?published=true`;
    console.log('Fetching from:', url);
    const res = await fetch(url, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error(`Failed to fetch blog posts: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    console.log('API Response:', data);
    return data.posts || [];
  } catch (error) {
    console.error('Error fetching blog posts from MongoDB:', error);
    return [];
  }
}

export default async function BlogPage() {
  const blogPostsDb = await fetchBlogPosts();
  console.log('Database Posts:', blogPostsDb);

  const blogPosts = blogPostsDb.length > 0 ? blogPostsDb : blogPostsStatic;
  console.log('Final Posts Used:', blogPosts);

  const featuredPosts = blogPosts.filter((post: any) => post.featured);

  return (
    <>
      <Header />
      <main>
        <div className="bg-green-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Islamic Da'wa Academy Blog</h1>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              Insights, articles, and educational content from our scholars and educators.
            </p>
          </div>
        </div>

        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Articles</h2>
            {featuredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post: any) => (
                  <div key={post._id || post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                    <div className="h-64 relative">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          <Link href={`/blog/${post.slug}`} className="hover:text-green-700 transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-500 text-sm">
                          By {post.author} | {post.date}
                        </p>
                      </div>
                      <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                      <div>
                        <Link href={`/blog/${post.slug}`}>
                          <Button className="bg-green-700 hover:bg-green-800">Read More</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">
                No featured posts available. {blogPostsDb.length === 0 ? "Showing static data." : "Check your database."}
              </p>
            )}
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">All Articles</h2>
            {blogPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post: any) => (
                  <div key={post._id || post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                    <div className="h-48 relative">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          <Link href={`/blog/${post.slug}`} className="hover:text-green-700 transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-500 text-sm">
                          By {post.author} | {post.date}
                        </p>
                      </div>
                      <p className="text-gray-600 mb-6 flex-grow line-clamp-3">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags?.slice(0, 2).map((tag: string, index: number) => (
                          <span key={index} className="text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1">
                            {tag}
                          </span>
                        ))}
                        {post.tags?.length > 2 && (
                          <span className="text-xs text-gray-500 rounded-full px-2">+{post.tags.length - 2} more</span>
                        )}
                      </div>
                      <div>
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50 w-full">
                            Read Article
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">No blog posts available in database or static data.</p>
            )}
          </div>
        </section>

        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest articles and updates.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 border border-gray-300 rounded flex-grow focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
                <Button size="lg" className="bg-green-700 hover:bg-green-800 shrink-0">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}