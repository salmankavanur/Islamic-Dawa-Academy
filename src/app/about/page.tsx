import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "About Us | Islamic Da'wa Academy",
  description: "Learn about the Islamic Da'wa Academy, our history, mission, vision, and commitment to providing quality Islamic and secular education.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-green-900 text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">About Islamic Da'wa Academy</h1>
              <p className="text-xl text-green-100">
                A premier educational institution dedicated to nurturing spiritually grounded and academically excellent individuals who can serve as bridges between Islamic tradition and modern knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Islamic Da'wa Academy was established in [founding year] by Akode Islamic Centre with a vision to create an educational institution that bridges the gap between traditional Islamic knowledge and modern secular education.
                  </p>
                  <p>
                    Founded by a group of dedicated Islamic scholars and educators who recognized the need for a holistic educational approach, our academy has grown from humble beginnings into a respected institution known for its academic excellence and spiritual depth.
                  </p>
                  <p>
                    Over the years, we have expanded our facilities, programs, and faculty to meet the evolving needs of our students. Today, we pride ourselves on offering state-of-the-art resources including digital libraries, media production studios, and advanced IT labs that prepare our students for success in both religious and secular fields.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://cdn.ca.emap.com/wp-content/uploads/sites/12/2017/03/qfis_002_337130685-1024x684.jpg"
                    alt="Islamic Da'wa Academy Campus"
                    width={1024}
                    height={684}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-24 bg-green-100 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <p className="text-lg text-gray-600">
                We are guided by clear principles and aspirations that shape everything we do at Islamic Da'wa Academy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  To provide a comprehensive educational environment that nurtures spiritual growth alongside academic excellence, preparing students to be knowledgeable Muslims and responsible global citizens.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                    <span>To offer high-quality education in both Islamic studies and secular disciplines</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                    <span>To foster an environment of spiritual growth and moral development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                    <span>To equip students with practical skills relevant to contemporary society</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                    <span>To promote research and innovation in Islamic thought and practice</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-4">
                  To be a leading educational institution that produces well-rounded scholars who excel in both Islamic knowledge and contemporary disciplines, serving as bridges between tradition and modernity.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                    <span>To become a global center of excellence in integrated Islamic education</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                    <span>To pioneer innovative approaches to Islamic education that address contemporary challenges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                    <span>To develop leaders who can guide the Muslim community while engaging positively with the wider world</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                    <span>To establish a model of education that can be replicated in other Muslim communities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-green-700">🌟</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, maintaining high standards in both Islamic and secular education.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-green-700">🤲</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Faith</h3>
                <p className="text-gray-600">
                  We place Islamic values and principles at the core of our educational philosophy and institutional culture.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-green-700">🔄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integration</h3>
                <p className="text-gray-600">
                  We integrate traditional Islamic knowledge with modern disciplines to provide a holistic education.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-green-700">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Perspective</h3>
                <p className="text-gray-600">
                  We prepare students to be global citizens who can engage positively with diverse cultures and communities.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-green-700">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Critical Thinking</h3>
                <p className="text-gray-600">
                  We encourage analytical thinking and intellectual curiosity within the framework of Islamic principles.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-green-700">❤️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Service</h3>
                <p className="text-gray-600">
                  We instill a commitment to serving the Muslim community and contributing positively to society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Educational Community</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Discover how Islamic Da'wa Academy can provide you with a transformative educational experience that prepares you for success in both this world and the next.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
                <Link href="/programs">Explore Our Programs</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
