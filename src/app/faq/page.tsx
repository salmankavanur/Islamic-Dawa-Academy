import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 flex items-start">
        <span className="text-green-600 mr-2">Q:</span>
        {question}
      </h3>
      <div className="mt-3 text-gray-600 pl-6">
        <div className="flex items-start">
          <span className="text-green-700 font-semibold mr-2">A:</span>
          <div>{answer}</div>
        </div>
      </div>
    </div>
  );
};

const FAQCategory = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <div className="bg-green-100 p-3 rounded-full mr-4">
          <HelpCircle className="h-6 w-6 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="space-y-6 pl-4">{children}</div>
    </div>
  );
};

export default function FAQPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Find answers to common questions about Islamic Da'wa Academy, our programs, admissions process, and student life.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* General Questions */}
            <FAQCategory title="About Islamic Da'wa Academy">
              <FAQItem
                question="What is Islamic Da'wa Academy?"
                answer="Islamic Da'wa Academy is a higher educational institution that provides integrated education combining Islamic studies with secular degrees. We offer a unique environment where Huffaz (those who have memorized the Quran) can pursue dual degrees from UGC approved universities while deepening their Islamic knowledge."
              />

              <FAQItem
                question="What makes Islamic Da'wa Academy different from other Islamic institutions?"
                answer="Our distinctive approach combines traditional Islamic education with modern academic degrees, allowing students to excel in both spiritual and secular fields. We offer state-of-the-art facilities including digital libraries, media production studios, and IT labs, preparing students for contemporary challenges while maintaining strong Islamic foundations."
              />

              <FAQItem
                question="Is Islamic Da'wa Academy accredited?"
                answer="Yes, Islamic Da'wa Academy is fully accredited. Our dual degree programs are offered in partnership with UGC approved universities, ensuring that graduates receive recognized qualifications. Our Islamic studies programs follow established scholarly traditions and meet international standards of Islamic education."
              />

              <FAQItem
                question="Where is the academy located?"
                answer="Islamic Da'wa Academy is located at the Akode Islamic Centre campus, providing a peaceful and conducive environment for learning. Our campus features modern facilities, comfortable accommodation, prayer spaces, and recreational areas to support a balanced student life."
              />
            </FAQCategory>

            {/* Admissions Questions */}
            <FAQCategory title="Admissions">
              <FAQItem
                question="What are the admission requirements?"
                answer={(
                  <div>
                    <p className="mb-2">General requirements include:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Completion of secondary education (10+2) or equivalent</li>
                      <li>Basic knowledge of Arabic language (for Islamic Studies program)</li>
                      <li>Complete memorization of at least 5 Juz of the Quran (for Huffaz program)</li>
                      <li>Minimum 60% marks in qualifying examinations</li>
                      <li>Successful completion of entrance examination and interview</li>
                    </ul>
                    <p className="mt-2">Specific program requirements may vary. Please visit our <Link href="/admissions" className="text-green-700 hover:underline">Admissions page</Link> for detailed information.</p>
                  </div>
                )}
              />

              <FAQItem
                question="When can I apply to Islamic Da'wa Academy?"
                answer="We have two intake periods annually: Fall (September) and Spring (February). Applications for Fall semester typically open in March and close in June, while Spring semester applications open in September and close in December. We recommend applying early as admissions are competitive."
              />

              <FAQItem
                question="Do you offer scholarships or financial aid?"
                answer="Yes, we offer various forms of financial assistance including merit scholarships, need-based aid, work-study opportunities, and partnerships with external organizations. Scholarships can cover up to 75% of tuition fees for exceptional students. Financial aid applications are reviewed alongside admission applications."
              />

              <FAQItem
                question="Can international students apply?"
                answer="Absolutely! We welcome students from around the world. International students should apply at least two months before the application deadline to allow sufficient time for visa processing. We provide assistance with visa documentation and can arrange airport pickup for new international students."
              />
            </FAQCategory>

            {/* Academic Programs */}
            <FAQCategory title="Academic Programs">
              <FAQItem
                question="What programs does Islamic Da'wa Academy offer?"
                answer={(
                  <div>
                    <p className="mb-2">Our main programs include:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Islamic Studies:</strong> Comprehensive curriculum covering Quranic studies, Hadith, Fiqh, Islamic history, and Arabic language</li>
                      <li><strong>Quran Memorization:</strong> Structured program for Hifz-ul-Quran with proper Tajweed and understanding of Quranic sciences</li>
                      <li><strong>Dual Degree Program:</strong> Integrated courses that combine Islamic education with accredited secular degrees</li>
                      <li><strong>Media & Technology:</strong> Cutting-edge training in digital media, web development, and multimedia production</li>
                    </ul>
                    <p className="mt-2">Each program is carefully designed to balance theoretical knowledge with practical skills.</p>
                  </div>
                )}
              />

              <FAQItem
                question="How long do the programs take to complete?"
                answer="Program duration varies: Islamic Studies is typically a 3-year program; Quran Memorization depends on individual progress, usually 2-3 years; Dual Degree Programs follow the standard bachelor's degree timeline of 3-4 years; and Media & Technology programs range from 2-year diplomas to 4-year degrees depending on specialization."
              />

              <FAQItem
                question="What degrees are offered in the Dual Degree Program?"
                answer="Our Dual Degree Program offers various options including Bachelor's in Business Administration, Computer Science, Education, Media Studies, Islamic Finance, and Social Sciences. These degrees are granted by our partner universities while students simultaneously complete their Islamic studies with us."
              />

              <FAQItem
                question="Are classes taught in English or Arabic?"
                answer="We utilize both languages in our teaching. Islamic Studies courses are primarily taught in Arabic with English explanations, while secular degree programs are taught in English. We offer intensive Arabic language courses for students who need to strengthen their Arabic proficiency."
              />
            </FAQCategory>

            {/* Campus Life */}
            <FAQCategory title="Campus Life & Facilities">
              <FAQItem
                question="Is on-campus accommodation available?"
                answer="Yes, we provide comfortable on-campus housing options including shared and single rooms. All accommodations include basic amenities, study areas, and high-speed internet. Separate dormitories are available for male and female students with appropriate facilities for each."
              />

              <FAQItem
                question="What dining options are available on campus?"
                answer="Our campus features a halal cafeteria that serves nutritious meals three times daily. We offer meal plans with full and partial board options. The cafeteria accommodates various dietary requirements and serves a diverse menu reflecting different culinary traditions."
              />

              <FAQItem
                question="What facilities are available for students?"
                answer={(
                  <div>
                    <p className="mb-2">Our campus offers comprehensive facilities including:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Modern classrooms and lecture halls</li>
                      <li>Digital library with extensive resources</li>
                      <li>IT laboratories with the latest equipment</li>
                      <li>Media production studios</li>
                      <li>Prayer halls and ablution facilities</li>
                      <li>Sports facilities and recreation areas</li>
                      <li>Student lounges and study spaces</li>
                      <li>Campus-wide high-speed WiFi</li>
                    </ul>
                  </div>
                )}
              />

              <FAQItem
                question="Are there extracurricular activities for students?"
                answer="Absolutely! We offer a wide range of extracurricular activities including Islamic study circles, sports tournaments, arts festivals, community service projects, leadership training, cultural events, and academic competitions. These activities enhance the educational experience and foster community building among students."
              />
            </FAQCategory>

            {/* Career & Alumni */}
            <FAQCategory title="Career & Alumni">
              <FAQItem
                question="What career opportunities are available after graduation?"
                answer="Our graduates pursue diverse career paths including roles as Islamic scholars, educators, imams, media professionals, IT specialists, business leaders, social workers, and community organizers. The combination of Islamic knowledge and secular education makes our alumni highly valued in both Islamic institutions and conventional workplaces."
              />

              <FAQItem
                question="Does the academy provide career services?"
                answer="Yes, we offer comprehensive career services including career counseling, resume building workshops, interview preparation, internship placements, and job fairs. We maintain connections with potential employers and regularly invite industry professionals for networking events."
              />

              <FAQItem
                question="Do you have an alumni network?"
                answer="We have a strong and active alumni network that spans globally. Our alumni association organizes regular events, mentorship programs, professional development workshops, and fundraising initiatives. Current students can connect with alumni for guidance, internships, and career opportunities."
              />
            </FAQCategory>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            If you couldn't find the answer to your question, please don't hesitate to contact us directly. Our team is ready to assist you with any inquiries about our programs, facilities, or admissions process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
