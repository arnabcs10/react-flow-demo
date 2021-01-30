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
        className="td-cta-box td-cta-docs message"
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
                d="M499.765,184.941,432,148.8V16a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8V148.8L12.235,184.941A8,8,0,0,0,8,192V496a8,8,0,0,0,8,8H496a8,8,0,0,0,8-8V192A8,8,0,0,0,499.765,184.941ZM479,192l-47,25.067V166.933ZM416,24V225.6L256,310.934,96,225.6V24ZM252.235,327.059a8,8,0,0,0,7.53,0l41-21.865L432.382,488H79.618L211.239,305.194ZM80,217.067,33,192l47-25.067ZM24,205.333,196.993,297.6,59.9,488H24ZM452.1,488,315.007,297.6,488,205.333V488Z"
                fill="#ffffff"
              />
              <path
                d="M200,144h48a8,8,0,0,0,0-16H208V112h32a8,8,0,0,0,0-16H208V80h40a8,8,0,0,0,0-16H200a8,8,0,0,0-8,8v64A8,8,0,0,0,200,144Z"
                fill="#ffffff"
              />
              <path
                d="M344,128a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V104a8,8,0,0,0-8-8H352V80h40a8,8,0,0,0,0-16H344a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8h40v16Z"
                fill="#ffffff"
              />
              <path
                d="M128,144a8,8,0,0,0,8-8V96l33.6,44.8A8,8,0,0,0,184,136V72a8,8,0,0,0-16,0v40L134.4,67.2A8,8,0,0,0,120,72v64A8,8,0,0,0,128,144Z"
                fill="#ffffff"
              />
              <path
                d="M272,144h8a8,8,0,0,0,7.49-5.191l7.975-21.263,9.173,21.583A8,8,0,0,0,312,144h8a8,8,0,0,0,8-8V72a8,8,0,0,0-16,0v43.547l-9.638-22.676A8,8,0,0,0,295,88l-.174,0a8,8,0,0,0-7.317,5.189L280,113.216V72a8,8,0,0,0-16,0v64A8,8,0,0,0,272,144Z"
                fill="#ffffff"
              />
            </g>
          </svg>
        </div>
        <div className="td-cta-content-wrapper">
          <div className="td-cta-content">
            <h3 className="fw6 f6">{data.payload.nodeName === undefined ? "Bit Message(Web-Only)" : data.payload.nodeName}</h3>
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