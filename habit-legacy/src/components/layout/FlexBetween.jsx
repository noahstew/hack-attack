import React from 'react';
import Flex from './Flex';

const FlexBetween = ({ children, className = '', ...props }) => {
  return (
    <Flex 
      className={`flex-between ${className}`}
      style={{ 
        justifyContent: 'space-between',
        alignItems: 'center',
        ...props.style
      }}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default FlexBetween;
