import React, { memo } from 'react';
import {Link} from 'react-router-dom';
import { Handle } from 'react-flow-renderer';

const customRefNodeStyle = { 
  border: '1px solid #777', 
  padding:"15px",
  borderRadius:"20px",
  background:"#ffffff",
  color:"black",
  width:"150px" 
}

export default memo(({id,data}) => {
  
  // const deleteNode = () =>{
  //   data.setElements((els) => removeElements([els.find( e => e.id === id)], els));
  // }
  return (
    <div style={customRefNodeStyle}>
      <Handle
        type="target"
        position="left"
        // style={{  }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
     
    
    <div>
      <Link to={`/${id}`}>{data.refNodeName}</Link>
      
    </div>

      <Handle
      onClick={() => {
        console.log("clicked");
        document.getElementById("grey-screen").style = "width:100%";
        document.getElementById("sidebar").classList.add("side-bar-open");
        data.setPrevNode(id);
      }}
        type="source"
        position="bottom"
        style={{ left: 30}}
        // style={{ top: 10, background: '#555' }}
      />
     
    </div>
  );
});