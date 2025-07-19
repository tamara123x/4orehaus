import React from 'react';
import { Star } from 'lucide-react';
import avatar1 from './images/1.jpg';
import avatar2 from './images/2.jpg';
import avatar3 from './images/3.jpg';
import avatar4 from './images/4.jpg';
import avatar5 from './images/5.jpg';
import avatar6 from './images/6.jpg';
import avatar7 from './images/7.svg';
import avatar8 from './images/8.svg';
import avatar9 from './images/9.jpg';
import avatar10 from './images/10.svg';
import avatar11 from './images/11.jpg';
import avatar12 from './images/12.jpg';
import avatar13 from './images/13.jpg';
import avatar14 from './images/14.jpg';
import avatar15 from './images/15.jpg';
import avatar16 from './images/16.svg';
import avatar17 from './images/17.jpg';
import avatar18 from './images/18.svg';

const testimonials = [
  {
    name: 'Abdullahi Hassan',
    quote: 'We saw a major boost in visibility after their PR support. They know how to create impact.',
    avatar: avatar1,
    rating: 5
  },
  {
    name: 'Zabu Daniel',
    quote: 'Their digital campaigns brought real results and stronger audience engagement. They clearly prioritize client success.',
    avatar: avatar2,
    rating: 4
  },
  {
    name: 'Obi Amaechi',
    quote: 'From concept to delivery, 4orehaus nailed every detail. Their work feels global and polished.',
    avatar: avatar3,
    rating: 5
  },
  {
    name: 'Gbadamosi Bankole',
    quote: 'Working with 4orehaus felt like collaborating with true creatives. They brought our ideas to life with innovation.',
    avatar: avatar4,
    rating: 4
  },
  {
    name: 'Okeke Chidera',
    quote: '4orehaus helped us completely reshape our brand identity. Their creativity and professionalism made all the difference.',
    avatar: avatar5,
    rating: 5
  },
  {
    name: 'Abiola Bankole',
    quote: '4orehaus went beyond just branding. They helped us build something our audience truly connects with.',
    avatar: avatar6,
    rating: 3
  },
  {
    name: 'Tyjani Mohammed',
    quote: 'Their strategic approach helped us launch in a competitive market. We couldn’t have asked for better partners.',
    avatar: avatar7,
    rating: 4
  },
  {
    name: 'Balogun Abimbola',
    quote: 'Their content wasn’t just beautiful—it worked. Every piece told our story perfectly.',
    avatar: avatar8,
    rating: 5
  },
  {
    name: 'Ibeh Favour',
    quote: 'We saw a major boost in visibility after their PR support. They know how to create impact.',
    avatar: avatar9,
    rating: 4
  },
  {
    name: 'Okpara Emmanuel',
    quote: 'TTheir digital campaigns brought real results and stronger audience engagement. They clearly prioritize client success.',
    avatar: avatar10,
    rating: 3
  },
  {
    name: 'Abubakar Saria',
    quote: 'From concept to delivery, 4orehaus nailed every detail. Their work feels global and polished.',
    avatar: avatar11,
    rating: 5
  },
  {
    name: 'Oni David',
    quote: 'WWorking with 4orehaus felt like collaborating with true creatives. They brought our ideas to life with innovation.',
    avatar: avatar12,
    rating: 4
  },
  {
    name: 'Bassey Uchechukwu',
    quote: '4orehaus helped us completely reshape our brand identity. Their creativity and professionalism made all the difference.',
    avatar: avatar13,
    rating: 5
  },
  {
    name: 'Kalu Desmond',
    quote: '4orehaus went beyond just branding. They helped us build something our audience truly connects with.',
    avatar: avatar14,
    rating: 4
  },
  {
    name: 'Adebayo Taiwo',
    quote: 'Their strategic approach helped us launch in a competitive market. We couldn’t have asked for better partners.',
    avatar: avatar15,
    rating: 3
  },
  {
    name: 'Adeoye Olamide',
    quote: 'Their content wasn’t just beautiful—it worked. Every piece told our story perfectly.',
    avatar: avatar16,
    rating: 4
  },
  {
    name: 'Okoro Oluchi',
    quote: 'Their digital campaigns brought real results and stronger audience engagement. They clearly prioritize client success.',
    avatar: avatar17,
    rating: 5
  },
  {
    name: 'Bolaji Adesina',
    quote: 'Their strategic approach helped us launch in a competitive market. We couldn’t have asked for better partners.',
    avatar: avatar18,
    rating: 4
  },
];

function TestimonialCard({ quote, name, avatar, rating }: any) {
  return (
    <div className="min-w-[280px] sm:min-w-[350px] md:min-w-[400px] lg:min-w-[500px] max-w-sm bg-white rounded-2xl shadow-md p-3 md:p-6 mx-2 hover:shadow-xl transition duration-300">
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`mr-1 ${i < rating ? 'text-yellow-500 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="text-[#101010] mb-4 italic text-base leading-relaxed">{quote}</p>
      <div className="flex items-center gap-3 mt-2">
        <img src={avatar} alt={name} loading="lazy" className="w-10 h-10 rounded-full object-cover" />
        <span className="text-sm font-semibold text-[#2E2E2E]">{name}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const lanes = [
    testimonials.slice(0, 6),
    testimonials.slice(6, 12),
    testimonials.slice(12, 18),
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-8 overflow-hidden relative">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-[#131A34] mb-12">
        See what our Clients say about us
      </h2>

      <div className="space-y-3">
        {lanes.map((lane, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex space-x-0 animate-scroll ${
              rowIndex % 2 === 0 ? 'animate-left' : 'animate-too'
            }`}
          >
            {lane.map((t, index) => (
              <div key={`${rowIndex}-${index}`} className={`mt-${(index % 3) * 2} flex-shrink-3`}>
                <TestimonialCard
                  quote={t.quote}
                  name={t.name}
                  avatar={t.avatar}
                  rating={t.rating}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Fading sides */}
      <div className="absolute top-0 left-0 h-full w-10 md:w-24 bg-gradient-to-r from-[#f5f7fb] to-transparent z-10" />
      <div className="absolute top-0 right-0 h-full w-10 md:w-24 bg-gradient-to-l from-[#f5f7fb] to-transparent z-10" />
    </section>
  );
}