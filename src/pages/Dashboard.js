import React from "react";
import SideNav from "../components/landingpageComponents/SideNav";
import PageHeader from "../components/PageHeader";
import VerifyEmailText from "../components/VerifyEmailText";

const Dashboard = () => {
  return (
    <main className="flex h-screen w-full bg-secondaryColor gap-4 py-4 px-4 ">
      <SideNav />
      <section className="flex-[4] h-full bg-white rounded-lg ">
        <PageHeader/>
        <VerifyEmailText/>
      </section>
    </main>
  );
};

export default Dashboard;
