import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import LeftArrow from "@/assets/images/leftArrow.svg";
import RightArrow from "@/assets/images/rightArrow.svg";

const Carousel = ({ children, startIndex = 0, className, hideDots }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className={`relative w-full h-full ${className || ""}`}>
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        {children}
      </div>
      {!hideDots && (
        <div className="flex justify-center -mt-4 z-[2] relative">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 mx-1 rounded-full border-gray-400 border-[0.5px] ${
                index === selectedIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
      >
        <LeftArrow className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        onClick={() => emblaApi && emblaApi.scrollNext()}
      >
        <RightArrow className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
      </button>
    </div>
  );
};

export default Carousel;
