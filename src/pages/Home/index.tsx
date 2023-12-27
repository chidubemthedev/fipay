import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Header from "../../components/Home/Header";
import Balances from "../../components/Home/Balances";

type Props = {};

const Home = (props: Props) => {
  return (
    <DashboardLayout>
      <Header />
      <Balances />
      <div>Home Page</div>
    </DashboardLayout>
  );
};

export default Home;
