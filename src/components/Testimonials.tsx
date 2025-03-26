import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonialsData = [
  {
    quote: "The dual degree program at Islamic Da'wa Academy transformed my life. I was able to deepen my understanding of the Quran while also earning a degree in Computer Science. The IT facilities here are exceptional.",
    name: "Abdullah Rahman",
    position: "Graduate, Class of 2023",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "As a Hafiz, I was looking for an institution that would value my Quranic knowledge while providing modern education. The Islamic Da'wa Academy exceeded my expectations with its balanced approach to education.",
    name: "Fatima Zahra",
    position: "Current Student, Islamic Studies & Media",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Teaching at Islamic Da'wa Academy has been a fulfilling experience. The students here are exceptionally dedicated, and the administration's commitment to maintaining high standards in both Islamic and secular education is commendable.",
    name: "Dr. Omar Farooq",
    position: "Professor of Islamic Jurisprudence",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    quote: "The production studio and media training facilities at the academy prepared me for a career in Islamic media. I now produce educational content that reaches thousands of Muslims worldwide.",
    name: "Amina Siddiqui",
    position: "Alumni, Media Production Graduate",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    quote: "What sets Islamic Da'wa Academy apart is its holistic approach to education. Here, I learned not just about my faith, but also acquired practical skills that have made me self-sufficient and able to serve my community better.",
    name: "Yusuf Ibrahim",
    position: "Graduate, Islamic Studies & Business",
    image: "https://randomuser.me/api/portraits/men/79.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our students, alumni, and faculty about their experiences at Islamic Da'wa Academy.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-2">
                  <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="h-10 w-10 text-green-500 opacity-50 mb-4" />

                      <p className="text-gray-700 italic mb-6 flex-grow">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
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
                          <p className="text-sm text-gray-600">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static mr-2 translate-y-0" />
            <CarouselNext className="static ml-2 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
