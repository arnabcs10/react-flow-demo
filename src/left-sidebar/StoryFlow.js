import React from 'react';
import ReactFlow, { removeElements, addEdge, ReactFlowProvider } from 'react-flow-renderer';
import RefStartNode from './RefStartNode';
import RefNode from './RefNode';

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const nodeTypes = {
    refStartNode: RefStartNode,
    refNode: RefNode
}

const StoryFlow = ({elements}) => {
//   const [elements, setElements] = useState(initialElements);
  // const onElementsRemove = (elementsToRemove) =>
  //   setElements((els) => removeElements(elementsToRemove, els));
  // const onConnect = (params) => setElements((els) => addEdge(params, els));

  // const onElementClick = (event, element) => {
  //   // if(element.type === 'addIconNode'){
  //   //   console.log(element);
  //   //   addNewNode(getIncomers(element,elements)[0].id);
  //   // }
  //   if(element.type !== 'startNode' && event.target.className !==  "fas fa-times-circle"){
     
  //     setClickedNode(element);
  //   //   openModal();
      
  //   }

  //     // console.log(event);
  //     // console.log(element);
      
  // }

  return (
    <div style={{ height: "100vh" }}>
        <ReactFlowProvider>
        <ReactFlow
            elements={elements}
            // onElementsRemove={onElementsRemove}
            // onConnect={onConnect}
            // deleteKeyCode={46} /* 'delete'-key */
            onLoad={onLoad}
            // onElementClick={onElementClick}
            paneMoveable={false}
            zoomOnScroll={false}
            nodeTypes={nodeTypes}
        >
      </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default StoryFlow;

