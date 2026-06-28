import React from "react";

const Buttons = ({ btntxt, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-buttonBg font-sans  font-bold text-[15px] sm:text-[16px] md:text-[18px] px-4  md:px-5 py-2  md:py-2.5 text-textMain duration-200 shadow-[0px_0px_5px_rgba(0,0,0,0.2)] rounded-[15px] hover:text-textSub  transform  transition-all  hover:-translate-y-1  hover:shadow-lg  hover:shadow-hoverBGclr/50 ${className} `}
    >
      {btntxt}
    </button>
  );
};

export default Buttons;