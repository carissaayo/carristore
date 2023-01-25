import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'

const PageHeader = () => {
  return (
    <div className="flex w-full justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-medium">Dashboard</h1>
      <button className="border rounded-full flex items-center px-4 py-2 gap-2">
        ⚡
        <h4 className="">
        Quick Actions
        </h4>
        <ChevronDownIcon className="w-6 h-6" />
      </button>
    </div>
  );
}

export default PageHeader