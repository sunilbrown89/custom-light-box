// ImageSlider.tsx
import React, { useState, useEffect } from "react";
// import "./ImageSlider.css"; // Add Tailwind CSS classes to this file

const ImageSlider = () => {
  const images = [
    "/image1.jpeg",
    "/image2.png",
    "/image3.jpeg",
    "/image4.png",
    "/image5.jpeg",
    "/image6.jpg",
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  useEffect(() => {
    const autoSlide = () => {
      const id: any = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      setIntervalId(id);
    };

    // autoSlide();

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  const slideImage = (index: number) => {
    setImageIndex(index);
  };

  const updateClick = (direction: "prev" | "next") => {
    clearInterval(intervalId || undefined);
    if (direction === "next") {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  return (
    <div className="wrapper">
      <i
        className="fa-solid fa-arrow-left button left-6"
        id="prev"
        onClick={() => updateClick("prev")}
      ></i>
      <div className="image-container">
        <div
          className="carousel transition-transform duration-400 ease-in-out"
          style={{ transform: `translateX(-${imageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt="" />
          ))}
        </div>
      </div>
      <i
        className="fa-solid fa-arrow-right button right-6"
        id="next"
        onClick={() => updateClick("next")}
      ></i>
    </div>
  );
};

export default ImageSlider;
