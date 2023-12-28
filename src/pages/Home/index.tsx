import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Header from "../../components/Home/Header";
import Balances from "../../components/Home/Balances";
import Products from "../../components/Home/Products";

type Props = {};

const Home = (props: Props) => {
  return (
    <DashboardLayout>
      <Header />
      <Balances />
      <Products />
      <div>Home Page</div>
    </DashboardLayout>
  );
};

export default Home;
