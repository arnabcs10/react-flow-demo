import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import "./nodeStyles.css";
import AddIcon from '../AddIconNode';
export default memo(({ id, data }) => {
  const customStyles={  
    padding:"5px",
    width:"auto" ,
    height:"79px"
  }
  return (
    <div  style={customStyles}>
      <Handle
        type="target"
        position="top"
        style={{ height: "1rem", width: "1rem" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
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
          <button >
            <i id="delete-icon" className="fas fa-times-circle"></i>
          </button>
        </div>
      </div>
      <AddIcon>
      <Handle
        type="source"
        position="bottom"
        style={{ cursor: "pointer", height: "0.1rem", width: "0.1rem" }}
      />
      </AddIcon>
    </div >
  );
});