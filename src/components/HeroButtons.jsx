import React from 'react';

const HeroButtons = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-16 mb-20">
      <a
        href="/menu"
        className="bg-white text-[#4d0f0f] font-bold py-4 px-8 text-xl rounded-full hover:bg-gray-200 transition"
      >
        Ver Menú
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-[#4d0f0f] font-bold py-4 px-8 text-xl rounded-full hover:bg-gray-200 transition"
      >
        Contacto
      </a>
    </div>
  );
};

export default HeroButtons;