import React ,{useEffect, useState} from 'react';
import SideBar from './Sidebar';
import BotFlow from './BotFlow';
import "./Sidebar.css";

let i = 1;
function BotBuilder (props) {
   const { story,setStory,storyNum,prevNode, setPrevNode } = props;
    const [elements, setElements] = useState();
    
    const [clickedNode, setClickedNode] = useState();
    

    const updateNewNode = (node,payload) => {
      setElements(eles => eles.map(els => {
        if(els.id === node.id){
            return {...els, data:{...els.data, payload:payload}}
            
        }
          return els;
  
      }) )

    }

    const addNewNode = (parentNodeId,nodeType) =>{
        i=i+1;
        console.log(parentNodeId);
        const newNode = {
            id:`${i}`,
            type:`${nodeType}`,
            data: {   payload:{}, setPrevNode: setPrevNode, setElements:setElements },
            // payload:{},
            position: { x: 350, y: 150 },
            style: {  padding:"5px",
            width:"auto" }
           
        }
        const newEdge = {id:`e${parentNodeId}-${i}`, source:parentNodeId, target:`${i}`,type: 'smoothstep'};
        
        setElements([...elements,newNode,newEdge]);
    }
 
    useEffect(() => {
      console.log("hr");
      setElements(story);
      // eslint-disable-next-line
    },[storyNum]);

    useEffect(() => {
      setStory( story => {
        story[storyNum]=elements;
        return story;
      });
     
    }, [elements]);

    return (
      <div className='ReactFlowApp'>      
        <BotFlow elements={elements} setElements={setElements} addNewNode={addNewNode} setClickedNode={setClickedNode}/>
        <SideBar addNewNode={addNewNode} updateNewNode={updateNewNode} clickedNode={clickedNode} setClickedNode={setClickedNode} prevNode={prevNode} setPrevNode={setPrevNode}/>
      </div>
    );
  
}

export default BotBuilder;
