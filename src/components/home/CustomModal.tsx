import ICONS from "assets/icons";
import React, { useEffect, useState } from "react";
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

  const goLeft = activeIndex < prevIndex;
  const goRight = activeIndex > prevIndex;

  // console.log("goLeft==>", goLeft);
  // console.log("goRight==>", goRight);

  const toggleZoomOut = () => {
    setIsZoomed(true);
    // console.log("ZoomOut");
  };

  const toggleZoomIn = () => {
    setIsZoomed(false);
    // console.log("zoomIn");
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
      toggleDownload(activeIndex);
    } else {
      console.log("error getting in progress of useEffect");
    }
  }, [activeIndex]);

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
        if (galleryArr.length - 1 === activeIndex) {
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

  // console.log("activeIndex==>Modal", activeIndex);
  // console.log("prevIndex==>", prevIndex);

  return (
    <>
      <div id="fs" className=" fixed z-[9999] inset-0 w-full h-full bg-black">
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
            className={`cursor-pointer  ${isZoomed ? "text-gray-500" : ""}`}
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
        <aside className="absolute top-1/4 md:top-[30%] lg:top-[5%] left-1/2 -translate-x-1/2 w-full grid place-items-center">
          <img
            src={galleryArr[activeIndex].image}
            alt="photo"
            className={` w-11/12 md:w-10/12 lg:w-3/5 h-[40vh] md:h-[35vh] lg:h-full rounded-md transition-all duration-200 ease-in-out ${
              isZoomed ? ` scale-110` : ""
            } ${
              goLeft
                ? isAnimation
                  ? "slider-animation-x-reverse"
                  : "slider-animation-x-reverse-2"
                : isAnimation
                ? "slider-animation-x"
                : "slider-animation-x-2"
            } `}
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
        <aside className="absolute bottom-10  lg:bottom-5 w-full h-20 flex items-center justify-center gap-4">
          {galleryArr.map((item, index) => (
            <img
              src={item?.image}
              alt={item?.text}
              className={`w-20 h-full border-2 cursor-pointer ${
                activeIndex === index
                  ? "border-yellow-500 rounded-xl"
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
