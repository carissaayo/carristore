import {useState} from 'react'
import { ChevronDownIcon, ChevronUpIcon, ClipboardDocumentIcon, PlayCircleIcon, PlusIcon } from '@heroicons/react/24/outline';
import TaskItem from './TaskItem';

const TaskCon = () => {
    const [showMore, setShowMore] = useState(false)
  return (
    <main className="w-full px-4 sm:px-8 mb-4">
      {/* Task Hader */}
      <div className=" flex justify-between items-center  pb-4 border-b-4 w-full mb-4">
        <h1 className="font-semibold text-lg">Get Started</h1>
        <h1 className="font-medium ">Completed 0 of 5</h1>
      </div>
      <div className="">
        <TaskItem
          name="Verify email and phone number"
          buttonText="Get Verified"
          alt=""
        />{" "}
        <TaskItem
          name="Upload remaining products"
          buttonText="Done"
          Icon={PlusIcon}
          alt="Add Products"
        />{" "}
        <TaskItem
          name="Add store link to social handles"
          buttonText="Done"
          Icon={ClipboardDocumentIcon}
          alt="Copy Link"
        />{" "}
        <>
          {showMore && (
            <>
              <TaskItem
                name="Join the community on WhatsApp"
                buttonText="Done"
                Icon=""
                alt="Join Community"
              />
              <TaskItem
                name="Add Catlog to your phone"
                buttonText="Done"
                Icon={PlayCircleIcon}
                alt="Show me how"
              />
            </>
          )}
        </>
      </div>
      {/* Show More/Less */}
      <button className="w-full py-4 flex items-center justify-center text-[#001AFF] gap-4" onClick={()=>setShowMore(!showMore)}>
        <h3 className=" font-medium">Show {showMore ? "Less" : "More"}</h3>
        {showMore ? (
          <ChevronDownIcon className="w-6 h-6" />
        ) : (
          <ChevronUpIcon className="w-6 h-6" />
        )}
      </button>
    </main>
  );
}

export default TaskCon