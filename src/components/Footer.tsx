import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Islamic Da'wa Academy</h3>
            <p className="text-gray-300 mb-4">
              Higher Educational Institution for Huffaz with integrated dual degree studies in both Islamic studies and secular education from UGC Approved universities.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-green-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-gray-300 hover:text-white transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-gray-300 hover:text-white transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-300 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Program Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs/islamic-studies" className="text-gray-300 hover:text-white transition-colors">
                  Islamic Studies
                </Link>
              </li>
              <li>
                <Link href="/programs/quran-memorization" className="text-gray-300 hover:text-white transition-colors">
                  Quran Memorization
                </Link>
              </li>
              <li>
                <Link href="/programs/dual-degree" className="text-gray-300 hover:text-white transition-colors">
                  Dual Degree Program
                </Link>
              </li>
              <li>
                <Link href="/programs/it-training" className="text-gray-300 hover:text-white transition-colors">
                  IT Training
                </Link>
              </li>
              <li>
                <Link href="/programs/multimedia" className="text-gray-300 hover:text-white transition-colors">
                  Multimedia Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-green-400" />
                <span className="text-gray-300">
                  Akode Islamic Centre<br />
                  Campus Address Here<br />
                  City, State, ZIP
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-400" />
                <span className="text-gray-300">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-400" />
                <span className="text-gray-300">info@islamicdawaacademy.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Islamic Da'wa Academy. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Powered by{" "}
            <span className="text-green-400">Akode Islamic Centre</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
