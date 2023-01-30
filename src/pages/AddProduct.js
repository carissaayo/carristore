import { useState } from "react";
import {  CheckIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import SideNav from "../components/landingpageComponents/SideNav";
import PageHeader from "../components/PageHeader";
import VerifyEmailText from "../components/VerifyEmailText";
import foodImg from "../assets/images/foood.webp"
import { Link } from "react-router-dom";

const AddProduct = () => {
     const [openSideNav, setOpenSideNav] = useState(false);
     const [openEditProduct, setOpenEditProduct] = useState(false);
     const [currentAddPage, setCurrentAddPage] = useState(1)
  return (
    <main className="xl:flex h-screen w-full bg-secondaryColor gap-4 py-4 px-2 sm:px-4 overflow-hidden relative">
      {/* Overlay Starts*/}
      <div
        className={`${
          openSideNav && "w-full h-screen  absolute top-0 left-0 bg-[#00000070]"
        } xl:hidden`}
        onClick={() => setOpenSideNav(false)}
      ></div>
      {/* Overlay Ends */}
      <SideNav
        openSideNav={openSideNav}
        setOpenSideNav={setOpenSideNav}
        setOpenEditProduct={setOpenEditProduct}
      />
      <section className="flex-[4]  bg-white rounded-lg relative">
        <PageHeader title="Add Products" setOpenSideNav={setOpenSideNav} />
        <VerifyEmailText text="You can only upload 9 more items. Upgrade Plan" />

        {/* Add Product 1 */}
        <section
          className={`w-full px-4 xs:px-6 h-[74vh] xl:h-auto md:flex md:flex-col items-center justify-center transistion-translate duration-500 ease-in-out ${
            currentAddPage !== 1 && "translate-x-[-120%] absolute "
          }`}
        >
          <div className="w-[95%] xs:w-[90%] sm:w-[80%] md:w-[70%] xl:w-[50%] text-center">
            <h1 className="font-bold  xs:text-xl mb-6">
              Add images - for multiple products
            </h1>

            <p className="flex items-center gap-2  font-medium mb-20 text-[#F84A4A] sm:text-black text-sm xs:text-base">
              <span className="hidden sm:flex items-center justify-center bg-[#F84A4A] p-2 text-white rounded-xl px-4">
                Important
              </span>
              Pick one image for every product you want to add (max: 10) ,
              you’ll be able to add more images later -
            </p>

            <section className="flex relative items-center mb-32 justify-center">
              <div className="relative left-[12%] rotate-[-280deg]">
                <div className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] rounded-2xl relative    mb-3 border-dotted border-2 flex items-center justify-center"></div>
              </div>
              <div className="bg-white z-10">
                <div className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] rounded-2xl relative cursor-pointer   mb-3 border-dotted border-2 border-black flex items-center justify-center">
                  <PlusIcon className="w-12 h-12 text-[#00000070]" />
                </div>
              </div>
              <div className="relative right-[12%] rotate-[10deg] bottom-[-7px]">
                <div className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] rounded-2xl relative    mb-3 border-dotted border-2 flex items-center justify-center"></div>
              </div>
            </section>
            <div className="w-full flex items-center justify-center">
              <button
                className="bg-[#0011AC] text-white px-4 py-3 w-[80%] md:w-[60%] hover:scale-105"
                onClick={() => setCurrentAddPage(2)}
              >
                Proceed
              </button>
            </div>
          </div>
        </section>

        {/* Add Product 2 */}
        <section
          className={` w-full h-[77vh] xs:h-[76vh] md:h-[78vh] overflow-y-scroll pb-10 transistion-translate duration-500 ease-in-out ${
            currentAddPage === 1 && "translate-x-[120%] absolute "
          } ${currentAddPage === 3 && "translate-x-[-120%] absolute "}`}
        >
          <div className="w-full px-2 xs:px-0 xs:w-[80%] sm:w-[70%] md:w-[60%] xl:w-[50%] xs:mx-auto ">
            {/* First Image con */}
            <div className="bg-white flex justify-center mb-2">
              <div className="w-[100px] h-[100px]  rounded-2xl mb-3 ">
                <img src={foodImg} alt="" className="h-full w-full" />
              </div>
            </div>

            <h1 className="text-xl font-bold text-center mb-2">
              Add Details - Product 1
            </h1>

            <div className="w-full flex items-center justify-center mb-8">
              <button className="text-[#FF2828] text-sm flex items-center justify-center gap-1 cursor-pointer">
                Remove Item <TrashIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="w-full mb-8">
              <section className="px-6 mb-6 h-[]">
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
            <div className="w-[90%] mx-auto flex justify-between">
              <button
                className="w-[48%] text-[#0011AC] bg-[#E2E2E2] py-4 hover:scale-105 rounded-xl"
                onClick={() => setCurrentAddPage(1)}
              >
                Back To Images
              </button>
              <button
                className="w-[48%] bg-[#0011AC] text-white py-4 hover:scale-105 rounded-xl"
                onClick={() => setCurrentAddPage(3)}
              >
                Upload Product
              </button>
            </div>
          </div>
        </section>

        {/* Product Added */}
        <section
          className={`w-full px-4 xs:px-6 py-20   h-[77vh] xs:h-[78vh] md:h-[78vh] xl:h-auto md:flex  items-center justify-center transistion-translate duration-500 ease-in-out ${
            currentAddPage !== 3 && "translate-x-[120%] absolute "
          }`}
        >
          <div className="text-center w-full px-2 md:w-[70%] md:mx-auto">
            <div className="w-[80px] h-[80px] xs:w-[120px] xs:h-[120px] rounded-full border-[10px] bg-[#4ACE8F]  border-[#4ACE8F62] flex items-center justify-center text-white mb-8 mx-auto">
              <CheckIcon className="w-8 h-8 xs:w-16 xs:h-16" />
            </div>
            <h3 className="text-lg xs:text-2xl font-medium mb-12">
              You've successfully added 1 item(s)!
            </h3>

            <div className="w-full flex items-center justify-center">
              <Link
                to="/products"
                className="flex items-center justify-center px-2 py-4 bg-[#FF9900] hover:scale-105 rounded-xl w-[80%] md:w-[60%]  xl:w-[40%] text-white text-base xs:text-lg"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AddProduct;
