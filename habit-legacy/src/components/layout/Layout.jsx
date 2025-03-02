import React from 'react';
import Container from './Container';

const Layout = ({ navbar, sidebar, main }) => {
  return (
    <Container style={{ padding: '1rem' }}>
      {/* Navbar - full width */}
      <div className="layout-navbar">
        {navbar}
      </div>
      
      {/* Content area - split into sidebar and main */}
      <div className="layout-content">
        <div className="layout-sidebar">
          {sidebar}
        </div>
        <div className="layout-main">
          {main}
        </div>
      </div>
    </Container>
  );
};

export default Layout;
