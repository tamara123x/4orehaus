import React from 'react';

const objectives = [
  {
    number: '01',
    title: 'Brand Building',
    desc: 'Establish 4orehaus as a leading creative agency in Nigeria and beyond, known for innovative solutions and exceptional client service.',
    color: 'bg-purple-100',
  },
  {
    number: '02',
    title: 'Client Satisfaction',
    desc: 'Deliver high-quality services that meet and exceed client expectations, building long-term relationships and driving client loyalty.',
    color: 'bg-red-100',
  },
  {
    number: '03',
    title: 'Creative Excellence',
    desc: 'Foster a culture of creativity and innovation, producing work that is impactful, engaging, and of the highest quality.',
    color: 'bg-yellow-100',
  },
  {
    number: '04',
    title: 'Business Growth',
    desc: 'Achieve sustainable growth and expansion, increasing revenue and market share through strategic innovation, marketing, and client acquisition.',
    color: 'bg-gray-100',
  },
  {
    number: '05',
    title: 'Community Engagement',
    desc: 'Give back to the community through outreach programs that promote education, creativity, and opportunity for positive social impact.',
    color: 'bg-blue-100',
  },
];

export default function AboutUs() {
  return (
    <section className="bg-white py-20 md:pt-32 px-8 md:px-24 lg:px-32 text-center">
      <h3 className="text-base font-semibold tracking-widest text-[#676767] mb-2">ABOUT US</h3>
      <h2 className="text-3xl md:text-4xl font-bold text-[#131A34] mb-6">What Sets Us Apart?</h2>
      <p className="max-w-3xl mx-auto text-[#6C757D] mb-12 leading-relaxed text-base md:text-xl">
        4orehaus is a creative agency specializing in branding, public relations, digital marketing, and production.
        We help businesses and organizations build strong brands, engage with their audiences, and achieve their
        marketing goals through innovative strategies and high-quality content.
      </p>

      <h3 className="text-3xl md:text-4xl font-semibold text-[#131A34] mb-12">Our Objectives</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
        {objectives.map((obj, index) => (
          <div key={index} className="bg-white shadow-[0_2px_5px_rgba(0,0,0,0.07)] rounded-lg p-6 md:p-8 text-left min-h-[250px]">
            <div className="relative w-fit mb-4">
              <span className="text-2xl md:text-3xl font-bold text-[#131A34] z-10 relative">{obj.number}</span>
              <span
                className={`absolute -right-4 md:-right-5 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full ${obj.color} z-0`}
              ></span>
            </div>
            <h4 className="text-xl md:text-2xl pt-1 pb-4 font-semibold text-[#D6C79D]">{obj.title}</h4>
            <p className="text-base md:text-lg text-[#6C757D] my-2 md:my-7">{obj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
