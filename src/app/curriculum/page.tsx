import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Curriculum | Islamic Da'wa Academy",
  description: "Explore our comprehensive curriculum designed to integrate Islamic knowledge with modern education at Islamic Da'wa Academy.",
};

export default function CurriculumPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-green-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Curriculum</h1>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              A carefully designed educational framework that integrates traditional Islamic studies with contemporary knowledge to produce well-rounded scholars.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Curriculum Philosophy</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Islamic Da'wa Academy, our curriculum is designed to provide a comprehensive and balanced education that nurtures both spiritual growth and academic excellence. We believe that true knowledge encompasses both religious wisdom and worldly understanding, enabling our students to navigate the modern world while staying true to Islamic principles.
              </p>
              <p className="text-lg text-gray-600">
                Our approach integrates traditional Islamic sciences with contemporary academic disciplines, creating a unique educational experience that prepares students to be knowledgeable Muslims and productive members of society.
              </p>
            </div>

            {/* Curriculum Tabs */}
            <Tabs defaultValue="islamic-studies" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="islamic-studies">Islamic Studies</TabsTrigger>
                <TabsTrigger value="quran-memorization">Quran Memorization</TabsTrigger>
                <TabsTrigger value="dual-degree">Dual Degree</TabsTrigger>
                <TabsTrigger value="media-tech">Media & Technology</TabsTrigger>
              </TabsList>

              {/* Islamic Studies Tab Content */}
              <TabsContent value="islamic-studies">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-green-800 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Islamic Studies Curriculum</h3>
                    <p className="text-green-100">
                      A comprehensive program covering the essential Islamic sciences and their application in contemporary contexts.
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="grid gap-8 md:grid-cols-2">
                      {/* Year 1 */}
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-green-800 mb-4">Year 1: Foundation</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Quranic Studies</p>
                              <p className="text-sm text-gray-600">Introduction to Quranic exegesis, memorization techniques, and tajweed rules</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Arabic Language</p>
                              <p className="text-sm text-gray-600">Grammar (Nahw), morphology (Sarf), and vocabulary building</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Islamic Theology</p>
                              <p className="text-sm text-gray-600">Foundational belief system (Aqeedah) and pillars of faith</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Hadith Sciences</p>
                              <p className="text-sm text-gray-600">Introduction to Hadith terminology, classification, and collections</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Year 2 */}
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-green-800 mb-4">Year 2: Intermediate</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Principles of Jurisprudence</p>
                              <p className="text-sm text-gray-600">Usul al-Fiqh and legal theory in Islamic tradition</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Advanced Arabic</p>
                              <p className="text-sm text-gray-600">Literature, rhetoric, and composition</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Comparative Religion</p>
                              <p className="text-sm text-gray-600">Study of world religions from an Islamic perspective</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Islamic History</p>
                              <p className="text-sm text-gray-600">Prophetic era and the Righteous Caliphs</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Year 3 */}
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-green-800 mb-4">Year 3: Advanced</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Islamic Jurisprudence</p>
                              <p className="text-sm text-gray-600">Study of specific fiqh issues and comparative madhhabs</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Tafsir Methodology</p>
                              <p className="text-sm text-gray-600">Advanced Quranic exegesis and interpretive principles</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Hadith Analysis</p>
                              <p className="text-sm text-gray-600">Critical study of hadith texts and chains of narration</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Islamic Civilization</p>
                              <p className="text-sm text-gray-600">Cultural, scientific, and intellectual achievements</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      {/* Year 4 */}
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-green-800 mb-4">Year 4: Specialization</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Contemporary Islamic Thought</p>
                              <p className="text-sm text-gray-600">Modern challenges and Islamic responses</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Research Methodology</p>
                              <p className="text-sm text-gray-600">Academic research and thesis preparation</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Islamic Ethics</p>
                              <p className="text-sm text-gray-600">Moral philosophy and character development</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium">Specialized Electives</p>
                              <p className="text-sm text-gray-600">Focus areas based on student interest</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Quran Memorization Tab Content */}
              <TabsContent value="quran-memorization">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-green-800 text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Quran Memorization Curriculum</h3>
                    <p className="text-green-100">
                      A structured program for memorizing the Quran with proper tajweed and understanding of its meanings.
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Program Overview</h4>
                      <p className="text-gray-600 mb-6">
                        Our Quran Memorization (Hifz) program is designed to help students memorize the entire Quran with proper tajweed (rules of recitation) and develop a deep understanding of its meanings. The program combines traditional memorization methods with modern teaching techniques to ensure effective learning and retention.
                      </p>

                      <div className="bg-green-50 p-5 rounded-lg mb-8">
                        <h5 className="font-semibold text-green-800 mb-3">Program Structure</h5>
                        <p className="text-gray-600 mb-4">
                          The program is divided into three main phases, each building on the previous one. The duration varies depending on the student's pace and dedication, but typically takes 3-5 years to complete.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-1">
                      {/* Phase 1 */}
                      <div className="border border-green-100 rounded-lg overflow-hidden">
                        <div className="bg-green-100 p-4">
                          <h4 className="text-xl font-semibold text-green-800">Phase 1: Foundation (6-12 months)</h4>
                        </div>
                        <div className="p-6">
                          <div className="mb-4">
                            <h5 className="font-medium text-gray-900 mb-2">Objectives</h5>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Perfecting Quranic reading with proper pronunciation</li>
                              <li>Mastering tajweed rules</li>
                              <li>Developing disciplined study habits</li>
                              <li>Memorizing short surahs (Juz 'Amma)</li>
                            </ul>
                          </div>

                          <div className="mb-4">
                            <h5 className="font-medium text-gray-900 mb-2">Curriculum Components</h5>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-medium">Tajweed Rules</p>
                                  <p className="text-sm text-gray-600">Pronunciation points, qualities of letters, rules of noon and meem sakinah, madd rules</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-medium">Reading Fluency</p>
                                  <p className="text-sm text-gray-600">Practice reading from the Quran with proper tajweed and at an appropriate pace</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-medium">Memorization Techniques</p>
                                  <p className="text-sm text-gray-600">Methods for effective memorization and retention</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-medium">Basic Arabic Vocabulary</p>
                                  <p className="text-sm text-gray-600">Common words from the Quran to aid in understanding</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Phase 2 */}
                      <div className="border border-green-100 rounded-lg overflow-hidden">
                        <div className="bg-green-100 p-4">
                          <h4 className="text-xl font-semibold text-green-800">Phase 2: Core Memorization (2-3 years)</h4>
                        </div>
                        <div className="p-6">
                          <div className="mb-4">
                            <h5 className="font-medium text-gray-900 mb-2">Objectives</h5>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Systematic memorization of the entire Quran</li>
                              <li>Developing strong revision habits</li>
                              <li>Understanding basic meanings of memorized portions</li>
                              <li>Building consistency in daily recitation</li>
                            </ul>
                          </div>

                          <div className="mb-4">
                            <h5 className="font-medium text-gray-900 mb-2">Daily Structure</h5>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-medium">Sabaq (New Lesson)</p>
                                  <p className="text-sm text-gray-600">Memorization of new portion (typically 1/2 to 1 page daily)</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-medium">Sabqi (Recent Lessons)</p>
                                  <p className="text-sm text-gray-600">Revision of recently memorized portions (typically last 7 days)</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-medium">Manzil (Previous Lessons)</p>
                                  <p className="text-sm text-gray-600">Revision of older memorized portions on a rotation basis</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-medium">Tajweed Perfection</p>
                                  <p className="text-sm text-gray-600">Regular sessions to ensure proper application of tajweed rules</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Phase 3 */}
                      <div className="border border-green-100 rounded-lg overflow-hidden">
                        <div className="bg-green-100 p-4">
                          <h4 className="text-xl font-semibold text-green-800">Phase 3: Strengthening & Certification (6-12 months)</h4>
                        </div>
                        <div className="p-6">
                          <div className="mb-4">
                            <h5 className="font-medium text-gray-900 mb-2">Objectives</h5>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Complete revision of the entire Quran multiple times</li>
                              <li>Perfecting recitation with advanced tajweed rules</li>
                              <li>Developing understanding of tafsir (interpretation)</li>
                              <li>Preparing for ijazah (certification)</li>
                            </ul>
                          </div>

                          <div className="mb-4">
                            <h5 className="font-medium text-gray-900 mb-2">Curriculum Components</h5>
                            <ul className="space-y-3">
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-medium">Comprehensive Revision</p>
                                  <p className="text-sm text-gray-600">Systematic revision of the entire Quran using various methods</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-medium">Advanced Tajweed</p>
                                  <p className="text-sm text-gray-600">Refinement of recitation with focus on subtle rules and differences in recitation styles</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-medium">Tafsir Studies</p>
                                  <p className="text-sm text-gray-600">Basic understanding of Quranic interpretation for frequent recitations</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-medium">Recitation Training</p>
                                  <p className="text-sm text-gray-600">Preparing for leading prayers (especially Taraweeh during Ramadan)</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Teaching Methodology</h4>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h5 className="font-medium text-green-800 mb-2">Traditional Methods</h5>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li>Individual attention from qualified Huffaz</li>
                            <li>One-on-one recitation sessions</li>
                            <li>Group revision circles</li>
                            <li>Chain memorization techniques</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-green-800 mb-2">Modern Approaches</h5>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li>Digital Quran applications and tools</li>
                            <li>Audio recordings for self-correction</li>
                            <li>Visualization techniques</li>
                            <li>Memorization progress tracking</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="dual-degree">
                {/* Dual Degree Tab Content */}
              </TabsContent>

              <TabsContent value="media-tech">
                {/* Media & Technology Tab Content */}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
