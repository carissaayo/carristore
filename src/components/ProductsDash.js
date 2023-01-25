import React from 'react'
import ProductItem from './ProductItem';

const ProductsDash = () => {
  return (
    <main className="w-full px-8">
      {/* Product Top Header */}
      <div className=" flex justify-between items-center  w-full mb-4   ">
        <h1 className="font-semibold text-lg">Most Viewed Products</h1>
        <button className="bg-[#001AFF] text-[#EAEBEA] px-5 py-3 flex items-center justify-center rounded-xl">
          View all products
        </button>
      </div>

      {/* Product Main Header */}
      <div className="flex items-center  w-full bg-[#F5F5F5] px-4 py-3 border rounded-md font-medium mb-4 justify-between gap-4 lg:gap-0">
        <p className="w-[23%] md:w-[20%] lg:w-[17%]">Item</p>
        <p className=" hidden md:block w-[10%]">Views</p>
        <p className="w-[20%] md:w-[17%]">Price</p>
        <p className="w-[20%] md:w-[15%]">Category</p>
        <p className="w-[20%] md:w-[15%]">Actions</p>
        <p className="hidden md:block w-[16%]">Availability</p>
      </div>

      <ProductItem />
      <ProductItem />
      <ProductItem />
    </main>
  );
}

export default ProductsDash