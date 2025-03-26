import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import blogPosts from "@/data/blogData";

// Filter for featured posts
const featuredPosts = blogPosts.filter(post => post.featured);

export const metadata: Metadata = {
  title: "Blog | Islamic Da'wa Academy",
  description: "Explore articles, insights, and educational content from the Islamic Da'wa Academy covering Islamic studies, Quranic sciences, and contemporary issues.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-green-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Islamic Da'wa Academy Blog</h1>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              Insights, articles, and educational content from our scholars and educators on Islamic knowledge, education, and contemporary issues.
            </p>
          </div>
        </div>

        {/* Featured Posts */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                  <div className="h-64 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
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
          </div>
        </section>

        {/* All Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                  <div className="h-48 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
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
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs text-gray-500 border border-gray-200 rounded-full px-3 py-1">
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
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
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive the latest articles, news, and updates from Islamic Da'wa Academy.
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
