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
            id="_x31__x2C_5"
            enableBackground="new 0 0 24 24"
            height="20"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m6.75 18c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.061l2.719-2.719-2.72-2.72c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l3.25 3.25c.293.293.293.768 0 1.061l-3.25 3.25c-.146.147-.338.22-.53.22z"
              fill="#ffffff"
            />
            <path
              d="m17.25 18h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75s-.336.75-.75.75z"
              fill="#ffffff"
            />
            <path
              d="m21.25 23h-18.5c-1.517 0-2.75-1.233-2.75-2.75v-16.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v16.5c0 1.517-1.233 2.75-2.75 2.75zm-18.5-20.5c-.689 0-1.25.561-1.25 1.25v16.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25v-16.5c0-.689-.561-1.25-1.25-1.25z"
              fill="#ffffff"
            />
            <path
              d="m23.25 6h-22.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h22.5c.414 0 .75.336.75.75s-.336.75-.75.75z"
              fill="#ffffff"
            />
          </svg>
        </div>
        <div className="td-cta-content-wrapper">
          <div className="td-cta-content">
            <h3 className="fw6 f6">Connect Function</h3>
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