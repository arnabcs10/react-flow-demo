import REACT from "react";
import Sidebar from "react-sidebar";
import "./sidebar.css";

const sideBar = () => {
  const greyBg = document.getElementById("grey-screen");
  const sideStyle = {
    height: "100vh",
    position: "absolute",
    top: "0",
    left: "auto",
    right: "0",
    width: "400px",
    backgroundColor: "white",
    transition: "0.5s",
    zIndex: "100000000",
    padding: "20px",
  };

  const modalBtn = {
    position: "absolute",
    top: "0",
    left: "600px",
    zIndex: "10000",
  };

  const openModal = () => {
    console.log("clicked");
    document.getElementById("grey-screen").style = "width:100%";
    document.getElementById("sidebar").classList.add("side-bar-open");
  };

  const closeModal = () => {
    document.getElementById("sidebar").classList.remove("side-bar-open");
    setTimeout(() => {
      document.getElementById("grey-screen").style = "width:0";
    }, 400);
  };

  return (
    <div className="modal" id="modal">
      <button style={modalBtn} onClick={openModal} className="modal-open">
        Open Modal
      </button>
      <br />
      <div className="grey-screen" id="grey-screen">
        <div className="side-bar" id="sidebar" style={sideStyle}>
          <form action="">
            <label htmlFor="name">Enter</label>
            <input type="text" name="name" id="name" />
          </form>
          <br />
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default sideBar;
