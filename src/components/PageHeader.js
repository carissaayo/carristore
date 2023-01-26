import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'

const PageHeader = ({setOpenSideNav,title}) => {
  return (
    <div className="flex w-full sm:justify-between items-center px-6 py-4 gap-12 sm:gap-0 ">
      <Bars3Icon className="w-8 h-8 cursor-pointer xl:hidden hover:scale-110" onClick={()=>setOpenSideNav(true)}/>
      <h1 className="text-2xl font-medium">{title}</h1>
      <button className="hidden border rounded-full sm:flex items-center px-4 py-2 gap-2">
        ⚡<h4 className="">Quick Actions</h4>
        <ChevronDownIcon className="w-6 h-6" />
      </button>
    </div>
  );
}

export default PageHeader