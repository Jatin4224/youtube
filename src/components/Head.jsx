import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex items-center col-span-2">
        <div className="flex items-center">
          <img
            className="h-8 mr-2"
            alt="menu"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WH3C_hXNmb-Lb9lDwUbvyZkZ2GMNCQ7Guw&usqp=CAU"
          />
          <img
            className="h-12"
            alt="youtube-logo"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          />
        </div>
      </div>
      <div className="col-span-8 flex items-center">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-l-full p-2"
          type="text"
          placeholder="Search"
        />
        <button className=" border border-gray-400 p-2 mr-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="flex items-center justify-end col-span-2">
        <button className="mr-4">Sign In</button>
        <img
          className="h-8"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Wza0WER4F60dcEv5rpVcquvAeDGymlpzONQngivrkg&s"
        />
      </div>
    </div>
  );
};

export default Head;
