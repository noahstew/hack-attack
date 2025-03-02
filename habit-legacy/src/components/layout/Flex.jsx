import React from 'react';

const Flex = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`flex ${className}`}
      style={{ 
        display: 'flex',
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;
