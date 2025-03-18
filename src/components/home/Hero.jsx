"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll event to create parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate transform value based on scroll position
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.4}px)`, // Adjust the multiplier for desired effect intensity
    transition: "transform 0.1s ease-out"
  };

  return (
    <div className="w-full relative h-[550px] overflow-hidden">
      <div className="absolute inset-0" style={{ height: "120%", top: "-20%" }}>
        <Image
          src="/images/hero-cor.png"
          alt="Cor Banner - Blacksmith working with fire"
          fill
          priority
          className="object-cover"
          style={parallaxStyle}
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-40">
        <h1 className="text-5xl font-bold mb-1">Cor</h1>
        <div className="text-xl font-light tracking-wider">Prayer • Formation • Fraternity</div>
      </div>
    </div>
  );
}