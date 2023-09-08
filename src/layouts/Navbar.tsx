import { FiMenu, FiX } from "react-icons/fi";
import { LOGO } from "assets";
import Link from "next/link";
import { useState } from "react";

//menus in all
const menus = [
  { id: 3, title: "Light box", url: "#Lightbox2023" },
  { id: 3, title: "Documentation", url: "" },
  { id: 1, title: "Introduction", url: "" },
  { id: 1, title: "How it works", url: "#howItWorks" },

  // { id: 2, title: "Schedule 2023", url: "#schedule2023" },
  // { id: 4, title: "FREE ticket", url: "#FREEticket" },
  // { id: 5, title: "Mobile App", url: "#MobileApp" },
];

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <section className="shadow-xl border-b-2 border-blue-400  sticky top-0 bg-white z-[999] ">
      <nav className="flex justify-between w-full  items-center tracking-wide  lg:main-container">
        <a href="/">
          <img
            className=" w-28 md:w-40 lg:w-48 object-contain "
            // src={LOGO.src}
            src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Lightbox_logo.png"
            alt=";ight-box-logo"
          />
        </a>
        <div className=" lg:flex gap-9  items-center text-md hidden  ">
          {menus?.map((item) => (
            <Link href={item?.url} key={item?.id}>
              <li className="cursor-pointer list-none">{item?.title}</li>
            </Link>
          ))}
        </div>
        <div className="font-semibold text-sm lg:block hidden">
          <p>lightbox.com</p>
          <p>lightbox.com</p>
        </div>
        <div className="lg:hidden flex  ">
          <FiMenu
            className="cursor-pointer text-3xl "
            onClick={() => setIsMenu((prev) => !prev)}
          />
        </div>
      </nav>
      {/* ------------------drop down menu----------------------- */}
      <div
        className={`h-[105vh] md:h-[100vh] top-0 w-4/5 md:w-3/5 bg-white shadow-xl absolute transition-all ease-in-out duration-300 p-6 ${
          !isMenu ? `translate-x-[-100%]` : `translate-x-[0%]`
        }`}
      >
        <div className="flex justify-end ">
          <FiX onClick={() => setIsMenu(false)} className="cursor-pointer" />
        </div>
        <div className="flex flex-col justify-between h-full pb-6">
          <ul className="flex flex-col gap-3 justify-between">
            {menus?.map((item) => (
              <Link href={item?.url} key={item?.id}>
                <li>{item?.title}</li>
              </Link>
            ))}
          </ul>
          <div className="font-medium text-sm ">
            <p>lightbox.com</p>
            <p>lightbox.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
