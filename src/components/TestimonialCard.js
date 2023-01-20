import React from "react";
import userImg from "../assets/images/profile.jfif"
const TestimonialCard = ({img1,name,cat,text}) => {
  return (
    <section className="bg-white  p-4 py-6 rounded-xl">
      <div className="mb-4">
        <p className="text-sm font-medium">
          Lörem ipsum rede euroktiga juren jång i nåjöl. Ås astross perad.
          Neotiv lur maside. Oktig treren nyn, i lyss. Soment jung
          stadsutglesning för astrotemöt. Beren dinidide fast beledes vill. Osm
          yfalig dobesade eted. Vask dism diktig nalunera.{" "}
        </p>
      </div>
      <div className="flex gap-6">
        <div className="">
          <img
            src={img1}
            alt=""
            className="w-[80px] h-[80px] rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg">{name}</h4>
          <h6 className="text-base">{cat}</h6>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
