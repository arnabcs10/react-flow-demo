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
    // width: "350px",
    backgroundColor: "#f2f4f7",
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
    setPrevNode(null);
    setClickedNode(null);
  };

  // const [interactionName, setInteractionName] = useState("");
  const clickHandler = (nodeType) => {
    // e.preventDefault();
    // if prevNode then addnewnode(payload,prevnode)
    if (prevNode) {
      addNewNode(prevNode, nodeType);
    }
    // if clickedNode then updatenode(payload, clickedNode)
    // updateNewNode(clickedNode.id,interactionName);
    closeModal();
    
    //setPayLoad(null);
    // console.log(data.nodeId);
    // console.log(interactionName);
  };

  const submitHandler = (payload) => {
    // e.preventDefault();
    // if prevNode then addnewnode(payload,prevnode)
    if (clickedNode) {
      updateNewNode(clickedNode,payload);
      console.log(payload);
      console.log(clickedNode);
    }
    // if clickedNode then updatenode(payload, clickedNode)
    // updateNewNode(clickedNode.id,interactionName);
    closeModal();
    
    //setPayLoad(null);
    // console.log(data.nodeId);
    // console.log(interactionName);
  };

  return (
    <div className="custom-modal" id="modal">
      <div className="grey-screen" id="grey-screen">
        <div className="side-bar" id="sidebar" style={sideStyle}>
          {/* <form onSubmit={submitHandler}>
            <label htmlFor="name">Enter</label>
            <input type="text" name="name" id="name" value={interactionName}
            onChange={(e) => setInteractionName(e.target.value)}/>
            <br />
          <button onClick={submitHandler}>Save</button>
          </form> */}
          {/* {
            prevNode ? (
              <>
                <button onClick={closeModal}>Close</button>
                <SideBarOptions clickHandler={clickHandler}/>
                <br />
              </>
            ) : (clickedNode ? (
              <button onClick={closeModal}>Close</button>
            ) : <div style={{height:"100vh"}}></div>
            )
          } */}
          {
            prevNode ? (
              <>
                <button onClick={closeModal}>Close</button>
                <SideBarOptions clickHandler={clickHandler}/>
                <br />
              </>
            ) : (clickedNode ? (
              <SideBarNodeDetails closeModal={closeModal} submitHandler={submitHandler} clickedNode={clickedNode}/>
            ) : <div style={{height:"100vh"}}></div>
            )
          }
          
        </div>
      </div>
    </div>
  );
};

export default SideBar;
