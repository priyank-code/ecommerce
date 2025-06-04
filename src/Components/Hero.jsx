import React from "react";
import img1 from "../assets/hero1.png";
import img2 from "../assets/hero2.png";

const Hero = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-5 h-full">
        <img
          src={img1}
          alt="img1"
          className="md:col-span-3 w-full h-full object-cover"
        />
        <div className="relative md:col-span-2 w-full h-full">
          <img
            src={img2}
            alt="img2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 text-center md:bg-black/50 md:text-white">
            <h1 className="text-4xl md:text-7xl font-bold font-serif drop-shadow-lg">UTRIDIA</h1>
            <p className="mt-4 text-xl md:text-3xl drop-shadow-md">50% - 80% off</p>
            <button className="mt-6 px-6 py-2 text-lg md:text-xl border border-white rounded-sm bg-white bg-opacity-90 text-black hover:bg-black hover:text-white transition">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
