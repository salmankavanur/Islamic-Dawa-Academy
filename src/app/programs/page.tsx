import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Academic Programs | Islamic Da'wa Academy",
  description: "Explore our comprehensive range of academic programs that combine Islamic studies with secular education for Huffaz and aspiring Islamic scholars.",
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-green-900 text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Academic Programs</h1>
              <p className="text-xl text-green-100">
                Discover our diverse range of programs designed to nurture both spiritual knowledge and secular education, preparing students for success in both worlds.
              </p>
            </div>
          </div>
        </div>

        {/* Programs Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Educational Framework</h2>

              <p className="text-lg text-gray-600 mb-8">
                At Islamic Da'wa Academy, we offer a unique integrated educational approach that combines traditional Islamic education with modern secular studies. Our programs are specifically designed for Huffaz (those who have memorized the Quran) and aspiring Islamic scholars who wish to excel in both religious and worldly knowledge.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                Through our partnership with UGC approved universities, students can pursue dual degrees that enhance their career prospects while maintaining a strong foundation in Islamic studies. Our curriculum is structured to provide a balanced education that respects Islamic traditions while embracing contemporary knowledge and skills.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Admission Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                    <span>Complete Hifz of the Holy Quran (for some programs)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                    <span>Minimum educational qualification as per the specific program requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                    <span>Successful completion of entrance examination and interview</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                    <span>Character certificate from previous institution</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                    <span>Medical fitness certificate</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Program Tabs */}
            <Tabs defaultValue="islamic-studies" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="islamic-studies">Islamic Studies</TabsTrigger>
                <TabsTrigger value="quran-memorization">Quran Memorization</TabsTrigger>
                <TabsTrigger value="dual-degree">Dual Degree</TabsTrigger>
                <TabsTrigger value="media-technology">Media & Technology</TabsTrigger>
              </TabsList>

              {/* Islamic Studies Tab */}
              <TabsContent value="islamic-studies" className="mt-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-green-800 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Islamic Studies Program</h3>
                    <p className="text-green-100">
                      A comprehensive curriculum covering Quranic studies, Hadith, Fiqh, Islamic history, and Arabic language.
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Program Overview</h4>
                      <p className="text-gray-600 mb-4">
                        Our Islamic Studies program provides students with deep knowledge of Islamic sciences, enabling them to understand and interpret Islamic texts accurately while developing a strong foundation in traditional Islamic scholarship. The program is designed to produce knowledgeable scholars who can address contemporary issues from an Islamic perspective.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Duration</h5>
                          <p className="text-gray-600">4 years (8 semesters)</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Qualification Awarded</h5>
                          <p className="text-gray-600">Bachelor of Islamic Studies (B.I.S.)</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Mode of Study</h5>
                          <p className="text-gray-600">Full-time (residential)</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Entry Requirements</h5>
                          <p className="text-gray-600">High school diploma or equivalent</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Curriculum Structure</h4>

                      <div className="space-y-6">
                        <div>
                          <h5 className="font-semibold text-green-700 mb-3">Year 1: Foundation</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Introduction to Quranic Studies</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Arabic Grammar (Nahw)</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Arabic Morphology (Sarf)</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Principles of Islamic Theology</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Introduction to Hadith Sciences</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Islamic History: Prophet's Era</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold text-green-700 mb-3">Year 2: Intermediate</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Quranic Exegesis (Tafsir)</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Advanced Arabic Literature</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Principles of Islamic Jurisprudence</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Hadith Analysis</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Islamic History: Righteous Caliphs</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Comparative Religion</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold text-green-700 mb-3">Year 3: Advanced</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Advanced Quranic Exegesis</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Islamic Jurisprudence (Fiqh)</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Hadith Criticism</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Islamic Philosophy</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Islamic History: Medieval Period</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Arabic Rhetoric</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold text-green-700 mb-3">Year 4: Specialization</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Specialized Quranic Studies</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Contemporary Islamic Jurisprudence</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Research Methodology</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Islamic Ethics and Spirituality</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Modern Challenges in Islamic Thought</span>
                            </div>
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">Thesis/Research Project</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Career Opportunities</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                          <span>Islamic Education Teacher or Lecturer</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                          <span>Imam in Mosques and Islamic Centers</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                          <span>Islamic Counselor</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                          <span>Islamic Research Scholar</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                          <span>Community Outreach Coordinator</span>
                        </li>
                      </ul>
                    </div>

                    <div className="text-center">
                      <Button className="bg-green-700 hover:bg-green-800">
                        <Link href="/admissions">Apply for This Program</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Quran Memorization Tab */}
              <TabsContent value="quran-memorization" className="mt-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-green-800 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Quran Memorization Program (Hifz)</h3>
                    <p className="text-green-100">
                      Structured program for Hifz-ul-Quran with proper Tajweed and understanding of Quranic sciences.
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Program Overview</h4>
                      <p className="text-gray-600 mb-4">
                        Our Quran Memorization program offers a comprehensive approach to memorizing the entire Holy Quran with proper Tajweed (rules of recitation) under the guidance of experienced Huffaz teachers. The program focuses on accurate memorization, proper pronunciation, understanding of the text, and effective revision techniques.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Duration</h5>
                          <p className="text-gray-600">3-5 years (depending on student's pace)</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Qualification Awarded</h5>
                          <p className="text-gray-600">Certificate of Hifz-ul-Quran</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Mode of Study</h5>
                          <p className="text-gray-600">Full-time (residential)</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Entry Requirements</h5>
                          <p className="text-gray-600">Basic reading ability of the Quran with proper pronunciation</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Program Structure</h4>

                      <div className="space-y-6">
                        <div>
                          <h5 className="font-semibold text-green-700 mb-3">Phase 1: Foundation (6-12 months)</h5>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>Perfecting Quranic reading with proper Tajweed rules</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>Introduction to basic memorization techniques</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>Memorization of short Surahs (Juz 'Amma)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>Development of discipline and daily routine for memorization</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>Introduction to basic Arabic vocabulary from the Quran</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-green-700 mb-3">Phase 2: Core Memorization (2-3 years)</h5>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>Systematic memorization of the entire Quran</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>Daily new memorization (Sabaq)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>Daily revision of recent memorization (Sabqi)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>Regular revision of previously memorized portions (Manzil)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>Weekly and monthly assessments</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-green-700 mb-3">Phase 3: Strengthening & Certification (6-12 months)</h5>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>Complete revision of the entire Quran multiple times</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>Advanced Tajweed rules and recitation styles</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>Introduction to the interpretation of frequently recited surahs</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>Training in leading Taraweeh prayers</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>Final comprehensive examination and certification</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Teaching Methodology</h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 p-5 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-3">Individual Attention</h5>
                          <p className="text-gray-600">
                            Each student receives personalized attention from qualified Huffaz teachers who monitor progress, correct mistakes, and provide guidance tailored to the student's learning style and pace.
                          </p>
                        </div>

                        <div className="bg-green-50 p-5 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-3">Traditional & Modern Techniques</h5>
                          <p className="text-gray-600">
                            Our program combines traditional memorization methods that have proven effective for centuries with modern educational techniques and technology to enhance learning.
                          </p>
                        </div>

                        <div className="bg-green-50 p-5 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-3">Supportive Environment</h5>
                          <p className="text-gray-600">
                            Students learn in a spiritually nurturing residential environment that minimizes distractions and fosters discipline, focus, and brotherhood/sisterhood among peers.
                          </p>
                        </div>

                        <div className="bg-green-50 p-5 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-3">Holistic Development</h5>
                          <p className="text-gray-600">
                            Beyond memorization, we focus on character building, spiritual development, and understanding the message of the Quran to produce well-rounded huffaz.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Additional Features</h4>

                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                          <span>Optional basic Islamic studies alongside Hifz program</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                          <span>Opportunity to continue with Dual Degree program after completing Hifz</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                          <span>Regular Quran competitions to motivate students</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                          <span>Spiritual retreats during Ramadan and other special occasions</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                          <span>Counseling services to address memorization challenges and maintain motivation</span>
                        </li>
                      </ul>
                    </div>

                    <div className="text-center">
                      <Button className="bg-green-700 hover:bg-green-800">
                        <Link href="/admissions">Apply for This Program</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="dual-degree" className="mt-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-green-800 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Dual Degree Program</h3>
                    <p className="text-green-100">
                      Integrated courses that combine Islamic education with accredited secular degrees from UGC approved universities.
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Program Overview</h4>
                      <p className="text-gray-600 mb-4">
                        Our flagship Dual Degree Program is designed specifically for Huffaz (those who have memorized the Quran) and Islamic studies students who wish to pursue higher education in secular fields while maintaining and advancing their Islamic knowledge. This innovative program allows students to simultaneously earn two degrees: one in Islamic Sciences and another in a chosen secular discipline from UGC approved universities.
                      </p>

                      <p className="text-gray-600 mb-4">
                        The program is structured to provide a balanced education that honors Islamic traditions while equipping students with contemporary knowledge and skills necessary for professional success in the modern world. Our unique approach ensures that graduates become well-rounded individuals who can serve as bridges between Islamic heritage and contemporary society.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Duration</h5>
                          <p className="text-gray-600">4-5 years (depending on chosen secular degree)</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Qualifications Awarded</h5>
                          <p className="text-gray-600">1. Bachelor in Islamic Studies<br />2. Bachelor's degree in chosen secular field</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Mode of Study</h5>
                          <p className="text-gray-600">Full-time (residential)</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Entry Requirements</h5>
                          <p className="text-gray-600">
                            - Complete Hifz-ul-Quran or equivalent Islamic education<br />
                            - High school diploma with required grades for chosen secular degree<br />
                            - Entrance examination and interview
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Available Secular Degree Options</h4>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                          <div className="bg-green-700 text-white p-3 text-center">
                            <h5 className="font-semibold">Computer Science & IT</h5>
                          </div>
                          <div className="p-4">
                            <ul className="space-y-2 text-gray-600 text-sm">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>Bachelor of Computer Applications (BCA)</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>B.Sc. in Computer Science</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>B.Tech in Information Technology</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                          <div className="bg-green-700 text-white p-3 text-center">
                            <h5 className="font-semibold">Business & Management</h5>
                          </div>
                          <div className="p-4">
                            <ul className="space-y-2 text-gray-600 text-sm">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>Bachelor of Business Administration (BBA)</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>B.Com (Bachelor of Commerce)</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>Bachelor in Banking & Finance</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                          <div className="bg-green-700 text-white p-3 text-center">
                            <h5 className="font-semibold">Social Sciences</h5>
                          </div>
                          <div className="p-4">
                            <ul className="space-y-2 text-gray-600 text-sm">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>B.A. in Psychology</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>B.A. in Education</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>B.A. in Sociology</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                          <div className="bg-green-700 text-white p-3 text-center">
                            <h5 className="font-semibold">Media & Communication</h5>
                          </div>
                          <div className="p-4">
                            <ul className="space-y-2 text-gray-600 text-sm">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>B.A. in Mass Communication</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>Bachelor of Journalism</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>B.A. in Digital Media</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                          <div className="bg-green-700 text-white p-3 text-center">
                            <h5 className="font-semibold">Languages & Literature</h5>
                          </div>
                          <div className="p-4">
                            <ul className="space-y-2 text-gray-600 text-sm">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>B.A. in English Literature</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>B.A. in Arabic Language & Literature</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>B.A. in Linguistics</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                          <div className="bg-green-700 text-white p-3 text-center">
                            <h5 className="font-semibold">Sciences</h5>
                          </div>
                          <div className="p-4">
                            <ul className="space-y-2 text-gray-600 text-sm">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>B.Sc. in Mathematics</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>B.Sc. in Physics</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                <span>B.Sc. in Statistics</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mt-4 text-center text-sm italic">
                        * Additional degree options may be available. Please contact the admissions office for the most up-to-date information.
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Program Structure</h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h5 className="font-semibold text-green-700 mb-3">Islamic Studies Component</h5>
                          <p className="text-gray-600 mb-3">
                            Students receive comprehensive instruction in core Islamic sciences, building upon their existing knowledge as Huffaz. This component is delivered through our academy's faculty.
                          </p>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-medium text-green-800 mb-2">Core Courses:</h6>
                            <ul className="space-y-1 text-gray-600">
                              <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                                <span>Advanced Quranic Studies</span>
                              </li>
                              <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                                <span>Hadith Sciences</span>
                              </li>
                              <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                                <span>Islamic Jurisprudence (Fiqh)</span>
                              </li>
                              <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                                <span>Islamic History and Civilization</span>
                              </li>
                              <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                                <span>Contemporary Islamic Thought</span>
                              </li>
                              <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                                <span>Arabic Language and Literature</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold text-green-700 mb-3">Secular Degree Component</h5>
                          <p className="text-gray-600 mb-3">
                            Students attend courses at our partner UGC approved universities for their chosen secular degree. This component follows the standard curriculum and requirements of the respective university program.
                          </p>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h6 className="font-medium text-green-800 mb-2">Course Structure:</h6>
                            <ul className="space-y-1 text-gray-600">
                              <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                                <span>Core courses specific to chosen degree</span>
                              </li>
                              <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                                <span>Elective courses as per university requirements</span>
                              </li>
                              <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                                <span>Practical training and laboratory work (where applicable)</span>
                              </li>
                              <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                                <span>Projects and research work</span>
                              </li>
                              <li className="flex items-start">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                                <span>Internships or field placements</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h5 className="font-semibold text-green-700 mb-3">Integration Component</h5>
                        <p className="text-gray-600 mb-3">
                          A key feature of our Dual Degree Program is the integration of Islamic principles and perspectives into secular disciplines. Special seminars and workshops help students make meaningful connections between their Islamic knowledge and contemporary fields.
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h6 className="font-medium text-green-800 mb-2">Integration Activities:</h6>
                          <ul className="space-y-1 text-gray-600">
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>Weekly integration seminars</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>Research on Islamic perspectives in chosen field</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>Mentorship by professionals who combine Islamic and secular expertise</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>Capstone project integrating Islamic principles with chosen field</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Program Benefits</h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-medium text-gray-800">Dual Qualifications</h5>
                            <p className="text-sm text-gray-600">Graduate with two recognized degrees, enhancing career opportunities</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-medium text-gray-800">Time Efficiency</h5>
                            <p className="text-sm text-gray-600">Complete two degrees in less time than pursuing them separately</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-medium text-gray-800">Integrated Knowledge</h5>
                            <p className="text-sm text-gray-600">Develop unique perspectives by combining Islamic wisdom with contemporary fields</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-medium text-gray-800">Supportive Environment</h5>
                            <p className="text-sm text-gray-600">Study in an Islamic atmosphere while accessing modern university resources</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-medium text-gray-800">Career Preparation</h5>
                            <p className="text-sm text-gray-600">Gain practical skills and credentials valued by employers</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-medium text-gray-800">Community Impact</h5>
                            <p className="text-sm text-gray-600">Become uniquely positioned to serve the Muslim community while excelling professionally</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <Button className="bg-green-700 hover:bg-green-800">
                        <Link href="/admissions">Apply for This Program</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="media-technology" className="mt-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-green-800 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Media & Technology Program</h3>
                    <p className="text-green-100">
                      Cutting-edge training in digital media, web development, and multimedia production for modern Islamic scholars.
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Program Overview</h4>
                      <p className="text-gray-600 mb-4">
                        Our Media & Technology Program equips students with cutting-edge digital skills while maintaining an Islamic foundation. In today's digital age, there is a growing need for Muslim professionals who can effectively communicate Islamic knowledge and values through modern media channels. This program prepares students to harness the power of technology for da'wah (outreach), education, and community development.
                      </p>

                      <p className="text-gray-600 mb-4">
                        Students gain hands-on experience in our state-of-the-art Video & Audio Visual Studio, IT Lab, and Digital Media Center, learning from experienced professionals in the field while maintaining an Islamic perspective on media ethics and content creation.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Duration</h5>
                          <p className="text-gray-600">2-3 years (depending on specialization)</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Qualification Awarded</h5>
                          <p className="text-gray-600">Diploma in Islamic Media & Technology</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Mode of Study</h5>
                          <p className="text-gray-600">Full-time with practical projects</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded">
                          <h5 className="font-semibold text-gray-900 mb-2">Entry Requirements</h5>
                          <p className="text-gray-600">High school diploma or equivalent; basic Islamic knowledge</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Program Tracks</h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                          <div className="h-2 bg-green-600"></div>
                          <div className="p-5">
                            <h5 className="text-lg font-semibold text-gray-900 mb-3">Web Design & Development</h5>
                            <p className="text-gray-600 text-sm mb-4">
                              Learn to create responsive, user-friendly websites and web applications for Islamic organizations and businesses.
                            </p>
                            <ul className="space-y-1.5 text-sm">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">HTML, CSS, and JavaScript</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Modern frameworks (React, Next.js)</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">UI/UX design principles</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Islamic web content management</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                          <div className="h-2 bg-green-600"></div>
                          <div className="p-5">
                            <h5 className="text-lg font-semibold text-gray-900 mb-3">Video Production & Editing</h5>
                            <p className="text-gray-600 text-sm mb-4">
                              Master the art of creating high-quality video content for Islamic education, dawah, and community events.
                            </p>
                            <ul className="space-y-1.5 text-sm">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Camera operations & shooting techniques</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Video editing with industry software</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Motion graphics and visual effects</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Islamic storytelling through video</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                          <div className="h-2 bg-green-600"></div>
                          <div className="p-5">
                            <h5 className="text-lg font-semibold text-gray-900 mb-3">Graphic Design & Digital Art</h5>
                            <p className="text-gray-600 text-sm mb-4">
                              Develop visual communication skills with an Islamic aesthetic for print and digital media.
                            </p>
                            <ul className="space-y-1.5 text-sm">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Adobe Creative Suite proficiency</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Islamic art and design principles</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Typography and layout design</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Branding for Islamic organizations</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                          <div className="h-2 bg-green-600"></div>
                          <div className="p-5">
                            <h5 className="text-lg font-semibold text-gray-900 mb-3">Audio Production & Podcasting</h5>
                            <p className="text-gray-600 text-sm mb-4">
                              Learn to create professional audio content including lectures, nasheeds, podcasts, and audiobooks.
                            </p>
                            <ul className="space-y-1.5 text-sm">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Studio recording techniques</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Audio editing and mastering</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Podcast production and distribution</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Voice training for Islamic content</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                          <div className="h-2 bg-green-600"></div>
                          <div className="p-5">
                            <h5 className="text-lg font-semibold text-gray-900 mb-3">Digital Marketing & Social Media</h5>
                            <p className="text-gray-600 text-sm mb-4">
                              Gain skills to effectively promote Islamic content and organizations in the digital landscape.
                            </p>
                            <ul className="space-y-1.5 text-sm">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Social media strategy & management</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Content marketing for Islamic audiences</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">SEO and online advertising</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Analytics and performance tracking</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                          <div className="h-2 bg-green-600"></div>
                          <div className="p-5">
                            <h5 className="text-lg font-semibold text-gray-900 mb-3">Live Broadcasting & Streaming</h5>
                            <p className="text-gray-600 text-sm mb-4">
                              Master the technical aspects of broadcasting Islamic events, lectures, and programs live to global audiences.
                            </p>
                            <ul className="space-y-1.5 text-sm">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Live video production techniques</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Streaming platform management</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Multi-camera setup and switching</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">Live audience engagement strategies</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Facilities</h4>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-green-50 p-5 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-3">Professional Video Studio</h5>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>Professional-grade cameras and equipment</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>Green screen with versatile lighting setup</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>Multi-camera control room</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>Video editing suites with professional software</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-green-50 p-5 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-3">Audio Recording Studio</h5>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>Soundproof recording booths</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>Professional microphones and mixers</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>Digital audio workstations (DAWs)</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>Audio processing and mastering equipment</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-green-50 p-5 rounded-lg">
                          <h5 className="font-semibold text-green-800 mb-3">Computer Lab & Design Center</h5>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>High-performance workstations</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>Industry-standard software suites</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>Graphic tablets and design tools</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                              <span>Web servers and development environments</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Practical Experience</h4>
                      <p className="text-gray-600 mb-4">
                        Our program emphasizes hands-on learning through real-world projects. Students work on actual productions for Islamic organizations, gaining valuable portfolio pieces and professional experience.
                      </p>

                      <div className="bg-gray-50 p-5 rounded-lg mb-5">
                        <h5 className="font-semibold text-gray-900 mb-3">Sample Student Projects:</h5>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                            <span>Designing and developing websites for local mosques and Islamic organizations</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                            <span>Producing documentary films on Islamic history and contemporary issues</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                            <span>Creating educational video series for children's Islamic education</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                            <span>Managing live broadcasts of major Islamic events and conferences</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                            <span>Producing Islamic podcasts and audio content for distribution platforms</span>
                          </li>
                        </ul>
                      </div>

                      <p className="text-gray-600">
                        Students also complete internships with media companies, Islamic TV channels, or online platforms to gain industry experience and build professional networks.
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Career Opportunities</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="bg-white border border-gray-200 rounded p-3 flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                          <span className="text-gray-700">Islamic Media Producer</span>
                        </div>
                        <div className="bg-white border border-gray-200 rounded p-3 flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                          <span className="text-gray-700">Web Developer for Islamic Organizations</span>
                        </div>
                        <div className="bg-white border border-gray-200 rounded p-3 flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                          <span className="text-gray-700">Digital Marketing Specialist</span>
                        </div>
                        <div className="bg-white border border-gray-200 rounded p-3 flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                          <span className="text-gray-700">Islamic Content Creator</span>
                        </div>
                        <div className="bg-white border border-gray-200 rounded p-3 flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                          <span className="text-gray-700">Audio-Visual Technician</span>
                        </div>
                        <div className="bg-white border border-gray-200 rounded p-3 flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                          <span className="text-gray-700">Islamic Graphic Designer</span>
                        </div>
                        <div className="bg-white border border-gray-200 rounded p-3 flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                          <span className="text-gray-700">Podcast Producer</span>
                        </div>
                        <div className="bg-white border border-gray-200 rounded p-3 flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                          <span className="text-gray-700">Social Media Manager</span>
                        </div>
                        <div className="bg-white border border-gray-200 rounded p-3 flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                          <span className="text-gray-700">Freelance Media Professional</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <Button className="bg-green-700 hover:bg-green-800">
                        <Link href="/admissions">Apply for This Program</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Begin Your Educational Journey</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Ready to take the next step in your academic and spiritual growth? Apply now for admission to one of our distinguished programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
                <Link href="/admissions">Apply for Admission</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
                <Link href="/contact">Request Information</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
