import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import connectToDatabase from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';

export const dynamic = 'force-dynamic'; // Ensure this API route is dynamic

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const url = new URL(request.url);
    const slug = url.searchParams.get('slug');

    if (slug) {
      const post = await BlogPost.findOne({ slug });
      return post
        ? NextResponse.json(post)
        : NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const filterOptions: any = {};
    const publishedParam = url.searchParams.get('published');
    if (publishedParam !== null) filterOptions.published = publishedParam === 'true';
    const featuredParam = url.searchParams.get('featured');
    if (featuredParam !== null) filterOptions.featured = featuredParam === 'true';
    const category = url.searchParams.get('category');
    if (category) filterOptions.category = category;
    const tag = url.searchParams.get('tag');
    if (tag) filterOptions.tags = { $in: [tag] };

    const total = await BlogPost.countDocuments(filterOptions);
    const posts = await BlogPost.find(filterOptions)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return NextResponse.json({
      posts,
      pagination: { total, page, limit, pages: Math.ceil(total / limit) },
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    const data = await request.json();

    const existingPost = await BlogPost.findOne({ slug: data.slug });
    if (existingPost) {
      return NextResponse.json({ error: 'A blog post with this slug already exists' }, { status: 409 });
    }

    const newPost = new BlogPost({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await newPost.save();
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    const data = await request.json();
    const { id, ...updateData } = data;

    if (!id) {
      return NextResponse.json({ error: 'Blog post ID is required' }, { status: 400 });
    }

    const updatedPost = await BlogPost.findByIdAndUpdate(
      id,
      { ...updateData, updatedAt: new Date() },
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

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Blog post ID is required' }, { status: 400 });
    }

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