import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const programsData = [
  {
    title: "Islamic Studies",
    description: "Comprehensive curriculum covering Quranic studies, Hadith, Fiqh, Islamic history, and Arabic language.",
    features: ["Quran Interpretation", "Hadith Sciences", "Islamic Jurisprudence", "Arabic Language", "Islamic History"],
    icon: "📚",
    link: "/programs/islamic-studies"
  },
  {
    title: "Quran Memorization",
    description: "Structured program for Hifz-ul-Quran with proper Tajweed and understanding of Quranic sciences.",
    features: ["Complete Memorization", "Tajweed Rules", "Qirat Techniques", "Revision Methods", "Tafsir Basics"],
    icon: "🕋",
    link: "/programs/quran-memorization"
  },
  {
    title: "Dual Degree Program",
    description: "Integrated courses that combine Islamic education with accredited secular degrees from UGC approved universities.",
    features: ["Bachelor's Degrees", "Master's Programs", "Diploma Courses", "Professional Certifications", "Flexible Schedule"],
    icon: "🎓",
    link: "/programs/dual-degree"
  },
  {
    title: "Media & Technology",
    description: "Cutting-edge training in digital media, web development, and multimedia production for modern Islamic scholars.",
    features: ["Web Development", "Video Production", "Graphic Design", "Live Broadcasting", "Digital Marketing"],
    icon: "🖥️",
    link: "/programs/media-technology"
  }
];

const Programs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Academic Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to nurture both spiritual knowledge and secular education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programsData.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <div className="text-4xl mb-4">{program.icon}</div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription className="text-gray-600">{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-green-700 text-green-700 hover:bg-green-50 flex items-center justify-center">
                  <Link href={program.link} className="flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-green-700 hover:bg-green-800">
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
