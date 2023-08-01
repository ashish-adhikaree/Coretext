import Link from "next/link";
import React from "react";

type PROPS = {
  children: React.ReactNode;
  href?: string;
};

const Button: React.FC<PROPS> = ({ children, href }) => {
  if (href && href !== "") {
    return <Link
      href={href}
      className="bg-purple-400 text-white py-3 px-5 rounded-2xl font-medium focus:outline-purple-700 hover:shadow-2xl hover:bg-purple-500"
    >
      {children}
    </Link>;
  }

  return (
    <button className="bg-purple-400 text-white py-3 px-5 rounded-2xl font-medium focus:outline-purple-700 hover:shadow-2xl hover:bg-purple-500">
      {children}
    </button>
  );
};

export default Button;
