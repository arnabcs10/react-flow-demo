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
          className="td-cta-box td-cta-docs bot-properties"
          target="_blank"
          rel="noopener"
          style={{ margin: 0, background: "#f2f5f7" }}
        >
          <div className="td-cta-icon">
            <svg
              id="Capa_1"
              enableBackground="new 0 0 510 510"
              height="20"
              viewBox="0 0 510 510"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m439.846 370.059-.571-.676c-27.873-33.008-66.032-55.475-108.497-64.687 22.249-15.918 39.452-38.45 48.727-64.696h34.163c19.142 0 34.714-15.572 34.714-34.714v-10.286c0-107.523-87.477-195-195-195s-195 87.477-195 195v10.286c0 19.142 15.573 34.714 34.714 34.714h32.924c9.427 26.677 27.048 49.512 49.829 65.47-41.109 9.651-77.992 31.782-105.125 63.912l-.576.683c-31.254 37.012-47.102 79.047-47.102 124.935v15h463.908v-15c0-45.888-15.848-87.922-47.108-124.941zm-187.083-70.337c-41.585 0-77.564-24.447-94.331-59.722h74.951v-30h-83.966c-.676-4.791-1.034-9.683-1.034-14.658 0-57.556 46.825-104.381 104.38-104.381s104.38 46.825 104.38 104.381-46.824 104.38-104.38 104.38zm165.62-94.436c0 2.6-2.115 4.714-4.714 4.714h-27.328c.525-4.816.803-9.705.803-14.658 0-5.188-.306-10.305-.881-15.342h31.431c.448 4.942.689 9.943.689 15zm-165-175.286c75.387 0 139.127 50.82 158.762 120h-32.881c-18.643-51.854-68.308-89.039-126.501-89.039s-107.858 37.185-126.5 89.039h-31.642c19.635-69.18 83.375-120 158.762-120zm-160.286 180c-2.6 0-4.714-2.114-4.714-4.714v-10.286c0-5.057.242-10.058.689-15h30.192c-.575 5.037-.881 10.154-.881 15.342 0 4.953.278 9.842.803 14.658zm-39.36 270c3.059-32.836 16.252-63.247 39.333-90.579l.576-.683c31.523-37.329 78.758-58.738 129.594-58.738h63.521c50.836 0 98.071 21.409 129.598 58.744l.571.676c23.081 27.333 36.274 57.744 39.333 90.58z"
                  fill="#ffffff"
                />
              </g>
            </svg>
          </div>
          <div className="td-cta-content-wrapper">
            <div className="td-cta-content">
              <h3 className="fw6 f6">
                {data.payload.nodeName === undefined
                  ? "Agent Handover"
                  : data.payload.nodeName}
              </h3>
              <small>zxcv</small>
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
