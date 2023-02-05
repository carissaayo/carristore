import { useState,useEffect } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/reducers/userSlice";

const Login = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [incorrectDetails, setIncorrectDetails] = useState(false)

  
  const handleLogin = (e) => {
    e.preventDefault()
    console.log(user);
    if(password !== user.password || email !== user.email){
     setIncorrectDetails(true) 
     setShowSnackBar(true)
    }
    if(password === user.password && email=== user.email){
      navigate("/dashboard")
      dispatch(loginUser())
    }
  }


 useEffect(() => {
   const snack =
     incorrectDetails && setTimeout(() => setShowSnackBar(false), 2000);

   return () => clearTimeout(snack);
 }, [handleLogin]);


  return (
    <main className="w-full flex h-screen ">
      <section
        className={` transition-translate duration-1000 ease-in-out absolute top-[3%] left-[10%] md:left-[20%] bg-white h-[100px] sm:h-[80px]  md:h-[70px] w-[80%] sm:w-[400px] md:w-[50%]  xl:w-[60%] rounded-xl  p-4 ${
          showSnackBar ? "translate-y-[100%]" : "translate-y-[-200%]"
        }`}
      >
        <h1 className=" text-lg font-medium text-center">
        Your login details are incorrect, please try again
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
      <form className="bg-secondaryColor flex-[3] flex items-center flex-col justify-center text-primaryColor gap-6" onSubmit={handleLogin}>
        <h2 className="text-2xl sm:text-3xl lg:text-2xl mb-4 font-medium">
          Welcome back 🖐
        </h2>
        <h2 className="text-2xl mb-4">Login to your account</h2>
        {/* Input con */}
        <div className="w-4/5 sm:w-3/5 lg:w-3/5 mx-auto h-[60px] lg:h-[50px] bg-white flex items-center px-2 rounded-full mb-2">
          <input
            type="email"
            className="w-4/5 h-[40px] pl-4 border-0 outline-none text-lg"
            placeholder="Your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Input con */}
        <div className="  w-4/5 sm:w-3/5 lg:w-3/5 mx-auto h-[60px] lg:h-[50px] bg-white flex items-center px-4 rounded-full justify-between ">
          <input
            type={showPassword ? "text" : "password"}
            className="w-[90%] h-[40px] pl-4 border-0 outline-none text-lg"
            placeholder="Your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <p className=" w-4/5 sm:w-3/5 lg:w-3/5 text-right cursor-pointer font-medium hover:scale-105 mb-4">
          Forgot password?
        </p>

        {/* Button */}
        <button
          type="submit"
          className=" w-4/5 sm:w-3/5 mx-auto h-[60px] lg:h-[50px] bg-primaryColor text-white  px-2 rounded-full mb-2 flex items-center justify-center text-lg"
        >
          Login
        </button>

        <p className="  w-4/5 sm:w-3/5 lg:w-3/5 mx-auto font-bold text-sm text-center">
          New to CarriStore?
          <Link to="/register" className="pl-2">
            Create an account
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
