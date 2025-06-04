import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Google from "../assets/Google.png";
import Facebook from "../assets/Facebook.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { myContext } from "../Context/Context";
import Footer from "./Footer";
import ReCAPTCHA from "react-google-recaptcha";

const SignUp = () => {
  const { signupData } = useContext(myContext);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [useMobile, setUseMobile] = useState(true);
  const [errors, setErrors] = useState({});
  const [loginUser, setLoginUser] = useState(true);

  const toggleInputMethod = () => {
    setUseMobile((prev) => !prev);
    setErrors({});
  };

  const changeUser = () => {
    setLoginUser((prev) => !prev);
  }

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const validateForm = () => {
    let formErrors = {};

    if (useMobile) {
      if (!phone || phone.length < 10) {
        formErrors.phone = "Valid mobile number is required";
      }
    } else {
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        formErrors.email = "Valid email is required";
      }
    }

    if (!password || password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    if (!captchaValue) {
      formErrors.captcha = "Please complete the CAPTCHA";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="m-5 rounded-sm shadow-xl bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            {/* Login Form */}
            {loginUser ? (
              <div className="p-5 lg:p-10 lg:ml-10 lg:col-span-2">
              <p className="text-[#505050] font-bold mb-5 text-xl">Login Account</p>

              {/* Email / Phone Field */}
              {useMobile ? (
                <div className="max-w-md w-full mx-auto mb-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-[#505050] font-bold">Enter Mobile</label>
                    <a href="#" onClick={toggleInputMethod} className="text-gray-400 font-bold text-sm hover:underline">
                      Use Email
                    </a>
                  </div>
                  <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={setPhone}
                    enableSearch
                    inputClass={`!w-full !pl-14 !h-12 text-gray-700 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              ) : (
                <div className="max-w-md w-full mx-auto mb-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-[#505050] font-bold">Enter Email</label>
                    <a href="#" onClick={toggleInputMethod} className="text-gray-400 font-bold text-sm hover:underline">
                      Use Mobile
                    </a>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full h-12 pl-5 text-gray-700 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400`}
                    placeholder="Enter email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              )}

              {/* Password Field */}
              <div className="max-w-md w-full mx-auto mb-6">
                <label className="text-[#505050] font-bold mb-2 block">Enter Password</label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full h-12 pl-5 text-gray-700 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400`}
                  placeholder="************"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              {/* CAPTCHA */}
              <div className="max-w-md w-full mx-auto mb-6">
                <ReCAPTCHA
                  sitekey="6Ldwh04rAAAAANLkUtm6PnUHPUa7ispTOKSuZfC5"
                  onChange={handleCaptchaChange}
                />
                {errors.captcha && <p className="text-red-500 text-sm mt-2">{errors.captcha}</p>}
              </div>

              {/* Submit Buttons */}
              <div className="max-w-md w-full mx-auto">
                <button
                  type="submit"
                  className="w-full bg-[#333087] text-white py-3 rounded-sm font-bold hover:opacity-90 transition mb-3"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="w-full bg-transparent border border-gray-300 py-3 rounded-sm font-bold hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
              </div>

              <p className="font-bold text-sm mt-5 text-center">
                Don't Have Account?{" "}
                <a href="#" onClick={changeUser} className="text-[#009DE0] hover:underline">
                  New Registration
                </a>
              </p>
            </div>
            ) : (
              <div className="p-5 lg:p-10 lg:ml-10 lg:col-span-2">
              <p className="text-[#505050] font-bold mb-5 text-xl">Create New Account</p>

              {/* Email / Phone Field */}
                <div className="max-w-md w-full mx-auto mb-6">
                    <label className="text-[#505050] font-bold mb-2 block">Full Name</label>
                    <input type="text" className="w-full h-12 pl-5 text-gray-700 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400 border-gray-300" placeholder="Enter Name"/>
                </div>

                <div className="max-w-md w-full mx-auto mb-6">
                    <label className="text-[#505050] font-bold mb-2 block">Mobile Number</label>
                    <input type="text" className="w-full h-12 pl-5 text-gray-700 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400 border-gray-300" placeholder="+91 00000 00000"/>
                </div>

              {/* Password Field */}
              <div className="max-w-md w-full mx-auto mb-6">
                <label className="text-[#505050] font-bold mb-2 block">Password</label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full h-12 pl-5 text-gray-700 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400`}
                  placeholder="************"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              <div className="max-w-md w-full mx-auto mb-6">
                <label className="text-[#505050] font-bold mb-2 block">Confirm Password</label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full h-12 pl-5 text-gray-700 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400`}
                  placeholder="************"
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              {/* CAPTCHA */}
              <div className="max-w-md w-full mx-auto mb-6">
                <ReCAPTCHA
                  sitekey="6Ldwh04rAAAAANLkUtm6PnUHPUa7ispTOKSuZfC5"
                  onChange={handleCaptchaChange}
                />
                {errors.captcha && <p className="text-red-500 text-sm mt-2">{errors.captcha}</p>}
              </div>

              {/* Submit Buttons */}
              <div className="max-w-md w-full mx-auto">
                <div className="text-sm font-medium flex gap-2 items-center mb-2">
                  <input type="checkbox" name="check" id="check" className=""/><span>By signing up you agree to our terms and conditions.</span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#333087] text-white py-3 rounded-sm font-bold hover:opacity-90 transition mb-3"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="w-full bg-transparent border border-gray-300 py-3 rounded-sm font-bold hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
              </div>

              <p className="font-bold text-sm mt-5 text-center">
                Already Have Account ?{" "}
                <a href="#" onClick={changeUser} className="text-[#009DE0] hover:underline">
                  Login
                </a>
              </p>
            </div>
            )}

            {/* Divider */}
            <div className="hidden lg:flex flex-col justify-center items-center col-span-1">
              <div className="border-l-2 h-50 border-gray-300"></div>
              <div className="flex items-center justify-center border-2 rounded-full h-10 w-10 text-[#505050] border-gray-400 shadow-sm uppercase my-3">
                OR
              </div>
              <div className="border-l-2 h-50 border-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="lg:col-span-2 px-5 pb-10 lg:pb-0">
              <div className="flex flex-col gap-5 items-center">
                <span className="flex gap-5 items-center w-full justify-center">
                  <img src={Google} alt="google" className="w-10" />
                  <button className="gap-4 bg-[#DF4B34] px-6 py-3 rounded-sm text-white w-50">
                    Login with Google
                  </button>
                </span>

                <span className="flex gap-5 items-center w-full justify-center">
                  <img src={Facebook} alt="facebook" className="w-10" />
                  <button className="flex items-center gap-4 bg-[#43609C] px-6 py-3 rounded-sm text-white w-50">
                    Login with Facebook
                  </button>
                </span>
                <p className="text-sm font-bold text-center mt-2">
                  Don't Have Account?{" "}
                  <a href="#" className="text-[#009DE0] hover:underline">
                    Login with!
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* Signup Features Section */}
      <div className="bg-[#E6F1FA] grid md:grid-cols-5 grid-cols-1 md:p-5 md:justify-center md:items-center md:text-center text-left pl-1/2 p-5 justify-start">
        {signupData.map((data, index) => (
          <div key={index} className="font-medium flex items-center gap-5 md:justify-center">
            <FontAwesomeIcon icon={faCheck} />
            <p>{data.text}</p>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default SignUp; 