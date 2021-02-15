import React, { memo} from 'react';
import { Handle } from 'react-flow-renderer';
import AddIcon from '../AddIconNode';

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
    <div style={{height:"67px"}}>
      
      <div style={StartNodeStyles}>
          {/* {data.flowName ? `  ${data.flowName}  `: "START BOT FLOW"} */}
          START BOT FLOW
      </div>
      <AddIcon>
      <Handle
        type="source"
        position="bottom"
        style={{ cursor:"pointer",height: "0.1rem", width: "0.1rem" }}
      />
     </AddIcon>
    </div>
  );
});