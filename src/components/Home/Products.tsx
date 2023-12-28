import {
  PaymentIcon,
  InvoiceIcon,
  WalletIcon,
  P2pIcon,
  TravelIcon,
} from "../../assets/icons";

const Products = () => {
  const products = [
    {
      stable: true,
      icon: <PaymentIcon />,
      title: "Payment Link",
      description:
        "Create a payment link in just a few clicks and share the link with your customers-no code required",
      buttonText: "Create Payment Link",
    },
    {
      stable: false,
      icon: <InvoiceIcon />,
      title: "Invoice",
      description:
        "Create a payment link in just a few clicks and share the link with your customers-no code required",
      buttonText: "Create and Send Invoice",
    },
    {
      stable: false,
      icon: <WalletIcon />,
      title: "Digital Wallet",
      description:
        "Create a payment link in just a few clicks and share the link with your customers-no code required",
      buttonText: "Create Wallet",
    },
    {
      stable: false,
      icon: <P2pIcon />,
      title: "Peer-to-Peer",
      description:
        "Create a payment link in just a few clicks and share the link with your customers-no code required",
      buttonText: "Peer to Peer Payment",
    },
    {
      stable: false,
      icon: <TravelIcon />,
      title: "Travels",
      description:
        "Create a payment link in just a few clicks and share the link with your customers-no code required",
      buttonText: "Travel Expense",
    },
  ];

  return (
    <div className="bg-white rounded-[10px] border border-[#E8EAED] shadow-balanceShadow px-[20px] pt-[24px] mt-[30px] font-walsheim">
      <h1 className="text-[18px] font-medium leading-[32px] tracking-[0.36px]">
        Our Products
      </h1>

      <div className="grid lg:grid-cols-3 mt-[16px] mb-[24px] gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="h-[256px] rounded-[10px] gap-x-[16px] bg-white border border-[#E8EAED] shadow-balanceItem"
          >
            <div className="font-bold flex items-center gap-[12px] py-[16px] bg-[#F7F7F7]">
              <div className="w-[41px] h-[41px] rounded-[12px] bg-productIconBackground flex justify-center items-center ml-[16px]">
                {product.icon}
              </div>
              <div className="text-sm font-[700] text-[#0E0E0E] leading-[24px] tracking-[0.28px]">
                {product.title}
              </div>
              {!product.stable && (
                <p className="text-[#008502] font-[500]">(Coming Soon)*</p>
              )}
            </div>

            <div className="bg-white px-[16px]">
              <p className="text-sm font-[400] text-[#5E5E5E] leading-[24px] tracking-[0.28px] pt-[9px]">
                {product.description}
              </p>
              <button
                disabled={!product.stable}
                className="mt-[34px] text-[#0E0E0E] text-[14px] leading-[24px] tracking-[0.28px] font-medium bg-[#F7F7F7] border border-[#E8EAED] rounded-[10px] p-[10px] h-[44px] w-full flex items-center justify-center disabled:cursor-not-allowed"
              >
                {product.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
