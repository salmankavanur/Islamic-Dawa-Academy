import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Features from "@/components/Features";
import Programs from "@/components/Programs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#F5F5F5]">
      <Header />
      <Hero />
      <AboutSection />
      <Features />
      <Programs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}