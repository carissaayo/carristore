import React from 'react'

const Hero = () => {
  return (
    <main className="section flex py-20">
      <section className="flex-1">
        <h1 className="font-bold text-[54px] mb-6  ">
          Everything You Need To Grow Your Business
        </h1>
        <p className="font-medium text-[28px] mb-6">
          CarriStore does everything you need to start your business. Attract
          client through social media and simplify your business operation
        </p>
        <button className="bg-secondaryColor text-primaryColor py-4 px-8 text-lg rounded-full">Get Started With Us Today</button>
      </section>
      <section className="flex-1">
        <div className=""></div>
      </section>
    </main>
  );
}

export default Hero