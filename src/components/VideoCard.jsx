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
    <div className="max-w-xs mx-auto mb-8 bg-white rounded-md overflow-hidden shadow-md">
      <img
        src={thumbnails?.medium?.url}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{channelTitle}</p>
        <p className="text-gray-600">{statistics?.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
