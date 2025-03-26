import mongoose, { Schema, Document } from 'mongoose';

export interface IBlogPost extends Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image?: string; // Optional
  category?: string; // Optional
  tags: string[];
  author: string;
  authorTitle?: string; // Optional
  authorBio?: string; // Optional
  authorImage?: string; // Optional
  date: string;
  featured: boolean;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema: Schema = new Schema<IBlogPost>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true }, // Added index for faster queries
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  image: { type: String },
  category: { type: String },
  tags: { type: [String], default: [] },
  author: { type: String, required: true },
  authorTitle: { type: String },
  authorBio: { type: String },
  authorImage: { type: String },
  date: { type: String, required: true },
  featured: { type: Boolean, default: false },
  published: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Update `updatedAt` on save
BlogPostSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

// Create or retrieve the model
const BlogPost = mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);

export default BlogPost;