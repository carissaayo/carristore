import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CategoryCard from './CategoryCard';
import img1 from "../assets/images/clothes.webp";
import img2 from "../assets/images/gadgets.webp";
import img3 from "../assets/images/foood.webp";
import img4 from "../assets/images/appliances.webp";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Categories = () => {
  return (
    <section className=" xl:section bg-primaryColor px-6 md:px-10 flex flex-col justify-start items-center  text-white py-24 xl:pt-24 ">
      <h1 className="text-4xl text-center  font-bold mb-4">Our Categories</h1>
      <h3 className="text-2xl text-center mb-16 ">
        Here you can find the categories of products you can sell on our
        platform.
      </h3>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className=" text-black relative w-full swiper-container "
      >
        <SwiperSlide className="slide ">
          <CategoryCard
            img={img1}
            header="Fashion"
            text="You can sell all types for both gender."
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <CategoryCard
            img={img2}
            header="Mobile Gadget"
            text="You can sell  devices that are recognized."
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <CategoryCard
            img={img3}
            header="Foods"
            text="You can sell fruits, vegetables, snacks, etc."
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <CategoryCard
            img={img4}
            header="Home Appliances"
            text="You can sell all types of home appliances"
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <CategoryCard
            img={img4}
            header="Home Appliances"
            text="You can sell all types of home appliances"
          />
        </SwiperSlide>
        <button className="absolute left-[30%] xs:left-[35%] sm:left-[40%] md:left-[42%] xl:left-[45%]  bottom-0 xl:bottom-2 bg-white h-12 w-12 rounded-full">
          <ChevronLeftIcon
            fontSize={32}
            className=" swiper-button-prev  h-12 "
          />
        </button>
        <button className=" absolute right-[30%] xs:right-[35%] sm:right-[40%] md:right-[42%] xl:right-[45%]  bottom-0 xl:bottom-2    w-12 h-12 bg-white rounded-full ">
          <ChevronRightIcon fontSize={32} className=" swiper-button-next h-12"  />
        </button>
      </Swiper>
    </section>
  );
}

export default Categories