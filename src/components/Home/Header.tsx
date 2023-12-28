import { Link } from "react-router-dom";
import handWave from "../../assets/images/hand-wave.png";

const Header = () => {
  return (
    <div className="font-walsheim">
      <div className="my-3 flex flex-col gap-3 sm:flex-row items-start sm:items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-xl md:text-2xl font-bold tracking-tght text-neutral-800 flex items-center gap-2">
            <div className="flex items-center">
              <p className="font-[400] text-[26px] leading-[32px] tracking-[0.5px]">
                Hello,{" "}
              </p>
              <span className="font-[500] text-[26px] leading-[32px] tracking-[0.5px] text-[#09005B]">
                {" "}
                Oyindamola
              </span>
              <div className="flex justify-center items-center ml-[6px]">
                <img src={handWave} alt="hand wave" />
              </div>
            </div>
          </h2>
          <p className="text-sm text-[#5B5E63]">Let's explore fipay together</p>
        </div>

        <div className="text-neutral-800 flex gap-[16px] bg-primary-600 items-center rounded-[30px] sm:px-6 py-3 ">
          <Link
            to={"/payments"}
            className="text-[#00A603] text-sm font-medium  border border-[#00A603] rounded-[10px] p-[10px] h-[48px] w-[149px] flex items-center justify-center"
          >
            Make Payout
          </Link>
          <Link
            to={"/"}
            className="text-white text-[16px] leading-[24px] tracking-[0.32px] font-medium bg-primary rounded-[10px] p-[10px] h-[48px] w-[149px] flex items-center justify-center"
          >
            Fund Balance
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
