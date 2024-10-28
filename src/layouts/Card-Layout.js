import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";

const CardLayout = ({ data, heading }) => {
  // console.log(data);
  return (
    <div className="px-4 my-5 w-screen ">
      <div className="text-2xl font-bold">
        <h2>{heading}</h2>
      </div>
      <div className="flex w-max-screen py-5">
        {data.map((v, i) => (
          <div
            key={i}
            className=" bg-white w-1/5 mx-[2.5%] flex flex-col gap-3 border-gray-400 border-[1.5px] cursor-pointer rounded-lg"
          >
            <div className="w-full h-full ">
              <img
                className="aspect-video  size-full rounded-t-lg"
                src={v.images}
                alt={v.title}
              />
            </div>
            <div className="px-4 flex flex-col gap-2">
              <div className="pricing flex w-full justify-between">
                {v.price ? (
                  <div className="text-xl font-bold">Rs {v.price}</div>
                ) : (
                  ""
                )}
              </div>
              <div className="title line-clamp-1">
                <h3>{v.title}</h3>
              </div>
              <div className="descirption line-clamp-3 text-gray-600 text-sm">
                {v.description}
              </div>
              <div className=" my-1 address flex gap-1 items-center">
                <ImLocation /> {v.location}
              </div>
              <div>
                {v.condition ? (
                  <span className="font-bold">Condition: {v.condition}</span>
                ) : (
                  <span className="font-bold">Type: {v.type}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardLayout;
