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
      icon: <PaymentIcon />,
      title: "Payment Link",
      description:
        "Create a payment link in just a few clicks and share the link with your customers-no code required",
      buttonText: "Create Payment Link",
    },
    {
      icon: <InvoiceIcon />,
      title: "Payment Link",
      description:
        "Create a payment link in just a few clicks and share the link with your customers-no code required",
      buttonText: "Create Payment Link",
    },
    {
      icon: <WalletIcon />,
      title: "Payment Link",
      description:
        "Create a payment link in just a few clicks and share the link with your customers-no code required",
      buttonText: "Create Payment Link",
    },
    {
      icon: <P2pIcon />,
      title: "Payment Link",
      description:
        "Create a payment link in just a few clicks and share the link with your customers-no code required",
      buttonText: "Create Payment Link",
    },
    {
      icon: <TravelIcon />,
      title: "Payment Link",
      description:
        "Create a payment link in just a few clicks and share the link with your customers-no code required",
      buttonText: "Create Payment Link",
    },
  ];

  return (
    <div className="bg-white rounded-[10px] border border-[#E8EAED] shadow-balanceShadow px-[20px] pt-[24px] mt-[30px]">
      <h1 className="text-[18px] font-medium leading-[32px] tracking-[0.36px]">
        Our Products
      </h1>

      <div className="grid lg:grid-cols-3 mt-[16px] mb-[24px] gap-8">
        {products.map((product) => (
          <div className="h-[256px] rounded-[10px] gap-x-[16px] bg-[#F7F7F7] border border-[#E8EAED] shadow-balanceItem">
            <div className="font-bold flex items-center gap-[12px] my-[16px]">
              <div className="w-[41px] h-[41px] rounded-[12px] bg-productIconBackground">
                {product.icon}
              </div>
              <div className="text-sm font-[700] text-[#0E0E0E] leading-[24px] tracking-[0.28px]">
                {product.title}
              </div>
            </div>

            <div className="bg-white">
              <p className="text-sm font-[400] text-[#5E5E5E] leading-[24px] tracking-[0.28px]">
                {product.description}
              </p>
              <button className="text-white text-[16px] leading-[24px] tracking-[0.32px] font-medium bg-primary rounded-[10px] p-[10px] h-[48px] w-[149px] flex items-center justify-center">
                Fund Balance
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
