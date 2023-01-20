import React from 'react'
import CategoryCard from './CategoryCard';
import img1 from "../assets/images/clothes.webp";
import img2 from "../assets/images/gadgets.webp";
import img3 from "../assets/images/foood.webp";
import img4 from "../assets/images/appliances.webp";

const Categories = () => {
  return (
    <section className="section bg-primaryColor px-28 flex flex-col justify-center items-center  text-white">
      <h1 className="text-4xl text-center  font-bold mb-4">Our Categories</h1>
      <h3 className="text-2xl text-center mb-8 ">
        Here you can find the categories of products you can sell on our
        platform.
      </h3>
      <section className="flex text-black gap-6">
        <CategoryCard
          img={img1}
          header="Fashion"
          text="You can sell all types for both gender."
        />
        <CategoryCard
          img={img2}
          header="Mobile Gadget"
          text="You can sell  devices that are recognized."
        />
        <CategoryCard
          img={img3}
          header="Foods"
          text="You can sell fruits, vegetables, snacks, etc."
        />
        <CategoryCard
          img={img4}
          header="Home Appliances"
          text="You can sell all types of home appliances"
        />
      </section>
    </section>
  );
}

export default Categories