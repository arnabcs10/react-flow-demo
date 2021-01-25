import React, { memo} from 'react';
import { Handle } from 'react-flow-renderer';
const openModal = () => {
    console.log("clicked");
    document.getElementById("grey-screen").style = "width:100%";
    document.getElementById("sidebar").classList.add("side-bar-open");
  };

export default memo(() => {
  
  return (
    <>
      <Handle
        type="target"
        position="top"
        // style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      
      <div>
          START BOT FLOW
      </div>
    
      <Handle
        type="source"
        position="bottom"
        onClick={openModal}
        style={{ cursor:"pointer" }}
      />
     
    </>
  );
});