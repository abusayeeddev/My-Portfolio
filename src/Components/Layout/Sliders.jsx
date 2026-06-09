import { useEffect, useState } from "react";

const data = [1, 2, 3, 4, 5];

// সামনে ৩টা item যোগ করছি
const items = [...data, ...data.slice(0, 3)];

export default function Sliders() {
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === data.length) {
      setTimeout(() => {
        setTransition(false);
        setIndex(0);

        setTimeout(() => {
          setTransition(true);
        }, 50);
      }, 700);
    }
  }, [index]);

  return (
    <div className="overflow-hidden w-full max-w-6xl mx-auto py-10">
      <div
        className={`flex ${transition ? "duration-700" : ""}`}
        style={{
          transform: `translateX(-${index * (100 / 3)}%)`,
          transitionProperty: "transform",
        }}
      >
        {items.map((item, i) => (
          <div key={i} className="min-w-[33.3333%] px-3">
            <div className="h-60 bg-blue-500 rounded-3xl flex items-center justify-center text-white text-4xl font-bold">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}