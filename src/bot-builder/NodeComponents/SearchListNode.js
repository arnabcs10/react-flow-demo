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
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 343.5 343.5"
            style={{enableBackground: "new 0 0 343.5 343.5"}}
            height="20"
            width="20"
          >
            <g>
              <g>
                <path
                  d="M322.05,161.8h-182.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h182.6c5.5,0,10-4.5,10-10C332.05,166.3,327.65,161.8,322.05,161.8
			z"
                  fill="#ffffff"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M57.95,125.3c-25.7,0-46.5,20.8-46.5,46.5s20.8,46.5,46.5,46.5s46.5-20.8,46.5-46.5S83.65,125.3,57.95,125.3z
			 M57.95,198.3c-14.7,0-26.5-11.9-26.5-26.5c0-14.7,11.9-26.5,26.5-26.5c14.6,0,26.5,11.9,26.5,26.5S72.55,198.3,57.95,198.3z"
                  fill="#ffffff"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M322.05,36.8h-182.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h182.6c5.5,0,10-4.5,10-10C332.05,41.3,327.65,36.8,322.05,36.8z"
                  fill="#ffffff"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M57.95,0c-25.7,0-46.5,20.8-46.5,46.5c0,25.7,20.8,46.5,46.5,46.5s46.5-20.8,46.5-46.5C104.45,20.9,83.65,0.1,57.95,0z
			 M57.95,73.1c-14.7,0-26.5-11.9-26.5-26.5c0-14.6,11.9-26.5,26.5-26.5c14.7,0,26.5,11.9,26.5,26.5
			C84.45,61.2,72.55,73.1,57.95,73.1z"
                  fill="#ffffff"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M322.05,286.8h-182.6c-5.5,0-10,4.5-10,10s4.5,10,10,10h182.6c5.5,0,10-4.5,10-10S327.65,286.8,322.05,286.8z"
                  fill="#ffffff"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M57.95,250.5c-25.7,0-46.5,20.8-46.5,46.5c0,25.7,20.8,46.5,46.5,46.5s46.5-20.8,46.5-46.5
			C104.45,271.4,83.65,250.5,57.95,250.5z M57.95,323.6c-14.7,0-26.5-11.9-26.5-26.5c0-14.7,11.9-26.5,26.5-26.5
			c14.7,0,26.5,11.9,26.5,26.5S72.55,323.6,57.95,323.6z"
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
            <h3 className="fw6 f6">{data.payload.nodeName === undefined ? "Search from list" : data.payload.nodeName}</h3>
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