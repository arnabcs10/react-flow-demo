import React, { useState } from "react";

const VideoResponse = () => {
  const [videoLink, setVideolink] = useState("");

  const changeVideoLink = (e) => {
    setVideolink(e.target.value);
  };
  return (
    <div className="video-response">
      <h4 class="apps-grid-title">Video Response</h4>
      <div class="apps-grid">
        <div class="flex flex-column justify-center items-center mih30 miw-100">
          <iframe
            className="flex flex-column items-center custom-styles"
            src={videoLink}
            width="100%"
            height="300"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <br />
      <input
        type="text"
        className="tr-input"
        placeholder="Paste Link"
        onChange={changeVideoLink}
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

export default VideoResponse;
