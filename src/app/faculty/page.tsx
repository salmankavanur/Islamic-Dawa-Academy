import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FacultyProfile from "@/components/FacultyProfile";

export const metadata = {
  title: "Our Faculty | Islamic Da'wa Academy",
  description: "Meet our distinguished faculty members who bring expertise in both Islamic knowledge and secular disciplines to the Islamic Da'wa Academy.",
};

export default function FacultyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <div className="bg-green-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Distinguished Faculty</h1>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              Meet our team of dedicated scholars, educators, and professionals who guide our students in their journey of knowledge and faith.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Leadership</h2>
              <p className="text-lg text-gray-600">
                Our faculty combines traditional Islamic scholarship with contemporary expertise across various disciplines, providing students with a comprehensive and balanced education.
              </p>
            </div>

            {/* Faculty Department Tabs */}
            <Tabs defaultValue="islamic-studies" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="islamic-studies">Islamic Studies</TabsTrigger>
                <TabsTrigger value="quran">Quranic Sciences</TabsTrigger>
                <TabsTrigger value="secular">Secular Disciplines</TabsTrigger>
                <TabsTrigger value="media-tech">Media & Technology</TabsTrigger>
              </TabsList>

              {/* Islamic Studies Department */}
              <TabsContent value="islamic-studies">
                <div className="space-y-8">
                  <div className="bg-green-50 px-6 py-4 rounded-lg mb-8">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Department of Islamic Studies</h3>
                    <p className="text-gray-700">
                      Our Islamic Studies department is dedicated to providing students with a deep understanding of Islamic sciences, including Fiqh (jurisprudence), Hadith, Islamic history, and theology. Our faculty members are renowned scholars who combine traditional Islamic knowledge with contemporary perspectives.
                    </p>
                  </div>

                  <FacultyProfile
                    name="Dr. Muhammad Abdullah Al-Azhari"
                    designation="Professor of Islamic Jurisprudence"
                    department="Department of Islamic Studies"
                    isHead={true}
                    education={[
                      "PhD in Islamic Jurisprudence, Al-Azhar University, Egypt",
                      "Master's in Comparative Fiqh, International Islamic University Malaysia",
                      "Bachelor's in Islamic Law, Madinah Islamic University, Saudi Arabia"
                    ]}
                    specialization="Comparative Islamic Jurisprudence and Contemporary Fiqh Issues"
                    imageSrc="https://randomuser.me/api/portraits/men/42.jpg"
                    bio="Dr. Al-Azhari has over 20 years of experience in teaching Islamic jurisprudence and has authored several books on contemporary Islamic legal issues. His expertise in comparing different schools of Islamic law provides students with a comprehensive understanding of Islamic legal tradition."
                  />

                  <FacultyProfile
                    name="Dr. Aisha Rahman"
                    designation="Associate Professor of Islamic History"
                    department="Department of Islamic Studies"
                    isHead={false}
                    education={[
                      "PhD in Islamic History, International Islamic University, Pakistan",
                      "Master's in History, University of London, UK",
                      "Bachelor's in Islamic Studies, Qatar University"
                    ]}
                    specialization="Early Islamic History and Women Scholars in Islamic Tradition"
                    imageSrc="https://randomuser.me/api/portraits/women/33.jpg"
                    bio="Dr. Rahman specializes in early Islamic history with a focus on the contributions of women scholars to Islamic knowledge. Her research on the lives and works of female hadith narrators and jurists has been published in numerous international journals."
                  />

                  <FacultyProfile
                    name="Prof. Ibrahim Hassan"
                    designation="Assistant Professor of Islamic Theology"
                    department="Department of Islamic Studies"
                    isHead={false}
                    education={[
                      "PhD in Islamic Theology, University of Jordan",
                      "Master's in Aqeedah, Islamic University of Madinah, Saudi Arabia",
                      "Bachelor's in Usul al-Din, Al-Azhar University, Egypt"
                    ]}
                    specialization="Islamic Creed and Contemporary Theological Discussions"
                    imageSrc="https://randomuser.me/api/portraits/men/44.jpg"
                    bio="Prof. Hassan teaches Islamic theology with a focus on addressing contemporary challenges to Islamic beliefs. His approach combines traditional theological discussions with modern philosophical frameworks, helping students develop strong intellectual foundations for their faith."
                  />
                </div>
              </TabsContent>

              {/* Quranic Sciences Department */}
              <TabsContent value="quran">
                <div className="space-y-8">
                  <div className="bg-green-50 px-6 py-4 rounded-lg mb-8">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Department of Quranic Sciences</h3>
                    <p className="text-gray-700">
                      Our Quranic Sciences department focuses on Quranic exegesis (Tafsir), recitation (Qira'at), memorization (Hifz), and the sciences related to the preservation and understanding of the Quran. The department is staffed by qualified huffaz and scholars of Quranic studies.
                    </p>
                  </div>

                  <FacultyProfile
                    name="Sheikh Hafiz Abdul Qadeer"
                    designation="Professor of Quranic Sciences"
                    department="Department of Quranic Sciences"
                    isHead={true}
                    education={[
                      "PhD in Quranic Sciences, Islamic University of Madinah, Saudi Arabia",
                      "Ijazah in Ten Qira'at (Recitations), Institute of Quranic Readings, Egypt",
                      "Master's in Tafsir, Al-Azhar University, Egypt"
                    ]}
                    specialization="Quranic Exegesis and Variant Readings"
                    imageSrc="https://randomuser.me/api/portraits/men/76.jpg"
                    bio="Sheikh Abdul Qadeer is a renowned hafiz and scholar of the Quran with complete ijazah (certification) in all ten authentic recitations of the Quran. He has trained hundreds of huffaz and reciters and brings his extensive knowledge to guide our students in mastering Quranic recitation and memorization."
                  />

                  <FacultyProfile
                    name="Hafiza Fatima Zahra"
                    designation="Senior Instructor of Hifz"
                    department="Department of Quranic Sciences"
                    isHead={false}
                    education={[
                      "Diploma in Advanced Tajweed, Dar Al-Quran Institute, UAE",
                      "Ijazah in Hafs Recitation, Islamic Institute of Education, Pakistan",
                      "Bachelor's in Islamic Studies, International Islamic University, Malaysia"
                    ]}
                    specialization="Quran Memorization and Tajweed Rules"
                    imageSrc="https://randomuser.me/api/portraits/women/52.jpg"
                    bio="Hafiza Fatima leads our women's hifz program and has developed innovative methodologies for Quran memorization that have proven highly effective. Her gentle yet systematic approach has helped numerous female students complete their hifz with proper tajweed and understanding."
                  />

                  <FacultyProfile
                    name="Dr. Yusuf Omar"
                    designation="Associate Professor of Tafsir"
                    department="Department of Quranic Sciences"
                    isHead={false}
                    education={[
                      "PhD in Quranic Exegesis, Islamic University of Madinah, Saudi Arabia",
                      "Master's in Arabic Language, King Saud University, Saudi Arabia",
                      "Bachelor's in Islamic Studies, Al-Azhar University, Egypt"
                    ]}
                    specialization="Thematic Interpretation of the Quran"
                    imageSrc="https://randomuser.me/api/portraits/men/36.jpg"
                    bio="Dr. Omar specializes in thematic interpretation of the Quran, focusing on extracting guidance for contemporary issues from Quranic teachings. His classes combine classical exegetical methodologies with contextual understanding, helping students appreciate the timelessness of Quranic wisdom."
                  />
                </div>
              </TabsContent>

              {/* Secular Disciplines Department */}
              <TabsContent value="secular">
                <div className="space-y-8">
                  <div className="bg-green-50 px-6 py-4 rounded-lg mb-8">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Department of Secular Disciplines</h3>
                    <p className="text-gray-700">
                      Our Secular Disciplines department provides high-quality education in various academic fields while integrating Islamic perspectives. Our faculty members hold advanced degrees from prestigious universities and bring both academic excellence and commitment to Islamic values.
                    </p>
                  </div>

                  <FacultyProfile
                    name="Dr. Ahmad Khan"
                    designation="Professor of Computer Science"
                    department="Department of Secular Disciplines"
                    isHead={true}
                    education={[
                      "PhD in Computer Science, Massachusetts Institute of Technology, USA",
                      "Master's in Information Technology, Stanford University, USA",
                      "Bachelor's in Computer Engineering, University of Engineering and Technology, Pakistan"
                    ]}
                    specialization="Artificial Intelligence and Islamic Ethics in Technology"
                    imageSrc="https://randomuser.me/api/portraits/men/22.jpg"
                    bio="Dr. Khan leads our Computer Science program and specializes in artificial intelligence with a focus on ethical considerations from an Islamic perspective. His research explores the intersection of advanced technology and Islamic ethical frameworks, providing students with both technical skills and moral guidance."
                  />

                  <FacultyProfile
                    name="Dr. Layla Mahmood"
                    designation="Associate Professor of Business Administration"
                    department="Department of Secular Disciplines"
                    isHead={false}
                    education={[
                      "PhD in Business Administration, London School of Economics, UK",
                      "MBA, Harvard Business School, USA",
                      "Bachelor's in Economics, American University of Sharjah, UAE"
                    ]}
                    specialization="Islamic Finance and Ethical Business Practices"
                    imageSrc="https://randomuser.me/api/portraits/women/28.jpg"
                    bio="Dr. Mahmood brings extensive experience in both conventional and Islamic finance to our Business Administration program. Her research focuses on developing ethical business models based on Islamic principles, and she has consulted for numerous Islamic financial institutions worldwide."
                  />

                  <FacultyProfile
                    name="Prof. Tariq Jameel"
                    designation="Assistant Professor of Psychology"
                    department="Department of Secular Disciplines"
                    isHead={false}
                    education={[
                      "PhD in Clinical Psychology, University of Chicago, USA",
                      "Master's in Islamic Psychology, International Islamic University Malaysia",
                      "Bachelor's in Psychology, University of Toronto, Canada"
                    ]}
                    specialization="Integration of Islamic Spiritual Healing and Modern Psychology"
                    imageSrc="https://randomuser.me/api/portraits/men/54.jpg"
                    bio="Prof. Jameel specializes in the integration of Islamic spiritual healing practices with modern psychological therapies. His research and clinical experience offer students a unique perspective on mental health that honors both scientific rigor and Islamic spiritual traditions."
                  />
                </div>
              </TabsContent>

              {/* Media & Technology Department */}
              <TabsContent value="media-tech">
                <div className="space-y-8">
                  <div className="bg-green-50 px-6 py-4 rounded-lg mb-8">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Department of Media & Technology</h3>
                    <p className="text-gray-700">
                      Our Media & Technology department equips students with cutting-edge skills in digital media production, web development, and multimedia technologies, all within an Islamic ethical framework. Our faculty includes industry professionals with extensive practical experience.
                    </p>
                  </div>

                  <FacultyProfile
                    name="Prof. Nadia Rahman"
                    designation="Professor of Digital Media"
                    department="Department of Media & Technology"
                    isHead={true}
                    education={[
                      "PhD in Media Studies, University of Southern California, USA",
                      "Master's in Digital Production, New York University, USA",
                      "Bachelor's in Mass Communication, Northwestern University, USA"
                    ]}
                    specialization="Islamic Media Production and Digital Storytelling"
                    imageSrc="https://randomuser.me/api/portraits/women/32.jpg"
                    bio="Prof. Rahman brings over 15 years of experience in media production, having worked with major international networks before joining academia. Her expertise in documentary filmmaking and digital storytelling helps students develop powerful narratives for Islamic content in the modern media landscape."
                  />

                  <FacultyProfile
                    name="Dr. Omar Siddiqui"
                    designation="Associate Professor of Web Development"
                    department="Department of Media & Technology"
                    isHead={false}
                    education={[
                      "PhD in Computer Science, University of California Berkeley, USA",
                      "Master's in Web Technologies, Georgia Institute of Technology, USA",
                      "Bachelor's in Software Engineering, University of Waterloo, Canada"
                    ]}
                    specialization="Web Application Development and Islamic UI/UX Design"
                    imageSrc="https://randomuser.me/api/portraits/men/64.jpg"
                    bio="Dr. Siddiqui is a web development expert who has created platforms for numerous Islamic organizations worldwide. He teaches students to build modern, accessible web applications while incorporating Islamic aesthetic principles and ethical considerations in design."
                  />

                  <FacultyProfile
                    name="Prof. Zainab Ahmed"
                    designation="Assistant Professor of Graphic Design"
                    department="Department of Media & Technology"
                    isHead={false}
                    education={[
                      "MFA in Graphic Design, Rhode Island School of Design, USA",
                      "Bachelor's in Fine Arts, Parsons School of Design, USA",
                      "Diploma in Islamic Art, Prince's School of Traditional Arts, UK"
                    ]}
                    specialization="Islamic Visual Design and Typography"
                    imageSrc="https://randomuser.me/api/portraits/women/45.jpg"
                    bio="Prof. Ahmed combines classical Islamic artistic traditions with modern design principles in her work and teaching. Her expertise in Islamic pattern design, calligraphy, and typography helps students create visually compelling content that respects Islamic artistic heritage while engaging contemporary audiences."
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="bg-green-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Faculty</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Islamic Da'wa Academy is always looking for qualified scholars and professionals who share our vision of integrating Islamic knowledge with contemporary education. If you are interested in joining our faculty, please contact us.
            </p>
            <div className="inline-block bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Current Faculty Openings</h3>
              <ul className="text-left space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                  <span className="text-gray-700">Assistant Professor of Arabic Language and Literature</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                  <span className="text-gray-700">Instructor of Islamic Finance and Economics</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                  <span className="text-gray-700">Visiting Scholar for Advanced Hadith Studies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                  <span className="text-gray-700">Technical Instructor for Audio-Visual Production</span>
                </li>
              </ul>
              <div className="mt-6">
                <p className="text-gray-700">For application details, please email: <span className="text-green-700 font-medium">careers@islamicdawaacademy.org</span></p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
