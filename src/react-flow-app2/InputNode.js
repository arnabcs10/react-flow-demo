import React, { memo , useState} from 'react';
import { Handle } from 'react-flow-renderer';
// import '../style.css'

export default memo(({data,id}) => {
  const [interactionName, setInteractionName ] = useState("");
  const submitHandler = (e) =>{
      e.preventDefault();
      //
      data.updateNewNode(id,interactionName)
      // console.log(data.nodeId);
      // console.log(interactionName);
  }
  return (
    <>
      <Handle
        type="target"
        position="top"
        // style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
      {/* <form onSubmit={submitHandler}>
        <input
          className="nodrag"
          type="text"
          placeholder="New node"
          value={interactionName}
          onChange={(e) => setInteractionName(e.target.value)}
        />
      </form> */}
      <div className="node" >
      <form onSubmit={submitHandler}>
        <input type="text"  placeholder="Node Name" id="" 
         value={interactionName}
         onChange={(e) => setInteractionName(e.target.value)}
        />
        <br /><br />
        <input type="button" value="Response 1" />
        <input type="button" value="Response 2" />
        <input type="button" value="Response 3" />
        <br /><br />
        {/* <img
          src="https://image.flaticon.com/icons/png/512/61/61183.png"
          alt=""
          width="30px"
          height="auto"
        /> */}
      </form>
    </div>
      <Handle
    
        type="source"
        position="bottom"
        
        // style={{ top: 10, background: '#555' }}
      />
     
    </>
  );
});