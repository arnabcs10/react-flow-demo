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
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="20"
            height="20"
            style={{enableBackground: "new 0 0 512 512"}}
          >
            <g>
              <g>
                <path
                  d="M467.076,68.86c-59.902-59.902-156.846-59.896-216.741,0L34.919,284.276c-46.558,46.557-46.558,122.312,0,168.87
			c46.57,46.571,122.326,46.544,168.87,0L419.205,237.73c33.36-33.36,33.36-87.64,0-121c-33.359-33.361-87.64-33.361-121,0
			L114.478,300.457c-6.975,6.975-6.975,18.285,0,25.259c6.975,6.975,18.285,6.975,25.259,0l183.727-183.727
			c19.432-19.432,51.05-19.432,70.481,0c19.431,19.432,19.431,51.05,0,70.481L178.53,427.887c-32.71,32.71-85.646,32.706-118.352,0
			c-15.806-15.806-24.511-36.821-24.511-59.175s8.706-43.369,24.511-59.176L275.594,94.119c45.94-45.94,120.287-45.934,166.222,0
			c45.827,45.828,45.827,120.395,0,166.222l-95.741,95.741c-6.975,6.975-6.975,18.284,0,25.259s18.285,6.975,25.259,0l95.741-95.741
			C526.978,225.7,526.971,128.754,467.076,68.86z"
                  fill="#ffffff"
                />
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </div>
        <div className="td-cta-content-wrapper">
          <div className="td-cta-content">
            <h3 className="fw6 f6">{data.payload.nodeName === undefined ? "Attachment" : data.payload.nodeName}</h3>
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