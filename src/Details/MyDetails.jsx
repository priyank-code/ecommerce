import React, { useState } from "react";

const MyDetails = () => {

  const [emailEdit, setEmailEdit] = useState(false);
  const [emailData, setEmailData] = useState("Tryzensolution@gmail.com");
  const [mobileEdit, setMobileEdit] = useState(false);
  const [mobileData, setMobileData] = useState(1234567890);
  const [editDetail, setEditDetail] = useState(false);
  const [fname, setFname] = useState("Tryzen");
  const [lname, setLname] = useState("Solution");
  const [gender, setGender] = useState("male");
  const [isOpen, setIsOpen] = useState(false);

    const changeEmail = () => {
    setEmailEdit(!emailEdit);
  };

  const changeMobile = () => {
    setMobileEdit(!mobileEdit);
  };

  const changeDetail = () => {
    setEditDetail(!editDetail);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="justify-between flex items-center">
        <p className="justify-start font-bold text-[#505050]">
          Personal Information
        </p>
        <button
          className="text-sm cursor-pointer font-bold bg-[#009DE0] px-5 py-2 rounded-xl text-white"
          onClick={changeDetail}
        >
          {editDetail ? "Save" : "Edit"}
        </button>
      </div>
      <div className="flex md:flex-row flex-col gap-5">
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          className={`bg-[#EFEFEF] p-3 rounded-xl font-bold text-gray-500 outline-none ${
            !editDetail ? "bg-[#EFEFEF]" : "bg-[#fff]  border-2"
          } `}
          disabled={!editDetail}
        />
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          className={`bg-[#EFEFEF] p-3 rounded-xl font-bold text-gray-500 outline-none ${
            !editDetail ? "bg-[#EFEFEF]" : "bg-[#fff]  border-2"
          } `}
          disabled={!editDetail}
        />
      </div>

      <div className="grid gap-3">
        <p className="justify-start font-bold text-[#505050]">Your Gender</p>
        <div className="flex gap-5">
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              name="gender"
              id="male"
              onChange={() => setGender("male")}
              disabled={!editDetail}
              checked={gender === "male" ? true : false}
            />
            <label htmlFor="male" className="font-bold text-[#505050]">
              Male
            </label>
          </div>

          <div className="flex gap-2 items-center">
            <input
              type="radio"
              name="gender"
              id="female"
              disabled={!editDetail}
              checked={gender === "female" ? true : false}
              onChange={() => setGender("female")}
            />
            <label htmlFor="female" className="font-bold text-[#505050]">
              Female
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <p className="font-bold text-[#505050]">Email Address</p>
          <span className="flex gap-10 text-sm font-bold text-[#0B60A8]">
            <span className="cursor-pointer" onClick={changeEmail}>
              {!emailEdit ? "Edit" : "Save"}
            </span>
            <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              Change Password
            </span>
          </span>
        </div>
        <input
          type="email"
          name="mail"
          id="mail"
          onChange={(e) => setEmailData(e.target.value)}
          value={emailData}
          className={`p-3 rounded-xl font-bold text-gray-500 outline-none ${
            !emailEdit ? "bg-[#EFEFEF]" : "bg-[#fff]  border-2"
          }`}
          disabled={!emailEdit}
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <p className="font-bold text-[#505050]">Mobile Number</p>
          <span
            className="text-sm font-bold text-[#0B60A8] cursor-pointer"
            onClick={changeMobile}
          >
            {mobileEdit ? "Save" : "Edit"}
          </span>
        </div>
        <input
          type="number"
          name="text"
          id="text"
          onChange={(e) => {
            const value = e.target.value;
            if (value.length <= 10 && /^\d*$/.test(value)) {
              setMobileData(value);
            }
          }}
          value={mobileData}
          className={`${
            !mobileEdit ? "bg-[#EFEFEF]" : "bg-[#fff]  border-2"
          } p-3 rounded-xl font-bold text-gray-500 outline-none`}
          disabled={!mobileEdit}
          maxLength={10}
        />
      </div>

      <div>
        <p className="font-bold text-[#505050] mt-3">
          FAQs What happens when I update my email address (or mobile number)?
          Your login email id (or mobile number) changes, likewise. You'll
          receive all your account related communication on your updated email
          address (or mobile number).
          <br />
          <br />
          When will my Flipkart account be updated with the new email address
          (or mobile number)? It happens as soon as you confirm the verification
          code sent to your email (or mobile) and save the changes.
          <br />
          <br />
          What happens to my existing Flipkart account when I update my email
          address (or mobile number)? Updating your email address (or mobile
          number) doesn't invalidate your account. Your account remains fully
          functional. You'll continue seeing your Order history, saved
          information and personal details.
          <br />
          <br />
          Does my Seller account get affected when I update my email address?
          Flipkart has a 'single sign-on' policy. Any changes will reflect in
          your Seller account also.
        </p>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 backdrop-blur-[1px]">
          <div className="bg-white shadow-lg w-[90%] md:w-[600px] flex">
            {/* Left Blue Section */}
            <div className="bg-blue-500 text-white p-5 w-1/2 hidden md:block">
              <h2 className="text-lg font-bold mb-2">
                Your new password must:
              </h2>
              <ul className="list-disc ml-4 space-y-1 text-sm">
                <li>Be at least 4 characters in length</li>
                <li>Not be same as your current password</li>
                <li>Not contain common passwords</li>
              </ul>
            </div>

            {/* Right Form Section */}
            <div className="p-5 w-full md:w-1/2 flex flex-col space-y-4">
              <button
                onClick={() => setIsOpen(false)}
                className="self-end text-gray-600 text-xl font-bold"
              >
                ×
              </button>

              <input
                type="password"
                placeholder="Type Current Password"
                className="p-3 border rounded-xl outline-none"
              />
              <input
                type="password"
                placeholder="Type New Password"
                className="p-3 border rounded-xl outline-none"
              />
              <input
                type="password"
                placeholder="Retype Password"
                className="p-3 border rounded-xl outline-none"
              />

              <button
                className="bg-blue-800 text-white p-3 rounded-xl font-bold"
                onClick={() =>
                  window.alert("Password Change Successfully...") ||
                  setIsOpen(false)
                }
              >
                Change Password
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 underline text-center"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyDetails;
