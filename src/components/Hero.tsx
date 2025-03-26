import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-r from-green-900 to-green-700 flex items-center">
      {/* Islamic Pattern Overlay - Semi-transparent */}
      <div
        className="absolute inset-0 opacity-10 bg-repeat"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')",
          backgroundSize: "300px"
        }}
      ></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Nurturing Spiritual & Academic Excellence
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Islamic Da'wa Academy provides a unique educational environment where Huffaz can pursue dual degrees in Islamic studies and secular education from UGC approved universities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
              <Link href="/programs">Explore Programs</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-800 hover:text-white">
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
