import React from 'react'
import TestimonialCard from "./TestimonialCard";
import img1 from "../assets/images/face1.webp";
import img2 from "../assets/images/face2.webp";
import img3 from "../assets/images/face3.webp";

const Testimonials = () => {
  return (
    <main className="h-[70vh] bg-secondaryColor px-16 lg:px-28 flex flex-col justify-start items-center pt-20">
      <h1 className="text-4xl text-center  font-bold mb-8">Testimonials</h1>
      <h3 className="text-2xl text-center mb-16 w-4/5 mx-auto ">
        Below are testimonials from some of our users and some of the customers
      </h3>
      <section className="flex text-black gap-8">
        <TestimonialCard name="John Doe" cat="Fashion" img1={img1} text="" />
        <TestimonialCard name="John Sean" cat="Gadget" img1={img2} text="" />
        <TestimonialCard name="Jane Doe" cat="Foods" img1={img3} text="" />
      </section>
    </main>
  );
}

export default Testimonials