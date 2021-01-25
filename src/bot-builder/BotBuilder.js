import React ,{useEffect, useState} from 'react';
import SideBar from './Sidebar';
import BotFlow from './BotFlow';
import "./Sidebar.css";

let i = 1;
function BotBuilder () {
    
    const [elements, setElements] = useState();
    
    const [clickedNode, setClickedNode] = useState();
    const [prevNode, setPrevNode] = useState();

    const updateNewNode = (nodeId,name) => {
      setElements(eles => eles.map(els => {
        if(els.id === nodeId){
            return {...els, type:"node",data: { label: name, elements:elements,setElements:setElements }}
            
        }
          return els;
  
      }) )

    }

    const addNewNode = (parentNodeId,payload) =>{
        i=i+1;
        const newNode = {
            id:`${i}`,
            type:"node",
            data: {  label: payload  },
            payload:payload,
            position: { x: 350, y: 150 },
            style: { border: '1px solid #777', padding:"5px",
            borderRadius:"15px",
            width:"auto" }
           
        }
        const newEdge = {id:`e${parentNodeId}-${i}`, source:parentNodeId, target:`${i}`};
        
        setElements([...elements,newNode,newEdge]);
    }
    const initialElements = [
      
      {
        id: '1',
        type:'startNode',
        data: { setPrevNode: setPrevNode },
        position: { x: 700, y: 50 },
        style: { border: '1px solid #777', padding:"15px",
                borderRadius:"20px",
                background:"#445B75",
                color:"#ffffff",
                width:"auto" }
      },
      // {
      //   id: 'add-1',
      //   type:"addIconNode",
      //   sourcePosition: 'right',
      //   targetPosition: 'left',
      //   // data: { label: <i className="fas fa-plus-circle"></i> },
      //   position: { x: 250, y: 200 },
        
      //   style: {
      //       padding: 0,
      //       width: "1rem",
      //       border:"none",
      //     },
      // },
      // // {id:"e1-2", source:"1", target:"2"},
      // {id:"1-add-1", source:"1", target:"add-1"}
    ];
    useEffect(() => {
      setElements(initialElements);
    },[]);

    return (
      <div className='ReactFlowApp'>      
        <BotFlow elements={elements} setElements={setElements} addNewNode={addNewNode} setClickedNode={setClickedNode}/>
        <SideBar addNewNode={addNewNode} updateNewNode={updateNewNode} clickedNode={clickedNode} prevNode={prevNode} setPrevNode={setPrevNode}/>
      </div>
    );
  
}

export default BotBuilder;
