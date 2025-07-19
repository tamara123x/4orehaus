import React from 'react';
import Facebook from './images/Facebook.svg';
import X from './images/X.svg';
import Instagram from './images/Insta.svg';
import Mail from './images/Mail.svg';
import Wlogo from './images/Wlogo.svg'
import GLogo from './images/GLogo.svg';
import Creativity from './images/Creativity.svg';
import Client from './images/Client.svg';
import Excellence from './images/Excellence.svg';
import Integrity from './images/Integrity.svg';

export default function AboutUs() {
  return (
    <div>

      {/* OUR FOUNDATION */}
      <section className="bg-white py-20 px-6 text-center">
        <h3 className="text-3xl md:text-5xl font-bold text-[#131A34] mb-10 md:mb-20">Our Foundation</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <div className="space-y-2">
            <div className="bg-[#D6C79D] rounded-full w-16 h-16 flex items-center justify-center text-2xl mx-auto">
              <img src={Creativity} alt=" Integrity" className="w-12 h-12 p-2.5" />
            </div>
            <h4 className="font-bold md:text-xl text-[#131A34]">Creativity</h4>
            <p className="text-[#6C757D] md:text-lg">Innovation drives everything we do</p>
          </div>
          <div className="space-y-2">
            <div className="bg-[#D6C79D] rounded-full w-16 h-16 flex items-center justify-center text-2xl mx-auto">
              <img src={Client} alt=" Integrity" className="w-12 h-12 p-2.5" />
            </div>
            <h4 className="font-bold md:text-xl text-[#131A34]">Client-Centricity</h4>
            <p className="text-[#6C757D] md:text-lg">Your success is our priority</p>
          </div>
          <div className="space-y-2">
            <div className="bg-[#D6C79D] rounded-full w-16 h-16 flex items-center justify-center text-2xl mx-auto">
              <img src={Excellence} alt=" Integrity" className="w-12 h-12 p-2.5" />
            </div>
            <h4 className="font-bold md:text-xl text-[#131A34]">Excellence</h4>
            <p className="text-[#6C757D] md:text-lg">We deliver beyond expectations</p>
          </div>
          <div className="space-y-2">
            <div className="bg-[#D6C79D] rounded-full w-16 h-16 flex items-center justify-center text-2xl mx-auto">
              <img src={Integrity} alt=" Integrity" className="w-12 h-12 p-2.5" />
            </div>
            <h4 className="font-bold md:text-xl text[#131A34]">Integrity</h4>
            <p className="text-[#6C757D] md:text-lg">Trust and transparency guide our relationships</p>
          </div>
        </div>
      </section>

      {/* MAKING A DIFFERENCE */}
      <section className="bg-[#D6C79D] text-[#0d0f2b] py-10 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <img src={Wlogo}alt="4orehaus logo" className="mx-auto w-50 mb-10" />
          <h3 className="text-2xl md:text-4xl font-bold mb-6 text-[#131A34]">Making a Difference</h3>
          <p className="text-lg md:text-xl mb-16 text-[#131A34]">
            We're committed to promoting creativity, education, and social responsibility
            while building a stronger creative community across Nigeria and beyond.
          </p>
          <a href="https://www.instagram.com/4orehaus/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#131A34] md:text-xl text-white px-6 md:px-8 py-4 rounded-full font-semibold shadow hover:opacity-90 transition">
            Start Your Journey
          </a>
        </div>
      </section>

      {/* READY TO TRANSFORM */}
      <section className="bg-[#131A34] text-white py-10 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <img src={GLogo} alt="4orehaus logo" className="mx-auto w-50 mb-10" />
          <h3 className="text-2xl md:text-4xl font-bold mb-6">Ready to Transform Your Brand?</h3>
          <p className="text-lg md:text-xl mb-16 text-[#D6C79D]">
            Let’s create something extraordinary together.
          </p>
          <a href="https://www.instagram.com/4orehaus/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#D6C79D] md:text-xl text-[#131A34] px-6 md:px-8 py-4 rounded-full font-semibold shadow hover:opacity-90 transition">
            Start Your Journey
          </a>
        </div>
      </section>

      {/* CONTACT LINKS */}
      <section className="bg-white py-10 md:py-20 px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-[#131A34] mb-12">Contact Links</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-center space-y-1">
            <a href="Facebook" className="rounded-full bg-[#131A34] shadow hover:opacity-90 transition">
              <img src={Facebook} alt="Facebook" className="w-12 h-12 p-1.5" />
            </a>
            <span className='text-[#131A34] md:text-lg font-semibold'>Facebook</span>
            <span className="text-2sm text-[#6C757D]">@4orehaus</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <a href="X" className="rounded-full bg-[#131A34] shadow hover:opacity-90 transition">
              <img src={X} alt="X" className="w-12 h-12 p-2.5" />
            </a>
            <span className='text-[#131A34] md:text-lg font-semibold'>X</span>
            <span className="text-2sm text-[#6C757D]">@4orehaus</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <a href="https://www.instagram.com/4orehaus/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#131A34] shadow hover:opacity-90 transition">
              <img src={Instagram} alt="Instagram" className="w-12 h-12 p-2" />
            </a>
            <span className='text-[#131A34] md:text-lg font-semibold'>Instagram</span>
            <span className="text-2sm text-[#6C757D]">@4orehaus</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <a href="mailto:4orehaus@gmail.com"className="rounded-full bg-[#131A34] shadow hover:opacity-90 transition">
              <img src={Mail} alt="Gmail" className="w-12 h-12 p-2.5" />
            </a>
            <span className='text-[#131A34] md:text-lg font-semibold'>Gmail</span>
            <span className="text-s2m text-[#6C757D]">@4orehaus</span>
          </div>
        </div>
      </section>

    </div>
  );
}
