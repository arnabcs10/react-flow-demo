import React, { useState } from "react";
import TextResponse from "./TextResponse";
import ImageGIFResponse from "./ImageResponse";
import VideoResponse from "./VideoResponse";
import QuickReply from "./QuickReply";
import UserSays from "./UserSays";
import CardRespone from "./CardResponse";
import "./main.css";
import "./style_node.css";

function SideBarNodeDetails({ closeModal, clickedNode, submitHandler }) {
  // document.getElementById("sidebar").style =
  //   "  position: absolute; top: 0; left: auto; right: 0;  background-color: #f2f4f7; transition: 0.5s; zIndex: 100000000; padding: 20px;";

  const [payload, setPayLoad] = useState(clickedNode.data.payload);

  const handelSubmit = (e) => {
    e.preventDefault();
    submitHandler(payload);
  };

  let nodeType;
  const switchCase = () => {
    switch (clickedNode.type) {
      case "textNode":
        return (nodeType = <TextResponse />);
      case "imageNode":
        return (nodeType = <ImageGIFResponse />);
      case "videoNode":
        return (nodeType = <VideoResponse />);
      case "quickreplyNode":
        return (nodeType = <QuickReply />);
      case "cardNode":
        return (nodeType = <CardRespone />);
      default:
        return null;
    }
  };
  switchCase();
  return (
    //   <div className="sidebar-1">
    <div style={{ minHeight: "97.8vh" }}>
      <button
        className="tr-btn"
        style={{ background: "linear-gradient(#cccccc, #d3d3d3)" }}
        id="close"
        onClick={() => closeModal()}
      >
        Close
      </button>
      <form onSubmit={handelSubmit}>
        <div className="search" style={{ width: "450px" }}>
          <input
            className="tr-input"
            style={{ opacity: 1, zIndex: 1 }}
            placeholder="Node Name"
            type="text"
            value={payload === undefined ? "" : payload.nodeName}
            onChange={(e) =>
              setPayLoad({ ...payload, nodeName: e.target.value })
            }
          />
        </div>
        <button className="tr-btn tr-btn-green" id="save">
          Save
        </button>
      </form>
      <br />
      <div className="row">
        <div className="col">
          <div className="tabs">
            <div className="tab">
              <input type="checkbox" id="chck1" />
              <label className="tab-label f6" htmlFor="chck1">
                <span>Contexts </span>
              </label>
              <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" id="chck2" />
              <label className="tab-label f6" htmlFor="chck2">
                <span>
                  Conditions
                  <span data-desc="Custom condition to manage block trigger">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="16"
                      height="16"
                      viewBox="0 0 93.936 93.936"
                      enableBackground="new 0 0 93.936 93.936;"
                      fill="#444444"
                    >
                      <g>
                        <path
                          d="M80.179,13.758c-18.342-18.342-48.08-18.342-66.422,0c-18.342,18.341-18.342,48.08,0,66.421
                    c18.342,18.342,48.08,18.342,66.422,0C98.521,61.837,98.521,32.099,80.179,13.758z M44.144,83.117
                    c-4.057,0-7.001-3.071-7.001-7.305c0-4.291,2.987-7.404,7.102-7.404c4.123,0,7.001,3.044,7.001,7.404
                    C51.246,80.113,48.326,83.117,44.144,83.117z M54.73,44.921c-4.15,4.905-5.796,9.117-5.503,14.088l0.097,2.495
                    c0.011,0.062,0.017,0.125,0.017,0.188c0,0.58-0.47,1.051-1.05,1.051c-0.004-0.001-0.008-0.001-0.012,0h-7.867
                    c-0.549,0-1.005-0.423-1.047-0.97l-0.202-2.623c-0.676-6.082,1.508-12.218,6.494-18.202c4.319-5.087,6.816-8.865,6.816-13.145
                    c0-4.829-3.036-7.536-8.548-7.624c-3.403,0-7.242,1.171-9.534,2.913c-0.264,0.201-0.607,0.264-0.925,0.173
                    s-0.575-0.327-0.693-0.636l-2.42-6.354c-0.169-0.442-0.02-0.943,0.364-1.224c3.538-2.573,9.441-4.235,15.041-4.235
                    c12.36,0,17.894,7.975,17.894,15.877C63.652,33.765,59.785,38.919,54.73,44.921z"
                        />
                      </g>
                    </svg>
                  </span>{" "}
                </span>
              </label>
              <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
              </div>
            </div>
            <UserSays />
            <div className="tab">
              <input type="checkbox" id="chck4" />
              <label className="tab-label f6" htmlFor="chck4">
                <span>
                  Bot Response
                  <span data-desc="Customisable bot response to the user intents">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="16"
                      height="16"
                      viewBox="0 0 93.936 93.936"
                      enableBackground="new 0 0 93.936 93.936;"
                      fill="#444444"
                    >
                      <g>
                        <path
                          d="M80.179,13.758c-18.342-18.342-48.08-18.342-66.422,0c-18.342,18.341-18.342,48.08,0,66.421
                    c18.342,18.342,48.08,18.342,66.422,0C98.521,61.837,98.521,32.099,80.179,13.758z M44.144,83.117
                    c-4.057,0-7.001-3.071-7.001-7.305c0-4.291,2.987-7.404,7.102-7.404c4.123,0,7.001,3.044,7.001,7.404
                    C51.246,80.113,48.326,83.117,44.144,83.117z M54.73,44.921c-4.15,4.905-5.796,9.117-5.503,14.088l0.097,2.495
                    c0.011,0.062,0.017,0.125,0.017,0.188c0,0.58-0.47,1.051-1.05,1.051c-0.004-0.001-0.008-0.001-0.012,0h-7.867
                    c-0.549,0-1.005-0.423-1.047-0.97l-0.202-2.623c-0.676-6.082,1.508-12.218,6.494-18.202c4.319-5.087,6.816-8.865,6.816-13.145
                    c0-4.829-3.036-7.536-8.548-7.624c-3.403,0-7.242,1.171-9.534,2.913c-0.264,0.201-0.607,0.264-0.925,0.173
                    s-0.575-0.327-0.693-0.636l-2.42-6.354c-0.169-0.442-0.02-0.943,0.364-1.224c3.538-2.573,9.441-4.235,15.041-4.235
                    c12.36,0,17.894,7.975,17.894,15.877C63.652,33.765,59.785,38.919,54.73,44.921z"
                        />
                      </g>
                    </svg>
                  </span>{" "}
                </span>
              </label>
              <div className="tab-content">{nodeType}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarNodeDetails;
