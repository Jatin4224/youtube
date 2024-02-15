import React from "react";

const commentsData = [
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
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-lg my-2">
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

const CommentsList = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return null; // If comments are empty or not defined, return null
  }

  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
