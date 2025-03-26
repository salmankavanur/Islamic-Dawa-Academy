"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Book, BookOpen, Bookmark, GraduationCap, Monitor } from "lucide-react";
import { motion } from "framer-motion";

const programsData = [
  {
    title: "Islamic Studies",
    description: "Comprehensive curriculum covering Quranic studies, Hadith, Fiqh, Islamic history, and Arabic language.",
    features: ["Quran Interpretation", "Hadith Sciences", "Islamic Jurisprudence", "Arabic Language", "Islamic History"],
    icon: <BookOpen className="h-8 w-8" />,
    color: "#1A4D2E",
    link: "/programs/islamic-studies",
  },
  {
    title: "Quran Memorization",
    description: "Structured program for Hifz-ul-Quran with proper Tajweed and understanding of Quranic sciences.",
    features: ["Complete Memorization", "Tajweed Rules", "Qirat Techniques", "Revision Methods", "Tafsir Basics"],
    icon: <Book className="h-8 w-8" />,
    color: "#D4A017",
    link: "/programs/quran-memorization",
  },
  {
    title: "Dual Degree Program",
    description: "Integrated courses that combine Islamic education with accredited secular degrees from UGC approved universities.",
    features: ["Bachelor's Degrees", "Master's Programs", "Diploma Courses", "Professional Certifications", "Flexible Schedule"],
    icon: <GraduationCap className="h-8 w-8" />,
    color: "#4A7C59",
    link: "/programs/dual-degree",
  },
  {
    title: "Media & Technology",
    description: "Cutting-edge training in digital media, web development, and multimedia production for modern Islamic scholars.",
    features: ["Web Development", "Video Production", "Graphic Design", "Live Broadcasting", "Digital Marketing"],
    icon: <Monitor className="h-8 w-8" />,
    color: "#6B7280",
    link: "/programs/media-technology",
  },
];

const Programs = () => {
  // Explicitly type activeIndex as number | null
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(26, 77, 46, 0.1) 0%, transparent 25%), radial-gradient(circle at 80% 20%, rgba(212, 160, 23, 0.1) 0%, transparent 25%)",
        }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#1A4D2E] text-sm font-medium tracking-widest uppercase mb-2 block">Academic Excellence</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Academic Programs</h2>
          <div className="w-20 h-1 bg-[#D4A017] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Discover our comprehensive range of programs designed to nurture both spiritual knowledge and secular education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programsData.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
            >
              <Card className="hover:shadow-xl transition-all duration-500 h-full flex flex-col overflow-hidden relative">
                {/* Top color bar */}
                <div className="h-2 w-full" style={{ backgroundColor: program.color }}></div>

                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${program.color}20` }}>
                    <motion.div
                      animate={
                        activeIndex === index
                          ? {
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, 0, -5, 0],
                            }
                          : {}
                      }
                      transition={{ duration: 0.5 }}
                      style={{ color: program.color }}
                    >
                      {program.icon}
                    </motion.div>
                  </div>
                  <CardTitle
                    className="text-xl transition-colors duration-300"
                    style={{
                      color: activeIndex === index ? program.color : "#2D2D2D",
                    }}
                  >
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow relative z-10">
                  <ul className="space-y-2">
                    {program.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center text-sm"
                        initial={{ opacity: 1, x: 0 }}
                        animate={activeIndex === index ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <div className="w-2 h-2 rounded-full mr-2 transition-colors duration-300" style={{ backgroundColor: program.color }}></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 hover:border-transparent flex items-center justify-center transition-all duration-300 group"
                    style={{
                      borderColor: activeIndex === index ? program.color : undefined,
                      color: activeIndex === index ? program.color : undefined,
                      backgroundColor: activeIndex === index ? `${program.color}10` : undefined,
                    }}
                  >
                    <Link href={program.link} className="flex items-center">
                      <span>Learn More</span>
                      <motion.div
                        animate={activeIndex === index ? { x: [0, 5, 0] } : { x: 0 }}
                        transition={{ duration: 0.5, repeat: activeIndex === index ? Infinity : 0, repeatDelay: 1 }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </Link>
                  </Button>
                </CardFooter>

                {/* Background gradient effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 -z-10"
                  style={{
                    background: activeIndex === index ? `linear-gradient(135deg, ${program.color}05 0%, ${program.color}10 100%)` : "transparent",
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                ></div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="bg-[#1A4D2E] hover:bg-[#4A7C59] transition-colors duration-300 group">
            <Link href="/programs" className="flex items-center">
              View All Programs
              <motion.div className="ml-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;