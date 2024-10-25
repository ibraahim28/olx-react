import React from "react";
import main_icon from ".././assets/img/image.svg";
import car_icon from ".././assets/img/image (1).svg";
import property_icon from "../assets/img/image (2).svg";
import Dropdown from "../components/dropdown";
import Input from "../components/Search";
import Button_div from "../components/buttons";

const Header = () => {
  return (
    <header className="flex flex-col ">
      <div className="flex justify-around w-1/3">
        <div className="w-14">
          <div>
            <img className="size-20" src={main_icon} />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className=" p-2 w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full ">
            <img src={car_icon} className="self-center" />
          </div>
          <span className=" font-semibold">Motors</span>
        </div>
        <div className="flex gap-3 items-center">
          <div className=" p-2 w-10 h-10 bg-gray-200 flex justify-center items-center rounded-full ">
            <img src={property_icon} className="self-center" />
          </div>
          <span className="font-semibold">Property</span>
        </div>
      </div>
      <div className=" px-4 py-1 flex gap-5 items-center border-b">
        <Dropdown />
        <Input />
        <Button_div />
      </div>
    </header>
  );
};

export default Header;
