import { useState } from "react";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import SideNav from "../components/landingpageComponents/SideNav";
import PageHeader from "../components/PageHeader";
import ProductsDash from "../components/ProductsDash";
import TaskCon from "../components/TaskCon";
import VerifyEmailText from "../components/VerifyEmailText";

const PageCon = ({page}) => {
    const [openSideNav, setOpenSideNav] = useState(false);

  return (
    <main className="xl:flex h-screen w-full bg-secondaryColor gap-4 py-4 px-2 sm:px-4 overflow-hidden relative">
      {/* Overlay Starts*/}
      <div
        className={`${
          openSideNav &&
          "w-full h-screen  absolute top-0 left-0      bg-[#00000070]"
        } xl:hidden`}
        onClick={() => setOpenSideNav(false)}
      ></div>
      {/* Overlay Ends */}
      <SideNav openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
      <section className="flex-[4]  bg-white rounded-lg ">
        <PageHeader setOpenSideNav={setOpenSideNav} />
        <VerifyEmailText />

        {/* Scroll Part Starts */}
        <section className=" h-[75vh] overflow-y-scroll ">
          {page}
          {/* details con */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between w-[95%] mx-auto border rounded-xl lg:rounded-full bg-white px-4 xs:px-8 py-4 lg:py-0  mb-4">
            {/* First Child */}
            <div className="p-4 flex gap-3 w-full xs:w-[90%] sm:w-[50%] lg:w-auto">
              <div className="h-16 w-16 sm:w-12 sm:h-12 rounded-md bg-blue-700 flex items-center justify-center">
                <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h5 className="text-lg sm:text-base font-normal">
                  Store visits
                </h5>
                <h6 className="text-base sm:text-sm">0</h6>
              </div>
            </div>

            {/* Second Child */}
            <div className="p-4 flex gap-3 w-full xs:w-[90%] sm:w-[50%] lg:w-auto">
              <div className="h-16 w-16 sm:w-12 sm:h-12 rounded-md bg-[#FF9900] flex items-center justify-center">
                <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h5 className="text-lg sm:text-base font-normal">
                  Store products
                </h5>
                <h6 className="text-base sm:text-sm">0</h6>
              </div>
            </div>

            {/* Third Child */}
            <div className="p-4 flex gap-3 w-full xs:w-[90%] sm:w-[50%] lg:w-auto">
              <div className="h-16 w-16 sm:w-12 sm:h-12 rounded-md bg-[#FF4438] flex items-center justify-center">
                <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h5 className="text-lg sm:text-base font-normal">
                  Customer carts
                </h5>
                <h6 className="text-base sm:text-sm">0</h6>
              </div>
            </div>

            {/* Fourth Child */}
            <div className="p-4 flex gap-3 w-full xs:w-[90%] sm:w-[50%] lg:w-auto">
              <div className="h-16 w-16 sm:w-12 sm:h-12 rounded-md bg-[#3BDE2D] flex items-center justify-center">
                <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h5 className="text-lg sm:text-base font-normal">
                  Current plan
                </h5>
                <h6 className="text-base sm:text-sm">Starter</h6>
              </div>
            </div>
          </div>
          {/* Tasks */}
          <TaskCon />
          {/* Products */}
          <ProductsDash />
        </section>
        {/* Scroll Part Ends */}
      </section>

      {/* Add Product 2 */}
      <section className="w-full px-4 xs:px-6 h-[74vh] xl:h-auto md:flex md:flex-col items-center justify-center">
        <div className="w-[95%] xs:w-[90%] sm:w-[80%] md:w-[70%] xl:w-[50%] text-center">
          <h1 className="font-bold  xs:text-xl mb-6">
            Add images - for multiple products
          </h1>

          <p className="flex items-center gap-2  font-medium mb-20 text-[#F84A4A] sm:text-black text-sm xs:text-base">
            <span className="hidden sm:flex items-center justify-center bg-[#F84A4A] p-2 text-white rounded-xl px-4">
              Important
            </span>
            Pick one image for every product you want to add (max: 10) , you’ll
            be able to add more images later -
          </p>

          <section className="flex relative items-center mb-32 justify-center">
            <div className="bg-white ">
              <div className="w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] rounded-2xl mb-3 relative">
                <img src={foodImg} alt="" className="h-full w-full" />
                <div className="w-full h-full bg-[#00000050] absolute top-0"></div>
              </div>
            </div>
          </section>
          <div className="w-full flex items-center justify-center">
            <button className="bg-[#0011AC] text-white px-4 py-2 w-[80%] md:w-[60%] hover:scale-105">
              Proceed
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageCon;
