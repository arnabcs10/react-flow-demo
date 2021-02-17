import React, { useState } from "react";

const VideoResponse = () => {
  const [videoLink, setVideolink] = useState("");
  
  const getVideoId = (vidlink) =>{
    let regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = vidlink.match(regExp);
    if (match && match[2].length == 11){
      return `https://www.youtube.com/embed/${match[2]}`;
    }
  }
  // const getVideoId = (vidlink) =>{
  //   if(vidlink.includes("v=")){
  //     let temp = vidlink.split("v=");
  //     return `https://www.youtube.com/embed/${temp[temp.length-1].slice(0,11)}`;
  //   }else{
  //     let temp = vidlink.split("/");
  //     return `https://www.youtube.com/embed/${temp[temp.length-1].slice(0,11)}`;
  //   }
  // }
  return (
    <div className="video-response">
      <h4 className="apps-grid-title">Video Response</h4>
      <div className="apps-grid">
        <div className="flex flex-column justify-center items-center mih30 miw-100">
          <iframe
            className="flex flex-column items-center custom-styles"
            src={getVideoId(videoLink)}
            width="100%"
            height="300"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <br />
      <input
        type="text"
        className="tr-input"
        placeholder="Paste Link"
        value={videoLink}
        onChange={(e)=> setVideolink(e.target.value)}
      />
      <br />
      <input type="text" className="tr-input" placeholder="Video Title" />
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
