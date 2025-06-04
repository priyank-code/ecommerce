import React, { useContext } from "react";
import { myContext } from "../Context/Context";

const PCategory = () => {
  const { cardData } = useContext(myContext);

  return (
    <section className="p-5 justify-center items-center">
      <p className="font-bold text-2xl mb-4">Popular Category</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-items-center drop-shadow-lg hover:drop-shadow-2xl">
        {cardData.length > 0 ? (
          cardData.map((p, index) => (
            <div
              key={index}
              className="flex flex-col text-center transform hover:scale-105 transition-all duration-500 hover:shadow-xl rounded-xl cursor-pointer bg-white w-64 group-hover:text-black"
            >
              <div className="h-48 w-full justify-center">
                <img
                  src={p.image}
                  alt="img"
                  className="object-cover w-full h-full rounded-t-xl"
                />
              </div>
              <div className="p-4 justify-center">
                <p className="font-semibold ">{p.title}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500 col-span-full text-center">
            No categories available
          </p>
        )}
      </div>
    </section>
  );
};

export default PCategory;
