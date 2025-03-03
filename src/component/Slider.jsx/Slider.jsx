import React, { useEffect, useRef } from "react";

const Slider = () => {
  const sliderRef = useRef(null);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll Left
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth, behavior: "smooth" });
    }
  };

  // Scroll Right
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mx-4">
      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="overflow-x-auto whitespace-nowrap flex gap-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
      >
        <img src="./ear.webp" alt="ear" className="h-full snap-start" />
        <img src="./fly.webp" alt="fly" className="h-full snap-start" />
        <img src="./mattress.webp" alt="mattress" className="h-full snap-start" />
        <img src="./phone.webp" alt="phone" className="h-full snap-start" />
        <img src="./iphone.webp" alt="iphone" className="h-full snap-start" />
        <img src="./gas.webp" alt="gas" className="h-full snap-start" />
        <img src="./sale.webp" alt="sale" className="h-full snap-start" />
        <img src="./zero.webp" alt="zero" className="h-full snap-start" />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600"
      >
        &lt;
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600"
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;
