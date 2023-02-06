import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CheckIcon, XCircleIcon } from '@heroicons/react/24/outline';
import {  updateProduct, updateProductImg } from '../redux/reducers/userSlice';
import { useNavigate } from "react-router-dom";
const EditProduct = ({ setOpenEditProduct, openEditProduct }) => {

  let dispatch = useDispatch();
  let navigate=useNavigate()
  const { productToBeUpdated ,products} = useSelector((state) => state.user);

  const {name,image,price,category,desc,id} =productToBeUpdated;
 const [productName, setProductName] = useState("");
 const [productPrice, setProductPrice] = useState("");
 const [productDesc, setProductDesc] = useState("");
 const [productCategory, setProductCategory] = useState("");
 const [productImage, setProductImage] = useState("");



   const handleProductImg = (e) => {
    if(e.target.files[0]){

      let productImg = URL.createObjectURL(e.target.files[0]);
      let tempData = { productImg,id };
      dispatch(updateProductImg(tempData));
      setProductImage(productImg)
    }
return
   };


    const handleUpdateProduct = (e) => {
      e.preventDefault();
      dispatch(
        updateProduct({
          productDesc,
          productName,
          productPrice,
          productCategory,
          id
        })
        );
    
        setOpenEditProduct(false);
        console.log(products);
    };

 useEffect(()=>{
  if(openEditProduct===true){  
    setProductName(name);
    setProductPrice(price);
    setProductDesc(desc);
    setProductCategory(category);
    setProductImage(image)
  }
 },[openEditProduct])



  return (
    <form
      onSubmit={handleUpdateProduct}
      className={`${
        openEditProduct
          ? "absolute top-[-80%] xs:top-[-70%]  left-[5%] xs:left-[10%] sm:left-[15%] md:left-[20%] xl:left-[10%] bg-white w-[90%] xs:w-[80%] sm:w-[70%]  md:w-[60%] xl:w-[70%] pb-8 h-[max-content] rounded-md border transition-display duration-1000 ease-in-out z-20"
          : "hidden"
      }`}
    >
      <div className="flex items-center justify-between py-4 px-6 bg-[#F9F9F9] w-full mb-4 md:mb-8">
        <h3 className="font-bold text-lg">Edit Product {name}</h3>
        <div
          className=""
          onClick={() => {
            setOpenEditProduct(false);
          }}
        >
          <XCircleIcon className="h-8 w-8 cursor-pointer hover:scale-110" />
        </div>
      </div>
      <section className="w-full h-[450px] sm:h-[500px] md:h-auto overflow-y-scroll md:overflow-y-hidden mb-4">
        <section className="px-6 mb-6 ">
          {/* Images Con */}
          <div className="w-full  flex gap-10 mb-4">
            {/* Image 1 */}
            <div className="">
              <div className="w-[100px] h-[100px] rounded-2xl relative cursor-pointer   mb-3">
                <img
                  src={productImage}
                  alt=""
                  className="w-full h-full rounded-2xl"
                />
                <label className="absolute top-0 left-0 bg-[#00000080] z-10 h-full w-full flex items-center justify-center rounded-2xl">
                  <CheckIcon className="w-12 h-12 text-green-400 " />
                  <input
                    type="file"
                    className="w-0 h-0"
                    onChange={(e) => handleProductImg(e)}
                  />
                </label>
              </div>
              <div className="w-[98px] h-[3px] bg-green-400"></div>
            </div>
            {/* Image 2 */}
            {/* <div className="">
              <div className="w-[100px] h-[100px] rounded-2xl relative cursor-pointer   mb-3 border-dotted border-2 flex items-center justify-center">
                <PlusIcon className="w-12 h-12 text-[#00000070]" />
              </div>
            </div> */}
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
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
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
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
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
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                required
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
                cols="30"
                rows="10"
                className="w-full h-full rounded-lg outline-none pl-3 focus:outline-2 focus:outline-[#00000060] bg-[#ECECEC42]"
                value={productDesc}
                onChange={(e) => setProductDesc(e.target.value)}
              ></textarea>
            </div>
          </div>
        </section>
      </section>
      <div className="w-[90%] mx-auto px-6">
        <button
          className="w-full bg-[#0011AC] text-white py-4 hover:scale-105"
          type="submit"
        >
          Save Updates
        </button>
      </div>
    </form>
  );
};

export default EditProduct