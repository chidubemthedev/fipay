import EmptyPayment from "../../components/payments/EmptyPayment";
import PaymentTable from "../../components/payments/PaymentTable";
import PaymentHeader from "../../components/payments/payment-header";
import DashboardLayout from "../../layouts/DashboardLayout";

const Payments = () => {
  return (
    <DashboardLayout>
      <div className="w-full flex flex-col">
        <PaymentHeader />
        <PaymentTable />
        <EmptyPayment />

      </div>
    </DashboardLayout>
  );
};

export default Payments;


