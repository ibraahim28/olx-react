import React from "react";
import { FaSearch } from "react-icons/fa";


const Input = () => {
    return (
        <div className="">
            <input className="w-[50vw] border px-2 py-3 relative" placeholder="Find Cards, Mobile Phones and more..." />
            <button role="submit" className="bg-green-950 px-3 py-3 text-white text-xl " >
                <FaSearch />
            </button>
        </div>
    )
}

export default Input;