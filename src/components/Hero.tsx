"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-r from-[#1A4D2E] to-[#4A7C59] flex items-center overflow-hidden">
      {/* Islamic Pattern Overlay with subtle animation */}
      <div
        className="absolute inset-0 opacity-15 bg-repeat animate-subtle-parallax"
        style={{
          backgroundImage: "url('/patterns/arabesque.png')", // Ensure this exists in public/patterns/
          backgroundSize: "400px",
        }}
      ></div>

      {/* Animated geometric shape */}
      <div className="absolute right-0 top-0 opacity-20 pointer-events-none hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <svg width="700" height="700" viewBox="0 0 700 700">
            <polygon points="350,75 600,350 350,625 100,350" fill="url(#grad1)" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#D4A017", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#1A4D2E", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Calligraphy circle */}
      <div className="absolute left-0 bottom-0 opacity-20 pointer-events-none hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          <svg width="400" height="400" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="180" fill="none" stroke="#D4A017" strokeWidth="2" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="max-w-3xl md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-[var(--font-rubik)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nurturing <span className="text-[#D4A017]">Spiritual</span> & Academic Excellence
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#F5F5F5] mb-8 leading-relaxed font-[var(--font-dm-sans)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Islamic Da'wa Academy provides a unique educational environment where Huffaz can pursue dual degrees in Islamic studies and secular education from UGC approved universities.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-[#D4A017] text-[#2D2D2D] hover:bg-[#E5B828] transition-all duration-300 rounded-lg font-[var(--font-dm-sans)] relative overflow-hidden group"
              aria-label="Explore our programs"
            >
              <span className="relative z-10">
                <Link href="/programs">Explore Programs</Link>
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-white border-[#D4A017] hover:bg-[#4A7C59] hover:text-white transition-all duration-300 rounded-lg font-[var(--font-dm-sans)] relative overflow-hidden group"
              aria-label="Apply now for admission"
            >
              <span className="relative z-10">
                <Link href="/admissions">Apply Now</Link>
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative right-side element */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-xs md:max-w-md aspect-square">
            <div className="absolute inset-0 rounded-full bg-[#1A4D2E] opacity-20"></div>
            <div className="absolute inset-4 rounded-full bg-[#D4A017] opacity-10"></div>
            <div className="absolute inset-8 rounded-full bg-white opacity-5 flex items-center justify-center">
              <div className="font-[var(--font-amiri)] text-5xl md:text-6xl text-white opacity-80">
                اقرأ
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        role="presentation"
      >
        <span className="text-white text-sm mb-2 font-[var(--font-dm-sans)]">Scroll</span>
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;