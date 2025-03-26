import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-r from-[#1A4D2E] to-[#4A7C59] flex items-center">
      {/* Islamic Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-15 bg-repeat"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')",
          backgroundSize: "400px",
        }}
      ></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight font-['Rubik']">
            Nurturing Spiritual & Academic Excellence
          </h1>
          <p className="text-xl text-[#F5F5F5] mb-8 leading-relaxed font-['DM_Sans']">
            Islamic Da'wa Academy provides a unique educational environment where Huffaz can pursue dual degrees in Islamic studies and secular education from UGC approved universities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#D4A017] text-[#2D2D2D] hover:bg-[#E5B828] transition-all duration-300 rounded-lg font-['DM_Sans']"
            >
              <Link href="/programs">Explore Programs</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-[#D4A017] hover:bg-[#4A7C59] hover:text-white transition-all duration-300 rounded-lg font-['DM_Sans']"
            >
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;