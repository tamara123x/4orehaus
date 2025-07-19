import React from 'react';
import heroImage from './images/background.jpg';

export default function Display() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-6"
      style={{
        backgroundImage: `linear-gradient(rgba(13, 15, 43, 0.6), rgba(13, 15, 43, 0.6)), url(${heroImage})`,
      }}
    >
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-20 leading-tight">
          Building Brands That Matter
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed">
          We’re 4orehaus, a creative agency that transforms businesses through innovative branding,
          strategic PR, digital marketing, and premium production. From Nigeria to the world, we craft
          experiences that connect.
        </p>
        <div className="flex justify-center gap-5 flex-nowrap flex-shrink min-w-0">
          <a
            href="#work"
            className="bg-[#D6C79D] text-sm md:text-base lg:text-lg text-[#131A34] px-6 py-3 md:px-8 md:py-4 rounded-full font-bold shadow hover:opacity-90 transition whitespace-nowrap"
          >
            Explore Our Work
          </a>
          <a
            href="https://www.instagram.com/4orehaus/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-white text-sm md:text-base lg:text-lg px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-white hover:text-black transition whitespace-nowrap"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}