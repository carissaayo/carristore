import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline';

const Header = ({showHeader}) => {
  return (
    <main
      className={` ${
        showHeader && "fixed h-[100px] w-full z-10  "
      } px-6 md:px-12 bg-primaryColor text-white  `}
    >
      <div className="flex  py-6  justify-between h-[80px] w-full">
        {/* Logo */}
        <h1 className="text-2xl font-bold">CarriStore</h1>
        {/* Links Con*/}
        <div className=" hidden md:flex gap-10 ">
          <button className="">Pricing</button>
          <button className="">Resources</button>
          <button className="bg-secondaryColor text-primaryColor  rounded-full w-[120px] flex items-center justify-center h-[40px] ">
            Get Started
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Bars3Icon className="cursor-pointer h-8 w-8 hover:scale-125 " />
        </div>
      </div>
    </main>
  );
}

export default Header