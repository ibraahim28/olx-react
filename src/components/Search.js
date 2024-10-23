import React from "react";
import { FaSearch } from "react-icons/fa";


const Input = () => {
    return (
        <div className="border">
            <input placeholder="Find Cards, Mobile Phones and more..." />
            <button role="submit" >
                <FaSearch />
            </button>
        </div>
    )
}

export default Input;