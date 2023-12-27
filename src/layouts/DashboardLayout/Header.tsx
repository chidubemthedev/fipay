import { useState } from "react";
import Logo from "../../assets/images/Logo.svg";
import NotificationDropdown from "../../components/Notifications/Dropdown";
import { SearchIcon, MenuIcon } from "../../assets/icons";

const Header = ({ userData, isOpen, setIsOpen }: any) => {
  function handleClick() {
    setIsOpen(!isOpen);
  }

  const [showNotificationDropdown, setNotificationDropdown] = useState(false);

  const initials = "AB";

  const notifications = [
    {
      type: "Job Appliation",
      time: "12:00 PM",
      desc: "Lorem ipsum dolor sit amet . ",
    },
    {
      type: "Job Appliation",
      time: "12:00 PM",
      desc: "Lorem ipsum dolor sit amet . ",
    },
    {
      type: "Job Appliation",
      time: "12:00 PM",
      desc: "Lorem ipsum dolor sit amet . ",
    },
    {
      type: "Job Appliation",
      time: "12:00 PM",
      desc: "Lorem ipsum dolor sit amet . ",
    },
  ];

  return (
    <nav className="fixed top-0 right-0 h-[80px] flex items-center flex-wrap bg-[#fff] p-5 lg:px-10 w-full  lg:w-[82%] ml-auto lg:justify-between justify-between z-40">
      <div
        onClick={handleClick}
        className="lg:hidden flex items-center justify-center gap-[20px]"
      >
        <MenuIcon />
        <div className="lg:hidden">
          <img src={Logo} alt="" className={`lg:mb-[62px] image`} />
        </div>
      </div>

      <div className="lg:flex px-3 space-x-2 max-w-[400px] h-10 border-border w-full border rounded-[12px] items-center hidden">
        <span>
          <SearchIcon />
        </span>
        <input
          type="text"
          className="bg-inherit w-full border-none outline-none placeholder:text-placeholder  "
          placeholder="Search for"
        />
      </div>
      <div className="flex gap-5  divide-x divide-[#E8EAED]">
        <div className="flex items-center justify-center gap-x-3 relative">
          <p className="text-[#0E0E0E] text-[14px] font-[500] leading-[24px] tracking-[0.28px]">
            Test Mode
          </p>
        </div>
        {/* Notification Dropdown */}
        <div className="flex items-center gap-x-3 relative">
          <div
            className="w-[30px] h-[30px] md:w-[41px] md:h-[41px]  rounded-full overflow-hidden bg-[#F7F7F7] font-bold flex items-center justify-center uppercase cursor-pointer"
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

        <div className="">
          <div className="ml-5  flex items-center gap-x-3 relative">
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
    </nav>
  );
};

export default Header;
