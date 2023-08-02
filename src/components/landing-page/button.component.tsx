import Link from "next/link";
import React from "react";

type PROPS = {
  children: React.ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?:
    | ((event: React.FormEvent) => Promise<void>)
    | ((event: React.FormEvent) => void);
  className?: string;
};

const Button: React.FC<PROPS> = ({
  children,
  href,
  disabled,
  onClick,
  className,
}) => {
  if (href && href !== "") {
    return (
      <Link
        href={href}
        className={`bg-purple-400 text-white py-3 px-5 rounded-2xl font-medium focus:outline-purple-700 hover:shadow-2xl hover:bg-purple-500 ${
          className ? className : ""
        }`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick ? onClick : () => {}}
      disabled={disabled ? disabled : false}
      className={`disabled:cursor-not-allowed bg-purple-400 text-white py-3 px-5 rounded-2xl font-medium focus:outline-purple-700 hover:shadow-2xl hover:bg-purple-500 ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
