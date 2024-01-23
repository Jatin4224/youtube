import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="bg-white">
      <MainContainer />
      <Sidebar />
    </div>
  );
};

export default Body;
