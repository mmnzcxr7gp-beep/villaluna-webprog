import React from 'react';

function Button({ text, onClick, variant = 'primary', className = '' }) {
  const baseStyle = 'px-6 py-3 rounded-full font-poppins font-semibold transition-all duration-300 cursor-pointer';
  
  const variants = {
    primary: 'bg-flower-pink text-white hover:scale-105 hover:shadow-lg hover:shadow-flower-pink/50',
    secondary: 'bg-flower-lavender text-white hover:scale-105 hover:shadow-lg hover:shadow-flower-lavender/50',
    outline: 'border-2 border-flower-pink text-flower-pink hover:bg-flower-pink hover:text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
