import React from "react";
// import Sidebar from "react-sidebar";
import "./Sidebar.css";
import SideBarOptions from "./SideBarOptions";
import SideBarNodeDetails from "./SideBarNodeDetails";

const SideBar = ({
  addNewNode,
  clickedNode,
  setClickedNode,
  updateNewNode,
  prevNode,
  setPrevNode,
}) => {
  // const greyBg = document.getElementById("grey-screen");
  const sideStyle = {
    position: "absolute",
    top: "0",
    left: "auto",
    right: "0",
    backgroundColor: "#f2f4f7",
    transition: "0.5s",
    zIndex: "100000000",
    padding: "0px 20px",
  };

  const closeModal = () => {
    document.getElementById("sidebar").classList.remove("side-bar-open");
    setTimeout(() => {
      document.getElementById("grey-screen").style = "width:0";
    }, 400);
    setPrevNode(null);
    setClickedNode(null);
  };

  const clickHandler = (nodeType) => {
    if (prevNode) {
      addNewNode(prevNode, nodeType);
    }

    closeModal();
  };

  const submitHandler = (payload) => {
    if (clickedNode) {
      updateNewNode(clickedNode, payload);
      console.log(payload);
      console.log(clickedNode);
    }

    closeModal();
  };

  return (
    <div className="custom-modal" id="modal">
      <div className="grey-screen" id="grey-screen">
        <div className="side-bar" id="sidebar" style={sideStyle}>
          {prevNode ? (
            <>
              <button onClick={closeModal}>Close</button>
              <SideBarOptions clickHandler={clickHandler} />
              <br />
            </>
          ) : clickedNode ? (
            <SideBarNodeDetails
              closeModal={closeModal}
              submitHandler={submitHandler}
              clickedNode={clickedNode}
            />
          ) : (
            <div style={{ height: "100vh" }}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
