import {useState} from 'react'
import EditProduct from './EditProduct';
import ProductItem from './ProductItem';

const ProductsCon = ({  }) => {
  const [openEditProduct, setOpenEditProduct] = useState(false);

  return (
    <main className="">
      {/* Product Main Header */}
      <div className="flex items-center  w-full bg-[#F5F5F5] px-4 py-3 border rounded-md font-medium mb-4 justify-between xs:gap-14 sm:gap-4 lg:gap-0 ">
        <p className="w-[80%] xs:w-[40%] md:w-[20%] lg:w-[17%]">Item</p>
        <p className=" hidden md:block w-[10%]">Views</p>
        <p className="hidden sm:block w-[30%] md:w-[17%]">Price</p>
        <p className="hidden md:block w-[20%] md:w-[15%]">Category</p>
        <p className=" w-[50%] xs:w-[30%] md:w-[15%]">Actions</p>
        <p className=" block  xs:w-[20%] md:w-[16%]">Availability</p>
      </div>

      <ProductItem setOpenEditProduct={setOpenEditProduct} />
      <ProductItem setOpenEditProduct={setOpenEditProduct} />
      <ProductItem setOpenEditProduct={setOpenEditProduct} />
      {/* Edit Product */}
      <EditProduct
        setOpenEditProduct={setOpenEditProduct}
        openEditProduct={openEditProduct}
      />
    </main>
  );
};

export default ProductsCon