import React from "react";
import "./Sidebar.css";
import SideBarNodeDetails from "./SideBarNodeDetails";

const SideBar = ({
  clickedFaq,
  setClickedFaq,
  updateFaq
  // addNewNode,
  // clickedNode,
  // setClickedNode,
  // updateNewNode,
  // prevNode,
  // setPrevNode,
}) => {
 
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
    setClickedFaq(null);
    // setClickedNode(null);
  };

  // const clickHandler = (nodeType) => {
  //   if (prevNode) {
  //     addNewNode(prevNode, nodeType);
  //   }

  //   closeModal();
  // };

  const submitHandler = (title) => {
    if (clickedFaq) {
      updateFaq(clickedFaq.id, title);
      console.log(title);
      console.log(clickedFaq);
    }

    closeModal();
  };

  return (
    <div className="custom-modal" id="modal">
      <div className="grey-screen" id="grey-screen">
        <div className="side-bar" id="sidebar" style={sideStyle}>
          { clickedFaq ? (
            <SideBarNodeDetails
              closeModal={closeModal}
              submitHandler={submitHandler}
              clickedFaq={clickedFaq}
            />
          ) : (
            <div style={{ height: "100vh" }}></div>
          )} 
          {/* <div style={{ height: "100vh" }}></div> */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
