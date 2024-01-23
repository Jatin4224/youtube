import React from "react";

const VideoCard = ({ info }) => {
  // Check if 'info' is defined
  if (!info) {
    return null; // or handle the case where 'info' is undefined
  }

  const { snippet, statistics } = info;

  // Check if 'snippet' is defined
  if (!snippet) {
    return null; // or handle the case where 'snippet' is undefined
  }

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="max-w-xs mx-auto mb-8 bg-white rounded-md overflow-hidden shadow-md m-4 p-4">
      <div className="relative">
        <img
          src={thumbnails?.medium?.url}
          alt={title}
          className="w-full h-48 object-cover rounded-t-md"
        />
        <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          {statistics?.viewCount} views
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-sm md:text-base font-semibold line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-600 text-xs mb-2">{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
