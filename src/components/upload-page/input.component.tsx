import React from "react";

type PROPS = {
  type: string;
  placeholder: string;
};

const Input: React.FC<PROPS> = ({ type, placeholder }) => {
  return (
    <input
      className="px-5 py-3 border w-full outline-none max-w-screen-sm rounded-full hover:shadow-md focus-within:shadow-md mx-5"
      type={type}
      placeholder={placeholder}
    ></input>
  );
};

export default Input;
