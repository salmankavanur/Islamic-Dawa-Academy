import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Database, Video, Library, Monitor, Users, Award, Calendar, Camera, Wifi, Coffee, LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FacilityType {
  icon: JSX.Element;
  title: string;
  description: string;
  details: string[];
  image: string;
}

const facilitiesData: FacilityType[] = [
  {
    icon: <Video className="h-12 w-12 text-green-600" />,
    title: "Video & Audio Visual Studio",
    description: "State-of-the-art recording and production facilities for creating high-quality educational content and media projects.",
    details: [
      "Professional-grade cameras and recording equipment",
      "Sound-treated recording booths for crystal-clear audio",
      "Video editing workstations with industry-standard software",
      "Green screen facilities for special effects and presentations",
      "Live streaming capabilities for remote learning and events"
    ],
    image: "https://images.unsplash.com/photo-1574717024453-e40eppsp2d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    icon: <Monitor className="h-12 w-12 text-green-600" />,
    title: "Well Equipped IT Lab",
    description: "Modern computer laboratories with the latest hardware and software for technical training and digital skills development.",
    details: [
      "High-performance workstations and servers",
      "Latest programming and development software",
      "Networking lab with enterprise-grade equipment",
      "Separate clusters for programming, design, and multimedia work",
      "24/7 access for enrolled students with secure authentication"
    ],
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
  },
  {
    icon: <Library className="h-12 w-12 text-green-600" />,
    title: "Digital Library",
    description: "Extensive collection of digital resources, research materials, and online databases for academic research and study.",
    details: [
      "Access to over 50,000 digital titles covering Islamic studies and secular subjects",
      "Subscriptions to major academic journals and research databases",
      "Digital archives of historical Islamic manuscripts and texts",
      "E-readers and tablets available for student use",
      "Quiet study spaces with individual workstations"
    ],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    icon: <Calendar className="h-12 w-12 text-green-600" />,
    title: "Study Tours & Residential Camps",
    description: "Enriching educational excursions and immersive residential experiences that enhance learning beyond the classroom.",
    details: [
      "Annual international study trips to Islamic heritage sites",
      "Quarterly residential camps for intensive study and spiritual development",
      "Cultural exchange programs with international Islamic institutions",
      "Field research opportunities in various academic disciplines",
      "Community service projects for practical application of Islamic values"
    ],
    image: "https://images.unsplash.com/photo-1566897819059-db42e135fa69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    icon: <Users className="h-12 w-12 text-green-600" />,
    title: "Expert Talks",
    description: "Regular seminars and lectures by industry professionals and scholars to provide real-world insights and inspiration.",
    details: [
      "Weekly guest lectures by renowned Islamic scholars",
      "Monthly industry expert sessions from various professional fields",
      "Interactive workshops with leaders in technology and media",
      "Panel discussions on contemporary issues affecting Muslims",
      "Student-led seminars for peer learning and presentation skills development"
    ],
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    icon: <Award className="h-12 w-12 text-green-600" />,
    title: "Arts & Sports Fest",
    description: "Cultural and sporting events that promote holistic development, teamwork, and creative expression among students.",
    details: [
      "Annual Islamic arts festival showcasing calligraphy, poetry, and visual arts",
      "Intermural sports competitions in traditional and modern sports",
      "Talent development programs in performing arts and creative writing",
      "Exhibition opportunities for student artwork and creative projects",
      "Tournaments and fitness activities for physical well-being"
    ],
    image: "https://images.unsplash.com/photo-1577896851906-21fd0042ea0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    icon: <Camera className="h-12 w-12 text-green-600" />,
    title: "Media Production Studio",
    description: "Professional media production facilities for creating Islamic content and developing practical media skills.",
    details: [
      "Professional photography studio with lighting equipment",
      "Podcast recording booths with sound isolation",
      "Animation and motion graphics workstations",
      "Post-production suite with color grading capabilities",
      "Media distribution and publishing platforms for student work"
    ],
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    icon: <Wifi className="h-12 w-12 text-green-600" />,
    title: "Campus Infrastructure",
    description: "Modern, comfortable facilities designed to create an optimal learning environment for students.",
    details: [
      "High-speed campus-wide WiFi network",
      "Smart classrooms with interactive teaching technology",
      "Comfortable student accommodation with modern amenities",
      "Prayer halls and ablution facilities throughout campus",
      "Eco-friendly design with sustainable energy solutions"
    ],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80"
  },
  {
    icon: <Coffee className="h-12 w-12 text-green-600" />,
    title: "Student Common Areas",
    description: "Relaxation and social spaces designed to foster community building and student wellbeing.",
    details: [
      "Student lounge with comfortable seating and recreational activities",
      "Halal cafeteria serving nutritious meals and refreshments",
      "Outdoor gardens and seating areas for relaxation and study",
      "Group discussion spaces for collaborative projects",
      "Prayer and meditation rooms for spiritual reflection"
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

export default function FacilitiesPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Facilities</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Explore the premium facilities at Islamic Da'wa Academy designed to nurture both spiritual and academic excellence.
          </p>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Islamic Da'wa Academy, we provide state-of-the-art facilities to ensure our students receive the best possible education in both Islamic studies and modern disciplines.
            </p>
          </div>

          <div className="space-y-24">
            {facilitiesData.map((facility, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center gap-3 bg-green-50 p-3 rounded-full">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      {facility.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{facility.title}</h3>
                  </div>

                  <p className="text-lg text-gray-700">{facility.description}</p>

                  <ul className="space-y-3">
                    {facility.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience Our Facilities in Person</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We invite prospective students and their families to visit our campus and experience our world-class facilities firsthand. Schedule a campus tour today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              <Link href="/contact">Schedule a Tour</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
              <Link href="/virtual-tour">Take a Virtual Tour</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
