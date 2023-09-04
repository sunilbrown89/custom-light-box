// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="hidden md:flex justify-center items-center relative">
      {isVisible && (
        // <Tooltip title="Scroll to top">
        <div
          className="text-xl p-3 text-white bg-blue-900 rounded-full fixed bottom-10 right-10 z-[999] flex justify-center items-center cursor-pointer"
          onClick={goToBtn}
        >
          <FaArrowUp />
        </div>
        // </Tooltip>
      )}
    </div>
  );
};

export default GoToTop;
