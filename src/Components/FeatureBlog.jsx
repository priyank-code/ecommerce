import React, { useContext } from "react";
import Blog1 from "../assets/Blog1.png";
import Blog2 from "../assets/Blog2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { myContext } from "../Context/Context";

const FeatureBlog = () => {
  const {featureBlog} = useContext(myContext);

  return (
    <div className="p-5">
      <p className="text-2xl font-bold">Featured Blogs</p>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <div className="pt-5 w-170 grid grid-cols-5 items-center shadow-xl">
        <div className="col-span-3">
          <img src={Blog1} alt="image" className="w-full"/>
        </div>
        <div className="flex flex-col col-span-2 gap-3 px-10 justify-center">
          <p className="text-xl text-gray-500">Blog</p>
          <p className="text-xl font-bold font-sans">Discover new way to decorate your home .</p>
          <p className="text-xl font-medium text-gray-500">
            Lorem ipsum dolor sit amet,aliqua consectetur adipiscing elit ut ...
          </p>
          <div className="flex justify-between items-center">
            <p>By Souha . H </p>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </div>
        </div>
      </div>

      <div className="pt-5 w-170 grid grid-cols-5 items-center shadow-xl">
        <div className="col-span-3">
          <img src={Blog2} alt="image" className="w-full"/>
        </div>
        <div className="flex flex-col col-span-2 gap-3 px-10 justify-center">
          <p className="text-xl text-gray-500">Blog</p>
          <p className="text-xl font-bold font-sans">Discover new way to decorate your home .</p>
          <p className="text-xl font-medium text-gray-500">
            Lorem ipsum dolor sit amet,aliqua consectetur adipiscing elit ut ...
          </p>
          <div className="flex justify-between items-center">
            <p>By Souha . H </p>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </div>
        </div>
      </div>
      <div>
          <button className="text-xl font-medium shadow-xl border-1 border-black px-10 py-2 rounded-xl font-sans justify-center">
            View all
          </button>
        </div>
      </div>
    <div className="grid md:grid-cols-5 grid-cols-2 gap-5 mt-10">
      {
        featureBlog.length > 0 && featureBlog ? (
          featureBlog.map((item) => (
            <div key={item.id} className="bg-[#F0F0F0] p-5 flex flex-col gap-3 text-center rounded-xl">
              <FontAwesomeIcon icon={item.icon} className="text-center w-full text-4xl"/>
              <p className="font-bold">{item.title}</p>
              <p>{item.desc}</p>
            </div>
          ))
        ) : (<div>Card not Found</div>)
      }
    </div>
    </div>
  );
};

export default FeatureBlog;
