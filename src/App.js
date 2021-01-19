import React, {useState} from 'react'
// import DemoApp from './DemoApp';
import Demo from './Demo';
// import HorizontalFlow from './HorizontalFlow';
import Form from './Form';
import './App.css';
import Sidebar from "react-sidebar";

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start' },
    position: { x: 50, y: 25 },
  },
  
  {
    id: '2',
    type: 'output', // output node
    data: { label: 'Fallback' },
    position: { x: 50, y: 250 },
  },
  {
    id: 'horizontal-1',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: { label: 'Add' },
    position: { x: 250, y: 100 },
  },
  {id:"e1-2", source:"1", target:"2"},
  {id:"e1-horizontal-1", source:"1", target:"horizontal-1"}
];

function App () {

    const [sidebarOpen,SetsidebarOpen] = useState(false);
    const [elements, setElements] = useState(initialElements);
    const [currentElement, setCurrentElement] = useState();

    const onSetSidebarOpen = (open) => {
      SetsidebarOpen( open );
  }

 
    return (
      <div className='App'>
        
      <Sidebar
        sidebar={<Form onSetSidebarOpen={onSetSidebarOpen}/>}
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
        pullRight
      >
        <button onClick={() => onSetSidebarOpen(true)}>
          Open sidebar
        </button>
        <Demo elements={elements} setElements={setElements} onSetSidebarOpen={onSetSidebarOpen} setCurrentElement={setCurrentElement}/>
      </Sidebar>
      
      </div>
    );
  
}

export default App;
