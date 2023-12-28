
import { CalenderActive,DropDown, NotFoundIlus } from "../../assets/icons";
const EmptyPayment = () => {
  return (
    <div className="w-full empty-cont h-full min-h-[414px] flex flex-col py-5 mt-[30px]">
      <div className="w-full px-5 justify-between flex items-center">
        <h1 className="text-header text-lg font-[500] leading-[32px] tracking-[0.36px]">
          My Payment Links
        </h1>
        <div className="date-wrap flex gap-2 px-4 h-10 items-center ">
          <span>
            <CalenderActive />
          </span>
          <p className="year-text">Year 2023</p>
          <span>
            <DropDown />
          </span>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center min-h-[318px]">
        <span>
          <NotFoundIlus />
        </span>
        <p className="text-[#0e0e0e] font-[500] text-sm text-center mt-4">
          No analytics
        </p>
        <p className="mt-[10px] text-[#5e5e5e] text-sm">
          All payment analytics will be displayed here
        </p>
      </div>
    </div>
  );
}

export default EmptyPayment
