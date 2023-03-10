import { useState,useEffect } from "react";
import { MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import SideNav from "../components/landingpageComponents/SideNav";
import PageHeader from "../components/PageHeader";
import VerifyEmailText from "../components/VerifyEmailText";
import ProductsCon from "../components/ProductsCon";
import { Link, useNavigate } from "react-router-dom";
import { searchedProduct } from "../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";


const Products = () => {
  const [openSideNav, setOpenSideNav] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);

//  useEffect(() => {
//    if (!isLoggedIn) navigate("/login");
//  }, []);

  useEffect(() => {
    
  dispatch(searchedProduct(searchTerm))
  // console.log(products);
   
  }, [searchTerm])
  // const handleSearch = ()=>{}

  return (
    <main className="xl:flex h-screen w-full bg-secondaryColor gap-4 py-4 px-2 sm:px-4 overflow-hidden relative">
      {/* Overlay Starts*/}
      <div
        className={`${
          openSideNav && "w-full h-screen  absolute top-0 left-0 bg-[#00000070] z-10"
        } xl:hidden`}
        onClick={() => setOpenSideNav(false)}
      ></div>
      {/* Overlay Ends */}
      <SideNav
        openSideNav={openSideNav}
        setOpenSideNav={setOpenSideNav}
        // setOpenEditProduct={setOpenEditProduct}
      />
      <section className="flex-[4]  bg-white rounded-lg ">
        <PageHeader title="Products" setOpenSideNav={setOpenSideNav} />
        <VerifyEmailText />

        <section className="w-full px-4 xs:px-6  h-[74vh] sm:h-[77vh] md:h-[78vh] xl:h-auto">
          <section className="flex sm:items-center justify-between mb-8 flex-col sm:flex-row gap-6 sm:gap-0">
            <div className="">
              <h2 className="font-bold text-xl">All Products</h2>
            </div>
            <div className="flex items-center gap-6">
              {/* Search Con */}
              <div className="w-full sm:min-w-[300px]">
                <div className="w-full border h-[40px] rounded-lg flex items-center gap-3 pr-1">
                  <input
                    type="text"
                    className="w-[90%] h-full rounded-lg outline-none pl-3  "
                    placeholder="Search items"
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                  />
                  <div className="flex items-center justify-center w-8 h-8 bg-[#E9E9E9] rounded-md">
                    <MagnifyingGlassIcon className="w-4 h-6 cursor-pointer  opacity-75" />
                  </div>
                </div>
              </div>
              <Link
                to="/add-product"
                className="min-w-[200px] hidden md:flex items-center justify-center h-[40px] rounded-md bg-[#0011AC] text-white hover:scale-105"
              >
                Add New Products{" "}
              </Link>
            </div>
          </section>

          {/* Products Con */}
          <ProductsCon
          
          //  setOpenEditProduct={setOpenEditProduct} 
           />

          <div className="w-full flex md:hidden items-center justify-end pt-8">
            <Link
              to="/add-product"
              className="min-w-[200px] flex  items-center justify-center h-[40px] rounded-md bg-[#0011AC] text-white hover:scale-105"
            >
              Add New Products{" "}
            </Link>
          </div>
        </section>
      </section>

     
    </main>
  );
};

export default Products;
