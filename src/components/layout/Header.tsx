"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Navigation links for Cor
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Past Gatherings", href: "/past-gatherings" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // If not visible, don't render anything to avoid taking up space
  if (!isVisible) {
    return null;
  }

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 animate-fade-in-down backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-sm"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span 
              className="text-xl font-bold text-cor-navy" 
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Cor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                href={link.href} 
                className="text-cor-navy font-medium hover:text-cor-gold transition duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cor-navy z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 space-y-4 bg-white/90 backdrop-blur-md">
          {navLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.href} 
              className="block text-cor-navy font-medium hover:text-cor-gold transition duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
