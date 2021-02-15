import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import AddIcon from '../AddIconNode';
import "./nodeStyles.css";
export default memo(({ id, data }) => {
 

  const customStyles={  
    padding:"5px",
    width:"auto" ,
    height:"79px"
  }
  return (
    <div style={customStyles}>
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
              id="Capa_1"
              enableBackground="new 0 0 467.765 467.765"
              height="5"
              viewBox="0 0 467.765 467.765"
              width="5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m58.471 0v87.706h58.471v-29.235h87.706v350.824h-58.471v58.471h175.412v-58.471h-58.471v-350.824h87.706v29.235h58.471v-87.706z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <div className="td-cta-content-wrapper">
            <div className="td-cta-content">
              <h3 className="fw6 f6">
                {data.payload.nodeName === undefined
                  ? "Text"
                  : data.payload.nodeName}
              </h3>
              <small>Text response</small>
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
