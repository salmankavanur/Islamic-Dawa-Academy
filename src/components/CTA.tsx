import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-800 to-green-900 relative overflow-hidden">
      {/* Islamic pattern overlay - very subtle */}
      <div
        className="absolute inset-0 opacity-5 bg-repeat"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')",
          backgroundSize: "300px"
        }}
      ></div>

      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-green-700 rounded-full opacity-20"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-green-700 rounded-full opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Begin Your Journey of Knowledge and Faith</h2>
          <p className="text-xl text-green-100 mb-10">
            Join Islamic Da'wa Academy and embark on a transformative educational journey that combines Islamic knowledge with modern education.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              <Link href="/admissions">Apply for Admission</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-800">
              <Link href="/contact">Request Information</Link>
            </Button>
          </div>

          <p className="mt-8 text-green-200">
            Applications are now open for the upcoming academic year. Limited seats available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
