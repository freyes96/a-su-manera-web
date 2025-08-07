import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css'; // si quieres mantener estilos opcionales ahí

const images = [
  '/carousel_images/grill-fire.png',
  '/carousel_images/grill1.png',
  '/carousel_images/meat1.png',
  '/carousel_images/meat2.png',
  '/carousel_images/sample1.png',
  '/carousel_images/sample2.png',
  '/carousel_images/table.png',
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = carouselRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;
    const delay = 10;

    const scroll = () => {
      if (!isHovered && container) {
        scrollAmount += scrollStep;
        container.scrollLeft = scrollAmount;

        if (
          scrollAmount >=
          container.scrollWidth - container.clientWidth
        ) {
          scrollAmount = 0; // Reinicia cuando llega al final
        }
      }
    };

    const interval = setInterval(scroll, delay);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      ref={carouselRef}
      className="flex gap-2 overflow-x-auto p-4 w-screen scrollbar-hide"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide-${index}`}
          className="h-[600px] rounded-lg object-cover flex-shrink-0"
        />
      ))}
    </div>
  );
};

export default Carousel;