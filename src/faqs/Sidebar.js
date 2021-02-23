import React from "react";
import "./sidebar.css";
import SideBarNodeDetails from "./SideBarNodeDetails";

const SideBar = ({
  clickedFaq,
  setClickedFaq,
  updateFaq
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
    document.getElementById("sidebar-faq").classList.remove("side-bar-open-faq");
    setTimeout(() => {
      document.getElementById("grey-screen-faq").style = "width:0";
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
    <div className="custom-modal-faq" id="modal-faq">
      <div className="grey-screen" id="grey-screen-faq">
        <div className="side-bar-faq" id="sidebar-faq" style={sideStyle}>
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
