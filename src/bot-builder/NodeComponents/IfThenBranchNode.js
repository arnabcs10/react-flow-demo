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
            id="Layer_5"
            enableBackground="new 0 0 64 64"
            height="20"
            viewBox="0 0 64 64"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="m43 53h-6v-5.446l8.887-5.554-8.887-5.554v-6.446h6v-8h-6v-7h8v-14h-18v14h8v7h-6v3h-9v2h9v3h6v6.446l-8.887 5.554 8.887 5.554v5.446h-6c-1.654 0-3 1.346-3 3v4c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-4c0-1.654-1.346-3-3-3zm-14-50h14v10h-14zm2 21h10v4h-10zm5 14.179 6.113 3.821-6.113 3.821-6.113-3.821zm8 21.821c0 .551-.449 1-1 1h-14c-.551 0-1-.449-1-1v-4c0-.551.449-1 1-1h14c.551 0 1 .449 1 1z"
                fill="#ffffff"
              />
              <path
                d="m18.293 54.707 2.293 2.293h-8.77c-.302-.847-.969-1.514-1.816-1.816v-21.184h-2v21.184c-1.161.414-2 1.514-2 2.816 0 1.654 1.346 3 3 3 1.302 0 2.402-.839 2.816-2h8.77l-2.293 2.293 1.414 1.414 4.707-4.707-4.707-4.707zm-9.293 4.293c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1z"
                fill="#ffffff"
              />
              <path
                d="m61 39.184v-28.368c1.161-.414 2-1.514 2-2.816 0-1.654-1.346-3-3-3-1.302 0-2.402.839-2.816 2h-10.184v2h10.184c.302.847.969 1.514 1.816 1.816v28.369c-.847.302-1.514.969-1.816 1.816h-6.77l2.293-2.293-1.414-1.414-4.707 4.706 4.707 4.707 1.414-1.414-2.293-2.293h6.77c.414 1.161 1.514 2 2.816 2 1.654 0 3-1.346 3-3 0-1.302-.839-2.402-2-2.816zm-1-32.184c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0 36c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1z"
                fill="#ffffff"
              />
              <path
                d="m17.721 26-8.721-6.229-8.721 6.229 8.721 6.229zm-8.721-3.771 5.279 3.771-5.279 3.771-5.279-3.771z"
                fill="#ffffff"
              />
              <path d="m31 5h10v2h-10z" fill="#ffffff" />
              <path d="m31 9h6v2h-6z" fill="#ffffff" />
              <path d="m39 9h2v2h-2z" fill="#ffffff" />
              <path d="m56 57h2v2h-2z" fill="#ffffff" />
              <path d="m52 57h2v2h-2z" fill="#ffffff" />
              <path d="m48 57h2v2h-2z" fill="#ffffff" />
              <path d="m19 9h2v2h-2z" fill="#ffffff" />
              <path d="m23 9h2v2h-2z" fill="#ffffff" />
              <path d="m15 9h2v2h-2z" fill="#ffffff" />
            </g>
          </svg>
        </div>
        <div className="td-cta-content-wrapper">
          <div className="td-cta-content">
            <h3 className="fw6 f6">{data.payload.nodeName === undefined ? "If/Then Branch" : data.payload.nodeName}</h3>
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