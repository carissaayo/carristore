import React from 'react'

const Newsletter = () => {
  return (
    <section className="h-[350px] xs:h-[500px] bg-primaryColor px-6 xs:px-12 md:px-16 lg:px-28 text-white text-center flex flex-col items-center justify-center">
      <h1 className="text-xl xs:text-3xl sm:text-4xl font-bold mb-4">Subscribe to our Newsletter</h1>
      <p className="xs:text-xl md:text-2xl  xl:w-3/5 mb-12 ">
        Subscribe and get notified about the latest happenings and offers as
        soon as possible
      </p>
      <div className="w-full flex items-center justify-center">
        <div className=" xs:w-[70%] md:w-[60%] lg:w-[50%] h-[60px] xs:h-[70px] bg-white rounded-full p-3 flex items-center gap-2">
          <input
            type="text"
            className="h-full w-4/5 border-none outline-none text-black pl-4"
          />
          <button className="bg-primaryColor px-2 w-[120px] xl:w-1/5 h-[45px]  xs:h-[50px] flex items-center justify-center rounded-full text-lg">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter