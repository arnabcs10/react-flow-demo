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
            height="20"
            viewBox="0 -43 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m453.332031 426.667969h-394.664062c-32.363281 0-58.667969-26.304688-58.667969-58.667969v-266.667969c0-32.363281 26.304688-58.664062 58.667969-58.664062h128c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-128c-14.699219 0-26.667969 11.964843-26.667969 26.664062v266.667969c0 14.699219 11.96875 26.667969 26.667969 26.667969h394.664062c14.699219 0 26.667969-11.96875 26.667969-26.667969v-266.667969c0-14.699219-11.96875-26.664062-26.667969-26.664062h-128c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h128c32.363281 0 58.667969 26.300781 58.667969 58.664062v266.667969c0 32.363281-26.304688 58.667969-58.667969 58.667969zm0 0"
              fill="#ffffff"
            />
            <path
              d="m304 117.332031h-96c-20.585938 0-37.332031-16.746093-37.332031-37.332031v-42.667969c0-20.585937 16.746093-37.332031 37.332031-37.332031h96c20.585938 0 37.332031 16.746094 37.332031 37.332031v42.667969c0 20.585938-16.746093 37.332031-37.332031 37.332031zm-96-85.332031c-2.945312 0-5.332031 2.390625-5.332031 5.332031v42.667969c0 2.945312 2.386719 5.332031 5.332031 5.332031h96c2.945312 0 5.332031-2.386719 5.332031-5.332031v-42.667969c0-2.941406-2.386719-5.332031-5.332031-5.332031zm0 0"
              fill="#ffffff"
            />
            <path
              d="m160 256c-29.398438 0-53.332031-23.9375-53.332031-53.332031 0-29.398438 23.933593-53.335938 53.332031-53.335938s53.332031 23.9375 53.332031 53.335938c0 29.394531-23.933593 53.332031-53.332031 53.332031zm0-74.667969c-11.753906 0-21.332031 9.578125-21.332031 21.335938 0 11.753906 9.578125 21.332031 21.332031 21.332031s21.332031-9.578125 21.332031-21.332031c0-11.757813-9.578125-21.335938-21.332031-21.335938zm0 0"
              fill="#ffffff"
            />
            <path
              d="m240 362.667969c-8.832031 0-16-7.167969-16-16v-10.667969c0-14.699219-11.96875-26.667969-26.667969-26.667969h-74.664062c-14.699219 0-26.667969 11.96875-26.667969 26.667969v10.667969c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-10.667969c0-32.363281 26.304688-58.667969 58.667969-58.667969h74.664062c32.363281 0 58.667969 26.304688 58.667969 58.667969v10.667969c0 8.832031-7.167969 16-16 16zm0 0"
              fill="#ffffff"
            />
            <path
              d="m432 192h-117.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h117.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
              fill="#ffffff"
            />
            <path
              d="m432 277.332031h-117.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h117.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
              fill="#ffffff"
            />
            <path
              d="m432 362.667969h-117.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h117.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
              fill="#ffffff"
            />
          </svg>
        </div>
        <div className="td-cta-content-wrapper">
          <div className="td-cta-content">
            <h3 className="fw6 f6">{data.payload.nodeName === undefined ? "Name Field" : data.payload.nodeName}</h3>
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