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
        className="td-cta-box td-cta-docs user-details"
        target="_blank"
        rel="noopener"
        style={{margin:0,background:"#f2f5f7"}}
      >
        <div className="td-cta-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="20"
            height="20"
          >
            <g id="Calendar">
              <path
                d="M57,8H52V6a4,4,0,0,0-8,0V8H36V6a4,4,0,0,0-8,0V8H20V6a4,4,0,0,0-8,0V8H7a5,5,0,0,0-5,5V53a5,5,0,0,0,5,5H35a1,1,0,0,0,0-2H7a3.009,3.009,0,0,1-3-3V22H60V39a1,1,0,0,0,2,0V13A5,5,0,0,0,57,8ZM46,6a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0ZM30,6a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0ZM14,6a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0ZM60,20H4V13a3.009,3.009,0,0,1,3-3h5v2a4,4,0,0,0,8,0V10h8v2a4,4,0,0,0,8,0V10h8v2a4,4,0,0,0,8,0V10h5a3.009,3.009,0,0,1,3,3Z"
                fill="#ffffff"
              />
              <path
                d="M30,29a2,2,0,0,0-2-2H24a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V29h4v3Z"
                fill="#ffffff"
              />
              <path
                d="M18,29a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V29h4v3Z"
                fill="#ffffff"
              />
              <path
                d="M52,34a2,2,0,0,0,2-2V29a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2Zm-4-5h4v3H48Z"
                fill="#ffffff"
              />
              <path
                d="M30,38a2,2,0,0,0-2-2H24a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V38h4v3Z"
                fill="#ffffff"
              />
              <path
                d="M18,38a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V38h4v3Z"
                fill="#ffffff"
              />
              <path
                d="M28,45H24a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V47A2,2,0,0,0,28,45Zm-4,5V47h4v3Z"
                fill="#ffffff"
              />
              <path
                d="M36,34h4a2,2,0,0,0,2-2V29a2,2,0,0,0-2-2H36a2,2,0,0,0-2,2v3A2,2,0,0,0,36,34Zm0-5h4v3H36Z"
                fill="#ffffff"
              />
              <path
                d="M34,41a2,2,0,0,0,2,2,1,1,0,0,0,0-2V38h4a1,1,0,0,0,0-2H36a2,2,0,0,0-2,2Z"
                fill="#ffffff"
              />
              <path
                d="M16,45H12a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V47A2,2,0,0,0,16,45Zm-4,5V47h4v3Z"
                fill="#ffffff"
              />
              <path
                d="M49,36A13,13,0,1,0,62,49,13.015,13.015,0,0,0,49,36Zm0,24A11,11,0,1,1,60,49,11.013,11.013,0,0,1,49,60Z"
                fill="#ffffff"
              />
              <path
                d="M54.778,44.808,47,52.586,43.465,49.05a1,1,0,0,0-1.414,1.414l4.242,4.243a1,1,0,0,0,1.414,0l8.485-8.485a1,1,0,0,0-1.414-1.414Z"
                fill="#ffffff"
              />
            </g>
          </svg>
        </div>
        <div className="td-cta-content-wrapper">
          <div className="td-cta-content">
            <h3 className="fw6 f6">{data.payload.nodeName === undefined ? "Date Field" : data.payload.nodeName}</h3>
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