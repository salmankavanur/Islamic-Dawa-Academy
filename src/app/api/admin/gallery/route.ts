import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import connectToDatabase from '@/lib/mongodb';
import GalleryItem from '@/models/GalleryItem';

// GET: Fetch all gallery items or a single gallery item by ID
export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();
    
    // Check if an ID is provided in the query params
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    
    if (id) {
      // Fetch a single gallery item by ID
      const item = await GalleryItem.findById(id);
      
      if (!item) {
        return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
      }
      
      return NextResponse.json(item);
    } else {
      // Fetch all gallery items with pagination
      const page = parseInt(url.searchParams.get('page') || '1');
      const limit = parseInt(url.searchParams.get('limit') || '20');
      const skip = (page - 1) * limit;
      
      // Apply filters if provided
      const filterOptions: Record<string, any> = {};
      
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
      const total = await GalleryItem.countDocuments(filterOptions);
      
      // Fetch gallery items with pagination and sorting by order field
      const items = await GalleryItem.find(filterOptions)
        .sort({ order: 1, createdAt: -1 })
        .skip(skip)
        .limit(limit);
      
      return NextResponse.json({
        items,
        pagination: {
          total,
          page,
          limit,
          pages: Math.ceil(total / limit)
        }
      });
    }
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery items' }, { status: 500 });
  }
}

// POST: Create a new gallery item
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
    
    // Find the highest order value to place the new item at the end
    const highestOrder = await GalleryItem.findOne().sort({ order: -1 });
    const newOrder = highestOrder ? highestOrder.order + 1 : 0;
    
    // Create the new gallery item
    const newItem = new GalleryItem({
      ...data,
      order: data.order !== undefined ? data.order : newOrder,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    await newItem.save();
    
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error('Error creating gallery item:', error);
    return NextResponse.json({ error: 'Failed to create gallery item' }, { status: 500 });
  }
}

// PUT: Update an existing gallery item
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
      return NextResponse.json({ error: 'Gallery item ID is required' }, { status: 400 });
    }
    
    // Update the gallery item
    const updatedItem = await GalleryItem.findByIdAndUpdate(
      id,
      {
        ...updateData,
        updatedAt: new Date()
      },
      { new: true }
    );
    
    if (!updatedItem) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
    }
    
    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error('Error updating gallery item:', error);
    return NextResponse.json({ error: 'Failed to update gallery item' }, { status: 500 });
  }
}

// DELETE: Delete a gallery item
export async function DELETE(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    await connectToDatabase();
    
    // Get item ID from the URL parameters
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Gallery item ID is required' }, { status: 400 });
    }
    
    // Delete the gallery item
    const deletedItem = await GalleryItem.findByIdAndDelete(id);
    
    if (!deletedItem) {
      return NextResponse.json({ error: 'Gallery item not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Gallery item deleted successfully' });
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    return NextResponse.json({ error: 'Failed to delete gallery item' }, { status: 500 });
  }
}