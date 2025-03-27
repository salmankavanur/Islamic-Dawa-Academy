import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Define BlogPost interface
interface BlogPost {
  _id?: string;
  id?: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  tags?: string[];
  content?: string;
  authorImage?: string;
  authorTitle?: string;
  authorBio?: string;
  featured?: boolean;
  published?: boolean;
}

// Fetch single blog post by slug
async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // Use absolute URL for server-side fetch in Next.js App Router
    const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://your-production-url.com";
    const url = `${baseUrl}/api/admin/blog?slug=${encodeURIComponent(slug)}`;
    console.log("Fetching blog post from URL:", url);

    const res = await fetch(url, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blog post: ${res.status} ${res.statusText}`);
    }

    const post = await res.json();
    return post || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

// Fetch all blog posts for related articles
async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://your-production-url.com";
    const url = `${baseUrl}/api/admin/blog?published=true`;
    console.log("Fetching all blog posts from URL:", url);

    const res = await fetch(url, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blog posts: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return Array.isArray(data.posts) ? data.posts : [];
  } catch (error) {
    console.error("Error fetching all blog posts:", error);
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>; // Type params as Promise to suppress warning
}): Promise<Metadata> {
  const { slug } = await params; // Await params to satisfy Next.js
  const post = await fetchBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | Islamic Da'wa Academy",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Islamic Da'wa Academy Blog`,
    description: post.excerpt,
  };
}

// Blog post page component
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>; // Type params as Promise to suppress warning
}) {
  const { slug } = await params; // Await params to satisfy Next.js
  const post = await fetchBlogPost(slug);
  if (!post) {
    notFound();
  }

  const allPosts = await fetchAllBlogPosts();
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p._id !== post._id &&
        (p.category === post.category ||
          (p.tags && post.tags && p.tags.some((tag) => post.tags!.includes(tag))))
    )
    .slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <div className="bg-green-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-4">
                <Link
                  href="/blog"
                  className="text-green-200 hover:text-white transition-colors inline-flex items-center"
                >
                  ← Back to Blog
                </Link>
              </div>
              <span className="inline-block bg-green-700 text-green-100 text-xs font-semibold px-2.5 py-0.5 rounded mb-4">
                {post.category || "Uncategorized"}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center text-green-100">
                <span>By {post.author || "Anonymous"}</span>
                <span className="mx-2">•</span>
                <span>{post.date || "Date not available"}</span>
              </div>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-96 relative">
                  <img
                    src={post.image || "/placeholder-image.jpg"}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div
                    className="prose prose-green lg:prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
                  />
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-8">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-sm text-gray-700 bg-gray-100 rounded-full px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>

              <div className="mt-10 bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About the Author</h2>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="sm:w-1/4 mb-4 sm:mb-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                      <img
                        src={
                          post.authorImage ||
                          `https://randomuser.me/api/portraits/${
                            post.author.includes("Dr.") ? "men" : "women"
                          }/42.jpg`
                        }
                        alt={post.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="sm:w-3/4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {post.author || "Anonymous"}
                    </h3>
                    <p className="text-green-700 font-medium text-sm mb-2">
                      {post.authorTitle || "Contributor"}
                    </p>
                    <p className="text-gray-600">
                      {post.authorBio || "No bio available."}
                    </p>
                  </div>
                </div>
              </div>

              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <div
                        key={relatedPost._id || relatedPost.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
                      >
                        <div className="h-48">
                          <img
                            src={relatedPost.image || "/placeholder-image.jpg"}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            <Link
                              href={`/blog/${relatedPost.slug}`}
                              className="hover:text-green-700 transition-colors"
                            >
                              {relatedPost.title}
                            </Link>
                          </h3>
                          <p className="text-gray-500 text-sm mb-3">
                            {relatedPost.date || "Date not available"}
                          </p>
                          <Link href={`/blog/${relatedPost.slug}`} className="mt-auto">
                            <Button
                              variant="outline"
                              className="border-green-700 text-green-700 hover:bg-green-50 w-full"
                            >
                              Read Article
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 py-8 bg-green-50 rounded-lg text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore More Articles</h2>
                <Link href="/blog">
                  <Button size="lg" className="bg-green-700 hover:bg-green-800">
                    View All Articles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}