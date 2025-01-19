import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="bg-coral-red rounded-full border
    border-coral-red flex justify-center items-center gap-2 px-7
    py-4  text-white font-montserrat text-lg leading-none">
      {label}
      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
