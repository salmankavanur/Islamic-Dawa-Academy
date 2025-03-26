import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

// Image data for the gallery
const galleryData = {
  campus: [
    {
      id: 1,
      title: "Main Academic Building",
      description: "The central hub for learning and academic activities at Islamic Da'wa Academy.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80"
    },
    {
      id: 2,
      title: "Campus Mosque",
      description: "Our beautiful mosque serves as a spiritual center for prayer and religious activities.",
      image: "https://images.unsplash.com/photo-1545419913-775e3e82c7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 3,
      title: "Student Housing",
      description: "Comfortable residential facilities for students from around the world.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 4,
      title: "Campus Gardens",
      description: "Peaceful outdoor spaces for relaxation, study, and reflection.",
      image: "https://images.unsplash.com/photo-1539653963968-0414e8f22188?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 5,
      title: "Administration Building",
      description: "Where our dedicated staff supports the academic and administrative needs of our community.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 6,
      title: "Campus Overview",
      description: "Aerial view of our expansive campus designed for holistic education.",
      image: "https://images.unsplash.com/photo-1592066575517-58df903152f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    }
  ],
  facilities: [
    {
      id: 1,
      title: "Modern Classrooms",
      description: "Equipped with the latest educational technology for effective learning.",
      image: "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Digital Library",
      description: "Extensive collection of digital resources for research and study.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "IT Laboratory",
      description: "State-of-the-art computer lab for technical training and development.",
      image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
    },
    {
      id: 4,
      title: "Media Production Studio",
      description: "Professional studio for creating high-quality educational content.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 5,
      title: "Conference Hall",
      description: "Spacious venue for lectures, seminars, and community events.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
    },
    {
      id: 6,
      title: "Cafeteria",
      description: "Halal dining facility serving nutritious meals for students and staff.",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ],
  activities: [
    {
      id: 1,
      title: "Quran Recitation Competition",
      description: "Annual event showcasing students' Quranic recitation skills and memorization.",
      image: "https://images.unsplash.com/photo-1609599006485-e6631bed9d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Islamic Calligraphy Workshop",
      description: "Students learning the art of traditional Islamic calligraphy.",
      image: "https://images.unsplash.com/photo-1595339419338-a9c33e6e9ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "International Cultural Day",
      description: "Celebrating the diverse cultures represented in our student body.",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    },
    {
      id: 4,
      title: "Sports Tournament",
      description: "Students participating in various sporting activities for physical wellbeing.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 5,
      title: "Community Service Project",
      description: "Students engaging in outreach and service to the local community.",
      image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 6,
      title: "Study Group Session",
      description: "Collaborative learning environment fostering academic excellence.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ],
  events: [
    {
      id: 1,
      title: "Annual Graduation Ceremony",
      description: "Celebrating the accomplishments of our graduating students.",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "International Islamic Conference",
      description: "Bringing together scholars and experts to discuss contemporary Islamic issues.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "Ramadan Iftar Gathering",
      description: "Community iftar bringing together students, faculty, and local community members.",
      image: "https://images.unsplash.com/photo-1563261438-30d812329164?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      title: "Academic Open Day",
      description: "Opportunity for prospective students and families to explore our programs and facilities.",
      image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 5,
      title: "Career Fair",
      description: "Connecting our students with potential employers and career opportunities.",
      image: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
    },
    {
      id: 6,
      title: "Alumni Reunion",
      description: "Annual gathering of past graduates to maintain the Da'wa Academy community.",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ]
};

export default function GalleryPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover life at Islamic Da'wa Academy through our collection of images showcasing our campus, facilities, activities, and events.
          </p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="campus" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="campus" className="text-sm md:text-base">Campus</TabsTrigger>
                <TabsTrigger value="facilities" className="text-sm md:text-base">Facilities</TabsTrigger>
                <TabsTrigger value="activities" className="text-sm md:text-base">Student Activities</TabsTrigger>
                <TabsTrigger value="events" className="text-sm md:text-base">Events</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="campus">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryData.campus.map((item) => (
                  <GalleryItem key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="facilities">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryData.facilities.map((item) => (
                  <GalleryItem key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activities">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryData.activities.map((item) => (
                  <GalleryItem key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryData.events.map((item) => (
                  <GalleryItem key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience Islamic Da'wa Academy</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Join us for a campus tour and experience our facilities and vibrant community life firsthand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
              <Link href="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Gallery Item Component
function GalleryItem({ item }: { item: { id: number; title: string; description: string; image: string } }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </div>
  );
}
