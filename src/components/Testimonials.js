import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import TestimonialCard from "./TestimonialCard";
import img1 from "../assets/images/face1.webp";
import img2 from "../assets/images/face2.webp";
import img3 from "../assets/images/face3.webp";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Testimonials = () => {
  return (
    <main className="h-[85vh] bg-secondaryColor px-3  xs:px-6 md:px-10 pt-20 gap-10 testimonial">
      <h1 className="text-4xl text-center  font-bold mb-8">Testimonials</h1>
      <h3 className=" text-lg xs:text-2xl text-center mb-16 xs:w-4/5 mx-auto ">
        Below are testimonials from some of our users and some of the customers
      </h3>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className=" text-black relative w-full swiper-container testi"
      >
        <SwiperSlide className="testimonial- slide ">
          <TestimonialCard name="John Doe" cat="Fashion" img1={img1} text="" />
        </SwiperSlide>
        <SwiperSlide className=" slide ">
          <TestimonialCard name="John Sean" cat="Gadget" img1={img2} text="" />
        </SwiperSlide>
        <SwiperSlide className=" slide">
          <TestimonialCard name="Jane Doe" cat="Foods" img1={img3} text="" />
        </SwiperSlide>
        <SwiperSlide className=" slide">
          <TestimonialCard name="Jane Doe" cat="Foods" img1={img3} text="" />
        </SwiperSlide>
        <SwiperSlide className="   slide">
          <TestimonialCard name="Jane Doe" cat="Foods" img1={img3} text="" />
        </SwiperSlide>
        <SwiperSlide className="testimonial- slide ">
          <TestimonialCard name="John Doe" cat="Fashion" img1={img1} text="" />
        </SwiperSlide>
        <SwiperSlide className=" slide ">
          <TestimonialCard name="John Sean" cat="Gadget" img1={img2} text="" />
        </SwiperSlide>
        <button className="absolute left-[30%] xs:left-[35%] sm:left-[40%] md:left-[42%] xl:left-[45%]  bottom-0 xl:bottom-2 bg-white h-12 w-12 rounded-full">
          <ChevronLeftIcon
            fontSize={32}
            className=" swiper-button-prev  h-12 "
          />
        </button>
        <button className=" absolute right-[30%] xs:right-[35%] sm:right-[40%] md:right-[42%] xl:right-[45%]  bottom-0 xl:bottom-2    w-12 h-12 bg-white rounded-full ">
          <ChevronRightIcon
            fontSize={32}
            className=" swiper-button-next h-12"
          />
        </button>
      </Swiper>
    </main>
  );
}

export default Testimonials