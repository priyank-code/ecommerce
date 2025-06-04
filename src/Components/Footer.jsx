import React from "react";
import Logo from "../assets/logo.png";
import { faFacebook, faInstagram, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 md:gap-20 gap-10 bg-[#00071B] text-white p-20 items-start">
      <div className="flex gap-5 items-start">
        <div>
          <img src={Logo} alt="Logo" className="max-w-20" />
        </div>
        <div className="md:text-left text-center justify-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-serif text-[#009DE0] font-bold">Utradia</h1>
            <p className="capitalize text-sm">the trustworthy marketplace</p>
          </div>
          <div className="mt-5 border-1 border-white flex flex-col gap-5 justify-center text-center items-center p-3 rounded-xl">
            <p className="uppercase font-mono font-bold">be a seller</p>
            <button className="capitalize bg-white font-bold text-black px-5 rounded-sm text-sm py-2">apply now</button>
          </div>
        </div>
      </div>

      <div className="md:text-left text-center">
        <h1 className="text-2xl font-bold">Shopping</h1>
        <ul className="mt-5 flex flex-col gap-3">
          <li className="hover:text-[#009DE0] cursor-pointer">Your cart</li>
          <li className="hover:text-[#009DE0] cursor-pointer">Your orders</li>
          <li className="hover:text-[#009DE0] cursor-pointer">Compared items</li>
          <li className="hover:text-[#009DE0] cursor-pointer">Wishlist</li>
          <li className="hover:text-[#009DE0] cursor-pointer">Shipping Details</li>
        </ul>
      </div>

      <div className="md:text-left text-center">
        <h1 className="text-2xl font-bold">More Links</h1>
        <ul className="mt-5 flex flex-col gap-3">
          <li className="hover:text-[#009DE0] cursor-pointer">Blogs</li>
          <li className="hover:text-[#009DE0] cursor-pointer">Gift center</li>
          <li className="hover:text-[#009DE0] cursor-pointer">Buying guides</li>
          <li className="hover:text-[#009DE0] cursor-pointer">New arrivals</li>
          <li className="hover:text-[#009DE0] cursor-pointer">Clearance</li>
        </ul>
      </div>

      <div className="md:text-left text-center">
        <h1 className="text-2xl font-bold">Social Media</h1>
        <div className="flex gap-5 mt-3 text-xl md:justify-start justify-center">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faWhatsapp} />
        <FontAwesomeIcon icon={faXTwitter} />
        </div>
        <ul className="mt-5 flex flex-col gap-3">
          <li className="hover:text-[#009DE0] cursor-pointer">Terms & Conditions</li>
          <li className="hover:text-[#009DE0] cursor-pointer">Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
