import React, { useEffect, useState } from "react";
import CustomModal from "./CustomModal";

const galleryArr = [
  {
    _id: "1",
    image: "/image1.jpeg",
    text: "Description of image 1",
    placing: "md:col-span-2 md:row-span-2",
  },
  {
    _id: "2",
    image: "/image2.png",
    text: "Description of image 2",
    placing: "md:col-span-2 md:row-span-1",
  },
  {
    _id: "3",
    image: "/image3.jpeg",
    text: "Description of image 3",
    placing: "md:col-span-2 md:row-span-1",
  },
  {
    _id: "4",
    image: "/image4.png",
    text: "Description of image 4",
    placing: "md:col-span-2 md:row-span-1",
  },
  {
    _id: "5",
    image: "/image5.jpeg",
    text: "Description of image 5",
    placing: "md:col-span-1 md:row-span-1",
  },
  {
    _id: "6",
    image: "/image6.jpg",
    text: "Description of image 6",
    placing: "md:col-span-1 md:row-span-1",
  },
  {
    _id: "7",
    image: "/image7.jpg",
    text: "Description of image 7",
    placing: "md:col-span-1 md:row-span-1",
  },
  {
    _id: "8",
    image: "/image8.avif",
    text: "Description of image 8",
    placing: "md:col-span-1 md:row-span-1",
  },
  {
    _id: "9",
    image: "image9.jpg",
    text: "Description of image 9",
    placing: "md:col-span-1 md:row-span-1",
  },

  {
    _id: "10",
    image: "image10.jpg",
    text: "Description of image 10",
    placing: "md:col-span-1 md:row-span-1",
  },
  {
    _id: "11",
    image: "image11.jpg",
    text: "Description of image 11",
    placing: "md:col-span-1 md:row-span-1",
  },
  {
    _id: "12",
    image: "image12.jpg",
    text: "Description of image 12",
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
