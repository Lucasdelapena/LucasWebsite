import { useState } from "react";

export default function ImageSlide({ photos = [] }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % photos.length);
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);

  return (
    <div className="w-full max-w-80 mx-auto overflow-hidden">
      {/* Track that shifts left/right */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {photos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full object-contain"
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={prev}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          ◀ Prev
        </button>
        <button
          onClick={next}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}
