import { LinkIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  selectProductToDelete,
} from "../redux/reducers/userSlice";

const ProductItem = ({
  setOpenEditProduct,
  item,
  setOpenConfirmDisplay,
  isDashboard,
}) => {
  let dispatch = useDispatch();

  const { image, price, category, isavailable, name, id } = item;
  const [showProduct, setShowProduct] = useState(true);

  const deleteItem = () => {
    dispatch(selectProductToDelete(id));
    setOpenConfirmDisplay(true);
  };

  const handleEditProduct= ()=>{
     setOpenEditProduct(true);
    dispatch(editProduct(id))
  }  
  return (
    <div className="flex items-center w-full bg-[#F5F5F5] px-4 py-3 border rounded-md font-medium mb-4 xs:gap-4 lg:gap-0 justify-between xs:justify-start">
      <div
        className={`flex gap-2  ${
          isDashboard
            ? "w-full  xs:w-[130%] sm:w-[55%]"
            : "xs:w-[50%] sm:w-[32%] md:w-[25%] lg:w-[20%]"
        }`}
      >
        <div className="hidden lg:block">
          <img src={image} alt="" className="h-8 w-8  " />
        </div>
        <h2 className="">{name}</h2>
      </div>
      <p className={` ${isDashboard ? "w-[40%] sm:w-[35%]" : "hidden md:block w-[12%]"}`}>
        0
      </p>
      <p
        className={`  ${
          isDashboard
            ? "w-[100%] xs:w-[80%] sm:w-[50%]  "
            : "hidden sm:block w-[38%] sm:w-[31%] md:w-[25%] lg:w-[20%]"
        }`}
      >
        NGN {price}
      </p>
      <p
        className={` ${
          isDashboard ? "w-[10%] hidden sm:block" : "hidden md:block w-[26%] md:w-[20%] lg:w-[16%]"
        }`}
      >
        {category}
      </p>
      <div
        className={`flex gap-1 xs:gap-2 items-center text-[#8D8A8A]   w-[%] xs:w-[35%] md:w-[20%]  lg:w-[17%] ${
          isDashboard && "hidden"
        }`}
      >
        <LinkIcon className="h-4 w-4 cursor-pointer" />
        <PencilIcon
          className="h-4 w-4 cursor-pointer"
          onClick={handleEditProduct}
        />
        <TrashIcon
          className="h-4 w-4 cursor-pointer"
          onClick={() => deleteItem()}
        />
      </div>
      <div
        className={`block w-[25%] sm:w-[20%] lg:w-[17%] cursor-pointer`}
        onClick={() => !isDashboard && setShowProduct(!showProduct)}
      >
        <div
          className={`" w-[70px] h-[35px]   rounded-full flex  items-center transition duration-300 ease-in-out" ${
            showProduct
              ? "justify-end bg-[#26F05F] pr-1"
              : "bg-[#E9E9E9] pl-1 justify-start"
          } ${isDashboard && "hidden"}`}
        >
          <div className="w-[30px] h-[30px] rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
