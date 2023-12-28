import Balances from "../../components/Home/Balances";
import Header from "../../components/Home/Header";
import Products from "../../components/Home/Products";
import DashboardLayout from "../../layouts/DashboardLayout";

const Home = () => {
  return (
    <DashboardLayout>
      <Header />
      <Balances />
      <Products />
    </DashboardLayout>
  );
};

export default Home;
