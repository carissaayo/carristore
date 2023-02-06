import {
  ChevronDownIcon,
  EyeIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

import SideNav from "../components/landingpageComponents/SideNav";
import PageHeader from "../components/PageHeader";

import VerifyEmailText from "../components/VerifyEmailText";

const Profile = () => {
     const navigate = useNavigate();
     const { isLoggedIn } = useSelector((state) => state.user);

  const [openSideNav, setOpenSideNav] = useState(false);
  const [activeCon, setActiveCon] = useState(1);

// useEffect(()=>{

//   if (!isLoggedIn)navigate("/login")
// },[])

return (
    <main className="xl:flex h-screen w-full bg-secondaryColor gap-4 py-4 px-2 sm:px-4 overflow-hidden relative">
      {/* Overlay Starts*/}
      <div
        className={`${
          openSideNav &&
          "w-full h-screen  absolute top-0 left-0      bg-[#00000070] z-40"
        } xl:hidden`}
        onClick={() => setOpenSideNav(false)}
      ></div>
      {/* Overlay Ends */}
      <SideNav openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
      <section className="flex-[4]  bg-white rounded-lg ">
        <PageHeader title="My Profile" setOpenSideNav={setOpenSideNav} />
        <VerifyEmailText />

        <section className=" flex flex-col md:flex-row px-6 py-4 gap-8 md:gap-20 lg:pr-20  h-[77vh] sm:h-[75vh] md:h-[78vh] xl:h-auto ">
          <section className="md:flex-1 sm:flex  md:block">
            <button
              className={`flex flex-1 gap-4  items-center px-3 py-3  w-full sm:min-w-[250px] border-l-2  ${
                activeCon === 1
                  ? "border-black bg-[#E9E9E9]"
                  : "border-[#00000020]"
              }`}
              onClick={() => setActiveCon(1)}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center  ${
                  activeCon === 1 && "bg-[#2100EA] text-white"
                }`}
              >
                <UserIcon className="w-6 h-6 " />
              </div>
              <h4 className="font-medium text-lg">Basic Details</h4>
            </button>

            <button
              className={`flex-1 flex gap-4  items-center px-3 py-3 w-full sm:min-w-[250px] border-l-2  ${
                activeCon === 2
                  ? "border-black bg-[#E9E9E9]"
                  : "border-[#00000020]"
              }`}
              onClick={() => setActiveCon(2)}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activeCon === 2 && "bg-[#2100EA] text-white"
                }`}
              >
                <KeyIcon className="w-5 h-5" />
              </div>
              <h4 className="font-medium ">Update Password</h4>
            </button>
          </section>
          <section className="md:flex-[4] relative  ">
            {/* Update Password */}
            <div className={`${activeCon === 1 && "absolute left-[200%]"} `}>
              <div className="flex gap-4 bg-[#E9E9E9] items-center px-8 py-3  mb-8 sm:mb-20">
                <h4 className="font-medium text-lg">Edit Password</h4>
              </div>

              {/* Input Con */}
              <div className="w-[95%] xs:w-[80%] sm:w-[70%] md:w-[80%] xl:w-[60%] mx-auto mb-8">
                <div className="w-full border h-[50px] rounded-lg flex items-center gap-3">
                  <input
                    type="text"
                    className="w-[90%] h-full rounded-lg outline-none pl-3  "
                    placeholder="Current Password"
                  />
                  <EyeIcon className="w-4 h-6 cursor-pointer" />
                </div>
              </div>

              {/* Input Con */}
              <div className=" w-[95%] xs:w-[80%] sm:w-[70%] md:w-[80%] xl:w-[60%] mx-auto mb-8">
                <div className="w-full border h-[50px] rounded-lg flex items-center gap-3">
                  <input
                    type="text"
                    className="w-[90%] h-full rounded-lg outline-none pl-3  "
                    placeholder="New Password"
                  />
                  <EyeIcon className="w-4 h-6 cursor-pointer" />
                </div>
              </div>

              {/* Input Con */}
              <div className="w-[95%] xs:w-[80%] sm:w-[70%] md:w-[80%] xl:w-[60%] mx-auto mb-8">
                <div className="w-full border h-[50px] rounded-lg flex items-center gap-3">
                  <input
                    type="text"
                    className="w-[90%] h-full rounded-lg outline-none pl-3  "
                    placeholder="Confirm New Password"
                  />
                  <EyeIcon className="w-4 h-6 cursor-pointer" />
                </div>
              </div>

              <button className="w-[95%] xs:w-[80%] sm:w-[70%] md:w-[80%] xl:w-[60%] bg-[#0011AC] h-[50px] flex items-center justify-center mx-auto rounded-md text-white text-lg hover:scale-110">
                Update Password
              </button>
            </div>

            {/* Basic Details */}
            <div className={`${activeCon === 2 && "absolute left-[200%]"}`}>
              <div className="flex gap-4 bg-[#E9E9E9] items-center px-8 py-3  mb-8 sm:mb-20">
                <h4 className="font-medium text-lg">Basic Details</h4>
              </div>

              {/* Input Con */}
              <div className="w-[95%] xs:w-[80%] sm:w-[70%] md:w-[80%] xl:w-[60%] mx-auto mb-8">
                <div className="w-full border h-[50px] rounded-lg relative">
                  <span className="absolute top-[-38%] left-[10%] text-[#00000060] bg-white text-sm">
                    Name
                  </span>
                  <input
                    type="text"
                    className="w-full h-full rounded-lg outline-none pl-3 focus:outline-2 focus:outline-[#00000060] "
                    placeholder="Yussuf Ajao"
                  />
                </div>
              </div>

              {/* Input Con */}
              <div className="w-[95%] xs:w-[80%] sm:w-[70%] md:w-[80%] xl:w-[60%] mx-auto mb-8 ">
                <div className="w-full border h-[50px] rounded-lg relative ">
                  <span className="absolute top-[-38%] left-[10%] text-[#00000060] bg-white text-sm ">
                    Email
                  </span>
                  <input
                    type="text"
                    className="w-full h-full rounded-lg outline-none pl-3 focus:outline-2 focus:outline-[#00000060] "
                    placeholder="ajaoyussuf@gmail.com"
                  />
                </div>
              </div>

              {/* Input Con */}
              <div className=" w-[95%] xs:w-[80%] sm:w-[70%] md:w-[80%] xl:w-[60%] mx-auto mb-8 ">
                <div className="w-full border h-[50px] rounded-lg relative flex items-center pl-2 gap-4">
                  <span className="absolute top-[-38%] left-[10%] text-[#00000060] bg-white text-sm">
                    Phone Number
                  </span>
                  <p className="flex items-center gap-1">
                    +234 <ChevronDownIcon className="w-4 h-4" />
                  </p>
                  <input
                    type="text"
                    className="w-full h-full rounded-lg outline-none pl-3 focus:outline-2 focus:outline-[#00000060] "
                    placeholder="ajaoyussuf@gmail.com"
                  />
                </div>
              </div>

              <button className="w-[95%] xs:w-[80%] sm:w-[70%] md:w-[80%] xl:w-[60%] bg-[#0011AC] h-[50px] flex items-center justify-center mx-auto rounded-md text-white text-lg hover:scale-110">
                Update basic details
              </button>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Profile;
