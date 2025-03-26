import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client - these should come from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Uploads a file to Supabase Storage
 * @param file File to upload
 * @param bucket Storage bucket name (e.g., 'blog-images', 'gallery')
 * @param path Path within the bucket (e.g., 'blog/2023/image.jpg')
 * @returns URL of the uploaded file
 */
export async function uploadToSupabase(file: File, bucket: string, path: string): Promise<string | null> {
  try {
    // Extract file extension
    const fileExt = file.name.split('.').pop();

    // Create a unique file name
    const fileName = `${path}_${Date.now()}.${fileExt}`;

    // Upload file to Supabase
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Error uploading file:', error);
      return null;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path);

    return publicUrl;
  } catch (error) {
    console.error('Error in upload function:', error);
    return null;
  }
}

/**
 * Delete a file from Supabase Storage
 * @param bucket Storage bucket name
 * @param path Full path to the file including the filename
 */
export async function deleteFromSupabase(bucket: string, path: string): Promise<boolean> {
  try {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    if (error) {
      console.error('Error deleting file:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error in delete function:', error);
    return false;
  }
}
