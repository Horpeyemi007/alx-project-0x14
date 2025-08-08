import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button
      type="button"
      onClick={action}
      className="px-8 py-2 border-2 border-[#E2D609] rounded-full hover:bg-[#E2D609] hover:text-black transition-colors duration-300"
    >
      {title}
    </button>
  );
};

export default Button;
