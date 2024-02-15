import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex items-center col-span-2">
        <div className="flex items-center">
          <img
            onClick={() => toggleMenuHandler()}
            className="h-8 mr-2 cursor-pointer"
            alt="menu"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WH3C_hXNmb-Lb9lDwUbvyZkZ2GMNCQ7Guw&usqp=CAU"
          />
          <img
            className="h-16"
            alt="youtube-logo"
            src="data:image/jpeg;base64,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"
          />
        </div>
      </div>
      <div className="col-span-8 flex items-center">
        <input
          className=" px-5 py-2 w-full px-4 py-2 border border-gray-300 rounded-l-full p-2"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className=" border border-gray-400 p-2 mr-2 rounded-r-full bg-gray-100">
          🔍
        </button>
        <div>
          {showSuggestions && (
            <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className=" shadow-sm py-2 px-3 hover:bg-gray-100"
                  >
                    🔍{s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
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
