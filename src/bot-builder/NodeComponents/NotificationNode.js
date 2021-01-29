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
            height="20"
            viewBox="-21 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
          >
            <path d="m213.332031 512c-44.09375 0-80-35.882812-80-80 0-8.832031 7.167969-16 16-16s16 7.167969 16 16c0 26.476562 21.546875 48 48 48s48-21.523438 48-48c0-8.832031 7.167969-16 16-16s16 7.167969 16 16c0 44.117188-35.902343 80-80 80zm0 0" />
            <path d="m389.332031 448h-352c-20.585937 0-37.332031-16.746094-37.332031-37.332031 0-10.925781 4.757812-21.269531 13.054688-28.375.535156-.46875 1.109374-.894531 1.707031-1.28125 31.316406-27.328125 49.238281-66.644531 49.238281-108.160157v-59.519531c0-82.34375 67.007812-149.332031 149.332031-149.332031 3.414063 0 7.105469.0625 10.519531.640625 8.722657 1.449219 14.613282 9.707031 13.160157 18.410156-1.449219 8.703125-9.855469 14.59375-18.410157 13.140625-1.707031-.277344-3.582031-.191406-5.269531-.191406-64.679687 0-117.332031 52.628906-117.332031 117.332031v59.519531c0 51.542969-22.59375 100.3125-61.929688 133.78125-.320312.257813-.597656.492188-.941406.726563-.574218.726563-1.128906 1.835937-1.128906 3.308594 0 2.898437 2.433594 5.332031 5.332031 5.332031h352c2.902344 0 5.335938-2.433594 5.335938-5.332031 0-1.496094-.554688-2.582031-1.152344-3.308594-.320313-.234375-.597656-.46875-.917969-.726563-39.359375-33.492187-61.929687-82.238281-61.929687-133.78125v-23.25c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v23.25c0 41.539063 17.941406 80.875 49.300781 108.226563.574219.382813 1.128906.789063 1.640625 1.238281 8.300781 7.082032 13.058594 17.425782 13.058594 28.351563 0 20.585937-16.746094 37.332031-37.335938 37.332031zm0 0" />
            <path d="m362.667969 213.332031c-58.816407 0-106.667969-47.847656-106.667969-106.664062 0-58.816407 47.851562-106.667969 106.667969-106.667969 58.816406 0 106.664062 47.851562 106.664062 106.667969 0 58.816406-47.847656 106.664062-106.664062 106.664062zm0-181.332031c-41.175781 0-74.667969 33.492188-74.667969 74.667969 0 41.171875 33.492188 74.664062 74.667969 74.664062 41.171875 0 74.664062-33.492187 74.664062-74.664062 0-41.175781-33.492187-74.667969-74.664062-74.667969zm0 0" />
          </svg>
        </div>
        <div className="td-cta-content-wrapper">
          <div className="td-cta-content" style={{textAlign:"left"}}>
            <h3 className="fw6 f6">Notification (in-app & push notification)</h3>
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