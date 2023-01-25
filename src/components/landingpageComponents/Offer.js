import React from 'react'
import OfferCard from './OfferCard';
import img1 from "../../assets/images/image1.png";
import img2 from "../../assets/images/delivery.webp";
import img3 from "../../assets/images/interest.webp";
import Partners from './Partners';

const Offer = () => {
  return (
    <section className=" bg-secondaryColor text-primaryColor px-6 sm:px-12 lg:px-16 xl:px-28 pt-12">
      <h1 className="text-4xl font-bold text-center mb-4">What We Offer</h1>
      <p className="text-center text-lg sm:text-xl md:text-2xl mx-auto sm:w-[90%] xl:w-[70%] 2xl:w-3/5 mb-8">
        We simplify the way you receive & manage orders, manage your customers,
        receive payments & much more
      </p>
      <section className="flex flex-col lg:flex-row items-center  gap-8 justify-between pt-8 mb-20 ">
        {/* Card 1 */}
        <OfferCard
          img={img1}
          header="Effective Marketing"
          text="Our advanced search engine optimization would help your store &
          products show up on Google, when customers search related keywords"
        />
        {/* Card 2 */}
        <OfferCard
          img={img2}
          header="Free Deliveries"
          text="The first 20 deliveries nationwide will be free. The subsequent deliveries will be at 70% of the normal delivery fee."
        />
        <OfferCard
          img={img3}
          header="Credit With Zero Interest"
          text="We know starting a business or managing your business online can be capital intense. That is why we mad available credit plans to assist you "
        />
      </section>
      <Partners />
    </section>
  );
}

export default Offer