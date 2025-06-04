import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { myContext } from "../Context/Context";

const BestSeller = () => {
  const { BSeller } = useContext(myContext);

  return (
    <section className="md:p-10 p-5">
      <header className="flex justify-between text-gray-500 items-center mb-6">
        <h1 className="md:text-4xl text-2xl font-bold">Best Sellers</h1>
        <button className="font-bold md:text-xl text-sm">
          View All
        </button>
      </header>

        <div className="flex flex-wrap gap-5 justify-center items-center">
        {BSeller && BSeller.length > 0 ? (
          BSeller.map((item, index) => (
            <div
              key={index}
              className="w-70 mt-5 rounded-xl border-2 border-gray-300 shadow-lg overflow-hidden"
            >
              <div className="w-full h-40 border-b-2 border-gray-300 flex items-center justify-center bg-white">
                <img
                  src={item.img}
                  alt={item.name || "Product Image"}
                  className="p-5 w-1/2 object-contain"
                />
              </div>
              <div className="text-center p-4">
                <p className="font-bold text-xl mb-3">{item.name}</p>
                <div className="flex justify-center">
                  <span className="bg-[#FFA31C] px-3 py-1 text-white rounded-l-md flex items-center gap-1">
                    4.4 <FontAwesomeIcon icon={faStar} />
                  </span>
                  <button className="bg-[#333087] px-3 py-1 text-white rounded-r-md flex items-center gap-1 hover:bg-[#2a266f]">
                    Visit Store <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-red-600 font-bold text-2xl">
            Items not found
          </p>
        )}
      </div>
    </section>
  );
};

export default BestSeller;
