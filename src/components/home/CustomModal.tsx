import ICONS from "assets/icons";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
type props = {
  galleryArr: IGallery[];
  activeIndex: number;
  setActiveIndex: (param: number) => void;
  handleClose: () => void;
};
const CustomModal = ({
  galleryArr,
  activeIndex,
  setActiveIndex,
  handleClose,
}: props) => {
  const [downloadUrl, setDownloadUrl] = useState("");
  const [isPlay, setIsPlay] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isAnimation, setIsAnimation] = useState(true);
  const [prevIndex, setPrevIndex] = useState(activeIndex);
  const miniImagePreview = useRef<HTMLImageElement>(null);
  const mainMiniSlider = useRef<HTMLDivElement>(null);

  const goLeft =
    prevIndex === galleryArr?.length - 1 && activeIndex === 0
      ? activeIndex > prevIndex
      : prevIndex === 0 && activeIndex === galleryArr?.length - 1
      ? true
      : activeIndex < prevIndex;
  const goRight = activeIndex > prevIndex;

  // console.log("goLeft==>", goLeft);
  // console.log("goRight==>", goRight);

  const toggleZoomOut = () => {
    setIsZoomed(true);
  };

  const toggleZoomIn = () => {
    setIsZoomed(false);
  };

  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      setIsFullScreen(false);
      document.exitFullscreen();
    } else {
      setIsFullScreen(true);
      document.querySelector("#fs")?.requestFullscreen();
    }
  };

  useEffect(() => {
    if (activeIndex !== null && activeIndex !== undefined) {
      //activeIndex !== null && activeIndex !== undefined--> here if activeIndex is 0 then it converted to true condition.
      toggleDownload(activeIndex);

      if (activeIndex >= 3 && activeIndex <= galleryArr?.length - 3) {
        handleMiniSlideLTR();
      }
      if (prevIndex === 0 && activeIndex === galleryArr?.length - 1) {
        mainMiniSlider.current?.scrollTo({
          left:
            Number(miniImagePreview?.current?.clientWidth || 0) * activeIndex,
          top: 0,
          behavior: "smooth",
        });
      }

      if (activeIndex === prevIndex) {
        mainMiniSlider.current?.scrollTo({
          left:
            Number(miniImagePreview?.current?.clientWidth || 0) * activeIndex,
          top: 0,
          behavior: "smooth",
        });
      }

      if (activeIndex === 0) {
        handleMiniSlideRTL();
      }
    } else {
      console.log("error getting in progress of useEffect");
    }
  }, [activeIndex]);

  console.log({ activeIndex });
  console.log({ prevIndex });

  const toggleDownload = async (activeIndex: number) => {
    try {
      if (activeIndex !== null && galleryArr[activeIndex]?.image) {
        console.log("Fetching image for activeIndex:", activeIndex);

        await fetch(galleryArr[activeIndex]?.image)
          .then((response) => response.blob())
          .then((blob) => {
            // Create object URL
            const objectUrl = URL.createObjectURL(blob);
            setDownloadUrl(objectUrl);
            // console.log("Download URL set:", objectUrl);
          })
          .catch((error) => console.error(error));
      }
    } catch (error) {
      console.error("Error in toggleDownload:", error);
    }
  };

  const handleNavigation = (type: string) => {
    if (type === "next") {
      const handleNext = () => {
        setPrevIndex(activeIndex);
        setIsAnimation((prev) => !prev);
        if (activeIndex === galleryArr.length - 1) {
          setActiveIndex(0);
        } else {
          setActiveIndex(activeIndex + 1);
          setIsZoomed(false);
        }
      };
      return handleNext();
    } else {
      const handlePrev = () => {
        setPrevIndex(activeIndex);
        setIsAnimation((prev) => !prev);
        if (activeIndex === 0) {
          setActiveIndex(galleryArr.length - 1);
        } else {
          setActiveIndex(activeIndex - 1);
          setIsZoomed(false);
        }
      };
      return handlePrev();
    }
  };

  useEffect(() => {
    if (isPlay) {
      const time = setInterval(() => {
        setIsAnimation((prev) => !prev);
        setPrevIndex(activeIndex);
        if (galleryArr?.length - 1 === activeIndex) {
          setActiveIndex(0);
        } else {
          setActiveIndex(activeIndex + 1);
          setIsZoomed(false);
        }
      }, 2000);

      return () => {
        clearInterval(time);
      };
    }
  }, [activeIndex, isPlay]);

  const handleMiniSlideLTR = () => {
    mainMiniSlider.current?.scrollBy({
      left: goLeft
        ? -(miniImagePreview?.current?.clientWidth || 0)
        : miniImagePreview?.current?.clientWidth || 0,
      top: 0,
      behavior: "smooth",
    });
  };
  const handleMiniSlideRTL = () => {
    mainMiniSlider.current?.scrollTo({
      left: 0,
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <>
      <div
        id="fs"
        className=" fixed z-[9999] inset-0 w-full h-full bg-black select-none "
      >
        <aside className=" absolute top-4 right-3 w-fit h-fit flex items-center gap-4 text-white z-[9999]">
          {isFullScreen ? (
            <span className="cursor-pointer" onClick={toggleFullScreen}>
              <ICONS.ExitScreen />
            </span>
          ) : (
            <span className="cursor-pointer" onClick={toggleFullScreen}>
              <ICONS.FullScreen />
            </span>
          )}

          <span
            id="zoomOut"
            className={`  ${isZoomed ? "text-gray-500 " : "cursor-pointer"}`}
            onClick={toggleZoomOut}
          >
            <ICONS.ZoomImageOut />
          </span>
          <span
            id="zoomIn"
            className={`  ${isZoomed ? "cursor-pointer" : "text-gray-500 "}`}
            onClick={toggleZoomIn}
          >
            <ICONS.ZoomImageIn />
          </span>

          {isPlay ? (
            <span className="cursor-pointer " onClick={() => setIsPlay(false)}>
              <ICONS.ImagePause />
            </span>
          ) : (
            <span className="cursor-pointer" onClick={() => setIsPlay(true)}>
              <ICONS.ImagePlay />
            </span>
          )}

          <span
            className="cursor-pointer"
            onClick={() => {
              toggleDownload(activeIndex);
            }}
          >
            <a href={downloadUrl} download="downloaded_image.jpg">
              <ICONS.ImageDownload />
            </a>
          </span>
          <span className="cursor-pointer" onClick={handleClose}>
            <ICONS.ImageClose />
          </span>
        </aside>

        {/*-------------------------------------------------Big image-div--------------------------------------- */}
        <aside className="absolute top-1/4 md:top-[30%] lg:top-[5%] left-1/2 -translate-x-1/2 w-full grid place-items-center overflow-hidden">
          <img
            src={galleryArr[activeIndex].image}
            alt="photo"
            className={` w-11/12 md:w-10/12 lg:w-3/5 h-[40vh] lg:h-[70vh] object-fill rounded-md transition-all duration-200 ease-in-out  ${
              isZoomed ? ` scale-125` : ""
            } 

            ${
              goLeft
                ? isAnimation
                  ? "slider-animation-x-reverse"
                  : "slider-animation-x-reverse-2"
                : isAnimation
                ? "slider-animation-x"
                : "slider-animation-x-2"
            } 
            `}
          />
          <span className="absolute left-4 top-4 font-bold text-3xl text-white">
            {`${activeIndex}`}
          </span>
          <div
            onClick={() => handleNavigation("")}
            className="cursor-pointer absolute top-1/2 -translate-y-1/2 left-2 z-9999"
          >
            <ICONS.ImagePrev />
          </div>
          <div
            onClick={() => handleNavigation("next")}
            className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 z-9999"
          >
            <ICONS.ImageNext />
          </div>
        </aside>

        {/* ------------------------------------small-image-div ------------------------------------------*/}
        <aside
          ref={mainMiniSlider}
          className="absolute scroll-smooth hidden-scrollbar z-[9999] bottom-10  lg:bottom-5  w-[19rem] md:w-[30rem] p-4 overflow-hidden overflow-x-auto  mx-auto left-1/2 -translate-x-1/2 h-24 snap-mandatory snap-x flex gap-2 md:gap-4"
        >
          {galleryArr?.map((item, index) => (
            <img
              ref={activeIndex === index ? miniImagePreview : null}
              src={item?.image}
              alt={item?.text}
              className={`w-10 scale-100 rounded h-10 md:w-20 md:h-full snap-center border cursor-pointer transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "rounded-lg scale-[1.15]"
                  : "border-transparent"
              }`}
              onClick={() => {
                setPrevIndex(activeIndex);
                setActiveIndex(index);
                setIsAnimation((prev) => !prev);
              }}
            />
          ))}
        </aside>
      </div>
    </>
  );
};

export default CustomModal;
