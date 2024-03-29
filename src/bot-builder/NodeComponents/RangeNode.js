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
            id="Capa_1"
            enableBackground="new 0 0 512 512"
            height="20"
            viewBox="0 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="m512 141.92v-44.83c0-53.536-43.555-97.09-97.09-97.09h-317.82c-53.535 0-97.09 43.554-97.09 97.09v44.83c0 53.536 43.555 97.09 97.09 97.09h140.72c0 31.68.004 40.152.004 40.75-4.712-1.666-9.769-2.579-15.023-2.579-24.83 0-45.021 20.077-45.021 45.02 0 .013.002.026.002.039v72.477c0 64.67 52.613 117.284 117.284 117.284h98.802c64.671 0 117.284-52.613 117.284-117.284 0-95.913.041-90.614-.083-91.799-1.728-24.418-21.954-43.387-46.478-43.387-6.017 0-11.764 1.16-17.049 3.249-1.271-9.739-5.659-18.747-12.69-25.83 44.006-9.22 77.158-48.324 77.158-95.03zm-414.91 67.09c-36.993 0-67.09-30.096-67.09-67.09v-44.83c0-36.994 30.097-67.09 67.09-67.09h317.82c36.993 0 67.09 30.096 67.09 67.09v44.83c0 36.994-30.097 67.09-67.09 67.09h-38.132c-8.657-9.892-20.853-15.426-33.91-15.426-5.264 0-10.32.909-15.02 2.578v-61.654h109.152c8.284 0 15-6.716 15-15s-6.716-15-15-15h-111.052c-5.534-18.441-22.938-32.525-44.188-32.03-19.574.455-36.194 13.906-41.865 32.03h-62.814c-6.666-25.57-29.953-44.5-57.582-44.5-32.809 0-59.5 26.691-59.5 59.5s26.691 59.5 59.5 59.5c27.629 0 50.916-18.93 57.582-44.5h60.728v74.502zm51.91-89.503c0 16.266-13.233 29.5-29.5 29.5s-29.5-13.234-29.5-29.5 13.233-29.5 29.5-29.5 29.5 13.234 29.5 29.5zm298.98 186.693c0-9.192 7.446-16.67 16.6-16.67 8.724 0 15.973 6.759 16.562 15.58v89.607c0 48.128-39.155 87.284-87.284 87.284h-98.802c-48.129 0-87.284-39.155-87.284-87.284v-72.517c0-.007-.001-.013-.001-.02.011-8.373 6.793-15 15.02-15 7.63 0 14.039 5.694 14.908 13.245.005.041.009.081.015.121.139 1.128.097-2.593.097 54.004 0 8.284 6.716 15 15 15 8.287 0 15.004-6.721 15.004-15.004 0-7.437-.004-244.257-.004-256.413 0-8.449 6.57-15.475 14.648-15.663 8.606-.179 15.391 6.721 15.391 15.051v121.12c0 .026.004.051.004.077v86.932c0 8.284 6.716 15 15 15s15-6.716 15-15v-87.087c.042-8.267 6.759-14.98 15.016-14.98 8.284 0 15.02 6.736 15.02 15.058v30.057c0 .026.004.051.004.077v56.875c0 8.284 6.716 15 15 15s15-6.716 15-15v-56.949c0-.014-.002-.027-.002-.041.02-8.286 6.748-15.02 15.018-15.02 8.287 0 15.02 6.734 15.02 15.057 0 .222.004 20.627.004 56.953 0 8.284 6.716 15 15 15s15-6.716 15-15c-.003-.463.046-5.945.046-19.45z"
                fill="#ffffff"
              />
            </g>
          </svg>
        </div>
        <div className="td-cta-content-wrapper">
          <div className="td-cta-content">
            <h3 className="fw6 f6">{data.payload.nodeName === undefined ? "Range" : data.payload.nodeName}</h3>
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