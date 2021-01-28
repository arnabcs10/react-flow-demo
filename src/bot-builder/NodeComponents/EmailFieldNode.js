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
                  d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256
			s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638
			c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934
			C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198
			c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484
			c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837
			c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601
			c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973
			C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815
			c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"
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
            <h3 className="fw6 f6">Email Field</h3>
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