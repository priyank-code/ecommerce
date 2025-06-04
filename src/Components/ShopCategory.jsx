import React from "react";
import Cat1 from "../assets/cat1.png";
import Cat2 from "../assets/cat2.png";
import Cat3 from "../assets/cat3.png";
import Cat4 from "../assets/cat4.png";
import Cat5 from "../assets/cat5.png";
import Cat6 from "../assets/cat6.png";

const ShopCategory = () => {
  return (
    <section className="w-full min-h-screen mt-5">
      <div className="p-5 w-full">
        <h1 className="md:text-4xl text-2xl font-bold">Shop by Categories</h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 p-5">
        {/* First column */}
        <div>
          <img
            src={Cat1}
            alt="Category 1"
            className="w-full h-full object-cover rounded-lg"
            style={{ minHeight: "300px" }}
          />
        </div>

        {/* Second column */}
        <div className="flex flex-col gap-5">
          <img
            src={Cat2}
            alt="Category 2"
            className="w-full h-1/2 object-cover rounded-lg"
            style={{ minHeight: "145px" }}
          />
          <img
            src={Cat4}
            alt="Category 4"
            className="w-full h-1/2 object-cover rounded-lg"
            style={{ minHeight: "145px" }}
          />
        </div>

        {/* Third column */}
        <div className="flex flex-col gap-5">
          <img
            src={Cat3}
            alt="Category 3"
            className="w-full object-cover rounded-lg"
            style={{ minHeight: "145px" }}
          />
          <div className="flex gap-5">
            <img
              src={Cat5}
              alt="Category 5"
              className="w-1/2 object-cover rounded-lg"
              style={{ minHeight: "145px" }}
            />
            <img
              src={Cat6}
              alt="Category 6"
              className="w-1/2 object-cover rounded-lg"
              style={{ minHeight: "145px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCategory;
