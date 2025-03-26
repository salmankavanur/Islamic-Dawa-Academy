"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#1A4D2E] to-[#4A7C59] shadow-md sticky top-0 z-50 bg-opacity-90">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl text-[#D4A017] font-['Amiri']">
            <span className="text-white">Islamic Da'wa</span> Academy
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-[#D4A017] font-medium font-['DM_Sans']">
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center text-white hover:text-[#D4A017] font-medium font-['DM_Sans']">
              About <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-[#F5F5F5] rounded-lg shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link href="/about" className="block px-4 py-2 text-sm text-[#2D2D2D] hover:bg-[#4A7C59] hover:text-white font-['DM_Sans']">
                About Us
              </Link>
              <Link href="/vision-mission" className="block px-4 py-2 text-sm text-[#2D2D2D] hover:bg-[#4A7C59] hover:text-white font-['DM_Sans']">
                Vision & Mission
              </Link>
              <Link href="/faculty" className="block px-4 py-2 text-sm text-[#2D2D2D] hover:bg-[#4A7C59] hover:text-white font-['DM_Sans']">
                Our Faculty
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center text-white hover:text-[#D4A017] font-medium font-['DM_Sans']">
              Academics <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-[#F5F5F5] rounded-lg shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link href="/programs" className="block px-4 py-2 text-sm text-[#2D2D2D] hover:bg-[#4A7C59] hover:text-white font-['DM_Sans']">
                Programs Offered
              </Link>
              <Link href="/dual-degree" className="block px-4 py-2 text-sm text-[#2D2D2D] hover:bg-[#4A7C59] hover:text-white font-['DM_Sans']">
                Dual Degree System
              </Link>
              <Link href="/curriculum" className="block px-4 py-2 text-sm text-[#2D2D2D] hover:bg-[#4A7C59] hover:text-white font-['DM_Sans']">
                Curriculum
              </Link>
            </div>
          </div>
          <Link href="/facilities" className="text-white hover:text-[#D4A017] font-medium font-['DM_Sans']">
            Facilities
          </Link>
          <Link href="/gallery" className="text-white hover:text-[#D4A017] font-medium font-['DM_Sans']">
            Gallery
          </Link>
          <Link href="/blog" className="text-white hover:text-[#D4A017] font-medium font-['DM_Sans']">
            Blog
          </Link>
          <Link href="/contact" className="text-white hover:text-[#D4A017] font-medium font-['DM_Sans']">
            Contact
          </Link>
        </nav>

        <Button variant="default" className="hidden md:block bg-[#D4A017] text-[#2D2D2D] hover:bg-[#E5B828] transition-all duration-300 rounded-lg font-['DM_Sans']">
          Apply Now
        </Button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F5F5F5] border-t border-[#4A7C59]">
          <div className="container mx-auto px-6 py-3">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-[#2D2D2D] hover:text-[#1A4D2E] py-2 font-['DM_Sans']" onClick={toggleMenu}>
                Home
              </Link>
              <div className="border-t border-[#4A7C59] pt-2">
                <div className="font-medium text-[#2D2D2D] mb-1 font-['DM_Sans']">About</div>
                <div className="pl-3 flex flex-col space-y-2">
                  <Link href="/about" className="text-[#6B7280] text-sm hover:text-[#1A4D2E] font-['DM_Sans']" onClick={toggleMenu}>
                    About Us
                  </Link>
                  <Link href="/vision-mission" className="text-[#6B7280] text-sm hover:text-[#1A4D2E] font-['DM_Sans']" onClick={toggleMenu}>
                    Vision & Mission
                  </Link>
                  <Link href="/faculty" className="text-[#6B7280] text-sm hover:text-[#1A4D2E] font-['DM_Sans']" onClick={toggleMenu}>
                    Our Faculty
                  </Link>
                </div>
              </div>
              <div className="border-t border-[#4A7C59] pt-2">
                <div className="font-medium text-[#2D2D2D] mb-1 font-['DM_Sans']">Academics</div>
                <div className="pl-3 flex flex-col space-y-2">
                  <Link href="/programs" className="text-[#6B7280] text-sm hover:text-[#1A4D2E] font-['DM_Sans']" onClick={toggleMenu}>
                    Programs Offered
                  </Link>
                  <Link href="/dual-degree" className="text-[#6B7280] text-sm hover:text-[#1A4D2E] font-['DM_Sans']" onClick={toggleMenu}>
                    Dual Degree System
                  </Link>
                  <Link href="/curriculum" className="text-[#6B7280] text-sm hover:text-[#1A4D2E] font-['DM_Sans']" onClick={toggleMenu}>
                    Curriculum
                  </Link>
                </div>
              </div>
              <Link href="/facilities" className="text-[#2D2D2D] hover:text-[#1A4D2E] py-2 border-t border-[#4A7C59] font-['DM_Sans']" onClick={toggleMenu}>
                Facilities
              </Link>
              <Link href="/gallery" className="text-[#2D2D2D] hover:text-[#1A4D2E] py-2 border-t border-[#4A7C59] font-['DM_Sans']" onClick={toggleMenu}>
                Gallery
              </Link>
              <Link href="/blog" className="text-[#2D2D2D] hover:text-[#1A4D2E] py-2 border-t border-[#4A7C59] font-['DM_Sans']" onClick={toggleMenu}>
                Blog
              </Link>
              <Link href="/contact" className="text-[#2D2D2D] hover:text-[#1A4D2E] py-2 border-t border-[#4A7C59] font-['DM_Sans']" onClick={toggleMenu}>
                Contact
              </Link>
              <div className="pt-2 border-t border-[#4A7C59]">
                <Button
                  variant="default"
                  className="w-full bg-[#D4A017] text-[#2D2D2D] hover:bg-[#E5B828] transition-all duration-300 rounded-lg font-['DM_Sans']"
                  onClick={toggleMenu}
                >
                  Apply Now
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;