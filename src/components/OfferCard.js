import React from "react";


const OfferCard = ({img,text,header}) => {
  return (
    <div className="bg-white text-center px-8 py-12 flex flex-col items-center gap-12 rounded-xl w-[40%]">
      <div className="w-full ">
        <div className="w-full flex justify-center items-center ">
          <img src={img} alt="" className="rounded-full w-[60px] h-[60px]" />
        </div>
      </div>
      <div className="">
        <h3 className="mb-4 font-semibold text-xl">{header}</h3>
        <p className="text-lg font-medium ">{text}</p>
      </div>
    </div>
  );
};

export default OfferCard;
