import { SearchIcon, CalenderActive, ExportIcon, Calender, BigCalender, CheckIcon, QrRep, CopyIcon, ThreeDot,NextArrow,PreviousArrow } from "../../assets/icons";
const datas = [
  {
    name: "Banziba Cakes",
    price: "$2,000.00",
    active: true,
        date: "Dec 03, 2023 ",
    time:"12:25PM"
  },
  {
    name: "Banziba Cakes",
    price: "$2,000.00",
    active: false,
        date: "Dec 03, 2023 ",
    time:"12:25PM"
  },
  {
    name: "Banziba Cakes",
    price: "$2,000.00",
    active: true,
        date: "Dec 03, 2023 ",
    time:"12:25PM"
  },
  {
    name: "Banziba Cakes",
    price: "$2,000.00",
    active: true,
        date: "Dec 03, 2023 ",
    time:"12:25PM"
  },
  {
    name: "Banziba Cakes",
    price: "$2,000.00",
    active: false,
        date: "Dec 03, 2023 ",
    time:"12:25PM"
  },
];

const PaymentTable = () => {
  return (
    <div className="w-full bg-white table-wrapper flex flex-col font-walsheim mt-10">
      <div className="w-full min-h-[86px] px-5 flex items-center justify-between">
        <div className="w-auto flex-grow flex space-x-[24px] items-center">
          <h1 className="text-header text-lg font-[500] leading-[32px] tracking-[0.36px]">
            My Payment Links
          </h1>
          <div className="search-line max-w-[425px] space-x-3 w-full flex items-center py-3 pl-[15px] pr-[38px] ">
            <span>
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search history by date, amount, or description"
              className="bg-transparent placeholder:text-xs placeholder:leading-[18px] placeholder:text-[#868686] tracking-[0.24px] w-full border-none outline-none focus:outline-none focus:border-none  "
            />
          </div>
        </div>
        <div className="w-fit date-wrap px-4 h-10 flex items-center gap-2">
          <span>
            <CalenderActive />
          </span>
          <p className="small-text">
            From: <span className="text-[#0e0e0e] font-[500]">Start Date</span>
          </p>
          <span className="w-[1px] h-4 bg-[#E8EAED]"></span>
          <p className="small-text">
            To: <span className="text-[#0e0e0e] font-[500]">End Date</span>
          </p>
        </div>
      </div>
      <div className="w-full items-center flex justify-between px-5 pb-5 ">
        <div className="w-fit h-10 flex items-center bg-[#f7f7f7] rounded-[8px] ">
          <button className="bg-primary outline-none border-none rounded-[8px] h-10 text-white text-sm leading-[24px] tracking-[0.28px] py-[10px] px-4 flex items-center">
            All Payment Links
          </button>
          <button className="border-none outline-none rounded-r-[8px] bg-inherit h-10 text-sm leading-[24px] tracking-[0.28px] py-[10px] px-4 flex items-center text-[#5e5e5e]  ">
            All Transactions
          </button>
        </div>
        <div className="date-wrap gap-2 bg-inherit h-10 text-sm leading-[24px] tracking-[0.28px] py-[10px] px-4 flex items-center ">
          <span>
            <ExportIcon />
          </span>
          <p className="small-text">Export Data</p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#E8EAED]"></div>
      <div className="w-full h-[58px] flex items-center justify-between px-5">
        <div className="flex space-x-5 items-center">
          <span className="h-[58px] flex items-center border-b-[2px] border-b-primary w-[37px]  justify-center">
            <p className="text-primary text-sm leading-[24px] font-bold ">
              All
            </p>
          </span>
          <p className="text-semi w-[72px] flex justify-center">Active</p>
          <p className="text-semi">Inactive</p>
        </div>
        <div className="w-fit flex items-center space-x-1 ">
          <span>
            <Calender />
          </span>
          <p className="small-text">Updated, Dec 08, 2023</p>
        </div>
      </div>
      <div className="h-11 w-full flex border-b-[1px] border-t-[1px] border-t-[#E8EAED] bg-[#f7f7f7] border-b-[#E8EAED] px-5">
        <div className="w-3/12 flex items-center">
          <p className="small-text">Date created</p>
        </div>
        <div className="w-2/12 flex items-center">
          <p className="small-text">Product Name</p>
        </div>
        <div className="w-2/12 flex items-center">
          <p className="small-text">Amount</p>
        </div>
        <div className="w-1/12 flex items-center">
          <p className="small-text">Status</p>
        </div>
        <div className="w-2/12 flex items-center justify-center">
          <p className="small-text">QR Code and Link</p>
        </div>
        <div className="w-2/12 flex items-center">
          {" "}
          <p className="small-text"></p>
        </div>
      </div>
      {datas?.map((item: any, index: number) => {
        return (
          <div
            className="w-full even:bg-white h-[72px] odd:bg-[#f7f7f7] flex items-center px-5 "
            key={index}
          >
            <div className="w-3/12 flex items-center gap-2">
              <span>
                <BigCalender />
              </span>
              <p className="text-sm leading-[24px] tracking-[0.28px] text-[#0e0e0e] font-[500]">
                {item.date}
                <span className="text-[#868686] font-[400]">
                  {` ${item.time}`}
                </span>
              </p>
            </div>
            <div className="w-2/12 flex items-center">
              <p className="text-sm leading-[24px] tracking-[0.28px] text-[#0e0e0e] font-[500]">
                {item.name}
              </p>
            </div>
            <div className="w-2/12 flex items-center">
              <p className="text-sm leading-[24px] tracking-[0.28px] text-[#0e0e0e] font-[500]">
                {item.price}
              </p>
            </div>
            <div className="w-1/12 flex items-center">
              {item?.active ? (
                <div className="active-btn">
                  <span>
                    <CheckIcon />
                  </span>
                  <p className="active-text">Active</p>
                </div>
              ) : (
                <div className="in-active-btn">
                  <span className="w-[7px] h-[7px] rounded-full bg-[#E89D2B]"></span>
                  <p className="in-active-text">Inactive</p>
                </div>
              )}
            </div>
            <div className="w-2/12 flex items-center gap-2 justify-center">
              <span>
                <QrRep />
              </span>
              <p className="qr-text">QR Code </p>
            </div>
            <div className="w-2/12 flex items-center justify-between">
              <div className="flex gap-[10px] items-center">
                <span>
                  <CopyIcon />
                </span>
                <p className="qr-text">Copy </p>
              </div>
              <span>
                <ThreeDot />
              </span>
            </div>
          </div>
        );
      })}
      <div className="w-full bg-white justify-between flex items-center px-5 py-5 rounded-b-[10px] ">
        <div className="flex gap-2 items-center">
          <span>
            <PreviousArrow />
          </span>
          <p className="prev-text">prev</p>
        </div>
        <div className="flex jusity-center items-center gap-1 ">
          <span className="w-[25px] h-[24px] flex items-center justify-center rounded-full bg-[#f7f7f7] prev-text">
            1
          </span>
          <span className="w-[25px] h-[24px] flex items-center justify-center rounded-full bg-[white] prev-text">
            2
          </span>
          <span className="w-[25px] h-[24px] flex items-center justify-center rounded-full bg-[white] prev-text">
            3
          </span>
          <span className="w-[16px] bg-[#5B5E63] h-[1px] "></span>
          <span className="w-[25px] h-[24px] flex items-center justify-center rounded-full bg-[white] prev-text">
            8
          </span>
          <span className="w-[25px] h-[24px] flex items-center justify-center rounded-full bg-[white] prev-text">
            9
          </span>
          <span className="w-[25px] h-[24px] flex items-center justify-center rounded-full bg-[white] prev-text">
            10
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <p className="prev-text">Next</p>
          <span>
            <NextArrow />
          </span>
        </div>
      </div>
    </div>
  );
}

export default PaymentTable
