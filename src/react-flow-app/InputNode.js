import React, { memo , useState} from 'react';
import { Handle } from 'react-flow-renderer';
export default memo(({data}) => {
  const [interactionName, setInteractionName ] = useState("");
  const submitHandler = (e) =>{
      e.preventDefault();
      //
      data.updateNewNode(data.nodeId,interactionName)
      // console.log(data.nodeId);
      // console.log(interactionName);
  }
  return (
    <>
      <Handle
        type="target"
        position="left"
        // style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      <form onSubmit={submitHandler}>
        <input
          className="nodrag"
          type="text"
          placeholder="New node"
          value={interactionName}
          onChange={(e) => setInteractionName(e.target.value)}
        />
      </form>
      
      <Handle
        type="source"
        position="right"
        
        // style={{ top: 10, background: '#555' }}
      />
     
    </>
  );
});