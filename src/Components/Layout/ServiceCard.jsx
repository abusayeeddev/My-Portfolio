import React from "react";
import { HiServer } from "react-icons/hi";

const ServiceCard = ({ serviceName, serviceIcon, className }) => {
  return (
    <div>
      <div className={`flex items-center py-2 gap-1 ${className}`}>
        <div className=" font-bold text-[35px] text-textSub ">
          {serviceIcon}
        </div>
        <div className="">
          <h3 className={`font-bold text-[20px] text-textSub ${className}`}>{serviceName}</h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
