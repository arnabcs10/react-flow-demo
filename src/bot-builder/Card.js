import React from "react";

const Card = () => {
  return (
    <div className="card" style={{ width: "200px", borderRadius: "4px" }}>
      <div
        className="card-img"
        style={{ height: "150px", backgroundColor: "#eeeeee" }}
      >
        <label htmlFor="img">Add Image</label>
        <input type="file" id="img" />
      </div>
      <div className="card-title" style={{ margin: "0" }}>
        <textarea
          type="text"
          style={{
            width: "200px",
            border: "none",
            minWidth: "100px",
            width: "200px",
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
            width: "200px",
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
          style={{ width: "100%", height: "32px", borderRadius: "0px" }}
        >
          Button
        </button>
        <button style={{ width: "100%", height: "32px", borderRadius: "0px" }}>
          Add Another
        </button>
      </div>
    </div>
  );
};

export default Card;
