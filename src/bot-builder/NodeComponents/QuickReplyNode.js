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
              version="1.1"
              height="20"
              width="20"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 398.414 398.414"
              style={{ enableBackground: "new 0 0 398.414 398.414" }}
            >
              <g>
                <g>
                  <path
                    style={{ fill: "#ffffff" }}
                    d="M58.274,140.937C26.142,140.937,0,167.079,0,199.211c0,32.124,26.141,58.266,58.274,58.266
			s58.274-26.141,58.274-58.266C116.548,167.079,90.406,140.937,58.274,140.937z M58.274,233.099
			c-18.688,0-33.888-15.2-33.888-33.88c0-18.688,15.2-33.888,33.888-33.888s33.888,15.209,33.888,33.888
			C92.162,217.891,76.961,233.099,58.274,233.099z"
                  />
                  <path
                    style={{ fill: "#ffffff" }}
                    d="M197.85,140.937c-32.132,0-58.274,26.141-58.274,58.274c0,32.124,26.141,58.266,58.274,58.266
			s58.274-26.141,58.274-58.266C256.123,167.079,229.982,140.937,197.85,140.937z M197.85,233.099
			c-18.688,0-33.888-15.2-33.888-33.88c0-18.688,15.2-33.888,33.888-33.888s33.888,15.209,33.888,33.888
			C231.738,217.891,216.537,233.099,197.85,233.099z"
                  />
                  <path
                    style={{ fill: "#ffffff" }}
                    d="M340.14,140.937c-32.132,0-58.274,26.141-58.274,58.274c0,32.124,26.142,58.266,58.274,58.266
			s58.274-26.141,58.274-58.266C398.414,167.079,372.272,140.937,340.14,140.937z M340.14,233.099
			c-18.688,0-33.888-15.2-33.888-33.88c0-18.688,15.2-33.888,33.888-33.888s33.888,15.209,33.888,33.888
			C374.028,217.891,358.828,233.099,340.14,233.099z"
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
              <h3 className="fw6 f6">
                {data.payload.nodeName === undefined
                  ? "Quick Reply"
                  : data.payload.nodeName}
              </h3>
              <small>Quick Reply</small>
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
