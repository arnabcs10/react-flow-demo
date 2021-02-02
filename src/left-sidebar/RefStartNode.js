import React, { memo} from 'react';
import { Handle } from 'react-flow-renderer';

export default memo(({id,data}) => {
  
  return (
    <>
      
      <div>
          START BOT FLOW
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
        style={{ left:30 }}
      />
     
    </>
  );
});