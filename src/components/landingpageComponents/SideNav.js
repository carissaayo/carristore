import {useState} from 'react'
import { ArrowLeftOnRectangleIcon, BriefcaseIcon, ChevronDownIcon, HomeIcon, ShoppingBagIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const SideNav = ({openSideNav, setOpenSideNav}) => {
  return (
    <main
      className={`h-[98vh] xl:h-full bg-white flex-1 rounded-lg px-4 pt-4  xl:block w-[85%] xs:w-[75%] sm:w-[50%] xl:w-full absolute xl:relative top-2 xl:top-0  ${
        openSideNav ? "left-1 sm:left-2 " : "left-[-110%] xl:left-[-8px]"
      } transition-position duration-500 ease-in-out z-50`}
    >
      <div
        className=" w-10 h-10 rounded-full bg-white absolute right-[-15%]  flex  xl:hidden items-center justify-center cursor-pointer hover:scale-110"
        onClick={() => setOpenSideNav(false)}
      >
        <XMarkIcon className="h-6 w-6" />
      </div>
      {/* Username Con */}
      <div className="border border-[rgb(158, 158, 158)] flex items-center py-2 gap-4 px-2 mb-12">
        <div className="h-6 w-6 rounded-full bg-[#CB6100] text-white flex items-center justify-center font-semibold">
          W
        </div>
        <div className="flex items-center justify-between w-full">
          <h2 className="font-medium  ">WTF Store</h2>
          <ChevronDownIcon className="w-4 h-4" />
        </div>
      </div>

      {/* My Profile Text */}
      <Link to="/profile" className="border-b border-[rgb(158, 158, 158)] flex items-center py-2 gap-4 px-2 mb-12">
        <div className="h-6 w-6 rounded-sm bg-[#2100EA] text-white flex items-center justify-center font-semibold">
          Y
        </div>
        <div className="flex items-center justify-between w-full">
          <h2 className="font-medium  ">My Profile</h2>
        </div>
      </Link>

      {/* Options Con */}
      <section className="flex flex-col items-start justify-between gap-36 w-full">
        <div className="w-full flex flex-col items-start justify-between">
          {/* Option Dashboard */}
          <Link
            to="/dashboard"
            className="cursor-pointer flex items-center py-2 gap-4 px-2 mb-4 "
          >
            <div className="h-8 w-14 rounded-md bg-secondaryColor text-white flex items-center justify-center font-semibold">
              <HomeIcon className="w-6 h-6 text-black" />
            </div>
            <div className="flex items-center justify-between w-full">
              <h2 className="font-medium  ">Dashboard</h2>
            </div>
          </Link>

          {/* Option Product */}
          <Link
            to="/products"
            className=" flex items-center py-2 gap-4 px-2 mb-4 cursor-pointer w-full"
          >
            <div className="h-8 w-12 rounded-md bg-secondaryColor text-white flex items-center justify-center font-semibold">
              <BriefcaseIcon className="w-6 h-6 text-black" />
            </div>
            <div className="flex items-center justify-between w-full">
              <h2 className="  ">Products</h2>
              <ChevronDownIcon className="w-4 h-4" />
            </div>
          </Link>

          {/* Option Orders*/}
          <div  className=" flex items-center py-2 gap-4 px-2 mb-4 cursor-pointer w-full">
            <div className="h-8 w-12 rounded-md bg-secondaryColor text-white flex items-center justify-center font-semibold">
              <ShoppingBagIcon className="w-6 h-6 text-black" />
            </div>
            <div className="flex items-center justify-between w-full">
              <h2 className="  ">Orders</h2>
              <ChevronDownIcon className="w-4 h-4" />
            </div>
          </div>

          {/* Option Payment */}
          <div className="cursor-pointer flex items-center py-2 gap-4 px-2 mb-4 ">
            <div className="h-8 w-14 rounded-md bg-secondaryColor text-white flex items-center justify-center font-semibold">
              <HomeIcon className="w-6 h-6 text-black" />
            </div>
            <div className="flex items-center  w-full gap-4">
              <h2 className="  ">Payments</h2>
              <h1 className="bg-[#FFEDD1] text-[#FF7A00] text-sm px-3  py-1 rounded-full flex items-center justify-center">
                coming soon
              </h1>
            </div>
          </div>

          {/* Option Payment */}
          <div className="cursor-pointer flex items-center py-2 gap-4 px-2 mb-4 ">
            <div className="h-8 w-14 rounded-md bg-secondaryColor text-white flex items-center justify-center font-semibold">
              <ShoppingCartIcon className="w-6 h-6 text-black" />
            </div>
            <div className="flex items-center justify-between w-full">
              <h2 className="  ">Store Settings</h2>
            </div>
          </div>
        </div>
        <div className="justify-items-end">
          {/* Option Logout*/}
          <div className="cursor-pointer flex items-center py-2 gap-4 px-2 mb-4 ">
            <div className="h-8 w-14 rounded-md bg-secondaryColor text-white flex items-center justify-center font-semibold">
              <ArrowLeftOnRectangleIcon className="w-6 h-6 text-black" />
            </div>
            <div className="flex items-center justify-between w-full">
              <h2 className="  ">Logout</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SideNav