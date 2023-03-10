import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { useState ,useEffect} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SideNav from "../components/landingpageComponents/SideNav";
import PageHeader from "../components/PageHeader";
import ProductsDash from "../components/ProductsDash";
import TaskCon from "../components/TaskCon";
import VerifyEmailText from "../components/VerifyEmailText";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const [openSideNav, setOpenSideNav] = useState(false);
  const navigate=useNavigate()
const { isLoggedIn ,user} = useSelector((state) => state.user);
// useEffect(()=>{

//   if (!user)navigate("/login")
// },[])
  return (
    <main className="xl:flex h-screen w-full bg-secondaryColor gap-4 py-4 px-2 sm:px-4 overflow-hidden relative">
      {/* Overlay Starts*/}
      <div
        className={`${
          openSideNav &&
          "w-full h-screen  absolute top-0 left-0      bg-[#00000070] z-10"
        } xl:hidden`}
        onClick={() => setOpenSideNav(false)}
      ></div>
      {/* Overlay Ends */}
      <SideNav openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
      <section className="flex-[4]  bg-white rounded-lg ">
        <PageHeader title="Dashboard" setOpenSideNav={setOpenSideNav} />
        <VerifyEmailText />

        {/* Scroll Part Starts */}
        <section className=" h-[77vh]  overflow-y-scroll pb-4 ">
          {/* details con */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between w-[95%] mx-auto border rounded-xl lg:rounded-full bg-white px-4 xs:px-8 py-4 lg:py-0  mb-4">
            {/* First Child */}
            <div className="p-4 flex gap-3 w-full xs:w-[90%] sm:w-[50%] lg:w-auto">
              <div className="h-16 w-16 sm:w-12 sm:h-12 rounded-md bg-blue-700 flex items-center justify-center">
                <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h5 className="text-lg sm:text-base font-normal">
                  Store visits
                </h5>
                <h6 className="text-base sm:text-sm">0</h6>
              </div>
            </div>

            {/* Second Child */}
            <div className="p-4 flex gap-3 w-full xs:w-[90%] sm:w-[50%] lg:w-auto">
              <div className="h-16 w-16 sm:w-12 sm:h-12 rounded-md bg-[#FF9900] flex items-center justify-center">
                <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h5 className="text-lg sm:text-base font-normal">
                  Store products
                </h5>
                <h6 className="text-base sm:text-sm">0</h6>
              </div>
            </div>

            {/* Third Child */}
            <div className="p-4 flex gap-3 w-full xs:w-[90%] sm:w-[50%] lg:w-auto">
              <div className="h-16 w-16 sm:w-12 sm:h-12 rounded-md bg-[#FF4438] flex items-center justify-center">
                <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h5 className="text-lg sm:text-base font-normal">
                  Customer carts
                </h5>
                <h6 className="text-base sm:text-sm">0</h6>
              </div>
            </div>

            {/* Fourth Child */}
            <div className="p-4 flex gap-3 w-full xs:w-[90%] sm:w-[50%] lg:w-auto">
              <div className="h-16 w-16 sm:w-12 sm:h-12 rounded-md bg-[#3BDE2D] flex items-center justify-center">
                <ArrowTrendingUpIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <h5 className="text-lg sm:text-base font-normal">
                  Current plan
                </h5>
                <h6 className="text-base sm:text-sm">Starter</h6>
              </div>
            </div>
          </div>
          {/* Tasks */}
          <TaskCon />
          {/* Products */}
          <ProductsDash />
        </section>
        {/* Scroll Part Ends */}
      </section>
    </main>
  );
};

export default Dashboard;
