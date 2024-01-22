import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-white text-black p-4">
      <h1 className="text-lg font-semibold mb-4">Subscriptions</h1>
      <ul className="space-y-2">
        <li className="hover:bg-gray-400 px-2 py-1 rounded">Music</li>
        <li className="hover:bg-gray-400 px-2 py-1 rounded">Sports</li>
        <li className="hover:bg-gray-400 px-2 py-1 rounded">Gaming</li>
        <h1 className="text-lg font-semibold mb-4">Explore</h1>
      </ul>
      <ul className="space-y-2">
        <li className="hover:bg-gray-400 px-2 py-1 rounded">Trending</li>
        <li className="hover:bg-gray-400 px-2 py-1 rounded">Shopping</li>
        <li className="hover:bg-gray-400 px-2 py-1 rounded">Podcasts</li>
      </ul>
    </div>
  );
};

export default Sidebar;
