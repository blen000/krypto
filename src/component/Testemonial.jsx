import React from 'react';
import { person, person2, Testimonial } from '../assets/Image';

function TestimonialCards() {
  const testimonials = [
    {
      id: 1,
      name: 'ROTINA',
      image: Testimonial,
      description:
        'mcorper scelerisque mi, in malesuada felis malesuada vel.',
    },
    {
      id: 2,
      name: 'HELEN',
      image: person,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.',
    },
    {
      id: 3,
      name: 'JUSTIN',
      image: person2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.',
    },
  ];

  return (
    <div className="bg-[#050031] min-h-screen flex items-center justify-center px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row  space-y-8 lg:space-y-0 lg:space-x-8 mx-4 lg:mx-20">
        <h2></h2>
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-gray-700 text-white rounded-lg shadow-lg p-6 lg:p-8 w-full lg:w-1/3 relative flex flex-col items-center border lg:h-80"
          >
            {/* Profile Image */}
            <div className="absolute -top-10">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full border-4 border-gray-800"
              />
            </div>

            {/* Content */}
            <div className="mt-12 text-center">
              <h3 className="text-lg font-bold tracking-widest mb-4">{item.name}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialCards;
