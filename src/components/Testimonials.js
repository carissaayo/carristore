import React from 'react'
import CategoryCard from "./CategoryCard";
import TestimonialCard from "./TestimonialCard";
import userImg from "../assets/images/profile.jfif";

const Testimonials = () => {
  return (
    <main className="section bg-secondaryColor px-28 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center  font-bold mb-8">Testimonials</h1>
      <h3 className="text-2xl text-center mb-16 w-4/5 mx-auto ">
        Below are testimonials from some of our users and some of the customers
      </h3>
      <section className="flex text-black gap-8">
        <TestimonialCard name="John Doe" cat="Fashion" img1={userImg} text=""/>
        <TestimonialCard name="John Sean" cat="Gadget" img1={userImg} text=""/>
        <TestimonialCard name="Jane Doe" cat="Foods" img1={userImg} text=""/>
      </section>
    </main>
  );
}

export default Testimonials