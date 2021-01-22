import React, { memo , useState} from 'react';
import { Handle, removeElements } from 'react-flow-renderer';
import './style1.css'

export default memo(({data,id}) => {
  const [interactionName, setInteractionName ] = useState("");
  const submitHandler = (e) =>{
      e.preventDefault();
      //
      data.updateNewNode(id,interactionName)
      // console.log(data.nodeId);
      // console.log(interactionName);
  }
  const deleteNode = () =>{
    if(id != '1')
    data.setElements((els) => removeElements([els.find( e => e.id === id)], els));
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
      {/* <div className="node" >
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
      </form>
    </div> */}
    <div class="node">
      <div class="node-header">
        <div class="dot"></div>
        <form class="node-name" onSubmit={submitHandler}>
          <i class="far fa-envelope-open"></i>
          &ensp;<input
            type="text"
            value={interactionName}
            onChange={(e) => setInteractionName(e.target.value)}
            placeholder="Node Name"
            id=""
          />&ensp;&ensp;
          <p>(send message)</p>
        </form>
        <div class="cross">
          <button onClick={deleteNode}><i class="fas fa-times-circle"></i></button>
        </div>
      </div>
      <div class="message">Hi name, Welcome to brand_name.</div>
    </div>
      <Handle
    
        type="source"
        position="bottom"
        
        // style={{ top: 10, background: '#555' }}
      />
     
    </>
  );
});