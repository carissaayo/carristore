import { useState } from "react";
import EditProduct from "./EditProduct";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../redux/reducers/userSlice";

const ProductsCon = ({theme}) => {
  const [openEditProduct, setOpenEditProduct] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [openConfirmDisplay, setOpenConfirmDisplay] = useState(false);
  const { products } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  

  const deleteConfirm = ()=>{
    dispatch(deleteProduct());
    setOpenConfirmDisplay(false)
  }
const deleteCancel=()=>{
setOpenConfirmDisplay(false)
}
  return (
    <main className="relative w-full">
      {openConfirmDisplay && (
        <section className="absolute  w-full sm:w-[75%] md:w-[50%] h-[170px] bg-white py-6 top-[20%] left-[%] sm:left-[10%] md:left-[15%] border rounded-xl px-3">
          <p className="text-center  xs:text-lg font-medium mb-6">
            Are you sure you want to delete this product?
          </p>
          <div className="w-full flex items-center justify-center gap-10">
            <button
              className="bg-green-500 px-4 py-2 flex items-center justify-center rounded-xl text-white text-lg font-bold hover:scale-105"
              onClick={deleteConfirm}
            >
              Confirm
            </button>
            <button
              className="bg-red-500 px-4 py-2 flex items-center justify-center rounded-xl text-white text-lg font-bold hover:scale-105"
              onClick={deleteCancel}
            >
              Cancel
            </button>
          </div>
        </section>
      )}
      {products.length !== 0 ? (
        <>
          {/* Product Main Header */}
          <div className="flex items-center  w-full bg-[#F5F5F5] px-4 py-3 border rounded-md font-medium mb-4 justify-between xs:gap-14 sm:gap-4 lg:gap-0 ">
            <p
              className={` ${
                theme === "dashboard"
                  ? "w-[55%] sm:w-[20%]"
                  : "w-[80%] xs:w-[40%] md:w-[20%] lg:w-[17%]"
              }`}
            >
              Item
            </p>
            <p
              className={` ${
                theme === "dashboard" ? "w-[30%] xs:w-[10%] sm:w-[10%]" : " hidden md:block w-[10%]"
              }`}
            >
              Views
            </p>
            <p
              className={` ${
                theme === "dashboard"
                  ? "w-[50%] xs:w-[70%] sm:w-[17%]"
                  : "hidden sm:block w-[30%] md:w-[17%]"
              }`}
            >
              Price
            </p>
            <p
              className={` ${
                theme === "dashboard"
                  ? "hidden sm:block w-[17%]"
                  : "hidden md:block w-[20%] md:w-[15%]"
              }`}
            >
              Category
            </p>
            <p
              className={`  ${
                theme === "dashboard"
                  ? "hidden"
                  : "w-[50%] xs:w-[30%] md:w-[15%]"
              }`}
            >
              Actions
            </p>
            <p
              className={`  ${
                theme === "dashboard"
                  ? "hidden"
                  : "block  xs:w-[20%] md:w-[16%]"
              }`}
            >
              Availability
            </p>
          </div>
          {products?.map((item, index) => (
            <ProductItem
              setOpenEditProduct={setOpenEditProduct}
              key={index}
              item={item}
              id={index}
              setOpenConfirmDisplay={setOpenConfirmDisplay}
              isDashboard={theme === "dashboard" ? true : false}
            />
          ))}
        </>
      ) : (
        <div className="w-full flex items-center justify-center h-[80px] bg-[#F5F5F5] px-4 py-3 ">
          <p className="text-xl ">
            You don't have any product yet, click on "Add New Product" button to
            add one
          </p>
        </div>
      )}

      {/* Edit Product */}
      <EditProduct
        setOpenEditProduct={setOpenEditProduct}
        openEditProduct={openEditProduct}
      />
    </main>
  );
};

export default ProductsCon;
