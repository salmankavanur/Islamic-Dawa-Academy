import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A4D2E] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Rubik']">Islamic Da'wa Academy</h3>
            <p className="text-[#F5F5F5] mb-4 font-['DM_Sans']">
              Higher Educational Institution for Huffaz with integrated dual degree studies in both Islamic studies and secular education from UGC Approved universities.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#D4A017] hover:text-[#E5B828] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#D4A017] hover:text-[#E5B828] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#D4A017] hover:text-[#E5B828] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#D4A017] hover:text-[#E5B828] transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Rubik']">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#F5F5F5] hover:text-[#D4A017] transition-colors font-['DM_Sans']">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[#F5F5F5] hover:text-[#D4A017] transition-colors font-['DM_Sans']">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-[#F5F5F5] hover:text-[#D4A017] transition-colors font-['DM_Sans']">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-[#F5F5F5] hover:text-[#D4A017] transition-colors font-['DM_Sans']">
                  Faculty
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#F5F5F5] hover:text-[#D4A017] transition-colors font-['DM_Sans']">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-[#F5F5F5] hover:text-[#D4A017] transition-colors font-['DM_Sans']">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Program Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Rubik']">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs/islamic-studies" className="text-[#F5F5F5] hover:text-[#D4A017] transition-colors font-['DM_Sans']">
                  Islamic Studies
                </Link>
              </li>
              <li>
                <Link href="/programs/quran-memorization" className="text-[#F5F5F5] hover:text-[#D4A017] transition-colors font-['DM_Sans']">
                  Quran Memorization
                </Link>
              </li>
              <li>
                <Link href="/programs/dual-degree" className="text-[#F5F5F5] hover:text-[#D4A017] transition-colors font-['DM_Sans']">
                  Dual Degree Program
                </Link>
              </li>
              <li>
                <Link href="/programs/it-training" className="text-[#F5F5F5] hover:text-[#D4A017] transition-colors font-['DM_Sans']">
                  IT Training
                </Link>
              </li>
              <li>
                <Link href="/programs/multimedia" className="text-[#F5F5F5] hover:text-[#D4A017] transition-colors font-['DM_Sans']">
                  Multimedia Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Rubik']">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-[#D4A017]" />
                <span className="text-[#F5F5F5] font-['DM_Sans']">
                  Akode Islamic Centre<br />
                  Campus Address Here<br />
                  City, State, ZIP
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#D4A017]" />
                <span className="text-[#F5F5F5] font-['DM_Sans']">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#D4A017]" />
                <span className="text-[#F5F5F5] font-['DM_Sans']">info@islamicdawaacademy.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#4A7C59] mt-12 pt-8 text-center text-[#F5F5F5] font-['DM_Sans']">
          <p>© {new Date().getFullYear()} Islamic Da'wa Academy. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Powered by{" "}
            <span className="text-[#D4A017]">Akode Islamic Centre</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;