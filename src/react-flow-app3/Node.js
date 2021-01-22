import React, { memo , useState} from 'react';
import { Handle, removeElements } from 'react-flow-renderer';
import './style1.css'
export default memo(({id,data}) => {
  const [interactionName, setInteractionName ] = useState("");
  // const submitHandler = (e) =>{
  //     e.preventDefault();
  //     //
  //     data.updateNewNode(data.nodeId,interactionName)
  //     // console.log(data.nodeId);
  //     // console.log(interactionName);
  // }
  const deleteNode = () =>{
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
     
      {/* <div className="node" >
      
        <strong>{data.label}</strong>
        <br /><br />
        <input type="button" value="Response 1" />
        <input type="button" value="Response 2" />
        <input type="button" value="Response 3" />
        <br /><br />
    </div> */}
    <div class="node">
      <div class="node-header">
        <div class="dot"></div>
        <div class="node-name" >
          <i class="far fa-envelope-open"></i>
          &ensp;<input
            type="text"
            value={interactionName}
            onChange={(e) => setInteractionName(e.target.value)}
            placeholder="Node Name"
            id=""
          />&ensp;&ensp;
          <p>(send message)</p>
        </div>
        <div class="cross">
          <button onClick={deleteNode}>
            <i class="fas fa-times-circle"></i>
          </button>
        </div>
      </div>
      <div class="message"><strong>{data.label}</strong>.</div>
      <div class="message">Hi name, Welcome to brand_name.</div>
    </div>
      <Handle
       onClick={() => console.log(id)}
        type="source"
        position="bottom"
        
        // style={{ top: 10, background: '#555' }}
      />
     
    </>
  );
});