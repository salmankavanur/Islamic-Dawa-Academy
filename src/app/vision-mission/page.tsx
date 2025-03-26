import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Target, Award, Users, Lightbulb, Globe, GraduationCap, Heart } from "lucide-react";

export default function VisionMissionPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Vision & Mission</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Guiding principles that shape our approach to education and our commitment to nurturing future Islamic scholars.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-green-100 p-4 rounded-full mr-6">
                <Lightbulb className="h-10 w-10 text-green-700" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              To become the premier Islamic educational institution that produces well-rounded Muslim scholars who are firmly grounded in traditional Islamic sciences while being fully equipped with modern knowledge and skills to address contemporary challenges.
            </p>

            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-700 mb-12">
              <p className="italic text-green-800 text-lg">
                "We envision a world where Islamic knowledge and modern education harmoniously coexist, empowering Muslims to excel in both spiritual and worldly pursuits."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="bg-green-100 p-4 rounded-full mr-6">
                <Target className="h-10 w-10 text-green-700" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>

            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Islamic Da'wa Academy is committed to providing a comprehensive educational environment that:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Integrates Knowledge</h3>
                </div>
                <p className="text-gray-600">
                  Seamlessly combines traditional Islamic sciences with contemporary academic disciplines to provide a holistic education.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Fosters Excellence</h3>
                </div>
                <p className="text-gray-600">
                  Nurtures academic excellence and spiritual growth, encouraging students to achieve their full potential in all areas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Globe className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Cultivates Leadership</h3>
                </div>
                <p className="text-gray-600">
                  Develops future leaders who can effectively address contemporary challenges while upholding Islamic principles.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Serves Community</h3>
                </div>
                <p className="text-gray-600">
                  Prepares students to serve their communities through knowledge, compassion, and practical skills in various fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-12 justify-center">
              <div className="bg-green-100 p-4 rounded-full mr-6">
                <Heart className="h-10 w-10 text-green-700" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Striving for the highest standards in all academic and spiritual endeavors.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Knowledge</h3>
                <p className="text-gray-600">
                  Valuing both revealed and acquired knowledge as paths to understanding truth.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
                <p className="text-gray-600">
                  Fostering a supportive environment of mutual respect and collaboration.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Global Perspective</h3>
                <p className="text-gray-600">
                  Embracing diverse perspectives while maintaining Islamic principles.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Encouraging creative solutions to contemporary challenges within Islamic frameworks.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  Upholding ethical principles and moral conduct in all interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Strategic Goals</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Academic Excellence</h3>
                <p className="text-gray-600">
                  To establish and maintain high academic standards in both Islamic and secular education, ensuring our graduates are well-prepared for further study or professional careers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Spiritual Development</h3>
                <p className="text-gray-600">
                  To nurture the spiritual growth of each student, fostering a deep connection with Islamic teachings and practices that guide their personal and professional lives.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Research & Scholarship</h3>
                <p className="text-gray-600">
                  To contribute to the advancement of knowledge through rigorous research and scholarly publications that address contemporary issues from an Islamic perspective.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community Engagement</h3>
                <p className="text-gray-600">
                  To actively participate in and serve the broader community through educational programs, social services, and interfaith dialogue.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Global Partnership</h3>
                <p className="text-gray-600">
                  To establish collaborative relationships with Islamic and secular educational institutions worldwide, facilitating the exchange of knowledge and resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Educational Journey</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Become part of an institution dedicated to nurturing both spiritual growth and academic excellence. Explore our programs and discover how Islamic Da'wa Academy can help you achieve your educational goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              <Link href="/programs">View Our Programs</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
