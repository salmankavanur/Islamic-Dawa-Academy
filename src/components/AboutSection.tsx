"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-[#F5F5F5] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1A4D2E] opacity-5 rounded-full -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4A017] opacity-5 rounded-full translate-x-20 translate-y-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.span 
            className="text-[#1A4D2E] text-sm font-medium tracking-widest uppercase mb-2"
            variants={fadeInUp}
          >
            About Us
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6 font-['Rubik']"
            variants={fadeInUp}
          >
            Welcome to Islamic Da'wa Academy
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-[#D4A017] rounded-full mb-6"
            variants={fadeInUp}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section with parallax effect */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="rounded-lg overflow-hidden shadow-xl relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="https://media.gettyimages.com/id/1084632164/photo/exeter-university-the-streatham-campus-exeter-devon-england-uk-the-institute-of-arab-islamic.jpg?s=612x612&w=gi&k=20&c=JKJKZ2ie2xH9LeruQO16FZL_DzxEZREDaYThaiXjzDM="
                  alt="Islamic Da'wa Academy Building"
                  className="w-full h-auto object-cover rounded-lg transition-all duration-500 group-hover:brightness-110"
                  width={612}
                  height={612}
                />
              </motion.div>
              
              {/* Image overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A4D2E]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg flex items-end justify-center p-6">
                <span className="text-white font-medium">Our Campus</span>
              </div>
            </div>
            
            {/* Decorative elements with motion */}
            <motion.div 
              className="absolute -bottom-8 -left-8 w-64 h-24 bg-[#4A7C59] bg-opacity-20 rounded-lg -z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="absolute -top-8 -right-8 w-32 h-32 bg-[#D4A017] bg-opacity-20 rounded-lg -z-10"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            ></motion.div>
            
            {/* Stats overlapping the image */}
            <div className="absolute -bottom-10 right-10 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4">
              <div className="text-center px-4 border-r border-gray-200">
                <div className="text-[#1A4D2E] text-2xl font-bold">40+</div>
                <div className="text-sm text-gray-500">Expert Faculty</div>
              </div>
              <div className="text-center px-4">
                <div className="text-[#D4A017] text-2xl font-bold">15</div>
                <div className="text-sm text-gray-500">Years Excellence</div>
              </div>
            </div>
          </motion.div>

          {/* Content Section with staggered animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div variants={fadeInUp}>
              <div className="space-y-4 text-[#6B7280] mb-8 font-['DM_Sans']">
                <p className="leading-relaxed">
                  Islamic Da'wa Academy, run by Akode Islamic Centre, is a prestigious higher educational institution dedicated to providing comprehensive education that bridges Islamic knowledge and secular studies.
                </p>
                <p className="leading-relaxed">
                  Our academy is specifically designed for Huffaz (those who have memorized the Quran) with Doura facility and integrated dual degree programs. We offer both Islamic studies (spiritual knowledge) and secular education from UGC Approved universities.
                </p>
              </div>
            </motion.div>

            {/* Key features with icons */}
            <motion.div 
              className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={fadeInUp}
            >
              {[
                "Dual Degree Programs", 
                "Expert Islamic Scholars", 
                "Modern IT Facilities",
                "Media Production Studio"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="text-[#1A4D2E] flex-shrink-0">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <span className="text-[#2D2D2D]">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.p 
              className="text-[#6B7280] mb-8 leading-relaxed font-['DM_Sans']"
              variants={fadeInUp}
            >
              What sets us apart is our commitment to molding well-updated Islamic scholars equipped with the best level of knowledge in secular education as well. Our premium facilities and innovative programs ensure that students receive a holistic education that prepares them for success in both spiritual and worldly pursuits.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Link href="/about">
                <Button className="bg-[#1A4D2E] text-white hover:bg-[#4A7C59] transition-all duration-300 rounded-lg font-['DM_Sans'] group flex items-center">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
              </Link>
              <Link href="/vision-mission">
                <Button
                  variant="outline"
                  className="border-[#1A4D2E] text-[#1A4D2E] hover:bg-[#D4A017] hover:border-[#D4A017] hover:text-[#2D2D2D] transition-all duration-300 rounded-lg font-['DM_Sans']"
                >
                  Our Vision & Mission
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;