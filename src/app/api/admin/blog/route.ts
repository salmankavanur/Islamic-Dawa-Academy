import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import connectToDatabase from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';

// GET: Fetch all blog posts or a single blog post by slug
export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();
    
    // Check if a slug is provided in the query params
    const url = new URL(request.url);
    const slug = url.searchParams.get('slug');
    
    if (slug) {
      // Fetch a single blog post by slug
      const post = await BlogPost.findOne({ slug });
      
      if (!post) {
        return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
      }
      
      return NextResponse.json(post);
    } else {
      // Fetch all blog posts with pagination
      const page = parseInt(url.searchParams.get('page') || '1');
      const limit = parseInt(url.searchParams.get('limit') || '10');
      const skip = (page - 1) * limit;
      
      // Apply filters if provided
      const filterOptions: any = {};
      
      // Filter by published status
      const publishedParam = url.searchParams.get('published');
      if (publishedParam) {
        filterOptions.published = publishedParam === 'true';
      }
      
      // Filter by featured status
      const featuredParam = url.searchParams.get('featured');
      if (featuredParam) {
        filterOptions.featured = featuredParam === 'true';
      }
      
      // Filter by category
      const category = url.searchParams.get('category');
      if (category) {
        filterOptions.category = category;
      }
      
      // Filter by tag
      const tag = url.searchParams.get('tag');
      if (tag) {
        filterOptions.tags = { $in: [tag] };
      }
      
      // Get total count for pagination
      const total = await BlogPost.countDocuments(filterOptions);
      
      // Fetch posts with pagination
      const posts = await BlogPost.find(filterOptions)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
      
      return NextResponse.json({
        posts,
        pagination: {
          total,
          page,
          limit,
          pages: Math.ceil(total / limit)
        }
      });
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

// POST: Create a new blog post
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    await connectToDatabase();
    
    // Parse the request body
    const data = await request.json();
    
    // Check if a blog post with the same slug already exists
    const existingPost = await BlogPost.findOne({ slug: data.slug });
    if (existingPost) {
      return NextResponse.json({ error: 'A blog post with this slug already exists' }, { status: 409 });
    }
    
    // Create the new blog post
    const newPost = new BlogPost({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    await newPost.save();
    
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}

// PUT: Update an existing blog post
export async function PUT(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    await connectToDatabase();
    
    // Parse the request body
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Blog post ID is required' }, { status: 400 });
    }
    
    // Update the blog post
    const updatedPost = await BlogPost.findByIdAndUpdate(
      id,
      {
        ...updateData,
        updatedAt: new Date()
      },
      { new: true }
    );
    
    if (!updatedPost) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }
    
    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
  }
}

// DELETE: Delete a blog post
export async function DELETE(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    await connectToDatabase();
    
    // Get post ID from the URL parameters
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Blog post ID is required' }, { status: 400 });
    }
    
    // Delete the blog post
    const deletedPost = await BlogPost.findByIdAndDelete(id);
    
    if (!deletedPost) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
}