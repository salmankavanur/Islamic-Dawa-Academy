import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              {/* Main image - using standard img tag for static export */}
              <img
                src="https://media.gettyimages.com/id/1084632164/photo/exeter-university-the-streatham-campus-exeter-devon-england-uk-the-institute-of-arab-islamic.jpg?s=612x612&w=gi&k=20&c=JKJKZ2ie2xH9LeruQO16FZL_DzxEZREDaYThaiXjzDM="
                alt="Islamic Da'wa Academy Building"
                className="w-full h-auto object-cover rounded-lg"
                width={612}
                height={612}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-64 h-24 bg-green-100 rounded-lg -z-10"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-green-50 rounded-lg -z-10"></div>
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Islamic Da'wa Academy</h2>

            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Islamic Da'wa Academy, run by Akode Islamic Centre, is a prestigious higher educational institution dedicated to providing comprehensive education that bridges Islamic knowledge and secular studies.
              </p>
              <p>
                Our academy is specifically designed for Huffaz (those who have memorized the Quran) with Doura facility and integrated dual degree programs. We offer both Islamic studies (spiritual knowledge) and secular education from UGC Approved universities.
              </p>
              <p>
                What sets us apart is our commitment to molding well-updated Islamic scholars equipped with the best level of knowledge in secular education as well. Our premium facilities and innovative programs ensure that students receive a holistic education that prepares them for success in both spiritual and worldly pursuits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button className="bg-green-700 hover:bg-green-800">
                  Learn More
                </Button>
              </Link>
              <Link href="/vision-mission">
                <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                  Our Vision & Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
