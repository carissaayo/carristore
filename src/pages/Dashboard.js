import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import React from "react";
import SideNav from "../components/landingpageComponents/SideNav";
import PageHeader from "../components/PageHeader";
import ProductsDash from "../components/ProductsDash";
import TaskCon from "../components/TaskCon";
import VerifyEmailText from "../components/VerifyEmailText";

const Dashboard = () => {
  return (
    <main className="flex h-screen w-full bg-secondaryColor gap-4 py-4 px-4 overflow-hidden">
      <SideNav />
      <section className="flex-[4]  bg-white rounded-lg ">
        <PageHeader />
        <VerifyEmailText />

        {/* Scroll Part Starts */}
        <section className=" h-[75vh] overflow-y-scroll ">
          {/* details con */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between w-[95%] mx-auto border rounded-xl lg:rounded-full bg-white px-8 py-4 lg:py-0  mb-4">
            {/* First Child */}
            <div className="p-4 flex gap-3 w-[50%] lg:w-auto">
              <div className="w-12 h-12 rounded-md bg-blue-700 flex items-center justify-center">
                <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h5 className="text-base font-normal">Store visits</h5>
                <h6 className="text-sm">0</h6>
              </div>
            </div>

            {/* Second Child */}
            <div className="p-4 flex gap-3 w-[50%] lg:w-auto">
              <div className="w-12 h-12 rounded-md bg-[#FF9900] flex items-center justify-center">
                <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h5 className="text-base font-normal">Store products</h5>
                <h6 className="text-sm">0</h6>
              </div>
            </div>

            {/* Third Child */}
            <div className="p-4 flex gap-3 w-[50%] lg:w-auto">
              <div className="w-12 h-12 rounded-md bg-[#FF4438] flex items-center justify-center">
                <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h5 className="text-base font-normal">Customer carts</h5>
                <h6 className="text-sm">0</h6>
              </div>
            </div>

            {/* Fourth Child */}
            <div className="p-4 flex gap-3 w-[50%] lg:w-auto">
              <div className="w-12 h-12 rounded-md bg-[#3BDE2D] flex items-center justify-center">
                <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h5 className="text-base font-normal">Current plan</h5>
                <h6 className="text-sm">Starter</h6>
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
    </main>
  );
};

export default Dashboard;
