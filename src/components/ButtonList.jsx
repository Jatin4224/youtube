import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Music",
  "Sports",
  "News",
  "Tech",
  "Science",
  "Education",
  "Travel",
  "Comedy",
  "Movies",
  "Fitness",
  "Fashion",
  "Food",
  "Art",
  "History",
  "Pets",
  "DIY",
  "Entertainment",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((buttonName, index) => (
        <Button key={index} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
