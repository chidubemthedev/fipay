import { Link } from "react-router-dom";
import "./index.css";
import {
  DropdownIcon,
  NotificationDefault,
  NotificationWithBadge,
} from "../../assets/icons/index";
interface notificationProps {
  notifications: any;
  onMouseLeave: any;
}

const NotificationDropdown = ({
  notifications,
  onMouseLeave,
}: notificationProps) => {
  return (
    <>
      <div
        className="ease-in duration-300 absolute top-16 md:top-[4.3rem] bg-white default-shadow rounded-[10px] min-w-[400px] h-max right-[-300%] md:left-[-340px] md:right-0 pt-4 z-30"
        onMouseLeave={onMouseLeave}
      >
        <div className="">
          <div className="px-5 border-b border-[#E8EAED]">
            <div className="flex items-center gap-x-3 relative  pb-3 ">
              <div className="w-[30px] h-[30px] md:w-[41px] md:h-[41px]  rounded-full overflow-hidden bg-[#FFF5EF] font-bold flex items-center justify-center uppercase">
                <NotificationDefault />
              </div>
              <h5 className="font-semibold text-[#0D1B36]">
                Notifications ({notifications.length})
              </h5>
            </div>
          </div>
          {notifications.length ? (
            notifications.slice(0, 3).map((data: any) => {
              return (
                <>
                  <Link to={"/notifications"} className="block px-5  py-4">
                    <div className="flex items-center justify-between gap-x-4 relative ">
                      <div className="flex items-center gap-4">
                        <div className="w-[30px] h-[30px] md:w-[41px] md:h-[41px]  rounded-full overflow-hidden bg-[#FFF5EF] font-bold flex items-center justify-center uppercase">
                          <NotificationWithBadge />
                        </div>
                        <div>
                          <p className="text-secondary text-base font-[500] text-[#0D1B36]">
                            {data.type}
                          </p>
                          <p className="text-sm text-[#5C5C5B]">{data.desc} </p>
                        </div>
                      </div>
                      <div className="mx-3">
                        <span className="text-sm text-[#5C5C5B]">
                          {data.time}
                        </span>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })
          ) : (
            <div className="min-h-[250px] flex flex-col gap-4 items-center justify-center">
              <div className="w-full">
                <img
                  src="/icons/notification-empty.svg"
                  alt=""
                  className="w-[40%] mx-auto"
                />
              </div>
              <div className="text-center">
                <h5 className="font-semibold text-[#0D1B36]">
                  No Notifications
                </h5>
                <p className="text-sm text-[#5C5C5B] my-2">
                  All notifications will appear here{" "}
                </p>
              </div>
            </div>
          )}
          {notifications.length ? (
            <div className="border-t border-[#E8EAED] px-5 py-4 text-right text-primary font-medium">
              <Link to={"/notifications"} className="pr-3 text-sm">
                See all notifications
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="h-10 w-10 md:h-20 md:w-20  absolute top-10 md:top-8 right-[-0.2rem] md:right-[-1.2rem]">
        <DropdownIcon />
      </div>
    </>
  );
};

export default NotificationDropdown;
