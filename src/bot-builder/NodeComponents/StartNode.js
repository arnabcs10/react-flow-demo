import React, { memo} from 'react';
import { Handle } from 'react-flow-renderer';
// import './nodeStyles.css';

const StartNodeStyles = {
    border: "1px solid #777",
    padding: "15px",
    borderRadius: "20px",
    background: "#445B75",
    color: "#ffffff",
    width: "auto",
  }
export default memo(({id,data}) => {
  
  return (
    <div style={StartNodeStyles}>
      
      <div>
          {data.flowName ? `  ${data.flowName}  `: "START BOT FLOW"}
      </div>
    
      <Handle
        type="source"
        position="bottom"
        onClick={() => {
            console.log("clicked");
            document.getElementById("grey-screen").style = "width:100%";
            document.getElementById("sidebar").classList.add("side-bar-open");
            data.setPrevNode(id);
          }}
        style={{ cursor:"pointer",height:"1rem", width:"1rem" }}
      />
     
    </div>
  );
});