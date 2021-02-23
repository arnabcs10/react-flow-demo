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
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="20"
            height="20"
          >
            <path
              fill="none"
              stroke="#ffffff"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M25 11A3 3 0 1 0 25 17 3 3 0 1 0 25 11zM36 31A3 3 0 1 0 36 37 3 3 0 1 0 36 31z"
            />
            <path
              fill="none"
              stroke="#ffffff"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M10.818,25.266C6.902,26.241,4,29.782,4,34c0,4.971,4.029,9,9,9s9-4.029,9-9h11"
            />
            <path
              fill="none"
              stroke="#ffffff"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M26.414,16.572l5.245,9.542C32.947,25.404,34.426,25,36,25c4.971,0,9,4.029,9,9s-4.029,9-9,9c-2.425,0-4.625-0.959-6.244-2.518"
            />
            <path
              fill="none"
              stroke="#ffffff"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M13.001 31A3 3 0 1 0 13.001 37A3 3 0 1 0 13.001 31Z"
              transform="rotate(-30 12.999 34)"
            />
            <path
              fill="none"
              stroke="#ffffff"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M14.52,31.489l5.906-9.736C17.777,20.187,16,17.301,16,14c0-4.971,4.029-9,9-9s9,4.029,9,9c0,0.924-0.139,1.815-0.398,2.654"
            />
          </svg>
        </div>
        <div className="td-cta-content-wrapper">
          <div className="td-cta-content">
            <h3 className="fw6 f6">{data.payload.nodeName === undefined ? "Trigger Webhook" : data.payload.nodeName}</h3>
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