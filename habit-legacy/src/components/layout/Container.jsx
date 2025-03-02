import React from 'react';

const Container = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`container ${className}`} 
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
