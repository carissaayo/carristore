import React from "react";


const OfferCard = ({img,text,header}) => {
  return (
    <div className="bg-white text-center px-4 md:px-8 flex flex-col items-center gap-12 rounded-xl w-[100%] xs:w-[80%] sm:w-[60%] md:w-[50%] h-[350px] justify-center">
      <div className="w-full ">
        <div className="w-full flex justify-center items-center ">
          <img
            src={img}
            alt=""
            className="rounded-full w-[60px] h-[60px] object-fill"
          />
        </div>
      </div>
      <div className="">
        <h3 className="mb-4 font-semibold text-xl">{header}</h3>
        <p className="lg:text-lg xl:text-lg font-medium ">{text}</p>
      </div>
    </div>
  );
};

export default OfferCard;
