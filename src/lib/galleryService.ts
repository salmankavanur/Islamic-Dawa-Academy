import connectToDatabase from './mongodb';
import GalleryItem from '@/models/GalleryItem';

// Define the IGalleryItem interface if not already defined
export interface IGalleryItem {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

// Type for dummy gallery items
interface DummyGalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  featured: boolean;
  order: number;
}

// Fallback dummy data for gallery items
const dummyGalleryItems: DummyGalleryItem[] = [
  {
    id: '1',
    title: 'Islamic Da\'wa Academy Main Building',
    description: 'The main educational building featuring modern Islamic architecture',
    imageUrl: 'https://media.gettyimages.com/id/1084632164/photo/exeter-university-the-streatham-campus-exeter-devon-england-uk-the-institute-of-arab-islamic.jpg?s=612x612&w=gi&k=20&c=JKJKZ2ie2xH9LeruQO16FZL_DzxEZREDaYThaiXjzDM=',
    category: 'Campus',
    tags: ['Architecture', 'Campus'],
    featured: true,
    order: 1
  },
  {
    id: '2',
    title: 'Student Library',
    description: 'Our extensive library contains thousands of Islamic and academic texts',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Facilities',
    tags: ['Library', 'Learning'],
    featured: true,
    order: 2
  },
  {
    id: '3',
    title: 'Prayer Hall',
    description: 'The central prayer hall where students gather for daily prayers',
    imageUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Campus',
    tags: ['Prayer', 'Worship'],
    featured: true,
    order: 3
  },
  {
    id: '4',
    title: 'Computer Lab',
    description: 'Modern IT facilities equipped with the latest technology',
    imageUrl: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Facilities',
    tags: ['Technology', 'Learning'],
    featured: false,
    order: 4
  },
  {
    id: '5',
    title: 'Student Dormitory',
    description: 'Comfortable living spaces for residential students',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Accommodation',
    tags: ['Dormitory', 'Residential'],
    featured: false,
    order: 5
  },
  {
    id: '6',
    title: 'Campus Garden',
    description: 'Beautiful garden area for relaxation and reflection',
    imageUrl: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Campus',
    tags: ['Garden', 'Outdoors'],
    featured: false,
    order: 6
  },
  {
    id: '7',
    title: 'Auditorium',
    description: 'Large auditorium for lectures, events and conferences',
    imageUrl: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fEVufDB8fHx8fA%3D%3D',
    category: 'Facilities',
    tags: ['Events', 'Lectures'],
    featured: false,
    order: 7
  },
  {
    id: '8',
    title: 'Graduation Ceremony',
    description: 'Students celebrating at the annual graduation ceremony',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Events',
    tags: ['Graduation', 'Ceremony'],
    featured: true,
    order: 8
  },
  {
    id: '9',
    title: 'Outdoor Study Area',
    description: 'Peaceful area for students to study outdoors',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Campus',
    tags: ['Study', 'Outdoors'],
    featured: false,
    order: 9
  },
  {
    id: '10',
    title: 'Media Production Studio',
    description: 'Professional studio for creating Islamic educational content',
    imageUrl: 'https://images.unsplash.com/photo-1598815272841-ed9f9ee51505?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Facilities',
    tags: ['Media', 'Production'],
    featured: false,
    order: 10
  },
  {
    id: '11',
    title: 'Islamic Art Exhibition',
    description: 'An exhibition showcasing Islamic calligraphy and art',
    imageUrl: 'https://images.unsplash.com/photo-1547995886-6dc09384c6e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Events',
    tags: ['Art', 'Exhibition', 'Culture'],
    featured: false,
    order: 11
  },
  {
    id: '12',
    title: 'Community Iftar',
    description: 'Students and faculty breaking fast together during Ramadan',
    imageUrl: 'https://images.unsplash.com/photo-1563890304779-f95d8629189e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Events',
    tags: ['Ramadan', 'Community'],
    featured: false,
    order: 12
  }
];

/**
 * Convert dummy gallery item to proper IGalleryItem model
 */
const convertToGalleryItemModel = (item: DummyGalleryItem): IGalleryItem => ({
  _id: item.id,
  title: item.title,
  description: item.description,
  imageUrl: item.imageUrl,
  category: item.category,
  tags: item.tags,
  featured: item.featured,
  order: item.order,
  createdAt: new Date(),
  updatedAt: new Date()
});

/**
 * Fetches all gallery items from the database
 * Returns dummy data if no items are found or an error occurs
 */
export async function getAllGalleryItems(): Promise<IGalleryItem[]> {
  try {
    await connectToDatabase();

    const items = await GalleryItem.find()
        .sort({ order: 1 })
        .lean() as unknown as IGalleryItem[];

    if (items?.length > 0) {
      return items;
    }

    return dummyGalleryItems.map(convertToGalleryItemModel);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    return dummyGalleryItems.map(convertToGalleryItemModel);
  }
}

/**
 * Fetches featured gallery items
 * Returns dummy data if no items are found or an error occurs
 */
export async function getFeaturedGalleryItems(): Promise<IGalleryItem[]> {
  try {
    await connectToDatabase();

    const items = await GalleryItem.find({ featured: true })
        .sort({ order: 1 })
        .lean() as unknown as IGalleryItem[];

    if (items?.length > 0) {
      return items;
    }

    const dummyFeaturedItems = dummyGalleryItems.filter(item => item.featured);
    return dummyFeaturedItems.map(convertToGalleryItemModel);
  } catch (error) {
    console.error('Error fetching featured gallery items:', error);
    const dummyFeaturedItems = dummyGalleryItems.filter(item => item.featured);
    return dummyFeaturedItems.map(convertToGalleryItemModel);
  }
}

/**
 * Fetches gallery items by category
 * Returns dummy data if no items are found or an error occurs
 */
export async function getGalleryItemsByCategory(category: string): Promise<IGalleryItem[]> {
  try {
    await connectToDatabase();

    const items = await GalleryItem.find({ category })
        .sort({ order: 1 })
        .lean() as unknown as IGalleryItem[];

    if (items?.length > 0) {
      return items;
    }

    const dummyItemsByCategory = dummyGalleryItems.filter(
      item => item.category.toLowerCase() === category.toLowerCase()
    );
    return dummyItemsByCategory.map(convertToGalleryItemModel);
  } catch (error) {
    console.error(`Error fetching gallery items for category "${category}":`, error);
    const dummyItemsByCategory = dummyGalleryItems.filter(
      item => item.category.toLowerCase() === category.toLowerCase()
    );
    return dummyItemsByCategory.map(convertToGalleryItemModel);
  }
}

/**
 * Gets all gallery categories from the database
 * Returns dummy categories if no items are found or an error occurs
 */
export async function getGalleryCategories(): Promise<string[]> {
  try {
    await connectToDatabase();

    // Type for aggregation result
    interface AggregationResult {
      _id: string;
    }

    const categoriesResult = await GalleryItem.aggregate<AggregationResult>([
      { $group: { _id: "$category" } },
      { $sort: { _id: 1 } }
    ]);

    const categories = categoriesResult.map(result => result._id);

    if (categories?.length > 0) {
      return categories;
    }

    const dummyCategories = [...new Set(dummyGalleryItems.map(item => item.category))];
    return dummyCategories.sort();
  } catch (error) {
    console.error('Error fetching gallery categories:', error);
    const dummyCategories = [...new Set(dummyGalleryItems.map(item => item.category))];
    return dummyCategories.sort();
  }
}