import React from "react";
import { FaPlus } from "react-icons/fa6";


const Button_div = () => {
    return(
        <div className=" flex gap-4 text-xl font-medium">
            <button className="underline hover:no-underline">Login</button>
            <button className="px-4 py-2 border-4 border-b-red-700 border-t-cyan-400 border-r-green-700 border-l-yellow-600 rounded-full flex items-center gap-1"> <FaPlus /> Sell</button>
        </div>
    )
}

export default Button_div;