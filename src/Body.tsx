import React from 'react';
import People from './images/people.jpg';
import Verlogo from './images/ver-logo.png'
import { Briefcase, Users, Globe, Video } from 'lucide-react';

export default function Body() {
  return (
    <section className='bg-white md:py-16 px-4 md:px-8 ld:px-20'>
      {/* Creative Excellence Delivered*/}
      <section className="py-16 px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#131A34]">Creative Excellence, Delivered</h2>
          <p className="text-[#6C757D] text-lg lg:text-xl  leading-relaxed">
            At 4orehaus, we don't just create campaigns, we build lasting 
            brand legacies. Our team combines strategic thinking with creative 
            innovation to help businesses establish powerful connections 
            with their audiences and achieve sustainable growth.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={People} alt="Creative Team" loading="lazy" className="rounded-xl object-cover w-full" />
        </div>
      </section>

      {/* What We Do Best Section */}
      <section className="bg-[#131A34] text-white py-10 md:py-20 text-center rounded-3xl">
        <div className="text-center mb-12">
          <img src={Verlogo} alt="4orehaus logo" className="mx-auto w-30 md:mb-20" />
          <h3 className="lg:text-3xl text-2xl font-bold py-5">What We Do Best</h3>
        </div>
        <div className="max-w-7xl lg:text-lg mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <Briefcase className="mx-auto mb-3" size={45} />
              <h4 className="font-semibold text-[#D6C79D]">Branding & Identity</h4>
              <p className="mt-2">
                Craft distinctive brand identities 
                that resonate with your audience and stand out in the marketplace.
              </p>
            </div>
            <div>
              <Users className="mx-auto mb-3" size={45} />
              <h4 className="font-semibold text-[#D6C79D]">Public Relations</h4>
              <p className="mt-2">
                Build meaningful relationships and manage your 
                brand's reputation through strategic communication.
              </p>
            </div>
            <div>
              <Globe className="mx-auto mb-3" size={45} />
              <h4 className="font-semibold text-[#D6C79D]">Digital Marketing</h4>
              <p className="mt-2">
                Drive engagement and growth through 
                data-driven digital strategies and compelling content.
              </p>
            </div>
            <div>
              <Video className="mx-auto mb-3" size={45} />
              <h4 className="font-semibold text-[#D6C79D]">Production</h4>
              <p className="mt-2">
                Bring your vision to life with 
                high- quality video, photography, and multimedia content.
              </p>
            </div>
        </div>
      </section>
    </section>
  );
}
