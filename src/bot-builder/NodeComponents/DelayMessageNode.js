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
            viewBox="0 0 512 512"
            style={{enableBackground: "new 0 0 512 512"}}
            height="20"
            width="20"
          >
            <g>
              <g>
                <path
                  d="M301.76,273.643c-8.363-2.987-13.76-9.92-13.76-17.664c0-7.723,5.397-14.635,13.76-17.621
                  c60.779-21.739,92.907-85.717,92.907-185.024c0-5.888-4.779-10.667-10.667-10.667c-5.888,0-10.667,4.779-10.667,10.667
                  c0,90.752-26.496,146.24-78.741,164.928c-16.96,6.059-27.925,20.885-27.925,37.76c0,16.853,10.965,31.659,27.925,37.717
                  c52.245,18.688,78.741,74.176,78.741,164.928c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667
                  C394.667,359.36,362.539,295.381,301.76,273.643z"
                  fill="#ffffff"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M217.408,218.261c-52.245-18.688-78.741-74.176-78.741-164.928c0-5.888-4.779-10.667-10.667-10.667
                  s-10.667,4.779-10.667,10.667c0,99.307,32.128,163.285,92.907,185.024c8.363,2.987,13.76,9.92,13.76,17.664
                  c0,7.723-5.397,14.635-13.76,17.621c-60.779,21.739-92.907,85.717-92.907,185.024c0,5.888,4.779,10.667,10.667,10.667
                  s10.667-4.779,10.667-10.667c0-90.752,26.496-146.24,78.741-164.928c16.96-6.059,27.925-20.885,27.925-37.76
                  C245.333,239.125,234.368,224.32,217.408,218.261z"
                  fill="#ffffff"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M405.333,0H106.667c-17.643,0-32,14.357-32,32s14.357,32,32,32h298.667c17.643,0,32-14.357,32-32
                  C437.333,14.357,422.976,0,405.333,0z M405.333,42.667H106.667C100.8,42.667,96,37.888,96,32s4.8-10.667,10.667-10.667h298.667
                  C411.2,21.333,416,26.112,416,32S411.2,42.667,405.333,42.667z"
                  fill="#ffffff"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M405.333,448H106.667c-17.643,0-32,14.357-32,32c0,17.643,14.357,32,32,32h298.667c17.643,0,32-14.357,32-32
                  C437.333,462.357,422.976,448,405.333,448z M405.333,490.667H106.667C100.8,490.667,96,485.888,96,480
                  c0-5.888,4.8-10.667,10.667-10.667h298.667C411.2,469.333,416,474.112,416,480C416,485.888,411.2,490.667,405.333,490.667z"
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
            <h3 className="fw6 f6">{data.payload.nodeName === undefined ? "Delay Message" : data.payload.nodeName}</h3>
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