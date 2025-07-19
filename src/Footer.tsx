import React from 'react';
import Facebook from './images/Facebook.svg';
import X from './images/X.svg';
import Instagram from './images/Insta.svg';
import Mail from './images/Mail.svg';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-6 py-20 lg:px-24">
      {/* Top Section */}
      <section id="contact" className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-[#131A34]">Contact Information</h4>
          <p className="text-2sm mb-2 text-[#6C757D]">4orehaus@gmail.com</p>
          <p className="text-2sm mb-2 text-[#6C757D]">+234 xxx xxx xxxx</p>
          <p className="text-2sm text-[#6C757D]">Lagos, Nigeria</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-[#131A34]">Quick Links</h4>
          <ul className="space-y-2 text-2sm">
            <li><a href="#services" className="hover:underline text-[#6C757D]">Services</a></li>
            <li><a href="#about" className="hover:underline text-[#6C757D]">About</a></li>
            <li><a href="#contact" className="hover:underline text-[#6C757D]">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-[#131A34]">Contact & Follow Us</h4>
          <div className="flex items-center gap-4">
            <a href="Facebook" className="rounded-full bg-[#131A34] shadow hover:opacity-90 transition">
              <img src={Facebook} alt="Facebook" className="w-10 h-10 p-1.5" />
            </a>
            <a href="X" className="rounded-full bg-[#131A34] shadow hover:opacity-90 transition">
              <img src={X} alt="X" className="w-10 h-10 p-2.5" />
            </a>
            <a href="https://www.instagram.com/4orehaus/"  target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#131A34] shadow hover:opacity-90 transition">
              <img src={Instagram} alt="Instagram" className="w-10 h-10 p-2" />
            </a>
            <a href="mailto:4orehaus@gmail.com" className="rounded-full bg-[#131A34] shadow hover:opacity-90 transition">
              <img src={Mail} alt="Gmail" className="w-10 h-10 p-2.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="border-t pt-8 text-center text-2sm text-[#6C757D]">
        © 2025 4orehaus. All rights reserved.
      </div>
    </footer>
  );
}
