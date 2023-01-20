import React from "react";
import CareImg from "../assets/images/customer-care.jfif";
// import {D} from "@heroicons/react/outline"
const FAQs = () => {
  return (
    <section className="h-[100vh] px-40 flex flex-col items-center justify-center bg-secondaryColor ">
      <h1 className="text-4xl font-bold  mb-4 text-center">
        Frequently Asked Questions
      </h1>
      <p className="w-3/5 text-2xl font-medium mb-4 text-center">
        Below are some of the most asked questions by sellers and customers. You
        will find more on our FAQs page{" "}
      </p>
      <div className="flex justify-between items-center w-full gap-12 pt-8">
        <div className="flex-1 h-[450px]">
          <img
            src={CareImg}
            alt="customer care"
            className="w-[600px] h-full"
          />
        </div>
        {/* Questions Con */}
        <div className="flex-1">
          {/* Question */}
          <div className="w-[80%]  bg-white rounded-lg mb-4">
            <div className="w-full flex justify-between p-4 cursor-pointer">
              <p className="text-lg font-medium">How can I get started?</p>
              <button className="">V </button>
            </div>
            <p className="p-4">
              Lörem ipsum duteskade bes, autode jonyledes. Gögt fartad orar
              sorade serieotrohet. Böliga amonde. Lörem ipsum duteskade bes,
              autode jonyledes. Gögt fartad orar sorade serieotrohet. Böliga
              amonde.{" "}x
            </p>
          </div>

          {/* Question */}
          <div className="w-[80%]  bg-white rounded-lg mb-4">
            <div className="w-full flex justify-between p-4 cursor-pointer">
              <p className="text-lg font-medium">How can I get started?</p>
              <button className="">V </button>
            </div>
          </div>

          {/* Question */}
          <div className="w-[80%]  bg-white rounded-lg mb-4">
            <div className="w-full flex justify-between p-4 cursor-pointer">
              <p className="text-lg font-medium">How can I get started?</p>
              <button className="">V </button>
            </div>
          </div>

          {/* Question */}
          <div className="w-[80%]  bg-white rounded-lg mb-4">
            <div className="w-full flex justify-between p-4 cursor-pointer">
              <p className="text-lg font-medium">How can I get started?</p>
              <button className="">V </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
