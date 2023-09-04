import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

const Universitylist = () => {
  const [open, setOpen] = useState(false);
  const [data, setIsData] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    cssEase: "linear",
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div id="Lightbox2023" className=" ">
      <div className="lg:main-container  text-4xl  md:text-4xl pt-5 font-medium tracking-wide ">
        <p className=" ">Light Box 2023</p>
      </div>
      <div className="lg:main-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-5">
        {universities?.map((item, i) => (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 20 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            key={i}
            // key={item.key}
            className="p-3 py-4  flex flex-col justify-between w-full border-t-2 border-blue-300 shadow-xl  mr-[1.7rem] shadow-gray-500  rounded-lg cursor-pointer"
          >
            <img
              src={item?.img}
              alt={item?.title}
              className="rounded-lg w-[27rem] h-[15rem] md:h-[10rem] bg-cover lg:h-[8rem]  "
            />

            <h1 className="text-lg font-bold mt-3 pl-1 md:text-sm ">
              {item?.title}
            </h1>
            <p className="text-lg text-gray-500 pl-1 mt-1 md:text-sm ">
              {item?.place}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Universitylist;

const universities = [
  {
    key: 11,
    images: [
      {
        id: 1,
        img_URL:
          "https://thumb.tildacdn.com/tild3764-6431-4238-b233-316264383136/-/cover/520x300/center/center/-/format/webp/1.png",
      },
      {
        id: 1,
        img_URL:
          "https://thumb.tildacdn.com/tild6463-6263-4132-a536-613437313266/-/cover/520x300/center/center/-/format/webp/FGuPZCcXMAMUuEd.jpeg",
      },
      {
        id: 1,
        img_URL:
          "https://thumb.tildacdn.com/tild3530-3566-4835-b165-386563663765/-/cover/520x300/center/center/-/format/webp/foto1.jpg",
      },
    ],
    img: "https://thumb.tildacdn.com/tild3764-6431-4238-b233-316264383136/-/cover/520x300/center/center/-/format/webp/1.png",
    title: "Peoples Friendship University of Russia (RUDN University)",
    place: "Moscow, Russia",
  },
  {
    key: 12,
    images: [
      {
        id: 1,
        img_URL:
          "https://thumb.tildacdn.com/tild3764-6431-4238-b233-316264383136/-/cover/520x300/center/center/-/format/webp/1.png",
      },
      {
        id: 1,
        img_URL:
          "https://thumb.tildacdn.com/tild6463-6263-4132-a536-613437313266/-/cover/520x300/center/center/-/format/webp/FGuPZCcXMAMUuEd.jpeg",
      },
      {
        id: 1,
        img_URL:
          "https://thumb.tildacdn.com/tild3530-3566-4835-b165-386563663765/-/cover/520x300/center/center/-/format/webp/foto1.jpg",
      },
    ],
    img: "https://thumb.tildacdn.com/tild6463-6263-4132-a536-613437313266/-/cover/520x300/center/center/-/format/webp/FGuPZCcXMAMUuEd.jpeg",
    title: "National Research Technological University 'MISiS",
    place: "Moscow, Russia",
  },
  // {
  //   key: 13,
  //   img: "https://thumb.tildacdn.com/tild3530-3566-4835-b165-386563663765/-/cover/520x300/center/center/-/format/webp/foto1.jpg",
  //   title:
  //     "Bauman Moscow State Technical University(National Research University)",
  //   place: "Moscow, Russia",
  // },
  // {
  //   key: 14,
  //   img: "https://thumb.tildacdn.com/tild3637-3338-4665-a638-363264616239/-/cover/520x300/center/center/-/format/webp/2.png",
  //   title: "National Research University 'MEI'",
  //   place: "Moscow, Russia",
  // },
  // {
  //   key: 15,
  //   img: "https://thumb.tildacdn.com/tild3937-6133-4533-b833-343363376462/-/cover/520x300/center/center/-/format/webp/52d7dc848456eec9dfcc.jpeg",
  //   title: "National Research Technological University 'MISiS'",
  //   place: "Moscow, Russia",
  // },
  // {
  //   key: 16,
  //   img: "https://thumb.tildacdn.com/tild3637-3338-4665-a638-363264616239/-/cover/520x300/center/center/-/format/webp/2.png",
  //   title: "National Research Moscow State University of Civil Engineering",
  //   place: "Moscow, Russia",
  // },
  // {
  //   key: 17,
  //   img: "https://thumb.tildacdn.com/tild3764-6431-4238-b233-316264383136/-/cover/520x300/center/center/-/format/webp/1.png",
  //   title: "D. I. Mendeleev Russian University of Chemical Technology",
  //   place: "Moscow, Russia",
  // },
  // {
  //   key: 18,
  //   img: "https://thumb.tildacdn.com/tild6463-6263-4132-a536-613437313266/-/cover/520x300/center/center/-/format/webp/FGuPZCcXMAMUuEd.jpeg",
  //   title: "Moscow Institute of Physics and Technology (State University)",
  //   place: "Moscow, Russia",
  // },
  // {
  //   key: 19,
  //   img: "https://thumb.tildacdn.com/tild3530-3566-4835-b165-386563663765/-/cover/520x300/center/center/-/format/webp/foto1.jpg",
  //   title: "National Research Nuclear University 'MEPhI' (Consortium leader)",
  //   place: "Moscow, Russia",
  // },
  // {
  //   key: 20,
  //   img: "https://thumb.tildacdn.com/tild3937-6133-4533-b833-343363376462/-/cover/520x300/center/center/-/format/webp/52d7dc848456eec9dfcc.jpeg",
  //   title: "Peter the Great St. Petersburg Polytechnic University",
  //   place: "Moscow, Russia",
  // },
  // {
  //   key: 21,
  //   img: "https://thumb.tildacdn.com/tild3937-6133-4533-b833-343363376462/-/cover/520x300/center/center/-/format/webp/52d7dc848456eec9dfcc.jpeg",
  //   title: "St. Petersburg State University",
  //   place: "Moscow, Russia",
  // },

  // {
  //   key: 22,
  //   img: "https://thumb.tildacdn.com/tild3637-3338-4665-a638-363264616239/-/cover/520x300/center/center/-/format/webp/2.png",
  //   title: "Sevastopol State University",
  //   place: "Moscow, Russia",
  // },
  // {
  //   key: 23,
  //   img: "https://thumb.tildacdn.com/tild3764-6431-4238-b233-316264383136/-/cover/520x300/center/center/-/format/webp/1.png",
  //   title: "Lobachevsky National Research Nizhny Novgorod State",
  //   place: "Nizhny Novgorod, Russia",
  // },
  // {
  //   key: 24,
  //   img: "https://thumb.tildacdn.com/tild6463-6263-4132-a536-613437313266/-/cover/520x300/center/center/-/format/webp/FGuPZCcXMAMUuEd.jpeg",
  //   title:
  //     "Ural Federal University named after the first Preskeyent of Russia B. N. Yeltsin.",
  //   place: "Ekaterinburg, Russia",
  // },
  // {
  //   key: 25,
  //   img: "https://thumb.tildacdn.com/tild3530-3566-4835-b165-386563663765/-/cover/520x300/center/center/-/format/webp/foto1.jpg",
  //   title:
  //     "Kazan National Research Technical University named after A.N. Tupolev-KAI",
  //   place: "Kazan, Russia",
  // },
  // {
  //   key: 26,
  //   img: "https://thumb.tildacdn.com/tild3937-6133-4533-b833-343363376462/-/cover/520x300/center/center/-/format/webp/52d7dc848456eec9dfcc.jpeg",
  //   title: "Voronezh State University",
  //   place: "Voronezh, Russia",
  // },
  // {
  //   key: 27,
  //   img: "https://thumb.tildacdn.com/tild3066-6137-4362-b836-613266633065/-/cover/520x300/center/center/-/format/webp/3.jpeg",
  //   title: "Ivanovo State Power Engineering University named after V. I. Lenin",
  //   place: "Ivanovo, Russia",
  // },
  // {
  //   key: 28,
  //   img: "https://thumb.tildacdn.com/tild3637-3338-4665-a638-363264616239/-/cover/520x300/center/center/-/format/webp/2.png",
  //   title: "National Research Tomsk Polytechnic University",
  //   place: "Tomsk, Russia",
  // },
  // {
  //   key: 29,
  //   img: "https://thumb.tildacdn.com/tild3764-6431-4238-b233-316264383136/-/cover/520x300/center/center/-/format/webp/1.png",
  //   title:
  //     "Saint Petersburg State Institute of Technology (Technical University)",
  //   place: "Moscow, Russia",
  // },
  // {
  //   key: 30,
  //   img: "https://thumb.tildacdn.com/tild3637-3338-4665-a638-363264616239/-/cover/520x300/center/center/-/format/webp/2.png",
  //   title:
  //     "Saint Petersburg State Institute of Technology (Technical University)",
  //   place: "Moscow, Russia",
  // },
  // {
  //   key: 31,
  //   img: "https://thumb.tildacdn.com/tild3066-6137-4362-b836-613266633065/-/cover/520x300/center/center/-/format/webp/3.jpeg",
  //   title:
  //     "Saint Petersburg State Institute of Technology (Technical University)",
  //   place: "Moscow, Russia",
  // },
  // {
  //   key: 32,
  //   img: "https://thumb.tildacdn.com/tild3937-6133-4533-b833-343363376462/-/cover/520x300/center/center/-/format/webp/52d7dc848456eec9dfcc.jpeg",
  //   title:
  //     "Saint Petersburg State Institute of Technology (Technical University)",
  //   place: "Moscow, Russia",
  // },
  // {
  //   key: 33,
  //   img: "https://thumb.tildacdn.com/tild3937-6133-4533-b833-343363376462/-/cover/520x300/center/center/-/format/webp/52d7dc848456eec9dfcc.jpeg",
  //   title:
  //     "Saint Petersburg State Institute of Technology (Technical University)",
  //   place: "Moscow, Russia",
  // },
];
