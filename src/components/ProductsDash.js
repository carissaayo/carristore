import React from 'react'
import ProductItem from './ProductItem';
import ProductsCon from './ProductsCon';

const ProductsDash = () => {
  return (
    <main className="w-full px-8">
      {/* Product Top Header */}
      <div className=" flex justify-between items-center  w-full mb-4   ">
        <h1 className="font-semibold text-lg">Most Viewed Products</h1>
        <button className="bg-[#001AFF] text-[#EAEBEA] px-5 py-3 hidden xs:flex items-center justify-center rounded-xl">
          View all products
        </button>
      </div>

     <ProductsCon/>
    </main>
  );
}

export default ProductsDash