# Islamic Da'wa Academy Admin Panel Setup

This document provides instructions on how to set up and use the admin panel for managing the Islamic Da'wa Academy website content.

## Overview

The admin panel uses:
- **MongoDB**: For storing structured content (blog posts, gallery items, etc.)
- **Supabase**: For storing media files (images)
- **Next.js API Routes**: For handling CRUD operations
- **NextAuth.js**: For authentication

## Setup Instructions

### 1. Prerequisites

- MongoDB Atlas account (or local MongoDB instance)
- Supabase account
- Node.js (v16+) 
- Bun or npm

### 2. Environment Variables

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in the required environment variables:

- **MongoDB**:
  - Create a MongoDB Atlas cluster or use a local MongoDB instance
  - Set `MONGODB_URI` with your connection string

- **Supabase**:
  - Create a new Supabase project
  - Create storage buckets: `blog-images`, `gallery-images`
  - Set public access policies for these buckets
  - Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

- **NextAuth**:
  - Generate a random string for `NEXTAUTH_SECRET` (you can use `openssl rand -base64 32`)
  - Set `NEXTAUTH_URL` to your website URL (use `http://localhost:3000` for development)

- **Admin Credentials**:
  - Set `ADMIN_EMAIL` and `ADMIN_PASSWORD` for admin login

### 3. Development Mode

Run the development server:

```bash
bun run dev
```

Access the admin panel at: http://localhost:3000/admin/login

### 4. Deployment

For deployment, you have two options:

#### Option 1: Hybrid Deployment (Public content as static, Admin as server)

This is the recommended approach. Set `EXPORT_MODE` to empty in your production environment:

```bash
EXPORT_MODE=
```

#### Option 2: Separate Admin and Public Sites

You can deploy the public site as static content and the admin panel as a separate server application.

For public site:
```bash
EXPORT_MODE=true
```

For admin site:
```bash
EXPORT_MODE=
```

## Usage Guide

### 1. Admin Login

Access the admin panel at `/admin/login` and use the credentials set in your environment variables.

### 2. Dashboard

The dashboard gives you an overview of your content:
- Total blog posts
- Total gallery items
- Recent blog posts

### 3. Blog Management

Access blog management at `/admin/blog`:
- View all blog posts
- Create new blog posts
- Edit existing blog posts
- Delete blog posts
- Toggle featured status

### 4. Gallery Management

Access gallery management at `/admin/gallery`:
- View all gallery items
- Upload new images
- Edit image metadata
- Delete images
- Rearrange images

### 5. Media Upload

When creating blog posts or gallery items:
1. Click the "Upload Image" button
2. Select an image from your computer
3. The image will be uploaded to Supabase storage
4. The URL will be automatically inserted

## Database Schema

### Blog Posts Collection

- `title`: String
- `slug`: String (unique)
- `content`: String (HTML)
- `excerpt`: String
- `image`: String (URL to Supabase)
- `category`: String
- `tags`: Array of Strings
- `author`: String
- `authorTitle`: String
- `authorBio`: String
- `authorImage`: String (optional, URL to Supabase)
- `date`: String
- `featured`: Boolean
- `published`: Boolean
- `createdAt`: Date
- `updatedAt`: Date

### Gallery Items Collection

- `title`: String
- `description`: String
- `imageUrl`: String (URL to Supabase)
- `category`: String
- `tags`: Array of Strings
- `featured`: Boolean
- `order`: Number
- `createdAt`: Date
- `updatedAt`: Date

## Security Considerations

- The admin panel is protected by authentication
- API routes are also protected by authentication
- Supabase storage is configured with specific access policies
- Use strong passwords for admin access
- Regularly rotate your admin credentials

## Troubleshooting

**Issue**: Cannot connect to MongoDB
**Solution**: Verify your connection string and network settings

**Issue**: Images not uploading to Supabase
**Solution**: Check your Supabase credentials and storage bucket permissions

**Issue**: Admin login not working
**Solution**: Verify your environment variables for admin credentials

## Support

For additional support, please contact the development team.