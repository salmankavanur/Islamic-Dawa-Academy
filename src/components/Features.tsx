"use client";

import { Database, Video, Library, Monitor, Users, Award, Calendar, Globe } from "lucide-react";
import { motion } from "framer-motion";

const featuresData = [
  {
    icon: <Video className="h-10 w-10 text-green-600" />,
    title: "Video & Audio Visual Studio",
    description: "State-of-the-art recording and production facilities for creating high-quality educational content and media projects."
  },
  {
    icon: <Monitor className="h-10 w-10 text-green-600" />,
    title: "Well Equipped IT Lab",
    description: "Modern computer laboratories with the latest hardware and software for technical training and digital skills development."
  },
  {
    icon: <Library className="h-10 w-10 text-green-600" />,
    title: "Digital Library",
    description: "Extensive collection of digital resources, research materials, and online databases for academic research and study."
  },
  {
    icon: <Calendar className="h-10 w-10 text-green-600" />,
    title: "Study Tours & Residential Camps",
    description: "Enriching educational excursions and immersive residential experiences that enhance learning beyond the classroom."
  },
  {
    icon: <Users className="h-10 w-10 text-green-600" />,
    title: "Expert Talks",
    description: "Regular seminars and lectures by industry professionals and scholars to provide real-world insights and inspiration."
  },
  {
    icon: <Award className="h-10 w-10 text-green-600" />,
    title: "Arts & Sports Fest",
    description: "Cultural and sporting events that promote holistic development, teamwork, and creative expression among students."
  },
  {
    icon: <Database className="h-10 w-10 text-green-600" />,
    title: "Web Design & Development",
    description: "Practical training in web technologies, teaching students to create and maintain modern, responsive websites."
  },
  {
    icon: <Globe className="h-10 w-10 text-green-600" />,
    title: "Live Broadcasting & Streaming",
    description: "Hands-on experience with live event production, streaming technologies, and digital content distribution."
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0"></div>
      <div className="absolute top-40 left-0 w-32 h-32 bg-green-500/5 rounded-full"></div>
      <div className="absolute bottom-40 right-0 w-48 h-48 bg-green-500/5 rounded-full"></div>
      
      {/* Pattern background */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url('/patterns/arabesque.png')",
          backgroundSize: "200px",
          backgroundRepeat: "repeat"
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
          <span className="text-green-600 text-sm font-medium tracking-widest uppercase mb-2 block">Our Offerings</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Premium Facilities & Features</h2>
          <div className="w-20 h-1 bg-green-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Our academy offers exceptional facilities and programs that help mold well-updated Islamic scholars with comprehensive knowledge in both spiritual and secular domains.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuresData.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="p-6 flex flex-col items-center text-center z-10 relative">
                <div className="bg-green-50 p-4 rounded-full mb-5 group-hover:bg-green-100 transition-colors duration-300">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-700 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                {/* Hover effect circle - moved to be behind the content */}
                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-green-50 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 ease-in-out -z-10"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <a 
            href="/facilities" 
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300 group"
          >
            <span>Explore All Facilities</span>
            <svg 
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;