import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import blogPostsStatic from "@/data/blogData";

// Define Post interface
interface BlogPost {
  _id?: string;
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  tags?: string[];
  featured?: boolean;
  published?: boolean;
}

export const metadata: Metadata = {
  title: "Blog | Islamic Da'wa Academy",
  description: "Explore articles, insights, and educational content from the Islamic Da'wa Academy.",
};

// Mark the page as dynamic to avoid static rendering issues on Vercel
export const dynamic = 'force-dynamic';

// Function to normalize blog post data
const normalizeBlogPost = (post: any): BlogPost => ({
  ...post,
  id: post.id?.toString() ?? post._id, // Convert number to string if needed
  _id: post._id?.toString(),
  title: post.title || "Untitled",
  slug: post.slug || "",
  excerpt: post.excerpt || "",
  image: post.image || "/placeholder-image.jpg",
  category: post.category || "Uncategorized",
  author: post.author || "Anonymous",
  date: post.date || "Date not available",
  tags: post.tags || [],
  featured: post.featured || false,
  published: post.published ?? true,
});

async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch('/api/admin/blog?published=true', {
      cache: 'no-store', // Forces fresh data on each request
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return Array.isArray(data.posts) ? data.posts.map(normalizeBlogPost) : [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return Array.isArray(blogPostsStatic) ? blogPostsStatic.map(normalizeBlogPost) : [];
  }
}

export default async function BlogPage() {
  const blogPosts: BlogPost[] = await fetchBlogPosts();
  const featuredPosts: BlogPost[] = blogPosts.filter((post) => post.featured === true);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-green-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Islamic Da'wa Academy Blog</h1>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              Insights, articles, and educational content from our scholars and educators.
            </p>
          </div>
        </div>

        {/* Featured Articles Section */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Featured Articles
            </h2>
            {featuredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article
                    key={post._id ?? post.id ?? post.slug}
                    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                  >
                    <div className="relative h-64">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        <Link href={`/blog/${post.slug}`} className="hover:text-green-700">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">
                        By {post.author} | {post.date}
                      </p>
                      <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`}>
                        <Button className="bg-green-700 hover:bg-green-800 w-full">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">No featured posts available.</p>
            )}
          </div>
        </section>

        {/* All Articles Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              All Articles
            </h2>
            {blogPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post._id ?? post.id ?? post.slug}
                    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                  >
                    <div className="relative h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        <Link href={`/blog/${post.slug}`} className="hover:text-green-700">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">
                        By {post.author} | {post.date}
                      </p>
                      <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags?.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags && post.tags.length > 2 && (
                          <span className="text-xs text-gray-500 rounded-full px-2">
                            +{post.tags.length - 2} more
                          </span>
                        )}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="outline"
                          className="border-green-700 text-green-700 hover:bg-green-50 w-full"
                        >
                          Read Article
                        </Button>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">
                No blog posts available in database or static data.
              </p>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
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
                  required
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