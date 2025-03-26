"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const linkVariants = {
    hover: { x: 5, transition: { duration: 0.2 } },
  };

  const socialVariants = {
    hover: { y: -3, transition: { duration: 0.3 } },
  };

  return (
    <footer className="bg-gradient-to-b from-[#1A4D2E] to-[#13391F] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#D4A017] bg-opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 rounded-full bg-[#D4A017] bg-opacity-20"></div>
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: "url('/patterns/arabesque.png')",
            backgroundSize: "300px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* About Section */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
            <h3 className="text-xl font-bold mb-4 font-[var(--font-rubik)] flex items-center">
              <span className="w-8 h-8 mr-2">
                <Image src="/images/logo.png" alt="Islamic Da'wa Academy Logo" width={32} height={32} className="object-contain" />
              </span>
              Islamic Da'wa Academy
            </h3>
            <div className="w-16 h-1 bg-[#D4A017] rounded-full mb-4"></div>
            <p className="text-[#F5F5F5] mb-4 font-[var(--font-dm-sans)] text-sm leading-relaxed">
              Higher Educational Institution for Huffaz with integrated dual degree studies in both Islamic studies and secular education from UGC Approved universities.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <Facebook className="h-4 w-4" />, url: "#", label: "Facebook" },
                { icon: <Instagram className="h-4 w-4" />, url: "#", label: "Instagram" },
                { icon: <Twitter className="h-4 w-4" />, url: "#", label: "Twitter" },
                { icon: <Youtube className="h-4 w-4" />, url: "#", label: "Youtube" },
              ].map((social, index) => (
                <motion.div key={index} variants={socialVariants} whileHover="hover">
                  <Link
                    href={social.url}
                    className="bg-[#D4A017]/20 hover:bg-[#D4A017] text-[#D4A017] hover:text-white w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }}>
            <h3 className="text-xl font-bold mb-4 font-[var(--font-rubik)]">Quick Links</h3>
            <div className="w-16 h-1 bg-[#D4A017] rounded-full mb-4"></div>
            <ul className="space-y-3">
              {[
                { name: "About Us", url: "/about" },
                { name: "Programs", url: "/programs" },
                { name: "Facilities", url: "/facilities" },
                { name: "Faculty", url: "/faculty" },
                { name: "Gallery", url: "/gallery" },
                { name: "Admissions", url: "/admissions" },
              ].map((link, index) => (
                <motion.li key={index} variants={linkVariants} whileHover="hover">
                  <Link href={link.url} className="text-[#F5F5F5] hover:text-[#D4A017] transition-colors font-[var(--font-dm-sans)] flex items-center text-sm">
                    <ArrowRight className="h-3 w-3 mr-2 text-[#D4A017]" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Program Links */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } } }}>
            <h3 className="text-xl font-bold mb-4 font-[var(--font-rubik)]">Programs</h3>
            <div className="w-16 h-1 bg-[#D4A017] rounded-full mb-4"></div>
            <ul className="space-y-3">
              {[
                { name: "Islamic Studies", url: "/programs/islamic-studies" },
                { name: "Quran Memorization", url: "/programs/quran-memorization" },
                { name: "Dual Degree Program", url: "/programs/dual-degree" },
                { name: "IT Training", url: "/programs/it-training" },
                { name: "Multimedia Production", url: "/programs/multimedia" },
              ].map((program, index) => (
                <motion.li key={index} variants={linkVariants} whileHover="hover">
                  <Link href={program.url} className="text-[#F5F5F5] hover:text-[#D4A017] transition-colors font-[var(--font-dm-sans)] flex items-center text-sm">
                    <ArrowRight className="h-3 w-3 mr-2 text-[#D4A017]" />
                    {program.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } } }}>
            <h3 className="text-xl font-bold mb-4 font-[var(--font-rubik)]">Contact Us</h3>
            <div className="w-16 h-1 bg-[#D4A017] rounded-full mb-4"></div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[#D4A017]/20 p-2 rounded-md mr-3 mt-0.5">
                  <MapPin className="h-5 w-5 text-[#D4A017]" />
                </div>
                <span className="text-[#F5F5F5] font-[var(--font-dm-sans)] text-sm">
                  Akode Islamic Centre
                  <br />
                  Campus Address Here
                  <br />
                  City, State, ZIP
                </span>
              </li>
              <li className="flex items-center">
                <div className="bg-[#D4A017]/20 p-2 rounded-md mr-3">
                  <Phone className="h-5 w-5 text-[#D4A017]" />
                </div>
                <span className="text-[#F5F5F5] font-[var(--font-dm-sans)] text-sm">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <div className="bg-[#D4A017]/20 p-2 rounded-md mr-3">
                  <Mail className="h-5 w-5 text-[#D4A017]" />
                </div>
                <span className="text-[#F5F5F5] font-[var(--font-dm-sans)] text-sm">info@islamicdawaacademy.org</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="pt-8 border-t border-[#4A7C59]/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#F5F5F5] font-[var(--font-dm-sans)] text-sm">
              © {new Date().getFullYear()} Islamic Da'wa Academy. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-[#D4A017] transition-colors font-[var(--font-dm-sans)]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#D4A017] transition-colors font-[var(--font-dm-sans)]">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-[#D4A017] transition-colors font-[var(--font-dm-sans)]">
                Sitemap
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-[#D4A017] font-[var(--font-dm-sans)]">
            Powered by <span className="font-semibold">Akode Islamic Centre</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;