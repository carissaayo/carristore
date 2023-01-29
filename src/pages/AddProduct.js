import { useState } from "react";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import SideNav from "../components/landingpageComponents/SideNav";
import PageHeader from "../components/PageHeader";
import VerifyEmailText from "../components/VerifyEmailText";
import ProductsCon from "../components/ProductsCon";
import EditProduct from "../components/EditProduct";
import { Link } from "react-router-dom";

const AddProduct = () => {
     const [openSideNav, setOpenSideNav] = useState(false);
     const [openEditProduct, setOpenEditProduct] = useState(false);
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
      <section className="flex-[4]  bg-white rounded-lg ">
        <PageHeader title="Add Products" setOpenSideNav={setOpenSideNav} />
        <VerifyEmailText />

        <section className="w-full px-4 xs:px-6 h-[78vh] xl:h-auto flex flex-col items-center justify-center">
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
                <div className="w-[150px] h-[150px] rounded-2xl relative    mb-3 border-dotted border-2 flex items-center justify-center"></div>
              </div>
              <div className="bg-white z-20">
                <div className="w-[150px] h-[150px] rounded-2xl relative cursor-pointer   mb-3 border-dotted border-2 border-black flex items-center justify-center">
                  <PlusIcon className="w-12 h-12 text-[#00000070]" />
                </div>
              </div>
              <div className="relative right-[12%] rotate-[10deg] bottom-[-7px]">
                <div className="w-[150px] h-[150px] rounded-2xl relative    mb-3 border-dotted border-2 flex items-center justify-center"></div>
              </div>
            </section>
            <div className="w-full flex items-center justify-center">
              <button className="bg-[#0011AC] text-white px-4 py-2 w-[80%] md:w-[60%] hover:scale-105">
                Proceed
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AddProduct;
