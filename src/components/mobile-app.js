import React from "react";

import image from "../assets/img/olxMobileApp-4f5c782de5b951f7b49a8d2729313206.jpg";
import play from "../assets/img/google-play.svg";
import appstore from "../assets/img/apple.svg";
import alibaba from "../assets/img/Alibaba.svg";

const AppLinks = () => {
  return (
    <div className=" mt-16 flex w-full h-72 justify-center bg-[rgba(0,47,52,.03)] ">
      <div className="flex justify-between items-center">
        <div className="h-full">
          <img src={image} className="h-full" />
        </div>
        <div className="flex items-center">
          <div className="bg-[rgba(0,47,52,.2)] h-52 my-0 mx-auto w-[.1rem] rounded"></div>
        </div>
        <div className="ml-12 ">
          <h2 className="text-xl font-bold mb-6">Get Your App Today</h2>
          <div className="flex gap-2 items-center">
            <img className="w-48 h-16" src={play} />
            <img className="w-48 h-16" src={appstore} />
            <img className="w-48 h-16" src={alibaba} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLinks;
