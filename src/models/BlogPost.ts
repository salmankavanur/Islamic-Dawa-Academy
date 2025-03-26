import mongoose, { Schema, Document } from 'mongoose';

export interface IBlogPost extends Document {
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
  authorImage?: string;
  date: string;
  featured: boolean;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema: Schema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: [String], default: [] },
  author: { type: String, required: true },
  authorTitle: { type: String, required: true },
  authorBio: { type: String, required: true },
  authorImage: { type: String },
  date: { type: String, required: true },
  featured: { type: Boolean, default: false },
  published: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create or retrieve the model
const BlogPost = mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);

export default BlogPost;