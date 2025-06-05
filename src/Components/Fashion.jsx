import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Logo from "../assets/profile_logo.png";
import { faBox, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCreditCard,
  faHeart,
  faLocationDot,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Addresses from "../Details/Addresses";
import MyDetails from "../Details/MyDetails";
import Wishlist from "../Details/Wishlist";
import Cards from "../Details/Cards";
import Compaigns from "../Details/Compaigns";
import Footer from "../Components/Footer";
import MyOrders from "../Details/MyOrders";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Fashion = () => {
  const [personalInfo, setPersonalInfo] = useState(true);
  const [componentData, setComponentData] = useState(<MyDetails />);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Navbar />
      <div>
        <div className="grid md:grid-cols-4 grid-cols-1 bg-white gap-5">
          <div className="md:col-span-1 m-5">
            <div className="grid gap-5">
              <div className="shadow-lg p-5 rounded-xl">
                <div className="flex flex-row md:flex-col items-center gap-5 justify-center lg:text-center">
                  <img src={Logo} alt="logo" className="w-35" />
                  <div className="flex flex-col gap-3">
                    <p className="text-sm font-bold text-[#0B60A8]">Welcome,</p>
                    <h2 className="font-bold text-[#0B60A8]">Tryzen Soluton</h2>
                  </div>
                </div>
              </div>

              <div className="shadow-xl px-5 py-10 rounded-xl font-bold text-[#0B60A8] bg-white max-w-md w-full mx-auto">
                {[
                  { icon: faUser, text: "My Profile", tag: <MyDetails /> },
                  { icon: faBox, text: "My Orders", tag: <MyOrders /> },
                  { icon: faHeart, text: "My Wishlist", tag: <Wishlist /> },
                  {
                    icon: faLocationDot,
                    text: "My Addresses",
                    tag: <Addresses />,
                  },
                  { icon: faCreditCard, text: "My Cards", tag: <Cards /> },
                  { icon: faHeart, text: "Campaigns", tag: <Compaigns /> },
                  { icon: faRightFromBracket, text: "Logout", noArrow: true },
                ].map(({ icon, text, noArrow, tag }, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setComponentData(tag);
                      setActiveIndex(index);
                    }}
                    className={`flex justify-between items-center py-3 px-2 rounded-lg cursor-pointer transition-all ${
                      activeIndex === index
                        ? "bg-[#e6f1fa]"
                        : "hover:bg-[#f0f8ff]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon icon={icon} className="text-2xl" />
                      <span>{text}</span>
                    </div>
                    {!noArrow && (
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-lg"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3 m-5 shadow-xl pl-10 p-5 rounded-xl border-2 border-gray-100">
            {personalInfo ? componentData : <div>No data found</div>}
          </div>
        </div>

        <div className="grid md:grid-cols-5 grid-cols-1 items-center p-10 bg-[#E6F1FA]">
          <p className="flex gap-3 items-center justify-center">
            <FontAwesomeIcon icon={faCheck} />
            <span>Duties and Taxes Guaranteed</span>
          </p>
          <p className="flex gap-3 items-center justify-center">
            <FontAwesomeIcon icon={faCheck} />
            <span>Free Express Shipping</span>
          </p>
          <p className="flex gap-3 items-center justify-center">
            <FontAwesomeIcon icon={faCheck} />
            <span>Customer Love</span>
          </p>
          <p className="flex gap-3 items-center justify-center">
            <FontAwesomeIcon icon={faCheck} />
            <span>Easy Returns</span>
          </p>
          <p className="flex gap-3 items-center justify-center">
            <FontAwesomeIcon icon={faCheck} />
            <span>Secure Payment</span>
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Fashion;
