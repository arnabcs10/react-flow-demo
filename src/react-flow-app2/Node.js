import React, { memo , useState} from 'react';
import { Handle } from 'react-flow-renderer';
// import '../style.css'
export default memo(({id,data}) => {
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
        position="top"
        // style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
     
      <div className="node" >
      
        <strong>{data.label}</strong>
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