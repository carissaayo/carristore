import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const FAQCard = ({ header,text,id }) => {
     const [showFaq, setShowFaq] = useState(false);
  return (
    <div
      className="w-full sm:w-[80%] mx-auto bg-white rounded-lg mb-4 cursor-pointer "
      onClick={() => {
        setShowFaq(!showFaq);
      }}
    >
      <div className="w-full flex justify-between p-4 ">
        <p className="text-lg font-medium">{header}</p>
        <button className={`${showFaq && "rotate-180"}`}>
          <ChevronUpIcon className="h-5 w-5" />
        </button>
      </div>
      <p className={`p-4  ${showFaq ? "block" : "hidden"}`}>{text}</p>
    </div>
  );
};

export default FAQCard;
