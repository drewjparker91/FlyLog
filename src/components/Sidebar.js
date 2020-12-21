import React from 'react'
import './Sidebar.css'  

export const Sidebar = ({ width, height, children }) => {

  return (
    <div className="side-bar" style={{width: width, minHeight: height}}>
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
};