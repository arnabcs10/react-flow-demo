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
        className="td-cta-box td-cta-docs communication"
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
            style={{enableBackground: "new 0 0 512 512"}}
            height="20"
            width="20"
            fill="#ffffff"
          >
            <g>
              <g>
                <path
                  d="M405.333,213.874V106.667c0-23.531-19.135-42.667-42.667-42.667h-320C19.135,64,0,83.135,0,106.667V320
			c0,23.531,19.135,42.667,42.667,42.667h239.215C295.858,411.84,341.073,448,394.667,448c20.625,0,40.906-5.427,58.677-15.708
			c5.094-2.948,6.844-9.469,3.885-14.573c-2.948-5.104-9.479-6.865-14.573-3.885c-14.521,8.396-31.115,12.833-47.99,12.833
			c-52.938,0-96-43.063-96-96s43.063-96,96-96s96,43.063,96,96v10.667c0,11.76-9.573,21.333-21.333,21.333
			c-11.76,0-21.333-9.573-21.333-21.333v-42.667c0-5.896-4.771-10.667-10.667-10.667c-2.869,0-5.447,1.161-7.362,3
			c-9.428-8.401-21.714-13.667-35.305-13.667c-29.406,0-53.333,23.927-53.333,53.333S365.26,384,394.667,384
			c15.896,0,30.03-7.131,39.81-18.202c7.727,10.977,20.44,18.202,34.857,18.202C492.865,384,512,364.865,512,341.333v-10.667
			C512,269.569,465.044,219.288,405.333,213.874z M42.667,85.333h320c0.444,0,0.816,0.227,1.254,0.254L211.438,210.75
			c-5.427,3.417-13.292,2.708-16.823,0.542L41.426,85.585C41.859,85.559,42.227,85.333,42.667,85.333z M384,213.874
			c-59.711,5.414-106.667,55.695-106.667,116.793c0,3.6,0.221,7.148,0.54,10.667H42.667c-11.76,0-21.333-9.573-21.333-21.333
			V106.667c0-3.021,0.667-5.874,1.805-8.48l158.883,130.293c6.208,4.052,13.344,6.188,20.646,6.188
			c7.021,0,13.885-1.979,19.927-5.729c0.604-0.323,1.177-0.708,1.719-1.156l157.88-129.598c1.139,2.608,1.807,5.461,1.807,8.483
			V213.874z M394.667,362.667c-17.646,0-32-14.354-32-32c0-17.646,14.354-32,32-32s32,14.354,32,32
			C426.667,348.313,412.313,362.667,394.667,362.667z"
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
            <h3 className="fw6 f6">Send Email</h3>
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