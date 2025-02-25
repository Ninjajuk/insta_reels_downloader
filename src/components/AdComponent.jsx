import React from "react";

const AdComponent = ({ position }) => {
  return (
    <div className={`w-full lg:w-64 h-64 lg:min-h-screen bg-gray-700 flex items-center justify-center rounded-lg border border-gray-600 shadow-md ${position === 'left' ? '' : ''}`}>
      {/* <p className="text-gray-400">Ad Space ({position})</p> */}
    </div>
    // <div
    //   className={`ad-container ${position === 'left' ? 'left-0' : 'right-0'}`}
    // >
    //   <div className="w-full h-full glass rounded-lg flex items-center justify-center">
    //     <span className="text-sm text-muted-foreground">Advertisement</span>
    //   </div>
    // </div>
  );
};

export default AdComponent;
