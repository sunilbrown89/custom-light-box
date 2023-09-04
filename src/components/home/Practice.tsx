import React from "react";
import Carousel from "./Carousal";
const galleryArr = [
  {
    _id: "1",
    image:
      "https://thumb.tildacdn.com/tild3530-3566-4835-b165-386563663765/-/cover/520x300/center/center/-/format/webp/foto1.jpg",
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
    placing: "md:col-span-1 md:row-span-1",
  },
  {
    _id: "4",
    image:
      "https://thumb.tildacdn.com/tild3637-3338-4665-a638-363264616239/-/cover/520x300/center/center/-/format/webp/2.png",
    text: "Description of image 4",
    placing: "md:col-span-1 md:row-span-1",
  },
  {
    _id: "5",
    image:
      "https://thumb.tildacdn.com/tild3764-6431-4238-b233-316264383136/-/cover/520x300/center/center/-/format/webp/1.png",
    text: "Description of image 5",
    placing: "md:col-span-2 md:row-span-1",
  },
  {
    _id: "6",
    image:
      "https://thumb.tildacdn.com/tild6463-6263-4132-a536-613437313266/-/cover/520x300/center/center/-/format/webp/FGuPZCcXMAMUuEd.jpeg",
    text: "Description of image 6",
    placing: "md:col-span-1 md:row-span-1",
  },
  {
    _id: "7",
    image:
      "https://thumb.tildacdn.com/tild3530-3566-4835-b165-386563663765/-/cover/520x300/center/center/-/format/webp/foto1.jpg",
    text: "Description of image 7",
    placing: "md:col-span-1 md:row-span-1",
  },
  {
    _id: "8",
    image:
      "https://thumb.tildacdn.com/tild3937-6133-4533-b833-343363376462/-/cover/520x300/center/center/-/format/webp/52d7dc848456eec9dfcc.jpeg",
    text: "Description of image 8",
    placing: "md:col-span-2 md:row-span-1",
  },
  {
    _id: "9",
    image:
      "https://thumb.tildacdn.com/tild3637-3338-4665-a638-363264616239/-/cover/520x300/center/center/-/format/webp/2.png",
    text: "Description of image 9",
    placing: "md:col-span-1 md:row-span-2",
  },
  {
    _id: "10",
    image:
      "https://thumb.tildacdn.com/tild3764-6431-4238-b233-316264383136/-/cover/520x300/center/center/-/format/webp/1.png",
    text: "Description of image 10",
    placing: "md:col-span-1 md:row-span-1",
  },
  {
    _id: "11",
    image:
      "https://thumb.tildacdn.com/tild6463-6263-4132-a536-613437313266/-/cover/520x300/center/center/-/format/webp/FGuPZCcXMAMUuEd.jpeg",
    text: "Description of image 11",
    placing: "md:col-span-2 md:row-span-2",
  },
  {
    _id: "12",
    image:
      "https://thumb.tildacdn.com/tild3937-6133-4533-b833-343363376462/-/cover/520x300/center/center/-/format/webp/52d7dc848456eec9dfcc.jpeg",
    text: "Description of image 12",
    placing: "md:col-span-1 md:row-span-1",
  },
  {
    _id: "13",
    image:
      "https://thumb.tildacdn.com/tild3066-6137-4362-b836-613266633065/-/cover/520x300/center/center/-/format/webp/3.jpeg",
    text: "Description of image 13",
    placing: "md:col-span-1 md:row-span-1",
  },
  {
    _id: "14",
    image:
      "https://thumb.tildacdn.com/tild3637-3338-4665-a638-363264616239/-/cover/520x300/center/center/-/format/webp/2.png",
    text: "Description of image 14",
    placing: "md:col-span-1 md:row-span-1",
  },
];
const Practice = () => {
  return (
    <section className="main-container">
      <div className="relative">
        <div className="max-w-lg">
          <p>425</p>
          <Carousel slides={galleryArr} />
        </div>
      </div>
    </section>
  );
};

export default Practice;