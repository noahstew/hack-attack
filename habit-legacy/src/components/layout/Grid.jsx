import React from 'react';

const Grid = ({ children, className = '', columns = '', gap = '', ...props }) => {
  const style = {
    ...(columns && { gridTemplateColumns: columns }),
    ...(gap && { gridGap: gap }),
  };

  return (
    <div className={`grid ${className}`} style={style} {...props}>
      {children}
    </div>
  );
};

export default Grid;
