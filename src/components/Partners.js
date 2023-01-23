import aliexpressImg from "../assets/images/AliExpress-Logo.wine.svg"
import shopifyImg from "../assets/images/Shopify-Logo.wine.svg"
import amazonImg from "../assets/images/Amazon_(company)-Logo.wine.svg"
import ebayImg from "../assets/images/EBay-Logo.wine.svg";
const Partners = () => {
  return (
    <div className="text-center ">
      <h1 className="text-3xl font-semibold">Trusted Partners</h1>
      <div className="flex items-center justify-between flex-wrap sm:flex-nowrap">
        {/* image con  */}
        <div className="w-[45%] sm:w-auto">
          <img src={aliexpressImg} alt="" className="w-50 h-32" />
        </div>
        {/* image con  */}
        <div className="w-[45%] sm:w-auto">
          <img src={shopifyImg} alt="" className="w-50 h-32" />
        </div>
        {/* image con  */}
        <div className="w-[45%] sm:w-auto">
          <img src={amazonImg} alt="" className="w-50 h-28" />
        </div>
        {/* image con  */}
        <div className="w-[45%] sm:w-auto">
          <img src={ebayImg} alt="" className="w-50 h-28" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
