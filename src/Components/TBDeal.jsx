import React, { useContext } from "react";
import { myContext } from "../Context/Context";
import Banner from "../assets/banner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";

const TBDeal = () => {
  const { TBDeal } = useContext(myContext);

  return (
    <div
  className="mt-5 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${Banner})` }}
>
  <div className="md:p-10 p-5 w-full backdrop-brightness-75">
    <div className="flex justify-between text-white items-center">
      <h1 className="md:text-4xl text-2xl font-bold">Today Best Deal</h1>
      <a href="#" className="font-bold md:text-xl text-sm">View All</a>
    </div>

    <div className="flex flex-wrap mt-10 gap-5 justify-center">
      {TBDeal.length > 0 ? TBDeal.map((item) => (
        <div
          key={item.id}
          className="bg-white w-80 rounded-xl scale-90 hover:scale-100 transition-all duration-500 cursor-pointer"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-48 p-2 object-cover mx-auto"
          />
          <FontAwesomeIcon
            icon={faHeart}
            className={`text-2xl absolute top-3 right-5 ${item.heart ? "text-red-600" : "text-gray-500"}`}
          />
          <div className="p-2">
            <h4 className="text-sm">{item.title}</h4>
            <div className="flex gap-3 items-center text-sm mt-2">
              <p className="text-white bg-yellow-500 p-1 rounded-sm">
                {item.rating} <FontAwesomeIcon icon={faStar} />
              </p>
              <p className="text-gray-500">{item.desc}</p>
            </div>
            <div className="font-bold pt-5 flex items-center gap-3">
              <h1 className="text-xl">{item.price}</h1>
              <p className="text-sm line-through text-gray-500">{item.tprice}</p>
              <p className="text-sm text-[#009DE0]">{item.discount}</p>
            </div>
          </div>
        </div>
      )) : (
        <div className="text-center text-red-600 font-bold text-3xl">
          Items not found
        </div>
      )}
    </div>
  </div>
</div>

  );
};

export default TBDeal;
