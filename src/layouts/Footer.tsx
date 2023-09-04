import React from "react";

const Footer = () => {
  return (
    <div className="main-container mt-12 pb-8 ">
      <div>
        {/* -----------imag div---------- */}
        <div className="flex flex-rows-2 justify-center pb-4">
          <img
            className="md:w-100 w-60 lg:w-80  h-50 object-contain"
            // src="https://static.tildacdn.com/tild3531-3031-4361-a431-636633383063/noroot.png"
            src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Lightbox_logo.png"
            alt="light-box_logo"
          />
        </div>
        {/* ----------------copy right div ----------------*/}
        <div className="grid grid-rows-2 justify-center text-gray-500">
          <p className="text-center">All rights are reserved. Light Box.</p>
          <p className="text-center">2023-2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
