import React from 'react'

const Footer = () => {
  return (
    <section className=" md:h-[80vh] lg:h-[60vh] bg-primaryColor text-white px-6 md:px-16 lg:px-28 flex items-center justify-center py-20 md:py-0">
      <div className="flex w-full gap-12 md:gap-1 lg:gap-32 lg:pr-20 flex-wrap lg:flex-nowrap ">
        {/* first col */}
        <div className="w-[100%] md:w-[40%] flex flex-col gap-4 md:mr-16 lg:mr-0 mb-4 lg:mb-0">
          <a href="#" className="text-2xl font-bold ">
            CarriStore
          </a>
          <p className="text-lg ">
            Lörem ipsum duteskade bes, autode jonyledes. Gögt fartad orar sorade serieotrohet. Böliga amonde.{" "}
          </p>
        </div>

        {/* Second col */}
        <div className="flex flex-col  gap-4 w-[50%] sm:w-[50%] md:w-[15%] md:mr-16 lg:mr-0">
          <h2 className="text-xl font-medium">Business</h2>
          <h4 className="text-lg">Stores</h4>
          <h4 className="text-lg">Categories</h4>
          <h4 className="text-lg">Products</h4>
          <h4 className="text-lg">Customers</h4>
          <h4 className="text-lg">Deliveries</h4>
        </div>

        {/* third col */}
        <div className="flex flex-col gap-4  lg:w-[20%]    ">
          <h2 className="text-xl font-medium">Company</h2>
          <h4 className="text-lg">About us</h4>
          <h4 className="text-lg">Partners</h4>
          <h4 className="text-lg">Terms and Conditions</h4>
          <h4 className="text-lg">Legal</h4>
          <h4 className="text-lg">Contact us</h4>
        </div>

        {/* fourth col */}
        <div className="flex flex-col gap-4  w-[15]">
          <h2 className="text-xl font-medium">Contact</h2>
          <h4 className="text-lg">support@carristore</h4>
          <h4 className="text-lg">No5 Alagbaka, Akure, Ondo State. </h4>
          <h4 className="text-lg">+2345890923455</h4>
        </div>
      </div>
    </section>
  );
}

export default Footer