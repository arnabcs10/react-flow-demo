import React, { useState } from 'react';
import ReactFlow, { removeElements, addEdge, ReactFlowProvider, Background } from 'react-flow-renderer';
import InputNode from './InputNode';
import Node from './Node';

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const nodeTypes = {
  newNode: InputNode,
  node: Node,
};

const Demo = ({elements,setElements}) => {
//   const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const onElementClick = (event, element) => {
      console.log(event);
      console.log(element);
      
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

export default Demo;

