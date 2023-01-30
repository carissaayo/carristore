import React from 'react'
import { CheckIcon, PlusIcon, XCircleIcon } from '@heroicons/react/24/outline';
import foodImg from "../assets/images/foood.webp";
const EditProduct = ({ setOpenEditProduct, openEditProduct }) => {
  return (
    <main
      className={`${
        openEditProduct
          ? "absolute top-[8%] xs:top-[5%]  left-[5%] xs:left-[10%] sm:left-[15%] md:left-[20%] xl:left-[30%] bg-white w-[90%] xs:w-[80%] sm:w-[70%]  md:w-[60%] xl:w-[50%] h-[83%] xs:h-[85%] sm:h-[90%] rounded-md border transition-display duration-1000 ease-in-out"
          : "hidden"
      }`}
    >
      <div className="flex items-center justify-between py-4 px-6 bg-[#F9F9F9] w-full mb-4 md:mb-8">
        <h3 className="font-bold text-lg">Edit Product New jeans</h3>
        <div
          className=""
          onClick={() => {
            setOpenEditProduct(false);
          }}
        >
          <XCircleIcon className="h-8 w-8 cursor-pointer hover:scale-110" />
        </div>
      </div>
      <div className="w-full h-[450px] sm:h-[500px] md:h-auto overflow-y-scroll md:overflow-y-hidden mb-2">
        <section className="px-6 mb-6 ">
          {/* Images Con */}
          <div className="w-full  flex gap-10 mb-4">
            {/* Image 1 */}
            <div className="">
              <div className="w-[100px] h-[100px] rounded-2xl relative cursor-pointer   mb-3">
                <img
                  src={foodImg}
                  alt=""
                  className="w-full h-full rounded-2xl"
                />
                <div className="absolute top-0 left-0 bg-[#00000080] z-10 h-full w-full flex items-center justify-center rounded-2xl">
                  <CheckIcon className="w-12 h-12 text-green-400 " />
                </div>
              </div>
              <div className="w-[98px] h-[3px] bg-green-400"></div>
            </div>
            {/* Image 2 */}
            <div className="">
              <div className="w-[100px] h-[100px] rounded-2xl relative cursor-pointer   mb-3 border-dotted border-2 flex items-center justify-center">
                <PlusIcon className="w-12 h-12 text-[#00000070]" />
              </div>
            </div>
          </div>
          <p className="text-[#00000080]">
            Click on any image to change thumbnail
          </p>
        </section>
        <section className="px-6 w-full">
          {/* Input Con */}
          <div className="w-[95%] mb-8 mx-auto">
            <div className="w-full border h-[50px] rounded-lg relative">
              <span className="absolute top-[-18%] left-[5%] text-[#00000060] bg-white text-sm">
                Product Name
              </span>
              <input
                type="text"
                className="w-full h-full rounded-lg outline-none pl-3 focus:outline-2 focus:outline-[#00000060] bg-[#ECECEC42] "
                placeholder="Quality Jeans"
              />
            </div>
          </div>

          {/* Input Con */}
          <div className="w-[95%] mb-8 mx-auto">
            <div className="w-full border h-[50px] rounded-lg relative">
              <span className="absolute top-[-18%] left-[5%] text-[#00000060] bg-white text-sm">
                Product Price in NGN
              </span>
              <input
                type="text"
                className="w-full h-full rounded-lg outline-none pl-3 focus:outline-2 focus:outline-[#00000060] bg-[#ECECEC42] "
                placeholder="Quality Jeans"
              />
            </div>
            {/* Discount */}
            <div className="flex gap-2 items-center"></div>
          </div>

          {/* Input Con */}
          <div className="w-[95%] mb-8 mx-auto">
            <div className="w-full border h-[50px] rounded-lg relative">
              <span className="absolute top-[-18%] left-[5%] text-[#00000060] bg-white text-sm">
                Select Product Category
              </span>
              <input
                type="text"
                className="w-full h-full rounded-lg outline-none pl-3 focus:outline-2 focus:outline-[#00000060] bg-[#ECECEC42] "
                placeholder="Quality Jeans"
              />
            </div>
          </div>

          {/* Input Con */}
          <div className="w-[95%] mb-8 mx-auto">
            <div className="w-full border h-[100px] rounded-lg relative">
              <span className="absolute top-[-18%] left-[5%] text-[#00000060] bg-white text-sm">
                Product Description
              </span>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="w-full h-full rounded-lg outline-none pl-3 focus:outline-2 focus:outline-[#00000060] bg-[#ECECEC42]"
              ></textarea>
            </div>
          </div>
        </section>
      </div>
      <div className="w-[90%] mx-auto px-6">
        <button
          className="w-full bg-[#0011AC] text-white py-4 hover:scale-105"
          onClick={() => {
            setOpenEditProduct(false);
          }}
        >
          Save Updates
        </button>
      </div>
    </main>
  );
};

export default EditProduct