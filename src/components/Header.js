import React from 'react'

const Header = () => {
  return (
    <main className=" flex  py-6  justify-between h-[80px]">
      {/* Logo */}
      <h1 className="text-2xl font-bold">CarriStore</h1>
      {/* Links Con*/}
      <div className="flex gap-10 ">
        <button className="">Pricing</button>
        <button className="">Resources</button>
        <button className="bg-secondaryColor text-primaryColor  rounded-full w-[120px] flex items-center justify-center h-[40px] ">Get Started</button>
      </div>
    </main>
  );
}

export default Header