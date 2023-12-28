import { useState } from "react";
import Logo from "../../assets/images/Logo.svg";
import NotificationDropdown from "../../components/Notifications/Dropdown";
import {
  IntegrationIcon,
  ApiDocIcon,
  MenuIcon,
  TestModeIcon,
} from "../../assets/icons";

const Header = ({ userData, isOpen, setIsOpen }: any) => {
  function handleClick() {
    setIsOpen(!isOpen);
  }

  const [showNotificationDropdown, setNotificationDropdown] = useState(false);

  const initials = "AB";

  const notifications = [
    {
      type: "Debit Alert!",
      time: "12:00 PM",
      desc: "Lorem ipsum dolor sit amet . ",
    },
    {
      type: "Credit Alert!",
      time: "12:00 PM",
      desc: "Lorem ipsum dolor sit amet . ",
    },
    {
      type: "Debit Alert!",
      time: "12:00 PM",
      desc: "Lorem ipsum dolor sit amet . ",
    },
    {
      type: "Credit Alert!",
      time: "12:00 PM",
      desc: "Lorem ipsum dolor sit amet . ",
    },
  ];

  return (
    <nav className="fixed top-0 right-0 h-[80px] flex items-center flex-wrap bg-[#fff] lg:px-10 w-full  lg:w-[82%] ml-auto lg:justify-end justify-start z-40 font-walsheim">
      <div
        onClick={handleClick}
        className="lg:hidden flex items-center justify-center gap-[20px]"
      >
        <MenuIcon />
        <div className="lg:hidden">
          <img src={Logo} alt="" className={`lg:mb-[62px] image`} />
        </div>
      </div>

      <div className="gap-5 items-center hidden lg:flex">
        <div className="flex items-center gap-x-3 border border-[#E8EAED] rounded-[5px] p-[10px]">
          <IntegrationIcon />
          <p className="font-[500] text-[14px] leading-[24px] tracking-[0.28px] text-[#0E0E0E]">
            Integration Support
          </p>
        </div>

        <div className="flex items-center gap-x-3 border border-[#E8EAED] rounded-[5px] p-[10px]">
          <ApiDocIcon />
          <p className="font-[500] text-[14px] leading-[24px] tracking-[0.28px] text-[#0E0E0E]">
            API Documentation
          </p>
        </div>

        <div className="flex gap-3  ">
          <div className="flex items-center justify-center gap-x-3 relative">
            <TestModeIcon />
            <p className="text-[#0E0E0E] text-[14px] font-[500] leading-[24px] tracking-[0.28px]">
              Test Mode
            </p>
          </div>

          <div className="h-[49px] w-[1px] bg-[#E8EAED]" />

          {/* Notification Dropdown */}
          <div className="flex items-center gap-x-3 relative">
            <div
              className="w-[30px] h-[30px] md:w-[41px] md:h-[41px] rounded-full overflow-hidden bg-[#F7F7F7] font-bold flex items-center justify-center uppercase cursor-pointer"
              onClick={() => setNotificationDropdown(!showNotificationDropdown)}
            >
              <img
                src="/icons/notification.svg"
                alt=""
                className="w-[1rem] md:w-[1.2rem]"
              />
              <span className="w-2 h-2 rounded-full bg-[#FA3E3E] absolute left-[0.9rem] top-[0.35rem] md:left-[1.3rem] md:top-[0.6rem] border border-white"></span>
            </div>
            {showNotificationDropdown && (
              <NotificationDropdown
                notifications={notifications}
                onMouseLeave={() =>
                  setNotificationDropdown(!showNotificationDropdown)
                }
              />
            )}
          </div>
          {/* Notification Dropdown */}

          <div className="h-[49px] w-[1px] bg-[#E8EAED]" />

          <div className="">
            <div className="flex items-center gap-x-3 relative">
              <div className="w-[30px] h-[30px] md:w-[41px] md:h-[41px]  rounded-full overflow-hidden bg-[#F7F7F7] font-bold flex items-center justify-center uppercase">
                {userData.photo ? (
                  <img src={userData.photo} />
                ) : (
                  <span className="text-xs md:text-base">{initials}</span>
                )}
                <span className="w-2 h-2 rounded-full bg-[#4BB543] absolute right-[-1px] bottom-0 md:left-8 md:bottom-1"></span>
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-sm hidden lg:block text-[#0E0E0E] leading-[24px] tracking-[0.28px]">
                  Jimoh Oyindamola
                </p>
                <p className="font-[400] text-[12px] hidden lg:block text-[#9CA1A8] leading-[18px] tracking-[0.24px]">
                  oyindamola13@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
