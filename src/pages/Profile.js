import {
  ChevronDownIcon,
  EyeIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SideNav from "../components/landingpageComponents/SideNav";
import PageHeader from "../components/PageHeader";

import VerifyEmailText from "../components/VerifyEmailText";
import { changeUserPassword, changUserDetails } from "../redux/reducers/userSlice";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [text, setText] = useState("")

     const navigate = useNavigate();
  let dispatch = useDispatch();

     const { isLoggedIn ,user} = useSelector((state) => state.user);

  const [openSideNav, setOpenSideNav] = useState(false);
  const [activeCon, setActiveCon] = useState(1);

// useEffect(()=>{

//   if (!isLoggedIn)navigate("/login")
// },[])


const handleChangeDetails=(e)=>{
e.preventDefault();
if(name=== "" && email==="" && phone === "")return
dispatch(changUserDetails({email,name,phone}))
setShowSnackBar(true);
setIncorrectPassword(true);
setText("Details succesfully updated")
}

const handlePassswordChange=(e)=>{
e.preventDefault();
if(currentPassword!== user.password){
  setIncorrectPassword(true);
  setText("Your current password is incorrect")
     setShowSnackBar(true);

}else if(newPassword === currentPassword){
  setIncorrectPassword(true) ;
  setText("You can't use your old password as your new password")
     setShowSnackBar(true);

}else if(newPassword !== confirmPassword){
  setIncorrectPassword(true);
  setText("Confirm password doesnt match your new password")
     setShowSnackBar(true);
}
else{
  setIncorrectPassword(true)
     setShowSnackBar(true);
setText("Password successfully changed");
dispatch(changeUserPassword({newPassword}))
}

}

 useEffect(() => {
   const snack =
     incorrectPassword && setTimeout(() => setShowSnackBar(false), 2000);

   return () => clearTimeout(snack);
 }, [handlePassswordChange]);
return (
  <main className="xl:flex h-screen w-full bg-secondaryColor gap-4 py-4 px-2 sm:px-4 overflow-hidden relative">
    <section
      className={` transition-translate duration-1000 ease-in-out absolute top-[3%] left-[10%] md:left-[20%] bg-white h-[100px] sm:h-[80px]  md:h-[70px] w-[80%] sm:w-[400px] md:w-[50%]  xl:w-[60%] rounded-xl  p-4 ${
        showSnackBar ? "translate-y-[100%]" : "translate-y-[-200%]"
      }`}
    >
      <h1 className=" text-lg font-medium text-center">{text}</h1>
    </section>
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

      <section className=" flex flex-col md:flex-row  gap-8 md:gap-20 lg:pr-20 min-h-[max-content] h-[77vh] sm:h-[75vh] md:h-[78vh] xl:h-auto ">
        <section className=" px-6 py-4 md:flex-1 sm:flex  md:block">
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
        <section className=" px-6 py-4 w-full md:flex-[4] relative min-h-[max-content]  bg-white">
          {/* Update Password */}
          <form
            onSubmit={handlePassswordChange}
            className={`${
              activeCon === 1 && "absolute left-[200%] hidden"
            } bg-white `}
          >
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
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
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
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <EyeIcon className="w-4 h-6 cursor-pointer" />
              </div>
            </div>

            <button
              className="w-[95%] xs:w-[80%] sm:w-[70%] md:w-[80%] xl:w-[60%] bg-[#0011AC] h-[50px] flex items-center justify-center mx-auto rounded-md text-white text-lg hover:scale-110"
              type="submit"
            >
              Update Password
            </button>
          </form>

          {/* Basic Details */}
          <form
            onSubmit={handleChangeDetails}
            className={`${activeCon === 2 && "absolute left-[200%] hidden"}`}
          >
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
                  placeholder={user?.fullname}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  type="email"
                  className="w-full h-full rounded-lg outline-none pl-3 focus:outline-2 focus:outline-[#00000060] "
                  placeholder={user?.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  type="number"
                  type="number"
                  min="1"
                  step="1"
                  className="w-full h-full rounded-lg outline-none pl-3 focus:outline-2 focus:outline-[#00000060] "
                  placeholder={user?.phone}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-[95%] xs:w-[80%] sm:w-[70%] md:w-[80%] xl:w-[60%] bg-[#0011AC] h-[50px] flex items-center justify-center mx-auto rounded-md text-white text-lg hover:scale-110"
            >
              Update basic details
            </button>
          </form>
        </section>
      </section>
    </section>
  </main>
);
};

export default Profile;
