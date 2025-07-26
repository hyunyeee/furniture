"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/image/main/00039434.jpg",
  "/image/main/00039437.jpg",
  "/image/main/00039441.jpg",
  "/image/main/00062231.jpg",
  "/image/main/00062236.jpg",
];

const MainImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 700);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index: number) => {
    if (index === currentIndex) return;
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 700);
  };

  return (
    <div className="relative h-[360px] min-h-[320px] w-full overflow-hidden sm:h-screen">
      <Image
        src={images[currentIndex]}
        alt={`메인 이미지 ${currentIndex + 1}`}
        className={`h-full w-full object-cover object-center transition-opacity duration-[1500ms] ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-[4px] sm:bottom-6 sm:gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-[4px] w-5 cursor-pointer rounded-full transition-colors duration-300 sm:h-[6px] sm:w-9 ${
              currentIndex === index
                ? "bg-white"
                : "bg-white/40 hover:bg-white/70"
            }`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`이미지 ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainImage;
