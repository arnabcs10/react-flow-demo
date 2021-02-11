import React, { useEffect, useState } from "react";
import SideBar from "./Sidebar";
import BotFlow from "./BotFlow";
import "./Sidebar.css";

let i = 1;
function BotBuilder (props) {
   const { story,setStory,storyId,prevNode, setPrevNode, setRefElements } = props;
    const [elements, setElements] = useState();
    
    const [clickedNode, setClickedNode] = useState();
    

    const updateNewNode = (node,payload) => {

      setElements(eles => eles.map(els => {
        if(els.id === node.id){
            return {...els, data:{...els.data, payload:payload}}
            
        }
          return els;
  
      }) );
      if(node.type === 'jumpToStoryNode'){
        
        const newRefNode = {
            id: `${payload.nodeName}`,
            type:'refNode',
            data: { refNodeName:payload.nodeName },
            position: { x: 85, y: 130 },
            // style: { border: '1px solid #777', padding:"15px",
            //         borderRadius:"20px",
            //         background:"#ffffff",
            //         color:"black",
            //         width:"150px" }
        }
        const newRefEdge = {id:`e${storyId}-${payload.nodeName}`, source:storyId, target:`${payload.nodeName}`,type: 'smoothstep'}
        setRefElements(els => [...els,newRefNode,newRefEdge]);

        const newStory = {
          id:payload.nodeName,
          elements: [
            {
              id: '1',
              type:'startNode',
              data: { setPrevNode: setPrevNode, flowName:`${payload.nodeName}` },
              position: { x: 700, y: 50 },
              // style: { border: '1px solid #777', padding:"15px 40px",
              //         borderRadius:"20px",
              //         background:"#445B75",
              //         color:"#ffffff",
              //         width:"auto" }
            }
          ]
        }
        setStory(story => [...story,newStory]);
      }
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
            // style: {  padding:"5px",
            // width:"auto" }
           
        }
        const newEdge = {id:`e${parentNodeId}-${i}`, source:parentNodeId, target:`${i}`,type: 'smoothstep'};
        
        setElements([...elements,newNode,newEdge]);
    }
 
    useEffect(() => {
      console.log("hr");
      setElements(story.elements);
      // eslint-disable-next-line
    },[storyId]);

    useEffect(() => {
      setStory( story => 
        // story[storyNum]=elements;
        // return story;
        story.map(st =>{
          if(st.id === storyId ){
            st.elements = elements;
            return st;
          }else{
            return st;
          }
        })
      );
     // eslint-disable-next-line
    }, [elements]);

    return (
      <div className='ReactFlowApp'>    
      
        <BotFlow elements={elements} setElements={setElements} addNewNode={addNewNode} setClickedNode={setClickedNode}/>
        <SideBar addNewNode={addNewNode} updateNewNode={updateNewNode} clickedNode={clickedNode} setClickedNode={setClickedNode} prevNode={prevNode} setPrevNode={setPrevNode}/>
      </div>
    );
  
}

export default BotBuilder;
