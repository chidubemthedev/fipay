import { Balance, BalanceAlt } from "../../assets/icons";
import Card from "../Utils/Card";

const Balances = () => {
  return (
    <div className="bg-white rounded-[10px] border border-[#E8EAED] shadow-balanceShadow px-[20px] pt-[24px] font-walsheim">
      <h1 className="text-[18px] font-medium leading-[32px] tracking-[0.36px]">
        Balances
      </h1>
      <div className="grid lg:grid-cols-4 mt-[16px] mb-[24px] gap-8">
        <Card icon={<Balance />} number={3500} title="Account Balance" />
        <Card icon={<BalanceAlt />} number={2000} title="Total Payout" />
        <Card icon={<Balance />} number={10000} title="Total Inflow" />
        <Card
          icon={<BalanceAlt />}
          transactions={500}
          title="Total No of Transactions"
        />
      </div>
    </div>
  );
};

export default Balances;
