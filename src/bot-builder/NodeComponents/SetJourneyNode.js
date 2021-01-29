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
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m30 56.586-1.293-1.293-1.414 1.414 2.707 2.707 6.707-6.707-1.414-1.414z" />
              <path d="m36.707 6.707-1.414-1.414-5.293 5.293-1.293-1.293-1.414 1.414 2.707 2.707z" />
              <path d="m54 29c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z" />
              <path d="m58.667 33.698 3.124-5.355c.791-1.357 1.209-2.902 1.209-4.471 0-4.892-3.98-8.872-8.872-8.872h-.256c-4.892 0-8.872 3.98-8.872 8.872 0 1.569.418 3.114 1.208 4.47l1.551 2.658h-9.759c-1.654 0-3 1.346-3 3v13.589c-.631-.256-1.302-.432-2-.52v-30.138c3.94-.495 7-3.859 7-7.931 0-4.411-3.589-8-8-8s-8 3.589-8 8c0 2.52 1.174 4.768 3 6.235v25.765c0 .552-.449 1-1 1h-1v-1.728c0-2.37-1.687-4.432-4.01-4.901l-3.539-.71c-.502-.144-.914-.48-1.171-.918.548-.481.999-1.067 1.296-1.743h.424c1.654 0 3-1.346 3-3 0-.828-.338-1.579-.882-2.123 1.138-.917 1.882-2.305 1.882-3.877 0-2.757-2.243-5-5-5-1.155 0-2.207.41-3.055 1.071-.276-.042-.554-.071-.834-.071h-3.551c-3.066 0-5.56 2.494-5.56 5.56 0 1.242.43 2.453 1.189 3.425-.116.318-.189.657-.189 1.015 0 1.654 1.346 3 3 3h.424c.297.677.749 1.263 1.297 1.744-.252.436-.649.768-1.094.897l-3.617.73c-2.323.47-4.01 2.531-4.01 4.901v5.728h24v-2h1c1.654 0 3-1.346 3-3v-24.589c.631.256 1.302.432 2 .52v30.139c-3.94.495-7 3.859-7 7.931 0 4.411 3.589 8 8 8s8-3.589 8-8c0-2.52-1.174-4.768-3-6.235v-14.766c0-.552.449-1 1-1h10.926l.407.698c-2.703.874-4.333 2.458-4.333 4.302 0 2.851 3.869 5 9 5s9-2.149 9-5c0-1.844-1.63-3.428-4.333-4.302zm-48.667-3.698v-2c0-.486.349-.893.809-.982 1.38.643 2.905.982 4.427.982h.764v2c0 1.654-1.346 3-3 3s-3-1.346-3-3zm8 0v-2c.551 0 1 .449 1 1s-.449 1-1 1zm-11-1c0-.551.449-1 1-1v2c-.551 0-1-.449-1-1zm1.78-3h-.78c-.536 0-1.033.153-1.47.401-.334-.554-.53-1.188-.53-1.841 0-1.963 1.597-3.56 3.56-3.56h2.864c-.27.614-.424 1.288-.424 2h2c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3h-1.764c-1.308 0-2.618-.309-3.789-.895l-.211-.105h-.236c-.883 0-1.67.391-2.22 1zm4.22 9c.541 0 1.052-.108 1.541-.268.123.211.267.408.426.593-.156.948-.975 1.675-1.967 1.675-.99 0-1.808-.724-1.966-1.669.159-.186.304-.385.427-.599.487.16.998.268 1.539.268zm10 9h-20v-3.728c0-1.422 1.012-2.659 2.406-2.94l3.694-.749c.069-.02.134-.049.201-.073.597 1.459 2.028 2.49 3.699 2.49 1.669 0 3.099-1.029 3.698-2.497.093.034.183.072.28.1l3.616.729c1.394.281 2.406 1.519 2.406 2.94zm3-35c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm12 46c0 3.309-2.691 6-6 6s-6-2.691-6-6 2.691-6 6-6 6 2.691 6 6zm15.872-38h.256c3.789 0 6.872 3.083 6.872 6.872 0 1.215-.324 2.412-.936 3.462l-5.424 9.297c-.265.455-1.016.455-1.28 0l-5.424-9.297c-.612-1.05-.936-2.247-.936-3.462 0-3.789 3.083-6.872 6.872-6.872zm.128 24c-4.006 0-7-1.584-7-3 0-.953 1.384-1.962 3.371-2.523l1.262 2.163c.489.839 1.396 1.36 2.367 1.36s1.878-.521 2.368-1.36l1.262-2.163c1.986.561 3.37 1.57 3.37 2.523 0 1.416-2.994 3-7 3z" />
              <path d="m5 48h14v2h-14z" />
              <path d="m5 52h14v2h-14z" />
              <path d="m9 56h2v2h-2z" />
              <path d="m5 56h2v2h-2z" />
              <path d="m13 56h2v2h-2z" />
              <path d="m17 56h2v2h-2z" />
            </g>
          </svg>
        </div>
        <div className="td-cta-content-wrapper">
          <div className="td-cta-content">
            <h3 className="fw6 f6">Set Journey</h3>
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