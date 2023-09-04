import React, { useEffect, useState } from "react";
import CustomModal from "./CustomModal";

const galleryArr = [
  {
    _id: "1",
    image:
      "https://thumb.tildacdn.com/tild3066-6137-4362-b836-613266633065/-/cover/520x300/center/center/-/format/webp/3.jpeg",
    text: "Description of image 1",
    placing: "md:col-span-2 md:row-span-2",
  },
  {
    _id: "2",
    image:
      "https://thumb.tildacdn.com/tild3637-3338-4665-a638-363264616239/-/cover/520x300/center/center/-/format/webp/2.png",
    text: "Description of image 2",
    placing: "md:col-span-2 md:row-span-1",
  },
  {
    _id: "3",
    image:
      "https://thumb.tildacdn.com/tild3937-6133-4533-b833-343363376462/-/cover/520x300/center/center/-/format/webp/52d7dc848456eec9dfcc.jpeg",
    text: "Description of image 3",
    placing: "md:col-span-2 md:row-span-1",
  },
  {
    _id: "4",
    image:
      "https://thumb.tildacdn.com/tild3764-6431-4238-b233-316264383136/-/cover/520x300/center/center/-/format/webp/1.png",
    text: "Description of image 4",
    placing: "md:col-span-2 md:row-span-1",
  },
  {
    _id: "5",
    image:
      "https://thumb.tildacdn.com/tild6463-6263-4132-a536-613437313266/-/cover/520x300/center/center/-/format/webp/FGuPZCcXMAMUuEd.jpeg",
    text: "Description of image 5",
    placing: "md:col-span-1 md:row-span-1",
  },
  {
    _id: "6",
    image:
      "https://thumb.tildacdn.com/tild3530-3566-4835-b165-386563663765/-/cover/520x300/center/center/-/format/webp/foto1.jpg",
    text: "Description of image 6",
    placing: "md:col-span-1 md:row-span-1",
  },
];

const Gallery = () => {
  return (
    <section className="lg:main-container px-1">
      <aside className="flex flex-col items-center gap-4  text-center pt-5">
        <h2 className="font-semibold">A Gallery of Inspiration</h2>
        <p className="description lg:w-4/5">
          Provides all components and types as named exports. Lightbox is
          exported as both default and named export.
        </p>
        <button className=" rounded-lg p-4 bg-black text-white hover:bg-gray-500">
          Download Package
        </button>
      </aside>
      <aside className=" py-5 ">
        <div className="grid grid-cols-2 md:grid-cols-6 md:grid-rows-2 gap-3 md:gap-4 lg:gap-5 pl-1">
          {galleryArr?.map((item: IGallery, index: number) => (
            <GalleryCard item={item} index={index} key={item?._id} />
          ))}
        </div>
      </aside>
    </section>
  );
};

export default Gallery;

const GalleryCard = ({ item, index }: { item: IGallery; index: number }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        key={item?._id}
        className={` relative cursor-pointer group grid place-items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg overflow-hidden ${item.placing}`}
        onClick={() => {
          setActiveIndex(index);
          setOpen(true);
        }}
      >
        <img
          src={item?.image}
          alt={item?.text}
          className="w-full h-full object-cover group-hover:scale-110 common-transition"
        />

        <div className="absolute inset-0 w-full h-full bg-black/10 group-hover:bg-black/40 common-transition text-white font-semibold px-2">
          <p className=""> {item?.text}</p>
        </div>
      </article>
      {open ? (
        <CustomModal
          galleryArr={galleryArr}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          handleClose={() => setOpen(false)}
        />
      ) : null}
    </>
  );
};
