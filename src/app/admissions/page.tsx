import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GraduationCap, Calendar, FilePenLine, Clock, CheckCircle, FileText } from "lucide-react";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Admissions</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Join Islamic Da'wa Academy and embark on a transformative educational journey that combines Islamic knowledge with modern education.
          </p>
        </div>
      </section>

      {/* Admissions Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Begin Your Journey with Us</h2>
              <p className="text-lg text-gray-600">
                Islamic Da'wa Academy welcomes dedicated students who wish to pursue excellence in both Islamic and secular education. Our admissions process is designed to identify motivated individuals committed to academic rigor and spiritual growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-green-50">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="h-6 w-6 text-green-600 mr-3" />
                    <CardTitle>Eligibility Criteria</CardTitle>
                  </div>
                  <CardDescription>
                    Requirements for admission to our programs
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="min-w-[2px] h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Completion of secondary education (10+2) or equivalent</span>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-[2px] h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Basic knowledge of Arabic language (for Islamic Studies program)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-[2px] h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Complete memorization of at least 5 Juz of the Quran (for Huffaz program)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-[2px] h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Minimum 60% marks in qualifying examinations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-[2px] h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Successful completion of entrance examination and interview</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-green-50">
                  <div className="flex items-center mb-3">
                    <FileText className="h-6 w-6 text-green-600 mr-3" />
                    <CardTitle>Required Documents</CardTitle>
                  </div>
                  <CardDescription>
                    Documents needed for your application
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="min-w-[2px] h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Completed application form</span>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-[2px] h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Academic transcripts and certificates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-[2px] h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Two recommendation letters</span>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-[2px] h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Statement of purpose (500 words)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-[2px] h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Identification proof and passport-size photographs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-[2px] h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Proof of Quran memorization (for Huffaz program)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
              <p className="text-lg text-gray-600">
                Follow these steps to apply for admission to Islamic Da'wa Academy programs
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-green-100"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                <TimelineItem
                  icon={<FilePenLine className="h-6 w-6 text-green-600" />}
                  title="Complete Application"
                  description="Fill out the online application form with your personal and academic information"
                  position="left"
                />

                <TimelineItem
                  icon={<FileText className="h-6 w-6 text-green-600" />}
                  title="Submit Required Documents"
                  description="Upload all necessary documents through the online portal or submit physical copies to our admissions office"
                  position="right"
                />

                <TimelineItem
                  icon={<Clock className="h-6 w-6 text-green-600" />}
                  title="Application Review"
                  description="Our admissions committee will review your application and supporting documents"
                  position="left"
                />

                <TimelineItem
                  icon={<Calendar className="h-6 w-6 text-green-600" />}
                  title="Entrance Examination and Interview"
                  description="Qualified candidates will be invited for an entrance examination followed by an interview"
                  position="right"
                />

                <TimelineItem
                  icon={<CheckCircle className="h-6 w-6 text-green-600" />}
                  title="Admission Decision"
                  description="Successful candidates will receive an offer letter with enrollment instructions"
                  position="left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="form" className="w-full">
              <div className="flex justify-center mb-10">
                <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <TabsTrigger value="form">Application Form</TabsTrigger>
                  <TabsTrigger value="dates">Important Dates</TabsTrigger>
                  <TabsTrigger value="fees">Tuition & Financial Aid</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="form">
                <Card>
                  <CardHeader>
                    <CardTitle>Application Form</CardTitle>
                    <CardDescription>
                      Fill out the form below to start your application process
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Personal Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" placeholder="Enter your first name" />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" placeholder="Enter your last name" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email" />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="Enter your phone number" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Textarea id="address" placeholder="Enter your full address" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Program Selection</h3>

                        <div className="space-y-2">
                          <Label htmlFor="program">Select Program</Label>
                          <select id="program" className="w-full p-2 border border-gray-300 rounded-md">
                            <option value="">Select a program</option>
                            <option value="islamic-studies">Islamic Studies</option>
                            <option value="quran-memorization">Quran Memorization</option>
                            <option value="dual-degree">Dual Degree Program</option>
                            <option value="media-technology">Media & Technology</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="entry-term">Entry Term</Label>
                          <select id="entry-term" className="w-full p-2 border border-gray-300 rounded-md">
                            <option value="">Select entry term</option>
                            <option value="fall-2025">Fall 2025</option>
                            <option value="spring-2026">Spring 2026</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Educational Background</h3>

                        <div className="space-y-2">
                          <Label htmlFor="education-level">Highest Education Level</Label>
                          <select id="education-level" className="w-full p-2 border border-gray-300 rounded-md">
                            <option value="">Select your highest education level</option>
                            <option value="high-school">High School</option>
                            <option value="associate">Associate Degree</option>
                            <option value="bachelor">Bachelor's Degree</option>
                            <option value="master">Master's Degree</option>
                            <option value="doctorate">Doctorate</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="institution">Institution Name</Label>
                          <Input id="institution" placeholder="Enter your previous institution name" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="islamic-education">Islamic Education Background</Label>
                          <Textarea id="islamic-education" placeholder="Please provide details of any prior Islamic education" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Statement of Purpose</h3>

                        <div className="space-y-2">
                          <Label htmlFor="purpose">Why do you want to join Islamic Da'wa Academy?</Label>
                          <Textarea
                            id="purpose"
                            placeholder="Please write a brief statement about your educational goals and why you want to join our academy (500 words max)"
                            className="min-h-[150px]"
                          />
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <Button size="lg" className="bg-green-700 hover:bg-green-800 px-8">
                          Submit Application
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="dates">
                <Card>
                  <CardHeader>
                    <CardTitle>Important Dates</CardTitle>
                    <CardDescription>
                      Key deadlines for the upcoming academic year
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h3 className="text-lg font-semibold text-green-800 mb-2">Fall 2025 Semester</h3>
                          <ul className="space-y-3">
                            <DateItem date="March 15, 2025" event="Application Opens" />
                            <DateItem date="June 30, 2025" event="Application Deadline" />
                            <DateItem date="July 15-30, 2025" event="Entrance Exams & Interviews" />
                            <DateItem date="August 15, 2025" event="Admission Decision" />
                            <DateItem date="September 1, 2025" event="Tuition Fee Payment Deadline" />
                            <DateItem date="September 15, 2025" event="Orientation Week" />
                            <DateItem date="September 20, 2025" event="Classes Begin" />
                          </ul>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                          <h3 className="text-lg font-semibold text-green-800 mb-2">Spring 2026 Semester</h3>
                          <ul className="space-y-3">
                            <DateItem date="September 15, 2025" event="Application Opens" />
                            <DateItem date="December 15, 2025" event="Application Deadline" />
                            <DateItem date="December 20-30, 2025" event="Entrance Exams & Interviews" />
                            <DateItem date="January 10, 2026" event="Admission Decision" />
                            <DateItem date="January 25, 2026" event="Tuition Fee Payment Deadline" />
                            <DateItem date="February 1, 2026" event="Orientation Week" />
                            <DateItem date="February 8, 2026" event="Classes Begin" />
                          </ul>
                        </div>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <h3 className="text-lg font-semibold text-yellow-800 mb-2">Note</h3>
                        <p className="text-yellow-800">
                          Applications received after the deadline may be considered on a rolling basis subject to availability of seats. International students are advised to apply at least two months before the deadline to allow sufficient time for visa processing.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="fees">
                <Card>
                  <CardHeader>
                    <CardTitle>Tuition & Financial Aid</CardTitle>
                    <CardDescription>
                      Information about program costs and available financial assistance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tuition Fees (Annual)</h3>
                        <div className="rounded-lg overflow-hidden border border-gray-200">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tuition Fee</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Other Fees</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Islamic Studies</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$5,000</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$800</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Quran Memorization</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$4,500</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$800</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dual Degree Program</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$7,500</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1,200</td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Media & Technology</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$6,500</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1,500</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-3 text-sm text-gray-600">
                          * Other fees include registration, library, technology, and student activities fees.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Housing & Meal Plans (Optional)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-800 mb-2">On-Campus Housing</h4>
                            <ul className="space-y-2">
                              <li className="text-sm text-gray-600">Shared Room: $3,500/year</li>
                              <li className="text-sm text-gray-600">Single Room: $5,000/year</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-800 mb-2">Meal Plans</h4>
                            <ul className="space-y-2">
                              <li className="text-sm text-gray-600">Full Board (3 meals/day): $2,800/year</li>
                              <li className="text-sm text-gray-600">Partial Board (2 meals/day): $2,000/year</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Aid Options</h3>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium text-green-800 mb-2">Merit Scholarships</h4>
                            <p className="text-sm text-gray-700">
                              Based on academic excellence and Quranic accomplishments. Can cover up to 75% of tuition fees.
                            </p>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium text-green-800 mb-2">Need-Based Financial Aid</h4>
                            <p className="text-sm text-gray-700">
                              Available for qualified students demonstrating financial need. Applications require submission of family financial information.
                            </p>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium text-green-800 mb-2">Work-Study Program</h4>
                            <p className="text-sm text-gray-700">
                              On-campus employment opportunities that allow students to earn while learning. Available positions include library assistants, IT support, and administrative roles.
                            </p>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium text-green-800 mb-2">External Scholarships</h4>
                            <p className="text-sm text-gray-700">
                              We maintain partnerships with several Islamic foundations and organizations that offer scholarships to our students.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Have Questions About Admissions?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our admissions team is here to help you navigate the application process and answer any questions you may have about our programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              <Link href="/contact">Contact Admissions Office</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
              <Link href="/faq">View Frequently Asked Questions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Timeline Item Component
function TimelineItem({
  icon,
  title,
  description,
  position
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  position: 'left' | 'right';
}) {
  return (
    <div className={`relative flex items-start ${position === 'right' ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-green-50 border-4 border-green-100 rounded-full z-10 flex items-center justify-center">
        {icon}
      </div>

      {/* Content */}
      <div className={`ml-12 md:ml-0 ${position === 'left' ? 'md:mr-auto md:pr-8 md:w-1/2 text-right' : 'md:ml-auto md:pl-8 md:w-1/2'}`}>
        <div className={`bg-white p-4 rounded-lg shadow-md ${position === 'left' ? 'md:mr-0 md:ml-auto' : 'md:ml-0 md:mr-auto'}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

// Date Item Component
function DateItem({ date, event }: { date: string; event: string }) {
  return (
    <li className="flex items-start">
      <div className="min-w-[2px] h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
      <div>
        <span className="block font-medium text-green-800">{date}</span>
        <span className="text-gray-700">{event}</span>
      </div>
    </li>
  );
}
