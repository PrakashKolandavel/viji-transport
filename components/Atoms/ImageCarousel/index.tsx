"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import carousel01 from '@/components/assets/images/carousel/carousel-01.jpeg';
import carousel02 from '@/components/assets/images/carousel/carousel-02.jpeg';
import carousel03 from '@/components/assets/images/carousel/carousel-03.jpeg';
import carousel04 from '@/components/assets/images/carousel/carousel-04.jpeg';
import carousel05 from '@/components/assets/images/carousel/carousel-05.jpeg';
import carousel06 from '@/components/assets/images/carousel/carousel-06.jpeg';
import carousel07 from '@/components/assets/images/carousel/carousel-07.jpeg';
import carousel08 from '@/components/assets/images/carousel/carousel-08.jpeg';
import carousel09 from '@/components/assets/images/carousel/carousel-09.jpeg';
import carousel10 from '@/components/assets/images/carousel/carousel-10.jpeg';
import carousel11 from '@/components/assets/images/carousel/carousel-11.jpeg';
import carousel12 from '@/components/assets/images/carousel/carousel-12.jpeg';

const carouselImages: StaticImageData[] = [
  carousel01,
  carousel02,
  carousel03,
  carousel04,
  carousel05,
  carousel06,
  carousel07,
  carousel08,
  carousel09,
  carousel10,
  carousel11,
  carousel12,
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselImages.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="fleet-carousel">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`fleet-slide ${index === activeIndex ? "active" : ""}`}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={image}
            alt={`Viji Transport fleet ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="fleet-slide-image"
          />
        </div>
      ))}
      <div className="fleet-dots" aria-label="Fleet photographs">
        {carouselImages.map((_, index) => (
          <button
            type="button"
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show fleet photograph ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
