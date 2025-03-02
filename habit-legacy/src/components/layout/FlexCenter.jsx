import React from 'react';
import Flex from './Flex';

const FlexCenter = ({ children, className = '', ...props }) => {
  return (
    <Flex 
      className={`flex-center ${className}`}
      style={{ 
        justifyContent: 'center',
        alignItems: 'center',
        ...props.style
      }}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default FlexCenter;
