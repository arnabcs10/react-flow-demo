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
        className="td-cta-box td-cta-docs bot-properties"
        target="_blank"
        rel="noopener"
        style={{margin:0,background:"#f2f5f7"}}
      >
        <div className="td-cta-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512 512"
          >
            <g>
              <path
                d="M496,112H392V56a8,8,0,0,0-8-8H16a8,8,0,0,0-8,8V344a8,8,0,0,0,8,8H48v40a8,8,0,0,0,13.66,5.66L107.31,352H120v56a8,8,0,0,0,8,8H404.69l45.65,45.66A8,8,0,0,0,464,456V416h32a8,8,0,0,0,8-8V120A8,8,0,0,0,496,112ZM104,336a8.008,8.008,0,0,0-5.66,2.34L64,372.69V344a8,8,0,0,0-8-8H24V64H376V336Zm384,64H456a8,8,0,0,0-8,8v28.69l-34.34-34.35A8.008,8.008,0,0,0,408,400H136V352H384a8,8,0,0,0,8-8V128h96Z"
                fill="#ffffff"
              />
              <path
                d="M265.54,92.43C247.9,84.42,224.62,80,200,80s-47.9,4.42-65.54,12.43C114.82,101.36,104,113.99,104,128V272c0,14.01,10.82,26.64,30.46,35.57C152.1,315.58,175.38,320,200,320s47.9-4.42,65.54-12.43C285.18,298.64,296,286.01,296,272V128C296,113.99,285.18,101.36,265.54,92.43ZM280,272c0,7.15-7.88,15-21.09,21-15.6,7.09-36.52,11-58.91,11s-43.31-3.91-58.91-11C127.88,287,120,279.15,120,272V251.19a78.933,78.933,0,0,0,14.46,8.38C152.1,267.58,175.38,272,200,272s47.9-4.42,65.54-12.43A78.933,78.933,0,0,0,280,251.19Zm0-48c0,7.15-7.88,15-21.08,21-15.61,7.09-36.53,11-58.92,11s-43.31-3.91-58.92-11c-13.2-6-21.08-13.85-21.08-21V203.19a78.933,78.933,0,0,0,14.46,8.38C152.1,219.58,175.38,224,200,224s47.9-4.42,65.54-12.43A78.933,78.933,0,0,0,280,203.19Zm0-48c0,7.15-7.88,15-21.08,21-15.61,7.09-36.53,11-58.92,11s-43.31-3.91-58.92-11c-13.2-6-21.08-13.85-21.08-21V155.19a78.933,78.933,0,0,0,14.46,8.38C152.1,171.58,175.38,176,200,176s47.9-4.42,65.54-12.43A78.933,78.933,0,0,0,280,155.19Zm-21.08-27c-15.61,7.09-36.53,11-58.92,11s-43.31-3.91-58.92-11c-13.2-6-21.08-13.85-21.08-21s7.88-15,21.08-21c15.61-7.09,36.53-11,58.92-11s43.31,3.91,58.92,11c13.2,6,21.08,13.85,21.08,21S272.12,143,258.92,149Z"
                fill="#ffffff"
              />
            </g>
          </svg>
        </div>
        <div className="td-cta-content-wrapper">
          <div className="td-cta-content">
            <h3 className="fw6 f6">Save Attribute</h3>
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