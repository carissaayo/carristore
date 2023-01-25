import React from 'react'
import HeroImg from "../assets/images/image2.png"
const Hero = () => {
  return (
    <main className="2xl:section flex flex-col lg:flex-row  lg:gap-0 py-4 pb-12  md:py-20 justify-center items-center lg:items-start lg:justify-between text-white px-6 sm:px-12  md:px-16 lg:px-28 bg-primaryColor">
      <section className=" lg:flex-1 order-2 lg:order-1 text-center lg:text-left">
        <h1 className="font-bold text-2xl sm:text-4xl lg:text-3xl xl:text-[44px] 2xl:text-[54px] mb-6  leading-tight">
          Everything You Need To Grow Your Business
        </h1>
        <p className="font-medium sm:text-xl xl:text-[24px] 2xl:text-[28px] mb-6 leading-tight md:w-[80%] lg:w-auto mx-auto lg:mx-0">
          CarriStore does everything you need to start your business. Attract
          client through social media and simplify your business operation
        </p>
        <button className="bg-secondaryColor text-primaryColor py-4 px-8 xl:text-lg rounded-full hover:scale-110 ">
          Get Started With Us Today
        </button>
      </section>
      <section className="w-full md:w-[70%] lg:flex-1 order-1 lg:order-2">
        <div className="w-full relative">
          <img
            src={HeroImg}
            alt="hero img"
            className=" h-[400px] sm:h-[500px] xl:h-[550px] 2xl:h-[600px] relative lg:bottom-14 lg:left-6"
          />
        </div>
      </section>
    </main>
  );
}

export default Hero