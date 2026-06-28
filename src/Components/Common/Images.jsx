import React from "react";

const Images = ({ src, alt, className }) => {
  return (
    <img
      className={`max-w-full h-auto ${className}`}
      src={src}
      alt={alt}
    />
  );
};

export default Images;