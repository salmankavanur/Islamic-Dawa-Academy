import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TourLocation {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
}

interface TourCategory {
  id: string;
  title: string;
  locations: TourLocation[];
}

const tourData: TourCategory[] = [
  {
    id: "academic-buildings",
    title: "Academic Buildings",
    locations: [
      {
        id: 1,
        name: "Main Academic Building",
        description: "The central hub of learning at Islamic Da'wa Academy, featuring modern classrooms, faculty offices, and administrative facilities. The building is designed with traditional Islamic architectural elements combined with contemporary functionality.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80",
        features: [
          "Smart classrooms with interactive teaching technology",
          "Faculty offices and meeting rooms",
          "Administrative services center",
          "Student support services",
          "Prayer room for daily prayers"
        ]
      },
      {
        id: 2,
        name: "Islamic Studies Center",
        description: "A dedicated facility for Islamic studies, featuring specialized classrooms for Quranic studies, Hadith sciences, Fiqh, and Arabic language. The center embodies the spiritual core of our educational philosophy.",
        image: "https://images.unsplash.com/photo-1614605803624-879b759d9d97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        features: [
          "Specialized Quran memorization halls",
          "Arabic language laboratories",
          "Islamic jurisprudence research center",
          "Traditional study circles area",
          "Historical Islamic manuscripts collection"
        ]
      },
      {
        id: 3,
        name: "Innovation & Technology Building",
        description: "Our state-of-the-art facility housing computer labs, media studios, and digital learning spaces. This building represents our commitment to combining Islamic knowledge with modern technological skills.",
        image: "https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        features: [
          "Advanced computer laboratories",
          "Audio-visual production studios",
          "Digital media learning center",
          "Web development training facilities",
          "Innovation hub for student projects"
        ]
      }
    ]
  },
  {
    id: "campus-facilities",
    title: "Campus Facilities",
    locations: [
      {
        id: 1,
        name: "Central Library",
        description: "Our comprehensive library houses extensive collections of Islamic texts, academic resources, and digital databases. The space combines traditional reading areas with modern digital access points for research and study.",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        features: [
          "Extensive collection of Islamic texts and references",
          "Academic journals and research materials",
          "Digital resource access terminals",
          "Quiet study spaces and reading rooms",
          "Research assistance services"
        ]
      },
      {
        id: 2,
        name: "Grand Mosque",
        description: "The spiritual heart of our campus, the mosque serves as a place of worship, reflection, and community gathering. The architecture blends traditional Islamic design with modern amenities for comfort and accessibility.",
        image: "https://images.unsplash.com/photo-1545419913-775e3e82c7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        features: [
          "Spacious prayer hall for congregational prayers",
          "Separate prayer areas for male and female students",
          "Wudu (ablution) facilities",
          "Islamic calligraphy and art displays",
          "Minaret with traditional design elements"
        ]
      },
      {
        id: 3,
        name: "Student Center",
        description: "A vibrant hub for student activities, dining, and recreation. The student center fosters community building and provides essential services for daily student life on campus.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        features: [
          "Halal cafeteria with diverse menu options",
          "Student lounge and recreation areas",
          "Student organization offices",
          "Counseling and wellness services",
          "Campus store for books and supplies"
        ]
      }
    ]
  },
  {
    id: "residential",
    title: "Residential Areas",
    locations: [
      {
        id: 1,
        name: "Male Student Housing",
        description: "Comfortable and secure accommodation for male students, designed to support both academic success and personal wellbeing. The residential facilities include study spaces, common areas, and necessary amenities.",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        features: [
          "Single and shared room options",
          "Communal study areas on each floor",
          "High-speed internet connectivity",
          "Laundry facilities",
          "Recreation and fitness spaces"
        ]
      },
      {
        id: 2,
        name: "Female Student Housing",
        description: "Dedicated residential facilities for female students with appropriate privacy and security measures. The housing complex offers comfortable living spaces with all necessary amenities for daily life and study.",
        image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        features: [
          "Secure access and monitoring systems",
          "Comfortable rooms with essential furnishings",
          "Designated study spaces and meeting rooms",
          "Kitchen and dining facilities",
          "Female-only recreation areas"
        ]
      },
      {
        id: 3,
        name: "Faculty Housing",
        description: "Residential area for faculty members and their families, creating a close-knit academic community. The faculty housing area is designed to provide comfortable living while maintaining proximity to campus facilities.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
        features: [
          "Family apartments with multiple bedrooms",
          "Single faculty accommodations",
          "Community garden and outdoor spaces",
          "Faculty community center",
          "Proximity to campus facilities"
        ]
      }
    ]
  },
  {
    id: "recreational",
    title: "Recreational Facilities",
    locations: [
      {
        id: 1,
        name: "Sports Complex",
        description: "Comprehensive sports facilities promoting physical wellbeing and team activities. The complex includes indoor and outdoor areas for various sports, supporting both recreational activities and competitive sports programs.",
        image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        features: [
          "Indoor gymnasium for basketball and volleyball",
          "Outdoor football and cricket field",
          "Fitness center with modern equipment",
          "Swimming pool with separate hours for male and female students",
          "Track for running and jogging"
        ]
      },
      {
        id: 2,
        name: "Gardens & Outdoor Spaces",
        description: "Beautifully landscaped gardens and outdoor areas for relaxation, reflection, and social gathering. These spaces incorporate Islamic garden design principles and provide serene environments throughout the campus.",
        image: "https://images.unsplash.com/photo-1539653963968-0414e8f22188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        features: [
          "Islamic geometric garden designs",
          "Water features and fountains",
          "Outdoor study and reading areas",
          "Walking paths throughout campus",
          "Botanical garden with labeled plant species"
        ]
      },
      {
        id: 3,
        name: "Cultural Center",
        description: "A dedicated space for cultural activities, arts, and performances. The cultural center hosts events, exhibitions, and workshops that celebrate Islamic arts and cultural diversity among our student body.",
        image: "https://images.unsplash.com/photo-1577896851906-21fd0042ea0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        features: [
          "Auditorium for lectures and performances",
          "Islamic art gallery",
          "Calligraphy workshop space",
          "Music and performance studios",
          "Exhibition areas for student work"
        ]
      }
    ]
  }
];

export default function VirtualTourPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Virtual Campus Tour</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Explore the facilities and spaces at Islamic Da'wa Academy from wherever you are. Discover the environment where our students live, learn, and grow.
          </p>
        </div>
      </section>

      {/* Tour Navigation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="academic-buildings" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <TabsTrigger value="academic-buildings" className="text-sm md:text-base">Academic Buildings</TabsTrigger>
                  <TabsTrigger value="campus-facilities" className="text-sm md:text-base">Campus Facilities</TabsTrigger>
                  <TabsTrigger value="residential" className="text-sm md:text-base">Residential Areas</TabsTrigger>
                  <TabsTrigger value="recreational" className="text-sm md:text-base">Recreational Facilities</TabsTrigger>
                </TabsList>
              </div>

              {tourData.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="space-y-16">
                    {category.locations.map((location) => (
                      <TourLocationCard key={location.id} location={location} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Interactive Map - Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Campus Map</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Explore our campus layout to get a better understanding of the facilities and their locations.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 px-4 text-center">
                  Interactive campus map coming soon! Visit our campus in person for a guided tour of our facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Tour CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience Our Campus in Person</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            While our virtual tour gives you a glimpse of our campus, nothing compares to experiencing Islamic Da'wa Academy in person. Schedule a visit to tour our facilities, meet our faculty, and learn more about our programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              <Link href="/contact">Schedule a Campus Tour</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
              <Link href="/admissions">Apply for Admission</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tour Navigation Controls */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <Link href="/gallery">Back to Gallery</Link>
            </Button>
            <Button variant="outline" className="flex items-center">
              <Link href="/contact">Contact Admissions</Link>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Tour Location Card Component
function TourLocationCard({ location }: { location: TourLocation }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-72 md:h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{location.name}</h3>
          <p className="text-gray-600 mb-6">{location.description}</p>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
            <ul className="space-y-2">
              {location.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <div className="min-w-[2px] h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
