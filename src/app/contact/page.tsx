import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Islamic Da'wa Academy",
  description: "Get in touch with Islamic Da'wa Academy. We're here to answer your questions about admission, programs, and more.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <div className="bg-green-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              We're here to answer any questions you have about Islamic Da'wa Academy. Reach out to us and we'll respond as soon as we can.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                      <Input
                        type="text"
                        id="firstName"
                        placeholder="Your first name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                      <Input
                        type="text"
                        id="lastName"
                        placeholder="Your last name"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="Your phone number"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                    <Input
                      type="text"
                      id="subject"
                      placeholder="What is this regarding?"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
                <div className="bg-green-50 p-8 rounded-lg shadow-sm">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-green-700 mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                        <p className="text-gray-600">
                          Akode Islamic Centre<br />
                          123 Education Street<br />
                          City, State 12345<br />
                          Country
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-green-700 mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">+1 (123) 456-7890</p>
                        <p className="text-gray-600">+1 (987) 654-3210</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-green-700 mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">info@islamicdawaacademy.org</p>
                        <p className="text-gray-600">admissions@islamicdawaacademy.org</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-green-700 mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Map will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
