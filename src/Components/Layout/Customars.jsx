import React, { useEffect, useState } from "react";

export default function Customars() {
  const slides = [
    { id: 1, title: "1" },
    { id: 2, title: "2" },
    { id: 3, title: "3" },
    { id: 4, title: "4" },
    { id: 5, title: "5" },
    { id: 6, title: "6" },
    { id: 7, title: "7" },
  ];

  // অনেকবার duplicate
  const loopSlides = [
    ...slides,
    ...slides,
    ...slides,
    ...slides,
    ...slides,
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden p-10">

      {/* Slider */}
      <div
        className="flex gap-5 transition-transform duration-700 ease-linear"
        style={{
          transform: `translateX(-${current * 33.8}%)`,
        }}
      >

        {loopSlides.map((item, index) => (
          <div
            key={index}
            className="
              min-w-[32%]
              h-[200px]
              bg-gray-300
              rounded-xl
              flex
              items-center
              justify-center
              text-4xl
              flex-shrink-0
            "
          >
            {item.title}
          </div>
        ))}

      </div>
    </div>
  );
}