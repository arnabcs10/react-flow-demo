import React from "react";

const Card = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        className="card"
        style={{
          width: "230px",
          borderRadius: "4px",
          display: "inline-block",
          boxShadow:
            " 0 2px 5px 0 rgba(0,0,0,.08),0 2px 10px 0 rgba(0,0,0,.08)",
        }}
      >
        <div
          className="card-img"
          style={{
            height: "150px",
            backgroundColor: "#eeeeee",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label htmlFor="img">Add Image</label>
          <input type="file" id="img" />
        </div>
        <div className="card-title" style={{ margin: "0" }}>
          <textarea
            type="text"
            style={{
              border: "none",
              minWidth: "100px",
              width: "230px",
              minHeight: "38px",
              height: "38px",
            }}
            className="tr-input"
            placeholder="Card Title"
          ></textarea>
        </div>
        <div className="card-description" style={{ margin: "0" }}>
          <textarea
            type="text"
            style={{
              minWidth: "100px",
              width: "230px",
              minHeight: "38px",
              height: "100px",
              border: "none",
              verticalAlign: "top",
            }}
            className="tr-input"
            placeholder="Card Description"
          ></textarea>
        </div>
        <div className="card-button">
          <button
            className="tr-btn tr-btn-blue"
            style={{
              width: "100%",
              height: "32px",
              borderRadius: "0px 0px 4px 4px",
            }}
          >
            Button
          </button>
        </div>
      </div>
      <div
        className="add-card"
        style={{ display: "inline-block", position: "absolute", top: "40%" }}
      >
        <div
          style={{
            width: "30px",
            borderTop: "1px dashed grey",
            display: "inline-block",
          }}
        ></div>
        <button
          className="tr-btn"
          style={{
            color: "#58BBF0",
            fontSize: "small",
            padding: "5px 3px",
          }}
        >
          Add Card
        </button>
      </div>
      <div className="add-btn" style={{ marginLeft: "18%" }}>
        <div
          style={{
            height: "30px",
            borderLeft: "1px dashed grey",
          }}
        ></div>
        <button
          className="tr-btn"
          style={{
            color: "#58BBF0",
            fontSize: "small",
            padding: "5px 3px",
            marginLeft: "-25px",
          }}
        >
          Add Button
        </button>
      </div>
    </div>
  );
};

export default Card;
