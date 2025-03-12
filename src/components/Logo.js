import React from 'react';

const Logo = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="60" fill="#e74c3c" />
      <circle cx="100" cy="100" r="55" fill="none" stroke="white" strokeWidth="2" />
      <text 
        x="100" 
        y="95" 
        fontFamily="Arial" 
        fontSize="20s" 
        fontWeight="bold" 
        fill="white" 
        textAnchor="middle"
      >
        CHILESHE
      </text>
      <path d="M75,105 L125,105" stroke="white" strokeWidth="2" />
      <text 
        x="100" 
        y="120" 
        fontFamily="Arial" 
        fontSize="20" 
        fontWeight="bold" 
        fill="white" 
        textAnchor="middle"
      >
        BESA
      </text>
    </svg>
  );
};

export default Logo;
