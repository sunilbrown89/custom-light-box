import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  galleryArray,
}: {
  autoSlide?: boolean | undefined;
  autoSlideInterval?: number | undefined;
  galleryArray: IGalleryPrc[];
}) {
  const [curr, setCurr] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? galleryArray.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === galleryArray.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr]);

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-2  transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {galleryArray?.map((item: any, i: number) => {
          return <img src={item?.image} alt="" className="" key={i} />;
        })}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          {/* <ChevronLeft size={40} /> */}
          LEFT
        </button>
        <button
          onClick={next}
          className={`p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white `}
        >
          {/* <ChevronRight size={40} /> */}
          RIGHT
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {galleryArray.map((_: any, i: any) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2 border-2 border-red-500" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
