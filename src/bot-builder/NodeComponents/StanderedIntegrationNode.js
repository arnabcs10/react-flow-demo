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
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 56 56"
            style={{enableBackground: "new 0 0 56 56"}}
            height="20"
            width="20"
            fill="#ffffff"
          >
            <g>
              <path
                d="M22.66,0H3.34C1.498,0,0,1.498,0,3.34v19.32C0,24.502,1.498,26,3.34,26h19.32c1.842,0,3.34-1.498,3.34-3.34V3.34
                C26,1.498,24.502,0,22.66,0z M24,22.66c0,0.739-0.601,1.34-1.34,1.34H3.34C2.601,24,2,23.399,2,22.66V3.34C2,2.601,2.601,2,3.34,2
                h19.32C23.399,2,24,2.601,24,3.34V22.66z"
              />
              <path
                d="M52.66,0H33.34C31.498,0,30,1.498,30,3.34v19.32c0,1.842,1.498,3.34,3.34,3.34h19.32c1.842,0,3.34-1.498,3.34-3.34V3.34
                C56,1.498,54.502,0,52.66,0z M54,22.66c0,0.739-0.601,1.34-1.34,1.34H33.34C32.601,24,32,23.399,32,22.66V3.34
                C32,2.601,32.601,2,33.34,2h19.32C53.399,2,54,2.601,54,3.34V22.66z"
              />
              <path
                d="M22.66,30H3.34C1.498,30,0,31.498,0,33.34v19.32C0,54.502,1.498,56,3.34,56h19.32c1.842,0,3.34-1.498,3.34-3.34V33.34
                C26,31.498,24.502,30,22.66,30z M24,52.66c0,0.739-0.601,1.34-1.34,1.34H3.34C2.601,54,2,53.399,2,52.66V33.34
                C2,32.601,2.601,32,3.34,32h19.32c0.739,0,1.34,0.601,1.34,1.34V52.66z"
              />
              <path
                d="M55,42H44V31c0-0.553-0.447-1-1-1s-1,0.447-1,1v11H31c-0.553,0-1,0.447-1,1s0.447,1,1,1h11v11c0,0.553,0.447,1,1,1
                s1-0.447,1-1V44h11c0.553,0,1-0.447,1-1S55.553,42,55,42z"
              />
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
            <h3 className="fw6 f6">Standard Integration</h3>
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