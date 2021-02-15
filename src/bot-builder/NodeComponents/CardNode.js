import React, { memo } from "react";
import { Handle, removeElements } from "react-flow-renderer";
// import './style1.css'
import "./nodeStyles.css";
export default memo(({ id, data }) => {
  const deleteNode = () => {
    data.setElements((els) =>
      removeElements([els.find((e) => e.id === id)], els)
    );
  };
  return (
    <>
      <Handle
        type="target"
        position="top"
        style={{ height: "1rem", width: "1rem" }}
        onConnect={(params) => console.log("handle onConnect", params)}
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
          style={{ margin: 0, background: "#f2f5f7" }}
        >
          <div className="td-cta-icon">
            <svg
              id="Guide"
              height="20"
              viewBox="0 0 512 512"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m476 115.306h-36.023v-12.634a30.4 30.4 0 0 0 -30.318-30.41h-41.782v-4.352a30.4 30.4 0 0 0 -30.318-30.41h-297.241a30.4 30.4 0 0 0 -30.318 30.41v298.374a30.4 30.4 0 0 0 30.318 30.41h41.782v4.351a30.4 30.4 0 0 0 30.317 30.411h31.706v17.044a26.03 26.03 0 0 0 26 26h305.877a26.03 26.03 0 0 0 26-26v-307.194a26.029 26.029 0 0 0 -26-26zm-435.682 269.388a18.384 18.384 0 0 1 -18.318-18.41v-298.374a18.385 18.385 0 0 1 18.318-18.41h297.241a18.385 18.385 0 0 1 18.318 18.41v4.352h-243.46a30.4 30.4 0 0 0 -30.317 30.41v282.022zm103.805-243.388v278.15h-31.706a18.385 18.385 0 0 1 -18.317-18.411v-298.373a18.385 18.385 0 0 1 18.317-18.41h297.242a18.385 18.385 0 0 1 18.318 18.41v12.634h-257.854a26.029 26.029 0 0 0 -26 26zm345.877 307.194a14.015 14.015 0 0 1 -14 14h-305.877a14.015 14.015 0 0 1 -14-14v-307.194a14.015 14.015 0 0 1 14-14h305.877a14.015 14.015 0 0 1 14 14z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <div className="td-cta-content-wrapper">
            <div className="td-cta-content">
              <h3 className="fw6 f6">
                {data.payload.nodeName === undefined
                  ? "Card"
                  : data.payload.nodeName}
              </h3>
              <small>A Card Response</small>
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
        style={{ cursor: "pointer", height: "1rem", width: "1rem" }}
        // style={{ top: 10, background: '#555' }}
      />
    </>
  );
});
