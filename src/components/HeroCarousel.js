"use client";
import { useState, useEffect } from "react";

const IMAGES = [
  "https://thumbs.dreamstime.com/b/embrace-essence-christian-faith-purple-online-web-graphic-background-perfect-church-websites-biblical-322439875.jpg", // Clothing/Lifestyle
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop", // Journaling/Writing
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2032&auto=format&fit=crop",  // Friendship/Together
  "https://media.istockphoto.com/id/817147678/photo/heart-shape-paper-book-on-the-beach.jpg?s=612x612&w=0&k=20&c=CN_FxOrS7-ix-QgwHoAHqDrHHqrsZExKpEqy0flwIXE="
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {IMAGES.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Hero Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}