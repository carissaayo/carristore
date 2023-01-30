import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className="w-full flex h-screen ">
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
      <section className="bg-secondaryColor flex-[3] flex items-center flex-col justify-center text-primaryColor gap-6">
        <h2 className="text-2xl sm:text-3xl lg:text-2xl mb-4 font-medium">
          Welcome back 🖐
        </h2>
        <h2 className="text-2xl mb-4">Login to your account</h2>
        {/* Input con */}
        <div className="w-4/5 sm:w-3/5 lg:w-3/5 mx-auto h-[60px] lg:h-[50px] bg-white flex items-center px-2 rounded-full mb-2">
          <input
            type="text"
            className="w-4/5 h-[40px] pl-4 border-0 outline-none text-lg"
            placeholder="Your email"
          />
        </div>

        {/* Input con */}
        <div className="  w-4/5 sm:w-3/5 lg:w-3/5 mx-auto h-[60px] lg:h-[50px] bg-white flex items-center px-4 rounded-full justify-between ">
          <input
            type="text"
            className="w-[90%] h-[40px] pl-4 border-0 outline-none text-lg"
            placeholder="Your password"
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
        <Link to="/dashboard" className=" w-4/5 sm:w-3/5 mx-auto h-[60px] lg:h-[50px] bg-primaryColor text-white  px-2 rounded-full mb-2 flex items-center justify-center text-lg">
          Login
        </Link>

        <p className="  w-4/5 sm:w-3/5 lg:w-3/5 mx-auto font-bold text-sm text-center">
          New to CarriStore?
          <Link to="/register" className="pl-2">
            Create an account
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
