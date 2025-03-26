import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Use FormData to handle file uploads
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const bucket = formData.get('bucket') as string;
    const path = formData.get('path') as string;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }
    
    if (!bucket) {
      return NextResponse.json({ error: 'No bucket specified' }, { status: 400 });
    }
    
    // Generate a unique file name with original extension
    const fileExt = file.name.split('.').pop();
    const fileName = `${path ? path + '/' : ''}${Date.now()}_${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
    
    // Convert file to buffer for upload
    const buffer = await file.arrayBuffer();
    
    // Upload to Supabase
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false
      });
    
    if (error) {
      console.error('Error uploading to Supabase:', error);
      return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
    }
    
    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path);
    
    return NextResponse.json({ url: publicUrl });
  } catch (error) {
    console.error('Error in upload API:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Get URL parameters
    const url = new URL(request.url);
    const bucket = url.searchParams.get('bucket');
    const path = url.searchParams.get('path');
    
    if (!bucket || !path) {
      return NextResponse.json({ error: 'Bucket and path are required' }, { status: 400 });
    }
    
    // Delete from Supabase
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);
    
    if (error) {
      console.error('Error deleting from Supabase:', error);
      return NextResponse.json({ error: 'Failed to delete file' }, { status: 500 });
    }
    
    return NextResponse.json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error('Error in delete API:', error);
    return NextResponse.json({ error: 'Failed to delete file' }, { status: 500 });
  }
}