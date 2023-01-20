import React from 'react'

const CategoryCard = ({img,text,header}) => {
  return (
    <main className="flex flex-col bg-white rounded-md w-[30%]">
      <div className="w-full">
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="flex flex-col gap-4 px-2 py-4 ">
        <h1 className="text-xl font-medium px-2"> {header}</h1>
        <h3 className="pl-2">{text}</h3>
        <button className="rounded-full w-full mx-auto px-2 py-2 bg-secondaryColor">Learn More</button>
      </div>
    </main>
  );
}

export default CategoryCard