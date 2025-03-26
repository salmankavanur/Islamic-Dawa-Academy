"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#1A4D2E] to-[#4A7C59] flex items-center overflow-hidden">
      {/* Animated background with multiple layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Islamic Pattern Overlay with parallax effect */}
        <motion.div
          className="absolute inset-0 opacity-15 bg-repeat"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 4, ease: "easeOut" }}
          style={{
            backgroundImage: "url('/patterns/arabesque.png')",
            backgroundSize: "400px",
          }}
        ></motion.div>
        
        {/* Light rays effect */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-[#D4A017] opacity-5"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#D4A017]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0.1, scale: 0 }}
              animate={{ 
                opacity: [0.1, 0.4, 0.1], 
                scale: [0, 1, 0],
                y: [0, -Math.random() * 100],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute right-0 top-0 opacity-20 pointer-events-none hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 0.2, scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
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

      {/* Calligraphy circle with animation */}
      <div className="absolute left-0 bottom-0 opacity-20 pointer-events-none hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          <motion.svg 
            width="400" 
            height="400" 
            viewBox="0 0 400 400"
            animate={{ rotate: 360 }}
            transition={{ duration: 180, ease: "linear", repeat: Infinity }}
          >
            <circle cx="200" cy="200" r="180" fill="none" stroke="#D4A017" strokeWidth="2" />
            <circle cx="200" cy="200" r="160" fill="none" stroke="#D4A017" strokeWidth="1" strokeDasharray="5,5" />
          </motion.svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="max-w-3xl md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-4 inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <span className="text-[#D4A017] font-medium">Islamic Education Excellence</span>
          </motion.div>

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
              <motion.span 
                className="relative z-10"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link href="/programs" className="flex items-center">
                  Explore Programs
                  <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Button>

            <Button
  size="lg"
  variant="outline"
  className="text-white border-white hover:bg-white/10 hover:text-white transition-all duration-300 rounded-lg font-[var(--font-dm-sans)] relative overflow-hidden group"
  aria-label="Apply now for admission"
>
  <motion.span 
    className="relative z-10"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 400 }}
  >
    <Link href="/admissions" className="flex items-center">
      <span className="text-black group-hover:text-white transition-colors duration-300">Apply Now</span>
      <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </Link>
  </motion.span>
  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
</Button>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((num) => (
                <div key={num} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <img
                    src={`https://randomuser.me/api/portraits/${num % 2 === 0 ? 'women' : 'men'}/${30 + num}.jpg`}
                    alt="Student"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-white text-sm">Join <span className="font-semibold">500+ students</span> on their journey</p>
          </motion.div>
        </motion.div>

        {/* Enhanced right-side decorative element */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-xs md:max-w-md">
            <motion.div 
              className="absolute inset-0 rounded-full bg-[#1A4D2E] opacity-20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="absolute inset-4 rounded-full bg-[#D4A017] opacity-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            ></motion.div>
            <div className="absolute inset-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center aspect-square">
              <motion.div 
                className="font-[var(--font-amiri)] text-5xl md:text-6xl text-white opacity-80"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1, opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                اقرأ
              </motion.div>
            </div>
            
            {/* Light beams radiating from center */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 origin-bottom opacity-20 bg-[#D4A017]"
                  style={{ 
                    height: '50%', 
                    rotate: `${i * 45}deg`,
                    transformOrigin: 'center bottom'
                  }}
                  animate={{ 
                    opacity: [0.1, 0.3, 0.1],
                    scaleY: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                ></motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.span 
          className="text-white/80 text-sm mb-2 font-[var(--font-dm-sans)]"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Discover More
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/80 h-6 w-6" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;