import React from "react";
import Boult from "../assets/Boult.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

const MyOrders = () => {
  return (
    <div className="flex flex-col gap-5 px-5 md:px-5 py-6">
      <div className="font-bold text-3xl flex flex-wrap items-center gap-2 font-serif">
        My <span className="text-[#333087]">Orders</span>
        <span className="text-[#505050] font-medium text-xl ml-2">
          (2 Items)
        </span>
      </div>

      <div className="w-full bg-white rounded-xl shadow-md p-5 grid md:grid-cols-4 gap-4">
        <div className="relative flex justify-center md:justify-start">
          <img src={Boult} alt="product" className="w-32 md:w-40" />
          <span className="absolute top-2 right-2 w-8 h-8 flex justify-center items-center bg-white rounded-full shadow">
            <FontAwesomeIcon icon={faHeart} className="text-red-500" />
          </span>
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          <p className="text-sm font-medium">
            Boult Audio AirBass GearPods with 32H Playtime Bluetooth Headset
            (Black, True Wireless)
          </p>

          <div className="flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1 bg-orange-400 text-white font-bold px-2 py-0.5 rounded">
              4.4 <FontAwesomeIcon icon={faStar} />
            </span>
            <p className="text-gray-500">Black, True Wireless</p>
          </div>

          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold">Rs 1299</h1>
            <p className="line-through text-gray-500">Rs. 5999</p>
            <p className="text-sm font-semibold text-[#009DE1]">(78% off)</p>
          </div>

          <p className="text-sm font-bold text-gray-500">
            Earn <FontAwesomeIcon icon={faCoins} className="text-yellow-500" />{" "}
            <span className="text-black">50 Coins</span> on this order
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            <button className="border-2 border-[#002482] px-4 py-1 rounded text-sm hover:bg-[#002482] hover:text-white transition">
              Add to Cart
            </button>
            <button className="text-[#002482] text-sm hover:underline">
              Cancel
            </button>
            <button className="bg-[#002482] text-white px-4 py-1 rounded text-sm font-semibold hover:opacity-90 transition">
              Message Seller
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm md:text-left text-center">
          <p>
            <span className="font-semibold">Order Placed on:</span>{" "}
            <span className="text-gray-500">3 October 2020</span>
          </p>
          <p>
            <span className="font-semibold">Order Number:</span>{" "}
            <span className="text-gray-500">#124-5660-9008</span>
          </p>
          <p>
            <span className="font-semibold">Ship To:</span>{" "}
            <span className="text-gray-500">Tryzen Soluton</span>
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            View Order Details
          </a>
        </div>
      </div>

      <div className="w-full bg-white rounded-xl shadow-md p-5 grid md:grid-cols-4 gap-4">
        <div className="relative flex justify-center md:justify-start">
          <img src={Boult} alt="product" className="w-32 md:w-40" />
          <span className="absolute top-2 right-2 w-8 h-8 flex justify-center items-center bg-white rounded-full shadow">
            <FontAwesomeIcon icon={faHeart} className="text-red-500" />
          </span>
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          <p className="text-sm font-medium">
            Boult Audio AirBass GearPods with 32H Playtime Bluetooth Headset
            (Black, True Wireless)
          </p>

          <div className="flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1 bg-orange-400 text-white font-bold px-2 py-0.5 rounded">
              4.4 <FontAwesomeIcon icon={faStar} />
            </span>
            <p className="text-gray-500">Black, True Wireless</p>
          </div>

          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold">Rs 1299</h1>
            <p className="line-through text-gray-500">Rs. 5999</p>
            <p className="text-sm font-semibold text-[#009DE1]">(78% off)</p>
          </div>

          <p className="text-sm font-bold text-gray-500">
            Earn <FontAwesomeIcon icon={faCoins} className="text-yellow-500" />{" "}
            <span className="text-black">50 Coins</span> on this order
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            <button className="border-2 border-[#002482] px-4 py-1 rounded text-sm hover:bg-[#002482] hover:text-white transition">
              Add to Cart
            </button>
            <button className="text-[#002482] text-sm hover:underline">
              Cancel
            </button>
            <button className="bg-[#002482] text-white px-4 py-1 rounded text-sm font-semibold hover:opacity-90 transition">
              Message Seller
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm md:text-left text-center">
          <p>
            <span className="font-semibold">Order Placed on:</span>{" "}
            <span className="text-gray-500">3 October 2020</span>
          </p>
          <p>
            <span className="font-semibold">Order Number:</span>{" "}
            <span className="text-gray-500">#124-5660-9008</span>
          </p>
          <p>
            <span className="font-semibold">Ship To:</span>{" "}
            <span className="text-gray-500">Tryzen Soluton</span>
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            View Order Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
