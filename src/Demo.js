import React, { useState } from 'react';
import ReactFlow, { removeElements, addEdge, ReactFlowProvider, Background } from 'react-flow-renderer';

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();


const DemoApp = ({elements,setElements,onSetSidebarOpen, setCurrentElement}) => {
//   const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const onElementClick = (event, element) => {
      console.log(event);
      console.log(element);
      setCurrentElement(element)
      onSetSidebarOpen(true);
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

export default DemoApp;

