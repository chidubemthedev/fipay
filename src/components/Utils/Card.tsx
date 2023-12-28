interface CardProps {
  icon: JSX.Element;
  title: string;
  number?: number;
  transactions?: number;
}

const Card = ({ icon, title, number, transactions }: CardProps) => {
  return (
    <div className="h-[169px] rounded-[10px] gap-x-[16px] bg-[#F7F7F7] pt-[16px] pl-[16px] border border-[#E8EAED] shadow-balanceItem">
      <div className="w-[41px] h-[41px] rounded-[8px] bg-[#D0F5EE80] font-bold flex items-center justify-center">
        {icon}
      </div>

      <div className="mt-[25px]">
        <p className="text-sm font-[400] text-[#5E5E5E] leading-[24px] tracking-[0.28px]">
          {title}
        </p>
        {number && number >= 0 && (
          <p className="text-3xl text-[#0E0E0E] font-[600] mt-4 tracking-[0.5px] font-inter">
            ${number.toLocaleString()}
            <span className="text-[16px] leading-[24px] tracking-[0.32px]">
              .00
            </span>
          </p>
        )}
        {transactions === 500 && (
          <p className="text-3xl text-[#0E0E0E] font-[600] mt-4 tracking-[0.5px] font-inter">
            {transactions}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
