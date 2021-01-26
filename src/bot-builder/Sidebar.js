import React, { useEffect, useState } from 'react';
// import Sidebar from "react-sidebar";
import "./Sidebar.css";
import SideBarOptions from './SideBarOptions';

const SideBar = ({addNewNode,clickedNode,updateNewNode,prevNode, setPrevNode}) => {
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

  // const openModal = () => {
  //   console.log("clicked");
  //   document.getElementById("grey-screen").style = "width:100%";
  //   document.getElementById("sidebar").classList.add("side-bar-open");
  // };

  const closeModal = () => {
    document.getElementById("sidebar").classList.remove("side-bar-open");
    setTimeout(() => {
      document.getElementById("grey-screen").style = "width:0";
    }, 400);
  };

  const [interactionName, setInteractionName ] = useState("");
  const submitHandler = (e) =>{
      e.preventDefault();
      // if prevNode then addnewnode(payload,prevnode)
      if(prevNode){
        addNewNode(prevNode,interactionName);
      }
      // if clickedNode then updatenode(payload, clickedNode)
      // updateNewNode(clickedNode.id,interactionName);
      closeModal();
      setPrevNode(null);
      //setClickedNode(null);
      //setPayLoad(null);
      // console.log(data.nodeId);
      // console.log(interactionName);
  }
  
  return (
    <div className="modal" id="modal">
      <br />
      <div className="grey-screen" id="grey-screen">
        <div className="side-bar" id="sidebar" style={sideStyle}>
          {/* <form onSubmit={submitHandler}>
            <label htmlFor="name">Enter</label>
            <input type="text" name="name" id="name" value={interactionName}
            onChange={(e) => setInteractionName(e.target.value)}/>
            <br />
          <button onClick={submitHandler}>Save</button>
          </form> */}
          <SideBarOptions/>
          <br />
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
    
  );
};

export default SideBar;
