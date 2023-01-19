import React from 'react'
import OfferCard from './OfferCard';

const Offer = () => {
  return (
    <section className="section bg-secondaryColor text-primaryColor px-32 pt-12">
      <h1 className="text-4xl font-bold text-center mb-4">What We Offer</h1>
      <p className="text-center  text-2xl mx-auto w-3/5 mb-8">
        We simplify the way you receive & manage orders, manage your customers,
        receive payments & much more
      </p>
      <section className="flex ">
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </section>
    </section>
  );
}

export default Offer