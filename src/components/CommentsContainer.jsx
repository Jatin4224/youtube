import React from "react";

const CommentsData = [
  {
    name: "jatin",
    text: "jj",
    replies: [
      {
        name: "jatin",
        text: "jj",
        replies: [
          {
            name: "jatin",
            text: "jj",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "jatin",
    text: "jj",
    replies: [],
  },
  {
    name: "jatin",
    text: "jj",
    replies: [],
  },
  {
    name: "jatin",
    text: "jj",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-lg">
      <img
        className="h-8 w-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Wza0WER4F60dcEv5rpVcquvAeDGymlpzONQngivrkg&s"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <Comment data={CommentsData[0]} />
    </div>
  );
};

export default CommentsContainer;
