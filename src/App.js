import React, { useState } from "react";
// import DemoApp from './DemoApp';
import Demo from "./Demo";
// import HorizontalFlow from './HorizontalFlow';
import "./App.css";
import Sidebar from "./sidebar";
import "./sidebar.css";

const initialElements = [
  {
    id: "1",
    type: "input",
    data: { label: "Start" },
    position: { x: 50, y: 25 },
  },

  {
    id: "2",
    type: "output", // output node
    data: { label: "Fallback" },
    position: { x: 50, y: 250 },
  },
  {
    id: "horizontal-1",
    sourcePosition: "right",
    targetPosition: "left",
    data: { label: "Add" },
    position: { x: 250, y: 100 },
  },
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-horizontal-1", source: "1", target: "horizontal-1" },
];

function App() {
  // const [sidebarOpen, SetsidebarOpen] = useState(false);
  const [elements, setElements] = useState(initialElements);
  const [currentElement, setCurrentElement] = useState();

  return (
    <div className="App">
      <Demo
        elements={elements}
        setElements={setElements}
        setCurrentElement={setCurrentElement}
      />
      <Sidebar />
    </div>
  );
}

export default App;
