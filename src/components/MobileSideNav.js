import React from 'react'
import {
  ArrowLeftOnRectangleIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../redux/reducers/userSlice';

const MobileSideNav = () => {
  let dispatch = useDispatch();
const handleLogout=()=>{
  dispatch(logoutUser())
}
  return (
    <main className="h-full bg-white  rounded-lg px-4 pt-4  w-full">
      {/* Username Con */}
      <div className="border border-[rgb(158, 158, 158)] flex items-center py-2 gap-4 px-2 mb-12">
        <div className="h-6 w-6 rounded-full bg-[#CB6100] text-white flex items-center justify-center font-semibold">
          C
        </div>
        <div className="flex items-center justify-between w-full">
          <h2 className="font-medium  ">CarriStore</h2>
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
          <Link to="/dashboard" className="cursor-pointer flex items-center py-2 gap-4 px-2 mb-4 ">
            <div className="h-8 w-14 rounded-md bg-secondaryColor text-white flex items-center justify-center font-semibold">
              <HomeIcon className="w-6 h-6 text-black" />
            </div>
            <div className="flex items-center justify-between w-full">
              <h2 className="font-medium  ">Dashboard</h2>
            </div>
          </L>

          {/* Option Product */}
          <Link to="/products"  className=" flex items-center py-2 gap-4 px-2 mb-4 cursor-pointer w-full">
            <div className="h-8 w-12 rounded-md bg-secondaryColor text-white flex items-center justify-center font-semibold">
              <BriefcaseIcon className="w-6 h-6 text-black" />
            </div>
            <div className="flex items-center justify-between w-full">
              <h2 className="  ">Products</h2>
              <ChevronDownIcon className="w-4 h-4" />
            </div>
          </Link>

          {/* Option Orders*/}
          <div className=" flex items-center py-2 gap-4 px-2 mb-4 cursor-pointer w-full">
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
              <h1 className="bg-[#FFEDD1] text-[#FF7A00] text-sm px-3  py-1 rounded-full">
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
          {/* Option  */}
          <button  className="cursor-pointer flex items-center py-2 gap-4 px-2 mb-4 " onClick={handleLogout}>
            <div className="h-8 w-14 rounded-md bg-secondaryColor text-white flex items-center justify-center font-semibold">
              <ArrowLeftOnRectangleIcon className="w-6 h-6 text-black" />
            </div>
            <div className="flex items-center justify-between w-full" >
              <h2 className="  ">Logout</h2>
            </div>
          </button>
        </div>
      </section>
    </main>
  );
}

export default MobileSideNav