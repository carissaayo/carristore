import { useState,useEffect } from "react";
import { ChevronDownIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/reducers/userSlice";


const Register = () => {
const {user } = useSelector((state) => state.user);
const navigate= useNavigate()
let dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false)
  console.log(user);

  const handleRegister=(e)=>{
    e.preventDefault();
    // if(user.email===  email || user.phone===phone){
    //   setDoesUserExists(true)
    // }

     dispatch(registerUser({email,password,phone,fullname}))
    setRegistrationComplete(true)
    setShowSnackBar(true)
  }

 useEffect(() => {
   const snack =
     registrationComplete && setTimeout(() => setShowSnackBar(false), 2000);

   return () => clearTimeout(snack);
 }, [handleRegister]);

  useEffect(() => {
    const registerDone = registrationComplete && setTimeout(() => navigate("/login"), 2500);

    return () => clearTimeout(registerDone);
  }, [handleRegister]);
  
  return (
    <main className="w-full flex h-screen overflow-y-hidden relative">
      <section
        className={` transition-translate duration-1000 ease-in-out absolute top-[3%] left-[20%] bg-white h-[80px]  md:h-[70px] sm:w-[400px] md:w-[50%]  xl:w-[60%] rounded-xl  p-4 ${
          showSnackBar ? "translate-y-[100%]" : "translate-y-[-200%]"
        }`}
      >
        <h1 className=" text-lg font-medium text-center">
          Your account has ben created successfully, you will be redirect to
          your dashboard
        </h1>
      </section>
      {/* Text Con */}
      <section className="bg-primaryColor flex-[2] lg:pt-16 px-12 xl:pl-20 text-white  flex-col gap-10 hidden lg:flex">
        <h1 className=" text-4xl mb-4 ">CarriStore</h1>
        <h2 className="text-4xl xl:tracking-wider">
          Sell better on social media
        </h2>
        {/* Sub Text Con */}
        <div className="xl:w-[90%]">
          <h3 className="text-2xl mb-2">Create a store in 5 minutes</h3>
          <p className="">
            Setting up a catlog store is really easy and it takes just 5 minutes
          </p>
        </div>
        {/* Sub Text Con */}

        <div className="xl:w-[90%]">
          <h3 className="text-2xl mb-2">Receive orders on whatsapp</h3>
          <p className="">
            Orders from your store comes as a message on whatsapp, so you can
            finalize details
          </p>
        </div>
        {/* Sub Text Con */}

        <div className="xl:w-[90%]">
          <h3 className="text-2xl mb-2">Manage your orders easily</h3>
          <p className="">
            With CarriStore it's easy to manage your orders & delivery details,
            so nothing gets missed when it's time to deliver
          </p>
        </div>
        {/* Sub Text Con */}

        <div className="xl:w-[90%]">
          <h3 className="text-2xl mb-2">Keep track of your customers</h3>
          <p className="">
            CarriStore helps you keep track of the details of every customer
            that orders from you
          </p>
        </div>
      </section>
      {/* Inputs Con */}
      <form
        className="bg-secondaryColor lg:flex-[3] flex items-center flex-col justify-center text-primaryColor gap-4 font-normal w-full"
        onSubmit={handleRegister}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-2xl mb-4 font-medium">
          Start selling better 🏪
        </h2>
        <h2 className="text-2xl mb-4">Create your account</h2>
        {/* Fullname Input con */}
        <div className="w-4/5 sm:w-3/5 lg:w-3/5 mx-auto  h-[50px] bg-white flex items-center px-2 rounded-full mb-2">
          <input
            type="text"
            className="w-4/5 h-[40px] pl-4 border-0 outline-none text-lg rounded-full"
            placeholder="Full name"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            required
          />
        </div>
        {/* Email Input con */}

        <div className="w-4/5 sm:w-3/5 lg:w-3/5 mx-auto h-[50px] bg-white flex items-center px-2 rounded-full mb-2">
          <input
            type="email"
            className="w-4/5 h-[40px] pl-4 border-0 outline-none text-lg rounded-full"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        {/*Phone Input con */}
        <div className="w-full">
          <div className="w-4/5 sm:w-3/5 lg:w-3/5 mx-auto  h-[50px] bg-white flex items-center px-2 pl-4 rounded-full mb-2">
            <p className="flex items-center gap-2">
              +234 <ChevronDownIcon className="h-5 w-5" />
            </p>
            <input
              type="tel"
              className="w-4/5 h-[40px] pl-4 border-0 outline-none text-lg rounded-full"
              placeholder="Phone number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </div>
          <p className="w-4/5 sm:w-3/5 lg:w-3/5  mx-auto pl-4 text-sm font-medium">
            Format: 814-687-1865
          </p>
        </div>

        {/* Input con */}
        <div className="  w-4/5 sm:w-3/5 lg:w-3/5 mx-auto h-[50px] bg-white flex items-center px-4 rounded-full justify-between full">
          <input
            type="password"
            className="w-[90%] h-[40px] pl-4 border-0 outline-none text-lg rounded-full"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <div className="">
            {showPassword ? (
              <EyeSlashIcon
                className="h-6 w-6 cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <EyeIcon
                className="h-6 w-6 cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        </div>

        {/* Button */}
        <button
          className=" w-4/5 sm:w-3/5 mx-auto h-[50px] bg-primaryColor text-white  px-2 rounded-full mb-2 flex items-center justify-center text-lg"
          type="submit"
        >
          Register
        </button>

        <p className="  w-4/5 sm:w-3/5 lg:w-3/5 mx-auto font-bold text-sm text-center">
          Already have an account?
          <Link to="/login" className="pl-2">
            Sign in
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Register;
