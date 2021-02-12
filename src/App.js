import React, { useState } from "react";
// import ReactFlowApp from './react-flow-app/ReactFlowApp'; //UNCOMMENT THIS TO CHECKOUT THIS COMPONENT
// import ReactFlowApp2 from './react-flow-app2/ReactFlowApp'; //UNCOMMENT THIS TO CHECKOUT THIS COMPONENT
// import ReactFlowApp3 from './react-flow-app3/ReactFlowApp';
import BotBuilder from "./bot-builder/BotBuilder";
import LeftSidebar from "./left-sidebar/LeftSidebar";
import { Route, Switch } from "react-router-dom";
import useLocalStorageState from './bot-builder/hooks/useLocalStorageState';
import useSetPrevNode from './bot-builder/hooks/useSetPrevNode';
import response from './bot-builder/utils/apiResponse';
import convertJsonToFlow from './bot-builder/utils/convertJsonToFlow';
import "./App.css";

function App() {
  const [leftSidebar, setLeftSidebar] = useState(false);
  const [prevNode, setPrevNode] = useState(null);
  const initialStories = [
    {
      id: "start",
      elements: [
        {
          id: "1",
          type: "startNode",
          data: { setPrevNode: setPrevNode },
          position: { x: 700, y: 50 },
          // style: {
          //   border: "1px solid #777",
          //   padding: "15px",
          //   borderRadius: "20px",
          //   background: "#445B75",
          //   color: "#ffffff",
          //   width: "auto",
          // },
        },
      ],
    },
  ];
  const initialRefElements = [
    {
      id: "start",
      type: "refStartNode",
      data: { storyNum: 0 },
      position: { x: 20, y: 50 },
      // style: {
      //   border: "1px solid #777",
      //   padding: "15px",
      //   borderRadius: "20px",
      //   background: "#445B75",
      //   color: "#ffffff",
      //   width: "250px",
      // },
    },
  ];

  const openLeftSidebar = () => {
    if (leftSidebar === false) {
      setLeftSidebar(true);
      document.getElementById("left-btn").style =
        "transform:translateX(300px) rotate(180deg)";
    } else {
      setLeftSidebar(false);
      document.getElementById("left-btn").style =
        "transform:translateX(0px) rotate(0deg)";
    }
  };

  // const [story, setStory] = useLocalStorageState('story',initialStories);
  // const [refElements, setRefElements] = useLocalStorageState('refElements',initialRefElements);
  const resStory = convertJsonToFlow(response);
  console.log(response);
  console.log(resStory);
  const [story, setStory] = useState([resStory]);
  const [refElements, setRefElements] = useState(initialRefElements);

  const getStory = (props) => {
    const storyId = props.match.params.storyId;
    // console.log(story[storyNum]);
    const st = story.find((s) => s.id === storyId);
    return (
      <BotBuilder
        story={st}
        storyId={st.id}
        setStory={setStory}
        prevNode={prevNode}
        setPrevNode={setPrevNode}
        setRefElements={setRefElements}
      />
    );
  };

  return (
    <div className="App">
      {/* <ReactFlowApp/> */} {/*UNCOMMENT THIS TO CHECKOUT THIS COMPONENT*/}
      {/* <ReactFlowApp2/>    */}
      {/* <ReactFlowApp3/> */}
      <LeftSidebar
        refElements={refElements}
        leftSidebar={leftSidebar}
        setLeftSidebar={setLeftSidebar}
      />
      <Switch>
        <Route path="/:storyId" render={getStory} />
        <Route
          path="/"
          render={() => (
            <BotBuilder
              story={story[0]}
              storyId="start"
              setStory={setStory}
              prevNode={prevNode}
              setPrevNode={setPrevNode}
              setRefElements={setRefElements}
            />
          )}
        />
      </Switch>
      <button
        className="leftsidebar-btn"
        id="left-btn"
        onClick={() => {
          openLeftSidebar();
        }}
      ></button>
    </div>
  );
}

export default App;

