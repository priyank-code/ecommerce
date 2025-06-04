import React from "react";

const products = [
  {
    id: 1,
    name: "Truke BTG1 Gaming earbuds with 60ms Low Latency...",
    image: "/product1.png",
    rating: 4.4,
    price: 1499,
    originalPrice: 3499,
    discount: "57% off",
    liked: false,
  },
  {
    id: 2,
    name: "Boult Audio AirBass GearPods with 32H Playtime...",
    image: "/product2.png",
    rating: 4.4,
    price: 1299,
    originalPrice: 5999,
    discount: "78% off",
    liked: true,
  },
  {
    id: 3,
    name: "Truke BTG1 Gaming earbuds with 60ms Low Latency...",
    image: "/product1.png",
    rating: 4.4,
    price: 1499,
    originalPrice: 3499,
    discount: "57% off",
    liked: false,
  },
  {
    id: 4,
    name: "Boult Audio AirBass GearPods with 32H Playtime...",
    image: "/product2.png",
    rating: 4.4,
    price: 1299,
    originalPrice: 5999,
    discount: "78% off",
    liked: true,
  },
  {
    id: 5,
    name: "Truke BTG1 Gaming earbuds with 60ms Low Latency...",
    image: "/product1.png",
    rating: 4.4,
    price: 1499,
    originalPrice: 3499,
    discount: "57% off",
    liked: false,
  },
];

const DealsSection = () => {
  return (
    <div className="bg-[#1f1f1f] p-6">
      {/* Header */}
      <div className="flex justify-between items-center text-white mb-4">
        <h2 className="text-2xl font-bold">Todays Best Deal</h2>
        <a href="#" className="text-sm font-semibold">View All</a>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-3 w-64 shrink-0 relative"
          >
            {/* Like icon */}
            <img
              src={item.liked ? "/heart-filled.png" : "/heart-outline.png"}
              alt="like"
              className="w-5 h-5 absolute top-3 right-3"
            />

            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-contain mb-2"
            />

            {/* Title */}
            <p className="text-sm text-gray-800 font-medium leading-5 mb-1 line-clamp-2">
              {item.name}
            </p>

            {/* Rating & Type */}
            <div className="text-xs text-gray-500 mb-2 flex items-center gap-2">
              <span className="bg-yellow-400 text-black px-1.5 py-0.5 rounded text-xs font-semibold">
                {item.rating}★
              </span>
              <span>Black, True Wireless</span>
            </div>

            {/* Price */}
            <div className="text-sm font-semibold">
              <span className="text-black text-base">Rs {item.price}</span>{" "}
              <span className="line-through text-gray-400 text-sm ml-2">Rs {item.originalPrice}</span>{" "}
              <span className="text-blue-500 font-bold text-sm">({item.discount})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
