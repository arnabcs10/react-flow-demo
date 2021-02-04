import React, {useState} from 'react';
// import ReactFlowApp from './react-flow-app/ReactFlowApp'; //UNCOMMENT THIS TO CHECKOUT THIS COMPONENT
// import ReactFlowApp2 from './react-flow-app2/ReactFlowApp'; //UNCOMMENT THIS TO CHECKOUT THIS COMPONENT
// import ReactFlowApp3 from './react-flow-app3/ReactFlowApp';
import BotBuilder from './bot-builder/BotBuilder';
import LeftSidebar from './left-sidebar/LeftSidebar';
import {Route, Switch} from 'react-router-dom';
import './App.css';



function App () {
  const [leftSidebar, setLeftSidebar] = useState(false);
  const [prevNode, setPrevNode] = useState();
  const initialStories = [
    {
      id:'start',
      elements:[
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
    ]
  }
    
  ];
  const initialRefElements = [
    {
      id: 'start',
      type:'refStartNode',
      data: {  storyNum:0 },
      position: { x: 20, y: 50 },
      style: { border: '1px solid #777', padding:"15px",
              borderRadius:"20px",
              background:"#445B75",
              color:"#ffffff",
              width:"250px" }
    },
  ];

  const [story, setStory] = useState(initialStories);
  const [refElements, setRefElements] = useState(initialRefElements);

  const getStory = (props) =>{
    const storyId = props.match.params.storyId;
    // console.log(story[storyNum]);
    const st = story.find(s => s.id === storyId);
    return <BotBuilder 
              story={st} 
              storyId={st.id} 
              setStory={setStory}
              prevNode={prevNode} 
              setPrevNode={setPrevNode}
              setRefElements={setRefElements}
              
          />
  }
   
    return (
      <div className='App'>      
        {/* <ReactFlowApp/> */}   {/*UNCOMMENT THIS TO CHECKOUT THIS COMPONENT*/}
        {/* <ReactFlowApp2/>    */}
        {/* <ReactFlowApp3/> */}
        <LeftSidebar refElements={refElements} leftSidebar={leftSidebar} setLeftSidebar={setLeftSidebar}/>
        <button className='leftsidebar-btn' onClick={()=> setLeftSidebar(true)}></button>  
        <Switch>
        
          <Route path='/:storyId' render={getStory} />
          <Route path='/' render={()=> <BotBuilder story={story[0]} storyId='start' setStory={setStory} prevNode={prevNode} setPrevNode={setPrevNode} setRefElements={setRefElements} />} />
        </Switch>
      </div>
    );
  
}

export default App;
