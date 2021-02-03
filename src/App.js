import React, {useState} from 'react';
// import ReactFlowApp from './react-flow-app/ReactFlowApp'; //UNCOMMENT THIS TO CHECKOUT THIS COMPONENT
// import ReactFlowApp2 from './react-flow-app2/ReactFlowApp'; //UNCOMMENT THIS TO CHECKOUT THIS COMPONENT
// import ReactFlowApp3 from './react-flow-app3/ReactFlowApp';
import BotBuilder from './bot-builder/BotBuilder';
import LeftSidebar from './left-sidebar/LeftSidebar';
import {Route, Switch} from 'react-router-dom';
import './App.css';



function App () {
  const [prevNode, setPrevNode] = useState();
  const initialStories = [
    [
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
          }
    ],
    [
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
          }
    ],
  
  ];
  const [story, setStory] = useState(initialStories);

  const getStory = (props) =>{
    const storyNum = props.match.params.storyNum;
    // console.log(story[storyNum]);
    return <BotBuilder 
              story={story[storyNum]} 
              storyNum={storyNum} 
              setStory={setStory}
              prevNode={prevNode} 
              setPrevNode={setPrevNode}
          />
  }
   
    return (
      <div className='App'>      
        {/* <ReactFlowApp/> */}   {/*UNCOMMENT THIS TO CHECKOUT THIS COMPONENT*/}
        {/* <ReactFlowApp2/>    */}
        {/* <ReactFlowApp3/> */}
        <LeftSidebar />
        <Switch>
        
          <Route path='/:storyNum' render={getStory} />
          <Route path='/' render={()=> <BotBuilder story={story[0]} storyNum={0} setStory={setStory} prevNode={prevNode} setPrevNode={setPrevNode}/>} />
        </Switch>
      </div>
    );
  
}

export default App;
