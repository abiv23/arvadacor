// components/home/VideoSection.jsx
"use client";

import { useState, useEffect, useRef } from "react";

export default function VideoSection({ videoId = "sqdaJFw07-s" }) {
  const [videoHeight, setVideoHeight] = useState("100vh");
  const containerRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        // Maintain 16:9 aspect ratio while taking full width
        const width = containerRef.current.offsetWidth;
        const calculatedHeight = Math.floor(width * (9 / 16));
        
        // Limit height to viewport height if needed
        const maxHeight = window.innerHeight;
        const optimalHeight = Math.min(calculatedHeight, maxHeight);
        
        setVideoHeight(`${optimalHeight}px`);
      }
    };

    // Initial calculation
    updateDimensions();

    // Update on window resize
    window.addEventListener("resize", updateDimensions);
    
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full relative bg-black"
      style={{ height: videoHeight }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&showinfo=0&modestbranding=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
}