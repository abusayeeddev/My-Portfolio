import React from "react";

const ServiceCardRed = ({ serviceName, serviceIcon, className }) => {
  return (
    <div>
      <div>
        <div className={`flex items-center py-2 gap-1 ${className}`}>
          <div className=" font-bold text-[35px] text-textMain ">
            {serviceIcon}
          </div>
          <div className="">
            <h3 className={`font-bold text-[20px] text-textMain ${className}`}>
              {serviceName}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardRed;
