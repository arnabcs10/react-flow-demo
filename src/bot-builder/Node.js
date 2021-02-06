import React, { memo } from "react";
import { Handle, removeElements } from "react-flow-renderer";
import "./style1.css";
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
        // style={{ background: '#555' }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />

      <div className="node">
        <div className="node-header">
          <i className="far fa-envelope-open"></i>
          <div className="node-name">
            {/* <i className="far fa-envelope-open"></i> */}
          </div>
          <div className="cross">
            <button onClick={deleteNode}>
              <i className="fas fa-times-circle"></i>
            </button>
          </div>
        </div>
        <div className="message">
          <strong>{data.label} xxxx</strong>.
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
        style={{ cursor: "pointer" }}
        // style={{ top: 10, background: '#555' }}
      />
    </>
  );
});
