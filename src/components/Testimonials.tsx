"use client";

import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    quote: "The dual degree program at Islamic Da'wa Academy transformed my life. I was able to deepen my understanding of the Quran while also earning a degree in Computer Science. The IT facilities here are exceptional.",
    name: "Hafiz Yaseen",
    position: "Graduate, Class of 2023",
    image: "/images/student1.jpg"
  },
  {
    quote: "As a Hafiz, I was looking for an institution that would value my Quranic knowledge while providing modern education. The Islamic Da'wa Academy exceeded my expectations with its balanced approach to education.",
    name: "Hafiz Naseef",
    position: "Current Student, Islamic Studies & Media",
    image: "/images/student1.jpg"
  },
  {
    quote: "Teaching at Islamic Da'wa Academy has been a fulfilling experience. The students here are exceptionally dedicated, and the administration's commitment to maintaining high standards in both Islamic and secular education is commendable.",
    name: "Hafiz Abdullah Mikdad",
    position: "Professor of Islamic Jurisprudence",
    image: "/images/student1.jpg"
  },
  {
    quote: "The production studio and media training facilities at the academy prepared me for a career in Islamic media. I now produce educational content that reaches thousands of Muslims worldwide.",
    name: "Hafiz Ibrahim",
    position: "Alumni, Media Production Graduate",
    image: "/images/student1.jpg"
  },
  {
    quote: "What sets Islamic Da'wa Academy apart is its holistic approach to education. Here, I learned not just about my faith, but also acquired practical skills that have made me self-sufficient and able to serve my community better.",
    name: "Hafiz Lubab",
    position: "Graduate, Islamic Studies & Business",
    image: "/images/student1.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0"></div>
      
      {/* Decorative quote marks */}
      <div className="absolute top-20 left-20 text-green-100 opacity-30 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.13456 9H5.75456C5.47456 9 5.19456 9.02 4.93456 9.07C5.01456 8.62 5.15456 8.19 5.35456 7.79C5.55456 7.37 5.79456 7 6.06456 6.68C6.34456 6.35 6.65456 6.08 6.98456 5.87C7.31456 5.65 7.65456 5.5 7.99456 5.42L8.15456 5.39C8.69456 5.25 9.10456 4.79 9.10456 4.24V3.53C9.10456 2.82 8.55456 2.25 7.85456 2.22C7.59456 2.21 7.33456 2.21 7.07456 2.22C6.35456 2.24 5.65456 2.39 4.95456 2.65C4.27456 2.92 3.64456 3.32 3.06456 3.85C2.49456 4.38 2.01456 5.05 1.61456 5.84C1.21456 6.63 0.954558 7.59 0.834558 8.7C0.764558 9.34 0.734558 10.01 0.734558 10.7V15.85C0.734558 16.98 1.65456 17.9 2.78456 17.9H9.13456C10.2346 17.9 11.1346 16.99 11.1346 15.89V11.01C11.1346 9.91 10.2346 9 9.13456 9Z" fill="currentColor"/>
          <path d="M21.2345 9H17.8545C17.5745 9 17.2945 9.02 17.0345 9.07C17.1145 8.62 17.2545 8.19 17.4545 7.79C17.6545 7.37 17.8945 7 18.1645 6.68C18.4445 6.35 18.7545 6.08 19.0845 5.87C19.4145 5.65 19.7545 5.5 20.0945 5.42L20.2545 5.39C20.7945 5.25 21.2045 4.79 21.2045 4.24V3.53C21.2045 2.82 20.6545 2.25 19.9545 2.22C19.6945 2.21 19.4345 2.21 19.1745 2.22C18.4545 2.24 17.7545 2.39 17.0545 2.65C16.3745 2.92 15.7445 3.32 15.1645 3.85C14.5945 4.38 14.1145 5.05 13.7145 5.84C13.3145 6.63 13.0545 7.59 12.9345 8.7C12.8645 9.34 12.8345 10.01 12.8345 10.7V15.85C12.8345 16.98 13.7545 17.9 14.8845 17.9H21.2345C22.3345 17.9 23.2345 16.99 23.2345 15.89V11.01C23.2345 9.91 22.3345 9 21.2345 9Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-green-600 text-sm font-medium tracking-widest uppercase mb-2 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Community Says</h2>
          <div className="w-20 h-1 bg-green-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Hear from our students, alumni, and faculty about their experiences at Islamic Da'wa Academy.
          </p>
        </motion.div>

        <motion.div 
          className="overflow-hidden max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-500 h-full border-t-4 border-green-600 overflow-hidden">
                        <CardContent className="p-6 flex flex-col h-full relative">
                          <div className="absolute top-0 right-0 -mt-2 -mr-2 text-green-100 transform rotate-180">
                            <Quote className="h-24 w-24 opacity-10" />
                          </div>

                          <p className="text-gray-700 italic mb-6 flex-grow relative z-10">
                            "{testimonial.quote}"
                          </p>

                          <div className="flex items-center relative z-10 mt-4 pt-4 border-t border-gray-100">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-green-500 ring-offset-2">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={48}
                                height={48}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                              <p className="text-sm text-green-600">{testimonial.position}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mr-2 bg-white hover:bg-green-50 hover:text-green-600 border-green-200" />
              <CarouselNext className="ml-2 bg-white hover:bg-green-50 hover:text-green-600 border-green-200" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;