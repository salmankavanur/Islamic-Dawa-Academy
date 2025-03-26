"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-green-800 to-green-900 relative overflow-hidden">
      {/* Dynamic particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ 
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
              y: [0, -30],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Islamic pattern overlay - very subtle */}
      <motion.div
        className="absolute inset-0 opacity-5 bg-repeat"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: "url('/patterns/arabesque.png')",
          backgroundSize: "300px"
        }}
      ></motion.div>

      {/* Animated decorative circles */}
      <motion.div 
        className="absolute -top-24 -left-24 w-48 h-48 bg-green-700 rounded-full opacity-20"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute -bottom-32 -right-32 w-64 h-64 bg-green-700 rounded-full opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      ></motion.div>

      {/* Light rays */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-yellow-500 to-transparent opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-yellow-300 text-sm font-medium mb-6 backdrop-blur-sm">
              Applications Open
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Begin Your Journey of Knowledge and Faith
          </motion.h2>
          
          <motion.p 
            className="text-xl text-green-100 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join Islamic Da'wa Academy and embark on a transformative educational journey that combines Islamic knowledge with modern education.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-green-800 hover:bg-gray-100 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Link href="/admissions">Apply for Admission</Link>
                <motion.div
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </span>
              <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Link href="/contact">Request Information</Link>
                <motion.div
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 flex items-center justify-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-yellow-300 text-2xl font-bold mb-1">500+</div>
              <div className="text-green-200 text-sm">Students</div>
            </div>
            <div className="h-10 w-px bg-green-600"></div>
            <div className="text-center">
              <div className="text-yellow-300 text-2xl font-bold mb-1">40+</div>
              <div className="text-green-200 text-sm">Expert Faculty</div>
            </div>
            <div className="h-10 w-px bg-green-600"></div>
            <div className="text-center">
              <div className="text-yellow-300 text-2xl font-bold mb-1">15</div>
              <div className="text-green-200 text-sm">Years Excellence</div>
            </div>
          </motion.div>

          <motion.p 
            className="mt-8 text-green-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Applications are now open for the upcoming academic year. Limited seats available.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTA;