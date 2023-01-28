import { LinkIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import React from 'react';
import foodImg from "../assets/images/food1.png"

const ProductItem = ({ setOpenEditProduct }) => {
  return (
    <div className="flex items-center w-full bg-[#F5F5F5] px-4 py-3 border rounded-md font-medium mb-4 xs:gap-4 lg:gap-0 justify-between xs:justify-start">
      <div className="flex gap-2 xs:w-[38%] sm:w-[32%] md:w-[25%] lg:w-[20%]">
        <div className="hidden lg:block">
          <img src={foodImg} alt="" className="h-8 w-8  " />
        </div>
        <h2 className="">Top Notch Food</h2>
      </div>
      <p className="hidden md:block w-[12%]">0</p>
      <p className="hidden xs:block w-[38%] sm:w-[31%] md:w-[25%] lg:w-[20%]">
        NGN 10,000.00
      </p>
      <p className="hidden sm:block w-[26%] md:w-[20%] lg:w-[16%]">My Food</p>
      <div className="flex gap-2 items-center text-[#8D8A8A]   w-auto xs:w-[25%] md:w-[20%]  lg:w-[17%]">
        <LinkIcon className="h-4 w-4 cursor-pointer" />
        <PencilIcon
          className="h-4 w-4 cursor-pointer"
          onClick={() => {
            setOpenEditProduct(true);
          }}
        />
        <TrashIcon className="h-4 w-4 cursor-pointer" />
      </div>
      <div className="hidden md:block w-[20%] lg:w-[17%]">
        <div className=" w-[70px] h-[35px]  bg-[#26F05F] rounded-full flex justify-end items-center pr-1">
          <div className="w-[30px] h-[30px] rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem