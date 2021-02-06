import React from "react";
import StoryFlow from "./StoryFlow";

const LeftSidebar = ({ refElements, leftSidebar, setLeftSidebar }) => {
  const sideStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "auto",
    width: "350px",
    minHeight: "100vh",
    backgroundColor: "#f2f4f7",
    transition: "0.5s",
    zIndex: "1000000",
    // padding: "20px",
    transform: leftSidebar ? "" : "translateX(-300px)",
    boxShadow: "1px -1px 20px 2px #d3d3d3",
  };

  return (
    <div className="left-side-bar" style={sideStyle}>
      <StoryFlow elements={refElements} setLeftSidebar={setLeftSidebar} />
      <div
        className="story-map"
        style={{
          position: "absolute",
          top: "45%",
          right: "-35px",
          transform: "rotate(-90deg)",
          fontSize: "2rem",
          letterSpacing: "2px",
        }}
      >
        Stories Map
      </div>
    </div>
  );
};

export default LeftSidebar;
