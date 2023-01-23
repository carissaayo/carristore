import React from 'react'

const Newsletter = () => {
  return (
    <section className="xs:h-[500px] bg-primaryColor px-16 lg:px-28 text-white text-center flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Subscribe to our Newsletter</h1>
      <p className="text-2xl  w-3/5 mb-12">
        Subscribe and get notified about the latest happenings and offers as
        soon as possible
      </p>
      <div className="w-full flex items-center justify-center">
        <div className="w-[50%] h-[70px] bg-white rounded-full p-3 flex items-center gap-2">
          <input
            type="text"
            className="h-full w-4/5 border-none outline-none text-black pl-4"
          />
          <button className="bg-primaryColor px-2 w-1/5  h-[50px] flex items-center justify-center rounded-full text-lg">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter