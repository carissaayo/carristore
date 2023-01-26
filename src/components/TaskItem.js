import React from 'react'

const TaskItem = ({ name, buttonText,Icon,alt }) => {
  return (
    <main className="flex w-full justify-between   sm:items-center gap-4 sm:gap-0 px-2 bg-[#ececec20] py-3 border rounded-md cursor-pointer mb-4 flex-col sm:flex-row">
      <div className="flex gap-4 items-center">
        <div className="w-8 h-8 border rounded-full "></div>
        <h3 className="font-medium">{name}</h3>
      </div>
      <div className=" flex items-center justify-center sm:justify-between gap-8 text-[#001AFF]">
        {Icon && <Icon className="h-6 w-6" />}
        <h3 className="hidden md:block">{alt}</h3>
        <button className="text-[#001AFF] bg-[#EAEBEA] px-5 py-3 flex items-center justify-center rounded-xl">
          {buttonText}
        </button>
      </div>
    </main>
  );
};

export default TaskItem