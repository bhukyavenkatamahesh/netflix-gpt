import React from "react";

const VideoTitle = ({ Title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{Title}</h1>
      <p className="py-6 text-base w-1/4">{overview}</p>
      <div className="flex items-center ">
        <button className=" bg-white text-black p-2 px-10 text-lg  rounded-lg hover:bg-opacity-80  flex items-center">
          <img
            className="w-7"
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-play-256.png"
            alt="imgbutton"
          />
          Play
        </button>
        <button className="mx-3 bg-gray-500 text-white p-2 px-8 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
