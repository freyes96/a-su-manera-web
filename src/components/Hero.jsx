import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-[#4d0f0f]">
      {/* Sticky logo */}
      <div className="sticky top-0 z-50 bg-[#4d0f0f] flex justify-center items-center py-10">
        <img
          src="/ASuManera-Logo.png"
          alt="A Su Manera Logo"
          className="w-[800px] max-w-full"
        />
      </div>
    </div>
  );
}