import React, { memo} from 'react';
import { Handle } from 'react-flow-renderer';
import {Link} from 'react-router-dom';

export default memo(({id,data}) => {
  
  return (
    <>
      
      <div>
      <Link to='/start'>START</Link>
          
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