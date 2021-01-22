import React ,{useEffect, useState} from 'react';
import  {  getIncomers } from 'react-flow-renderer';
import SideBar from './Sidebar';
import Demo from './Demo';
import "./Sidebar.css";

let i = 1;
function ReactFlowApp2 () {
    
    const [elements, setElements] = useState();
    
    const [clickedNode, setClickedNode] = useState();

    const updateNewNode = (nodeId,name) => {
      setElements(eles => eles.map(els => {
        if(els.id === nodeId){
            return {...els, type:"node",data: { label: name, elements:elements,setElements:setElements }}
            
        }
          return els;
  
      }) )

    }

    const addNewNode = (parentNodeId) =>{
        i=i+1;
        const newNode = {
            id:`horizontal-${i}`,
            type:"newNode",
            data: { updateNewNode:updateNewNode, nodeId:`horizontal-${i}`,setElements:setElements   },
            position: { x: 350, y: 150 },
            style: { border: '1px solid #777', padding:"5px",
            borderRadius:"15px",
            
            width:"auto" }
           
        }
        const newEdge = {id:`${parentNodeId}-horizontal-${i}`, source:parentNodeId, target:`horizontal-${i}`};
        const newAddIcon = {
          id: `add-${i}`,
          type:"addIconNode",
          data: { label: <i className="fas fa-plus-circle"></i> },
          position: { x:newNode.position.x+100 , y: newNode.position.y+200 },
          
          style: {
              padding: 0,
              width: "1rem",
              border:"none",
            },
        };
        const newAddIconEdge = {id:`horizontal-${i}-${newAddIcon.id}`, source:`horizontal-${i}`, target:newAddIcon.id};
        setElements([...elements,newNode,newEdge,newAddIcon,newAddIconEdge]);
    }
    const initialElements = [
      // {
      //   id: '1',
      //   type: 'input',
      //   data: { label: 'Start' },
      //   position: { x: 100, y: 50 },
      //   style:{
      //       padding:"5px",
      //       borderRadius:"15px",
      //       width:"100px"
      //   }
        
      // },
      
      // {
      //   id: '2',
      //   type: 'output', // output node
        
      //   data: { label: 'Fallback' },
      //   position: { x: 100, y: 250 },
      //   style:{
      //       padding:"5px",
      //       borderRadius:"15px",
      //       width:"100px"
      //   }
      // },
      {
        id: '1',
        type:'newNode',
        
        data: { updateNewNode:updateNewNode },
        position: { x: 100, y: 10 },
        
        style: { border: '1px solid #777', padding:"5px",
                borderRadius:"15px",
                
                width:"auto" }
      },
      {
        id: 'add-1',
        type:"addIconNode",
        sourcePosition: 'right',
        targetPosition: 'left',
        // data: { label: <i className="fas fa-plus-circle"></i> },
        position: { x: 250, y: 200 },
        
        style: {
            padding: 0,
            width: "1rem",
            border:"none",
          },
      },
      // {id:"e1-2", source:"1", target:"2"},
      {id:"1-add-1", source:"1", target:"add-1"}
    ];
    useEffect(() => {
      setElements(initialElements);
    },[]);
    
    // useEffect(() => {
    //   setElements(elements => elements.map(els => {
    //     if(getIncomers(els,elements).length < 1 && els.id != '1'){
    //       console.log(els);
    //         return {...els, style:{...els.style,border:"red"}}
            
    //     }
    //       return els;
  
    //   }) )
    // },[elements]);

    return (
      <div className='ReactFlowApp'>
          <button onClick={addNewNode}>
              Add New Node
          </button>      
        <Demo elements={elements} setElements={setElements} addNewNode={addNewNode} setClickedNode={setClickedNode}/>
        <SideBar updateNewNode={updateNewNode} clickedNode={clickedNode}/>
      </div>
    );
  
}

export default ReactFlowApp2;
