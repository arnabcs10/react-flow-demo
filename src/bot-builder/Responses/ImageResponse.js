import React, { useState } from "react";

const ImageGIFResponse = () => {
  const [link, setLink] = useState("");

  const changeLink = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="imgGIF">
      <h4 class="apps-grid-title">Image/GIF Response</h4>
      <div class="apps-grid">
        <div class="flex flex-column justify-center items-center mih30 miw-100">
          <img
            src={link}
            className="flex flex-column items-center custom-styles"
            width="100%"
            id="image-upload"
            style={{ textAlign: "center" }}
            alt=""
          />
        </div>
      </div>
      <br />
      <input
        type="text"
        className="tr-input"
        placeholder="Paste Link"
        onChange={changeLink}
      />
      <br />
      <input type="text" className="tr-input" placeholder="Image Title" />
      <br />
      <input
        type="text"
        className="tr-input"
        placeholder="Descripton"
        style={{ height: "60px" }}
      />
    </div>
  );
};

export default ImageGIFResponse;
