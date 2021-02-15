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
              enableBackground="new 0 0 512 512"
              height="20"
              viewBox="0 0 512 512"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m338.95 243.28-120-75c-4.625-2.89-10.453-3.043-15.222-.4-4.77 2.643-7.729 7.667-7.729 13.12v150c0 5.453 2.959 10.476 7.729 13.12 2.266 1.256 4.77 1.88 7.271 1.88 2.763 0 5.522-.763 7.95-2.28l120-75c4.386-2.741 7.05-7.548 7.05-12.72s-2.663-9.979-7.049-12.72zm-112.95 60.656v-95.873l76.698 47.937z"
                  fill="#ffffff"
                />
                <path
                  d="m437 61h-362c-41.355 0-75 33.645-75 75v240c0 41.355 33.645 75 75 75h362c41.355 0 75-33.645 75-75v-240c0-41.355-33.645-75-75-75zm45 315c0 24.813-20.187 45-45 45h-362c-24.813 0-45-20.187-45-45v-240c0-24.813 20.187-45 45-45h362c24.813 0 45 20.187 45 45z"
                  fill="#ffffff"
                />
              </g>
            </svg>
          </div>
          <div className="td-cta-content-wrapper">
            <div className="td-cta-content">
              <h3 className="fw6 f6">
                {data.payload.nodeName === undefined
                  ? "Video"
                  : data.payload.nodeName}
              </h3>
              <small>Video Response</small>
            </div>
          </div>
        </div>
        <div className="cross">
          <button>
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
