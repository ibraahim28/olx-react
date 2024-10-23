import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const Dropdown = () => {
  return (
    <div className="px-4">
      <select className=" border border-gray-500 rounded-sm px-1 py-2 w-1/5 font-light">
        <option>Pakistan</option>
        <option>Use current location</option>
        <option>See ads from all Pakistan</option>
      </select>
    </div>
  );
};

export default Dropdown;
