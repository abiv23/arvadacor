"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Hero Banner Section with Logo */}
      <div className="w-full relative h-[250px] overflow-hidden">
        <Image
          src="https://ext.same-assets.com/3262606799/2431624552.jpeg"
          alt="Cor Banner - Blacksmith working with fire"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-40">
          <h1 className="text-5xl font-bold mb-1">Cor</h1>
          <div className="text-xl font-light tracking-wider">Prayer • Formation • Fraternity</div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-cor-navy text-white py-3">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex space-x-8 text-sm">
              <Link href="/" className="hover:text-cor-gold transition duration-200">
                Home
              </Link>
              <Link href="/past-gatherings" className="hover:text-cor-gold transition duration-200">
                Past Gatherings
              </Link>
              <Link href="/about" className="hover:text-cor-gold transition duration-200">
                About
              </Link>
              <Link href="/resources" className="hover:text-cor-gold transition duration-200">
                Resources
              </Link>
              <Link href="/contact" className="hover:text-cor-gold transition duration-200">
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white z-20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-cor-navy z-10 md:hidden pt-16">
          <div className="flex flex-col items-center space-y-6 pt-8 text-lg">
            <Link
              href="/"
              className="text-white hover:text-cor-gold transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/past-gatherings"
              className="text-white hover:text-cor-gold transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Past Gatherings
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-cor-gold transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/resources"
              className="text-white hover:text-cor-gold transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-cor-gold transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
