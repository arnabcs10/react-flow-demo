import React ,{useState} from 'react';
import  {  getConnectedEdges } from 'react-flow-renderer';
import Demo from './Demo';

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start' },
    position: { x: 100, y: 50 },
    style:{
        padding:"5px",
        borderRadius:"15px",
        width:"100px"
    },
    
  },
  
  {
    id: '2',
    type: 'output', // output node
    
    data: { label: 'Fallback' },
    position: { x: 100, y: 250 },
    style:{
        padding:"5px",
        borderRadius:"15px",
        width:"100px"
    }
  },
  {
    id: 'horizontal-1',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: <i className="fas fa-plus-circle"></i> },
    position: { x: 250, y: 100 },
    
    style: {
        padding: 0,
        width: "1rem",
        border:"none",
      },
  },
  {id:"e1-2", source:"1", target:"2"},
  {id:"e1-horizontal-1", source:"1", target:"horizontal-1"}
];
let i = 1;
function ReactFlowApp () {
    
    const [elements, setElements] = useState(initialElements);
     
    const updateNewNode = (nodeId,name) => {
      setElements(eles => eles.map(els => {
        if(els.id === nodeId){
            return {...els, type:"default",data: { label: name },sourcePosition:"bottom"}
            
        }
          return els;
  
      }) )

    }

    const addNewNode = () =>{
        i=i+1;
        const newNode = {
            id:`horizontal-${i}`,
            type:"newNode",
            sourcePosition: 'right',
            targetPosition: 'left',
            data: { updateNewNode:updateNewNode, nodeId:`horizontal-${i}` },
            position: { x: 350, y: 100 },
            style: { border: '1px solid #777', padding:"5px",
            borderRadius:"15px",
            width:"auto" }
           
        }
        setElements([...elements,newNode]);
    }
    return (
      <div className='ReactFlowApp'>
          <button onClick={addNewNode}>
              Add New Node
          </button>      
        <Demo elements={elements} setElements={setElements}/>
      </div>
    );
  
}

export default ReactFlowApp;
