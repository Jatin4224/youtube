import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
const Body = () => {
  return (
    <div className="bg-white">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
