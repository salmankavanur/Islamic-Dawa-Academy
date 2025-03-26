import connectToDatabase from './mongodb';
import BlogPost from '@/models/BlogPost';
import blogPosts from '@/data/blogData';

// Define the IBlogPost interface if not already defined
export interface IBlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  authorTitle: string;
  authorBio: string;
  authorImage: string;
  date: Date | string;
  featured: boolean;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Type for the dummy data posts (assuming this is the structure)
interface DummyBlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  authorTitle?: string;
  authorBio?: string;
  authorImage: string;
  date: Date | string;
  featured?: boolean;
}

/**
 * Fetches all blog posts from the database
 * Returns dummy data if no posts are found or an error occurs
 */
export async function getAllBlogPosts(): Promise<IBlogPost[]> {
  try {
    await connectToDatabase();
    
    const posts = await BlogPost.find({ published: true })
        .sort({ createdAt: -1 })
        .lean() as unknown as IBlogPost[];
    
    if (posts?.length > 0) {
      return posts;
    }
    
    return (blogPosts as DummyBlogPost[]).map(post => ({
      _id: post.id.toString(),
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      image: post.image,
      category: post.category,
      tags: post.tags,
      author: post.author,
      authorTitle: post.authorTitle || 'Author',
      authorBio: post.authorBio || 'Islamic scholar and educator',
      authorImage: post.authorImage,
      date: post.date,
      featured: post.featured || false,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    
    return (blogPosts as DummyBlogPost[]).map(post => ({
      _id: post.id.toString(),
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      image: post.image,
      category: post.category,
      tags: post.tags,
      author: post.author,
      authorTitle: post.authorTitle || 'Author',
      authorBio: post.authorBio || 'Islamic scholar and educator',
      authorImage: post.authorImage,
      date: post.date,
      featured: post.featured || false,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  }
}

/**
 * Fetches a single blog post by slug
 * Returns dummy data if no post is found or an error occurs
 */
export async function getBlogPostBySlug(slug: string): Promise<IBlogPost | null> {
  try {
    await connectToDatabase();
    
    const post = await BlogPost.findOne({ slug, published: true })
      .lean() as IBlogPost | null;
    
    if (post) {
      return post;
    }
    
    const dummyPost = (blogPosts as DummyBlogPost[]).find(p => p.slug === slug);
    
    if (dummyPost) {
      return {
        _id: dummyPost.id.toString(),
        title: dummyPost.title,
        slug: dummyPost.slug,
        content: dummyPost.content,
        excerpt: dummyPost.excerpt,
        image: dummyPost.image,
        category: dummyPost.category,
        tags: dummyPost.tags,
        author: dummyPost.author,
        authorTitle: dummyPost.authorTitle || 'Author',
        authorBio: dummyPost.authorBio || 'Islamic scholar and educator',
        authorImage: dummyPost.authorImage,
        date: dummyPost.date,
        featured: dummyPost.featured || false,
        published: true,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    }
    
    return null;
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}":`, error);
    
    const dummyPost = (blogPosts as DummyBlogPost[]).find(p => p.slug === slug);
    
    if (dummyPost) {
      return {
        _id: dummyPost.id.toString(),
        title: dummyPost.title,
        slug: dummyPost.slug,
        content: dummyPost.content,
        excerpt: dummyPost.excerpt,
        image: dummyPost.image,
        category: dummyPost.category,
        tags: dummyPost.tags,
        author: dummyPost.author,
        authorTitle: dummyPost.authorTitle || 'Author',
        authorBio: dummyPost.authorBio || 'Islamic scholar and educator',
        authorImage: dummyPost.authorImage,
        date: dummyPost.date,
        featured: dummyPost.featured || false,
        published: true,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    }
    
    return null;
  }
}

/**
 * Fetches all featured blog posts
 * Returns dummy data if no posts are found or an error occurs
 */
export async function getFeaturedBlogPosts(): Promise<IBlogPost[]> {
  try {
    await connectToDatabase();
    
    const posts = await BlogPost.find({ featured: true, published: true })
        .sort({ createdAt: -1 })
        .lean() as unknown as IBlogPost[];
    
    if (posts?.length > 0) {
      return posts;
    }
    
    const dummyFeaturedPosts = (blogPosts as DummyBlogPost[]).filter(post => post.featured);
    
    return dummyFeaturedPosts.map(post => ({
      _id: post.id.toString(),
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      image: post.image,
      category: post.category,
      tags: post.tags,
      author: post.author,
      authorTitle: post.authorTitle || 'Author',
      authorBio: post.authorBio || 'Islamic scholar and educator',
      authorImage: post.authorImage,
      date: post.date,
      featured: true,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  } catch (error) {
    console.error('Error fetching featured blog posts:', error);
    
    const dummyFeaturedPosts = (blogPosts as DummyBlogPost[]).filter(post => post.featured);
    
    return dummyFeaturedPosts.map(post => ({
      _id: post.id.toString(),
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      image: post.image,
      category: post.category,
      tags: post.tags,
      author: post.author,
      authorTitle: post.authorTitle || 'Author',
      authorBio: post.authorBio || 'Islamic scholar and educator',
      authorImage: post.authorImage,
      date: post.date,
      featured: true,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  }
}

/**
 * Fetches related blog posts for a given post
 */
export async function getRelatedBlogPosts(currentPostSlug: string): Promise<IBlogPost[]> {
  try {
    const currentPost = await getBlogPostBySlug(currentPostSlug);
    
    if (!currentPost) {
      return [];
    }
    
    await connectToDatabase();
    
    const relatedPosts = await BlogPost.find({
        slug: { $ne: currentPostSlug },
        published: true,
        $or: [
            { category: currentPost.category },
            { tags: { $in: currentPost.tags } }
        ]
    })
        .sort({ createdAt: -1 })
        .limit(3)
        .lean() as unknown as IBlogPost[];
    
    if (relatedPosts?.length > 0) {
      return relatedPosts;
    }
    
    const dummyCurrentPost = (blogPosts as DummyBlogPost[]).find(p => p.slug === currentPostSlug);
    
    if (!dummyCurrentPost) {
      return [];
    }
    
    const dummyRelatedPosts = (blogPosts as DummyBlogPost[])
      .filter(post => 
        post.id !== dummyCurrentPost.id &&
        (post.category === dummyCurrentPost.category || 
         post.tags.some(tag => dummyCurrentPost.tags.includes(tag)))
      )
      .slice(0, 3);
    
    return dummyRelatedPosts.map(post => ({
      _id: post.id.toString(),
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      image: post.image,
      category: post.category,
      tags: post.tags,
      author: post.author,
      authorTitle: post.authorTitle || 'Author',
      authorBio: post.authorBio || 'Islamic scholar and educator',
      authorImage: post.authorImage,
      date: post.date,
      featured: post.featured || false,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  } catch (error) {
    console.error(`Error fetching related blog posts for "${currentPostSlug}":`, error);
    
    const dummyCurrentPost = (blogPosts as DummyBlogPost[]).find(p => p.slug === currentPostSlug);
    
    if (!dummyCurrentPost) {
      return [];
    }
    
    const dummyRelatedPosts = (blogPosts as DummyBlogPost[])
      .filter(post => 
        post.id !== dummyCurrentPost.id &&
        (post.category === dummyCurrentPost.category || 
         post.tags.some(tag => dummyCurrentPost.tags.includes(tag)))
      )
      .slice(0, 3);
    
    return dummyRelatedPosts.map(post => ({
      _id: post.id.toString(),
      title: post.title,
      slug: post.slug,
      content: post.content,
      excerpt: post.excerpt,
      image: post.image,
      category: post.category,
      tags: post.tags,
      author: post.author,
      authorTitle: post.authorTitle || 'Author',
      authorBio: post.authorBio || 'Islamic scholar and educator',
      authorImage: post.authorImage,
      date: post.date,
      featured: post.featured || false,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
  }
}