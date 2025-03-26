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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="font-bold text-xl text-green-800">
            <span className="text-green-700">Islamic Da'wa</span> Academy
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-green-700 font-medium">
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-green-700 font-medium">
              About <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                About Us
              </Link>
              <Link href="/vision-mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                Vision & Mission
              </Link>
              <Link href="/faculty" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                Our Faculty
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-green-700 font-medium">
              Academics <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link href="/programs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                Programs Offered
              </Link>
              <Link href="/dual-degree" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                Dual Degree System
              </Link>
              <Link href="/curriculum" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                Curriculum
              </Link>
            </div>
          </div>
          <Link href="/facilities" className="text-gray-700 hover:text-green-700 font-medium">
            Facilities
          </Link>
          <Link href="/gallery" className="text-gray-700 hover:text-green-700 font-medium">
            Gallery
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-green-700 font-medium">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-700 font-medium">
            Contact
          </Link>
        </nav>

        <Button variant="default" className="hidden md:block bg-green-700 hover:bg-green-800">
          Apply Now
        </Button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-green-700 py-2" onClick={toggleMenu}>
                Home
              </Link>
              <div className="border-t border-gray-100 pt-2">
                <div className="font-medium text-gray-700 mb-1">About</div>
                <div className="pl-3 flex flex-col space-y-2">
                  <Link href="/about" className="text-gray-600 text-sm hover:text-green-700" onClick={toggleMenu}>
                    About Us
                  </Link>
                  <Link href="/vision-mission" className="text-gray-600 text-sm hover:text-green-700" onClick={toggleMenu}>
                    Vision & Mission
                  </Link>
                  <Link href="/faculty" className="text-gray-600 text-sm hover:text-green-700" onClick={toggleMenu}>
                    Our Faculty
                  </Link>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-2">
                <div className="font-medium text-gray-700 mb-1">Academics</div>
                <div className="pl-3 flex flex-col space-y-2">
                  <Link href="/programs" className="text-gray-600 text-sm hover:text-green-700" onClick={toggleMenu}>
                    Programs Offered
                  </Link>
                  <Link href="/dual-degree" className="text-gray-600 text-sm hover:text-green-700" onClick={toggleMenu}>
                    Dual Degree System
                  </Link>
                  <Link href="/curriculum" className="text-gray-600 text-sm hover:text-green-700" onClick={toggleMenu}>
                    Curriculum
                  </Link>
                </div>
              </div>
              <Link href="/facilities" className="text-gray-700 hover:text-green-700 py-2 border-t border-gray-100" onClick={toggleMenu}>
                Facilities
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-green-700 py-2 border-t border-gray-100" onClick={toggleMenu}>
                Gallery
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-700 py-2 border-t border-gray-100" onClick={toggleMenu}>
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-700 py-2 border-t border-gray-100" onClick={toggleMenu}>
                Contact
              </Link>
              <div className="pt-2 border-t border-gray-100">
                <Button variant="default" className="w-full bg-green-700 hover:bg-green-800" onClick={toggleMenu}>
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
