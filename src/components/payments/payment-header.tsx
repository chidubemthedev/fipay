
import { Link } from "react-router-dom";
const PaymentHeader = () => {
  return (
    <div className="w-full flex items-center justify-between font-walsheim">
      <div className="flex flex-col">
        <h1 className="font-[500] leading-[32px] tracking-[0.5px] text-[26px] text-[#09005B]">
          Payment Link
        </h1>
        <p className="mt-2 text-[#5e5e5e] text-[14px] leading-[24px] font-[400] tracking-[0.28px]">
          Add new products and create payment link
        </p>
      </div>
      <div>
        <Link
          to={"/"}
          className="text-white text-[16px] leading-[24px] tracking-[0.32px] font-medium bg-primary rounded-[10px] p-[10px] h-[48px] w-[184px] flex items-center justify-center"
        >
          Create Payment Link
        </Link>
      </div>
    </div>
  );
}

export default PaymentHeader
