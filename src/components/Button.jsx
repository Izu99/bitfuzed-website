import React from "react";

const Button = ({ id, text, containerClass }) => {
  return (
    <button
      id={id}
      className={`relative z-50 w-fit mx-auto cursor-pointer font-regular px-14 py-2 overflow-hidden rounded-full mt-8 ${containerClass}`}
    >
      <div>{text}</div>
    </button>
  );
};
export default Button;
