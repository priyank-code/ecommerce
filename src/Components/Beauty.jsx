import React, { useContext } from "react";
import Beautyimg from "../assets/beauty.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { myContext } from "../Context/Context";

const Beauty = () => {
  const {TBDeal} = useContext(myContext);

  return (
    <div className="mt-5">
      <div className="md:p-10 p-5 top-5 w-full items-center">
        <div className="flex justify-between text-gray-500 items-center">
          <h1 className="md:text-4xl text-2xl font-bold">Beauty Products</h1>
          <a href="#" className="font-bold md:text-xl text-sm">
            View All
          </a>
        </div>
        <div>
          <div className="flex flex-wrap mt-15 gap-5 justify-center">
            {TBDeal.length > 0 && TBDeal ? (
              TBDeal.map((item) => (
                <div
                  className="bg-white w-80 rounded-xl relative scale-90 hover:scale-100 transition-all duration-500 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl"
                  key={item.id}
                >
                  <img
                    src={Beautyimg}
                    alt="Title"
                    className="w-48 p-2 object-cover mx-auto"
                  />
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`text-2xl justify-center absolute top-3 right-5 ${
                      item.heart ? "text-red-600" : "text-gray-500"
                    }`}
                  />
                  <div className="card-body p-2">
                    <h4 className="text-sm">{item.title}</h4>
                    <div className="flex gap-3 items-center text-sm mt-2">
                      <p className="text-white bg-yellow-500 p-1 rounded-sm">
                        {item.rating} <FontAwesomeIcon icon={faStar} />
                      </p>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>

                    <div className="font-bold pt-5 flex items-center gap-3">
                      <h1 className="text-xl">{item.price}</h1>
                      <p className="text-sm line-through text-gray-500">
                        {item.tprice}
                      </p>
                      <p className="text-sm text-[#009DE0]">{item.discount}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-red-600 font-bold text-3xl">Items not found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beauty;
