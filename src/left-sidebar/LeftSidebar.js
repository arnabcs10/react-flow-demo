import React, {useState, useEffect} from "react";
import StoryFlow from './StoryFlow';

let i=1;
const LeftSidebar = ({refElements}) => {
  // const greyBg = document.getElementById("grey-screen");
  const sideStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "auto",
    width: "350px",
    height:"100vh",
    backgroundColor: "#f2f4f7",
    transition: "0.5s",
    zIndex: "1000000",
    padding: "20px",
  };

  // const openModal = () => {
  //   console.log("clicked");
  //   document.getElementById("grey-screen").style = "width:100%";
  //   document.getElementById("sidebar").classList.add("side-bar-open");
  // };

//   const closeModal = () => {
//     document.getElementById("sidebar").classList.remove("side-bar-open");
//     setTimeout(() => {
//       document.getElementById("grey-screen").style = "width:0";
//     }, 400);
//     setPrevNode(null);
//     setClickedNode(null);
//   };
// const [elements, setElements] = useState();
    
// const [clickedNode, setClickedNode] = useState();
// const [prevNode, setPrevNode] = useState();

// const updateNewNode = (node,payload) => {
//   setElements(eles => eles.map(els => {
//     if(els.id === node.id){
//         return {...els, data:{...els.data, payload:payload}}
        
//     }
//       return els;

//   }) )

// }

// const addNewNode = (parentNodeId,nodeType) =>{
//     i=i+1;
//     const newNode = {
//         id:`${i}`,
//         type:`${nodeType}`,
//         data: {   payload:{}, setPrevNode: setPrevNode, setElements:setElements },
//         // payload:{},
//         position: { x: 350, y: 150 },
//         style: {  padding:"5px",
//         width:"auto" }
       
//     }
//     const newEdge = {id:`e${parentNodeId}-${i}`, source:parentNodeId, target:`${i}`,type: 'smoothstep'};
    
//     setElements([...elements,newNode,newEdge]);
// }
// const initialElements = [
  
//   {
//     id: '1',
//     type:'refStartNode',
//     data: {  setPrevNode: setPrevNode },
//     position: { x: 20, y: 50 },
//     style: { border: '1px solid #777', padding:"15px",
//             borderRadius:"20px",
//             background:"#445B75",
//             color:"#ffffff",
//             width:"250px" }
//   },
//   {
//     id: '2',
//     type:'refNode',
//     data: {  setPrevNode: setPrevNode, storyNum:0 },
//     position: { x: 85, y: 130 },
//     style: { border: '1px solid #777', padding:"15px",
//             borderRadius:"20px",
//             background:"#ffffff",
//             color:"black",
//             width:"150px" }
//   },
//   {
//     id: '3',
//     type:'refNode',
//     data: {  setPrevNode: setPrevNode, storyNum:1 },
//     position: { x: 85, y: 320 },
//     style: { border: '1px solid #777', padding:"15px",
//             borderRadius:"20px",
//             background:"#ffffff",
//             color:"black",
//             width:"150px" }
//   },
//   {
//     id: '4',
//     type:'refNode',
//     data: {  setPrevNode: setPrevNode },
//     position: { x: 40, y: 100 },
//     style: { border: '1px solid #777', padding:"15px",
//             borderRadius:"20px",
//             background:"#ffffff",
//             color:"black",
//             width:"150px" }
//   },
  
//   // {
//   //   id: 'add-1',
//   //   type:"addIconNode",
//   //   sourcePosition: 'right',
//   //   targetPosition: 'left',
//   //   // data: { label: <i className="fas fa-plus-circle"></i> },
//   //   position: { x: 250, y: 200 },
    
//   //   style: {
//   //       padding: 0,
//   //       width: "1rem",
//   //       border:"none",
//   //     },
//   // },
//   // // {id:"e1-2", source:"1", target:"2"},
//   // {id:"1-add-1", source:"1", target:"add-1"}
// ];
// useEffect(() => {
//   setElements(initialElements);
//   // eslint-disable-next-line
// },[]);


  return (
  
        <div className="left-side-bar"  style={sideStyle}>
           <StoryFlow elements={refElements}  />
        </div>
    
  );
};

export default LeftSidebar;