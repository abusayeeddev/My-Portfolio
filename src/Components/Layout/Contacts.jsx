import React, { useState } from "react";
import Buttons from "../Common/Buttons";

const Contacts = () => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const message = e.target.message.value;

    if (!name || !email || !password || !message) {
      setError("All fields are required!");
      return;
    }

    setError("");
    alert("Form Submitted Successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <div className="w-full p-2">
        <label className="block mb-1 font-DMSans text-pText text-[14px]">Name</label>

        <input
          type="text"
          name="name"
          className="w-full border-2 border-textMain font-DMSans text-pText text-[14px] p-3 rounded-[0_20px] focus:outline-none outline-none "
          placeholder="Your Name"
        />
      </div>

      {/* Email */}
      <div className="w-full p-2">
        <label className="block mb-1 font-DMSans text-pText text-[14px]">Email</label>

        <input
          type="email"
          name="email"
          className="w-full border-2 border-textMain font-DMSans text-pText text-[14px] p-3 rounded-[0_20px] focus:outline-none outline-none"
          placeholder="Your Email"
        />
      </div>

      {/* Password */}
      <div className="w-full p-2">
        <label className="block mb-1 font-DMSans text-pText text-[14px]">Password</label>

        <input
          type="password"
          name="password"
          className="w-full border-2 border-textMain font-DMSans text-pText text-[14px] p-3 rounded-[0_20px] focus:outline-none outline-none"
          placeholder="Your Password"
        />
      </div>

      {/* Message */}
      <div className="w-full p-2">
        <label className="block mb-1 font-DMSans text-pText text-[14px]">Message</label>

        <textarea
          name="message"
          className="w-full h-32 border-2 border-textMain font-DMSans text-pText text-[14px] p-3 rounded-[0_20px] focus:outline-none outline-none"
          placeholder="Your Message"
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-center mt-2">{error}</p>
      )}

      <Buttons
        btntxt="Send Me"
        className="w-full mt-4 bg-textMain text-white"
      />
    </form>
  );
};

export default Contacts;