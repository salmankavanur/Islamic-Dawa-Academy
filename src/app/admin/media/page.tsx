"use client";

import { useState } from 'react';
import MediaUploader from '@/components/admin/MediaUploader';
import { STORAGE_BUCKETS } from '@/lib/supabase';

export default function MediaManagementPage() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'blog'>('gallery');
  const [blogImageUrl, setBlogImageUrl] = useState<string>('');
  const [galleryImageUrl, setGalleryImageUrl] = useState<string>('');
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Media Management</h1>
      
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b">
          <div className="flex">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`py-3 px-6 font-medium border-b-2 transition-colors ${
                activeTab === 'gallery' 
                  ? 'border-green-600 text-green-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Gallery Images
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`py-3 px-6 font-medium border-b-2 transition-colors ${
                activeTab === 'blog' 
                  ? 'border-green-600 text-green-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Blog Images
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {activeTab === 'gallery' && (
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Upload Gallery Image</h2>
              <p className="text-gray-500 text-sm mb-4">
                Upload images for the gallery section. These images will be available for use in the gallery management page.
              </p>
              
              <MediaUploader 
                onImageUploaded={setGalleryImageUrl}
                bucket={STORAGE_BUCKETS.GALLERY_IMAGES}
                className="max-w-xl"
              />
              
              {galleryImageUrl && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-1">Image URL:</h3>
                  <div className="flex">
                    <input
                      type="text"
                      value={galleryImageUrl}
                      readOnly
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-sm"
                    />
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(galleryImageUrl);
                        alert('Image URL copied to clipboard!');
                      }}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-r-md text-sm font-medium transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'blog' && (
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Upload Blog Image</h2>
              <p className="text-gray-500 text-sm mb-4">
                Upload images for blog posts. These images will be available for use as featured images or within blog content.
              </p>
              
              <MediaUploader 
                onImageUploaded={setBlogImageUrl}
                bucket={STORAGE_BUCKETS.BLOG_IMAGES}
                className="max-w-xl"
              />
              
              {blogImageUrl && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-1">Image URL:</h3>
                  <div className="flex">
                    <input
                      type="text"
                      value={blogImageUrl}
                      readOnly
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-sm"
                    />
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(blogImageUrl);
                        alert('Image URL copied to clipboard!');
                      }}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-r-md text-sm font-medium transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                  
                  <div className="mt-2">
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Markdown:</h3>
                    <div className="flex">
                      <input
                        type="text"
                        value={`![Image](${blogImageUrl})`}
                        readOnly
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-sm"
                      />
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(`![Image](${blogImageUrl})`);
                          alert('Markdown copied to clipboard!');
                        }}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-r-md text-sm font-medium transition-colors"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <h3 className="text-sm font-medium text-gray-700 mb-1">HTML:</h3>
                    <div className="flex">
                      <input
                        type="text"
                        value={`<img src="${blogImageUrl}" alt="Image" />`}
                        readOnly
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-sm"
                      />
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(`<img src="${blogImageUrl}" alt="Image" />`);
                          alert('HTML copied to clipboard!');
                        }}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-r-md text-sm font-medium transition-colors"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          <div className="border-t pt-6 mt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Usage Instructions</h2>
            {activeTab === 'gallery' && (
              <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
                <li>Upload an image using the uploader above.</li>
                <li>Once uploaded, copy the image URL.</li>
                <li>Go to the Gallery management page and create a new gallery item.</li>
                <li>Paste the image URL in the "Image URL" field.</li>
              </ol>
            )}
            
            {activeTab === 'blog' && (
              <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
                <li>Upload an image using the uploader above.</li>
                <li>Once uploaded, copy the image URL, Markdown, or HTML snippet.</li>
                <li>Go to the Blog management page and create or edit a blog post.</li>
                <li>
                  For featured images, paste the image URL in the "Featured Image" field.
                  For inline images, paste the Markdown or HTML snippet in the content editor.
                </li>
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}