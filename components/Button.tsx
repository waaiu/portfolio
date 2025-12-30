import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'transparent' | 'solid' | 'primary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'transparent', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    // Implementing the 'transparent' variant from guidelines
    transparent: `
      bg-transparent 
      text-[#111111] 
      border border-[#e8e8e8] 
      px-8 py-3 
      rounded-[26px] 
      hover:bg-[#2ac56c] 
      hover:text-white 
      hover:border-[#2ac56c]
      hover:scale-105
      text-[13px] tracking-[1.105px] uppercase
    `,
    // Implementing a primary solid action button
    primary: `
      bg-[#007cba] 
      text-white 
      border border-transparent 
      px-8 py-3 
      rounded-[26px] 
      hover:bg-[#005a87] 
      hover:translate-y-[-2px]
      shadow-md
      text-[13px] tracking-[1.105px] uppercase
    `,
    // Implementing the 'f7f7f7' large variant style but adapted for normal button use
    solid: `
      bg-[#f7f7f7] 
      text-[#111111] 
      px-8 py-4 
      rounded-[4px]
      hover:bg-[#111111] 
      hover:text-white 
      text-[13px] tracking-[1.105px] uppercase
    `
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};