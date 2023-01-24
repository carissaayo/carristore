import { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/outline';

const MobileNav = ({ openNavBar }) => {
  return (
    <div
      className={`${
        openNavBar ? "translate-x-0" : "translate-x-[-130%] "
      } bg-white h-[50vh] md:hidden gap-10 transiton-translate duration-500 ease-in-out p-12 px-8 text-xl flex flex-col rounded-b-xl text-primaryColor absolute w-[86%] z-20`}
    >
      <div className="hover:scale-105">
        <button className="">Contact</button>
      </div>
      <div className="hover:scale-105">
        <button className="">FAQs</button>
      </div>
      <div className="hover:scale-105">
        <button className="">Pricing</button>
      </div>
      <div className="hover:scale-105">
        <button className="">Resources</button>
      </div>
      <div className="hover:scale-105">
        <button className="bg-secondaryColor text-primaryColor  rounded-full w-[150px] flex items-center justify-center h-[45px] ">
          Get Started
        </button>
      </div>
    </div>
  );
};
const Header = ({showHeader}) => {
  const [openNavBar, setOpenNavBar] = useState(false)
  return (
    <main
      className={` ${
        showHeader && "fixed h-[100px] w-full z-10  "
      } px-6 md:px-12 bg-primaryColor text-white  ${openNavBar ?"":""}`}
    >
      <div className="flex  py-6  justify-between h-[80px] w-full">
        {/* Logo */}
        <h1 className="text-2xl font-bold">CarriStore</h1>
        {/* Links Con*/}
        <div className=" hidden md:flex gap-10 ">
          <button className="hover:scale-105">Contact</button>
          <button className="hover:scale-105">FAQs</button>
          <button className="hover:scale-105">Pricing</button>
          <button className="hover:scale-105">Resources</button>
          <button className="bg-secondaryColor text-primaryColor  rounded-full w-[120px] flex items-center justify-center h-[40px] hover:scale-105">
            Get Started
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden" onClick={() => setOpenNavBar(!openNavBar)}>
          <Bars3Icon
            className={`${
              openNavBar && "rotate-90"
            } cursor-pointer h-8 w-8 hover:scale-125 transiton-translate duration-500 ease-in-out`}
          />
        </div>
      </div>
      <MobileNav openNavBar={openNavBar} />
    </main>
  );
}

export default Header