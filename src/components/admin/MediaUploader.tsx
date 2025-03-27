"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Upload, X, AlertCircle } from 'lucide-react';
import { STORAGE_BUCKETS } from '@/lib/supabase';

interface MediaUploaderProps {
  onImageUploaded: (imageUrl: string) => void;
  defaultImage?: string;
  bucket?: string;
  folder?: string;
  className?: string;
}

export default function MediaUploader({
  onImageUploaded,
  defaultImage = '',
  bucket = STORAGE_BUCKETS.GALLERY_IMAGES,
  folder = '',
  className = '',
}: MediaUploaderProps) {
  const [previewUrl, setPreviewUrl] = useState<string>(defaultImage);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create a local preview
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    // Upload file to server
    await uploadFile(file);

    // Clean up the object URL
    return () => URL.revokeObjectURL(objectUrl);
  };

  const uploadFile = async (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);
    setError(null);

    try {
      // Create form data for file upload
      const formData = new FormData();
      formData.append('file', file);
      formData.append('bucket', bucket);
      formData.append('folder', folder);

      // Simulated progress updates (since fetch doesn't provide progress)
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          const newProgress = prev + 10;
          return newProgress < 90 ? newProgress : prev;
        });
      }, 300);

      // Upload to API endpoint
      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const data = await response.json();
      
      // Call the callback with the uploaded image URL
      if (data.imageUrl) {
        onImageUploaded(data.imageUrl);
      } else {
        throw new Error('No image URL returned from server');
      }
    } catch (err) {
      // Check if the error is related to Supabase configuration
      const errorMessage = err instanceof Error ? err.message : 'Upload failed';
      if (errorMessage.includes('Supabase is not properly configured')) {
        setError(
          'Supabase storage is not configured. Please set up your Supabase credentials in the .env.local file.'
        );
        
        // For demo purposes in development, we simulate a successful upload
        if (process.env.NODE_ENV === 'development') {
          const demoImageUrl = 'https://picsum.photos/800/600';
          setPreviewUrl(demoImageUrl);
          onImageUploaded(demoImageUrl);
          console.log('DEMO MODE: Using placeholder image from Lorem Picsum');
        }
      } else {
        setError(errorMessage);
        setPreviewUrl(defaultImage); // Reset preview on error
      }
    } finally {
      setIsUploading(false);
      
      // Reset progress after a delay
      setTimeout(() => {
        setUploadProgress(0);
      }, 1000);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      await uploadFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleRemoveImage = () => {
    setPreviewUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onImageUploaded(''); // Clear the image URL
  };

  return (
    <div className={`${className}`}>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={`relative border-2 border-dashed rounded-lg p-4 transition-colors ${
          error ? 'bg-red-50 border-red-300' :
          isUploading ? 'bg-blue-50 border-blue-300' :
          'border-gray-300 hover:border-gray-400'
        }`}
      >
        {previewUrl ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-md">
            <Image
              src={previewUrl}
              alt="Preview"
              fill
              className="object-cover"
            />
            <button
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors"
              title="Remove image"
              type="button"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-gray-500">
            {error ? (
              <AlertCircle size={36} className="mb-2 text-red-500" />
            ) : (
              <Upload size={36} className="mb-2" />
            )}
            
            <p className="text-sm font-medium mb-1">
              {error ? 'Upload error' : 'Drag and drop an image here'}
            </p>
            <p className="text-xs text-gray-400 mb-4">
              {error ? 'Please try again or select a different file' : 'PNG, JPG, WEBP or GIF (max. 10MB)'}
            </p>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                error 
                  ? 'bg-red-100 hover:bg-red-200 text-red-700' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Select File
            </button>
          </div>
        )}

        {uploadProgress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
            <div
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          disabled={isUploading}
        />
      </div>

      {error && (
        <div className="mt-2 text-sm text-red-500">
          {error}
        </div>
      )}

      {isUploading && (
        <div className="mt-2 text-sm text-blue-500">
          Uploading... {uploadProgress}%
        </div>
      )}
      
      {process.env.NODE_ENV === 'development' && !supabaseConfigured() && (
        <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-md">
          <p className="text-xs text-amber-700">
            <strong>Development Mode:</strong> Supabase storage is not configured. Uploads will use placeholder images.
            Please set up Supabase credentials in <code>.env.local</code> file for actual file uploads.
          </p>
        </div>
      )}
    </div>
  );
}

// Helper function to determine if Supabase is configured
function supabaseConfigured(): boolean {
  return !!(
    typeof window !== 'undefined' &&
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}