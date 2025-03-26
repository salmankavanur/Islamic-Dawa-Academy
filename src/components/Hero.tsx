"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#1A4D2E] flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Starry Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A4D2E] via-[#2A6452] to-[#13391F]">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#D4A017]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Star className="h-2 w-2" />
            </motion.div>
          ))}
        </div>

        {/* Glowing Islamic Motif */}
        <motion.div
          className="absolute inset-0 opacity-10 bg-repeat"
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: "url('/patterns/arabesque.png')",
            backgroundSize: "500px",
          }}
        />
      </div>

      {/* Animated Crescent Moon */}
      <motion.div
        className="absolute top-10 right-10 opacity-20 pointer-events-none hidden lg:block"
        initial={{ opacity: 0, y: -50, rotate: -10 }}
        animate={{ opacity: 0.3, y: 0, rotate: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200">
          <path
            d="M100,20 A80,80 0 0,1 180,100 A80,80 0 0,1 100,180 A40,40 0 0,0 100,20"
            fill="#D4A017"
            stroke="#D4A017"
            strokeWidth="2"
          />
          <motion.path
            d="M110,40 A60,60 0 0,1 160,100 A60,60 0 0,1 110,160"
            fill="none"
            stroke="#F5F5F5"
            strokeWidth="1"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="max-w-2xl md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="mb-6 inline-block bg-[#D4A017]/20 backdrop-blur-md px-5 py-2 rounded-full border border-[#D4A017]/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-[#D4A017] font-medium tracking-wide">Where Faith Meets Knowledge</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-[var(--font-rubik)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ignite Your <span className="text-[#D4A017] italic">Journey</span> of Enlightenment
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#F5F5F5] mb-10 leading-relaxed font-[var(--font-dm-sans)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Embark on a transformative path blending Islamic wisdom with world-class secular education at Islamic Da'wa Academy.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-[#D4A017] text-[#1A4D2E] hover:bg-[#E5B828] transition-all duration-300 rounded-full font-[var(--font-dm-sans)] group relative overflow-hidden shadow-lg"
              aria-label="Explore our programs"
            >
              <motion.span
                className="relative z-10 flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link href="/programs" className="flex items-center">
                  Begin Your Quest
                  <motion.div
                    className="ml-2"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </Link>
              </motion.span>
              <motion.span
                className="absolute inset-0 bg-[#E5B828] opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-[#D4A017] border-[#D4A017] hover:bg-[#D4A017]/10 hover:text-[#E5B828] transition-all duration-300 rounded-full font-[var(--font-dm-sans)] group relative overflow-hidden shadow-lg"
              aria-label="Apply now for admission"
            >
              <motion.span
                className="relative z-10 flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link href="/admissions" className="flex items-center">
                  Enroll Today
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </Link>
              </motion.span>
              <motion.span
                className="absolute inset-0 bg-[#D4A017] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center justify-center md:justify-start space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex -space-x-3">
              {["student1", "student2", "student3", "student4"].map((student, index) => (
                <motion.div
                  key={index}
                  className="w-10 h-10 rounded-full border-2 border-[#D4A017] overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={`/images/${student}.jpg`}
                    alt={`Muslim student ${index + 1} in white with turban`}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <p className="text-[#F5F5F5] text-sm font-[var(--font-dm-sans)]">
              Join <span className="text-[#D4A017] font-semibold">600+ scholars</span> in pursuit of wisdom
            </p>
          </motion.div>
        </motion.div>

        {/* Right-Side Hero Image */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-full max-w-md">
            {/* Glowing Background Effect */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#D4A017]/20 to-[#1A4D2E]/20 shadow-xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-4 rounded-lg bg-[#2A6452]/30 backdrop-blur-sm"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Hero Image */}
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src="/images/hero.png"
                alt="Islamic Da'wa Academy Hero"
                width={500}
                height={500}
                className="rounded-lg object-cover shadow-2xl"
              />
            </motion.div>

            {/* Subtle Glowing Rays */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 w-1 bg-[#D4A017] opacity-10 rounded-full"
                style={{
                  rotate: `${i * 60}deg`,
                  transformOrigin: "center",
                }}
                animate={{ scaleY: [0.8, 1.2, 0.8], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.span
          className="text-[#D4A017] text-sm font-[var(--font-dm-sans)] mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Unveil Your Path
        </motion.span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-[#D4A017] h-8 w-8" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;