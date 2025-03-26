import { Database, Video, Library, Monitor, Users, Award, Calendar } from "lucide-react";

const featuresData = [
  {
    icon: <Video className="h-10 w-10 text-green-600" />,
    title: "Video & Audio Visual Studio",
    description: "State-of-the-art recording and production facilities for creating high-quality educational content and media projects."
  },
  {
    icon: <Monitor className="h-10 w-10 text-green-600" />,
    title: "Well Equipped IT Lab",
    description: "Modern computer laboratories with the latest hardware and software for technical training and digital skills development."
  },
  {
    icon: <Library className="h-10 w-10 text-green-600" />,
    title: "Digital Library",
    description: "Extensive collection of digital resources, research materials, and online databases for academic research and study."
  },
  {
    icon: <Calendar className="h-10 w-10 text-green-600" />,
    title: "Study Tours & Residential Camps",
    description: "Enriching educational excursions and immersive residential experiences that enhance learning beyond the classroom."
  },
  {
    icon: <Users className="h-10 w-10 text-green-600" />,
    title: "Expert Talks",
    description: "Regular seminars and lectures by industry professionals and scholars to provide real-world insights and inspiration."
  },
  {
    icon: <Award className="h-10 w-10 text-green-600" />,
    title: "Arts & Sports Fest",
    description: "Cultural and sporting events that promote holistic development, teamwork, and creative expression among students."
  },
  {
    icon: <Database className="h-10 w-10 text-green-600" />,
    title: "Web Design & Development",
    description: "Practical training in web technologies, teaching students to create and maintain modern, responsive websites."
  },
  {
    icon: <Video className="h-10 w-10 text-green-600" />,
    title: "Live Broadcasting & Streaming",
    description: "Hands-on experience with live event production, streaming technologies, and digital content distribution."
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Facilities & Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our academy offers exceptional facilities and programs that help mold well-updated Islamic scholars with comprehensive knowledge in both spiritual and secular domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-green-50 p-3 rounded-full mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
