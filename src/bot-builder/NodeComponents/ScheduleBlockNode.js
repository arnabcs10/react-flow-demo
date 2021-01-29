import React, { memo } from 'react';
import { Handle, removeElements } from 'react-flow-renderer';
// import './style1.css'
import './nodeStyles.css'
export default memo(({id,data}) => {
  
  const deleteNode = () =>{
    data.setElements((els) => removeElements([els.find( e => e.id === id)], els));
  }
  return (
    <>
      <Handle
        type="target"
        position="top"
        style={{ height:"1rem", width:"1rem" }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
     
    {/* <div className="node">
      <div className="node-header">
      <i className="far fa-envelope-open"></i>
        <div className="node-name" >
          
         
        </div>
        <div className="cross">
          <button onClick={deleteNode}>
            <i className="fas fa-times-circle"></i>
          </button>
        </div>
      </div>
      <div className="message"><strong>text</strong>.</div>
    </div> */}
    {/* style={{margin:0,background:"#f2f5f7"}} */}
    <div className="Node">
    <div
        className="td-cta-box td-cta-docs communication"
        target="_blank"
        rel="noopener"
        style={{margin:0,background:"#f2f5f7"}}
      >
        <div className="td-cta-icon">
          <svg
            height="20"
            viewBox="0 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
          >
            <path d="m457.003906 0h-402.007812c-30.324219 0-54.996094 24.671875-54.996094 54.996094v402.007812c0 30.324219 24.671875 54.996094 54.996094 54.996094h402.007812c30.324219 0 54.996094-24.671875 54.996094-54.996094v-402.007812c0-30.324219-24.671875-54.996094-54.996094-54.996094zm-402.007812 30h402.007812c13.78125 0 24.996094 11.214844 24.996094 24.996094v66.003906h-452v-66.003906c0-13.78125 11.214844-24.996094 24.996094-24.996094zm402.007812 452h-402.007812c-13.78125 0-24.996094-11.214844-24.996094-24.996094v-306.003906h452v306.003906c0 13.78125-11.214844 24.996094-24.996094 24.996094zm0 0" />
            <path d="m451 76c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15 6.714844-15 15-15 15 6.714844 15 15zm0 0" />
            <path d="m391 76c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15 6.714844-15 15-15 15 6.714844 15 15zm0 0" />
            <path d="m331 76c0 8.285156-6.714844 15-15 15s-15-6.714844-15-15 6.714844-15 15-15 15 6.714844 15 15zm0 0" />
            <path d="m256 211c-107.523438 0-195 87.476562-195 195 0 8.285156 6.714844 15 15 15h360c8.285156 0 15-6.714844 15-15 0-107.523438-87.476562-195-195-195zm25.980469 180 47.011719-81.421875c4.140624-7.175781 1.683593-16.347656-5.492188-20.492187-7.175781-4.144532-16.347656-1.683594-20.488281 5.492187l-55.671875 96.421875h-155.664063c7.601563-83.980469 78.394531-150 164.324219-150s156.726562 66.019531 164.324219 150zm0 0" />
          </svg>
        </div>
        <div className="td-cta-content-wrapper">
          <div className="td-cta-content">
            <h3 className="fw6 f6">Automation/Schedule Block</h3>
          </div>
        </div>
      </div>
      <div className="cross">
          <button onClick={deleteNode}>
            <i className="fas fa-times-circle"></i>
          </button>
      </div>
      </div>
      <Handle
      onClick={() => {
        console.log("clicked");
        document.getElementById("grey-screen").style = "width:100%";
        document.getElementById("sidebar").classList.add("side-bar-open");
        data.setPrevNode(id);
      }}
        type="source"
        position="bottom"
        style={{ cursor:"pointer", height:"1rem", width:"1rem"}}
        // style={{ top: 10, background: '#555' }}
      />
     
    </>
  );
});