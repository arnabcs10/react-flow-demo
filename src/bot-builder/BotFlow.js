import React, { useState } from 'react';
import ReactFlow, { removeElements, addEdge, ReactFlowProvider, Background, getIncomers } from 'react-flow-renderer';
import InputNode from './InputNode';
import Node from './Node';
import AddIconNode from './AddIconNode';

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const nodeTypes = {
  newNode: InputNode,
  node: Node,
  addIconNode:AddIconNode
};

const openModal = () => {
  console.log("clicked");
  document.getElementById("grey-screen").style = "width:100%";
  document.getElementById("sidebar").classList.add("side-bar-open");
};

const BotFlow = ({elements,setElements,addNewNode,setClickedNode}) => {
//   const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const onElementClick = (event, element) => {
    if(element.type === 'addIconNode'){
      console.log(element);
      addNewNode(getIncomers(element,elements)[0].id);
    }
    if(element.type === 'node' && event.target.className !==  "fas fa-times-circle"){
     
      setClickedNode(element);
      openModal();
      
    }

      // console.log(event);
      // console.log(element);
      
  }

  return (
    <div style={{ height: "100vh" }}>
        <ReactFlowProvider>
        <ReactFlow
            elements={elements}
            onElementsRemove={onElementsRemove}
            onConnect={onConnect}
            deleteKeyCode={46} /* 'delete'-key */
            onLoad={onLoad}
            onElementClick={onElementClick}
            paneMoveable={false}
            zoomOnScroll={false}
            nodeTypes={nodeTypes}
        >
          <Background
      variant="dots"
      gap={12}
      size={1}
    />
    
      </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default BotFlow;

