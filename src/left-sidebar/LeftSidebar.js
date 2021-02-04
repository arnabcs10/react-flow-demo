import React from "react";
import StoryFlow from './StoryFlow';


const LeftSidebar = ({refElements,leftSidebar,setLeftSidebar}) => {
  const sideStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "auto",
    width:  "350px",
    height:"100vh",
    backgroundColor: "#f2f4f7",
    transition: "0.5s",
    zIndex: "1000000",
    // padding: "20px",
    transform: leftSidebar ? "" : "translateX(-350px)"
  };


  return (
  
        <div className="left-side-bar"  style={sideStyle}>
          
           <StoryFlow elements={refElements}  setLeftSidebar={setLeftSidebar}/>
        </div>
    
  );
};

export default LeftSidebar;