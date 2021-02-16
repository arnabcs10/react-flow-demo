import React, { useState, useEffect } from "react";
import Picker from "emoji-picker-react";

const TextResponseInput = ({ response, textResponses, setTextResponses }) => {
  const [content, setContent] = useState(response.content);

  const showEmojis = () => {
    document.getElementById("emoji-picker").style = "display:inline-block";
  };

  const changeContent = (event, emojiObject) => {
    let textContent = `${content}${emojiObject.emoji}`;
    setContent(textContent);
  };

  const hideEmojiPicker = () => {
    console.log("Hide");
    document.getElementById("emoji-picker").style = "display:none";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(response.id);
    setTextResponses((textResponses) =>
      textResponses.map((res) => {
        if (res.id === response.id) {
          return { ...res, content: content };
        }
        return res;
      })
    );
  };

  useEffect(() => {
    console.log(response.id);
    setTextResponses((textResponses) =>
      textResponses.map((res) => {
        if (res.id === response.id) {
          return { ...res, content: content };
        }
        return res;
      })
    );
    // eslint-disable-next-line
  }, [content]);
  return (
    <form
      className="tr-blognav"
      noValidate="novalidate"
      onSubmit={handleSubmit}
    >
      <div id="ember55" className="sortable-objects ember-view">
        <div
          draggable="false"
          id="us-1"
          className="js-draggableObject draggable-object ember-view"
        >
          <div
            id="ember57"
            className="tr-blognav-item tr-blognav-item--sortable ember-view"
          >
            <div className="tr-blognav-line">
              <span id="ember60" className="tr-blognav-url ember-view">
                <textarea
                  id="ember61"
                  className="ember-text-field tr-input tr-textarea ember-view"
                  type="text"
                  cols="6"
                  rows="50"
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
                <p className="response" hidden=""></p>
              </span>
            </div>

            {textResponses.length > 1 && (
              <button
                className="tr-blognav-delete"
                onClick={(e) =>
                  setTextResponses((textResponses) =>
                    textResponses.filter((res) => res.id !== response.id)
                  )
                }
                type="button"
                data-ember-action=""
                data-ember-action-62="62"
              >
                <svg viewBox="0 0 32 32">
                  <path d="M30.688 4H22V.687a.694.694 0 00-.688-.688H10.687a.694.694 0 00-.688.688V4H1.311c-.375 0-.625.313-.625.688s.25.625.625.625h3.375v26c0 .375.25.688.625.688h21.375c.375 0 .625-.313.625-.688v-26h3.375c.375 0 .625-.25.625-.625S31.061 4 30.686 4zM11.313 1.313h9.375v2.688h-9.375zM26 30.688H6V5.313h20zM10.688 9.313a.694.694 0 00-.688.688v15.313c0 .375.313.688.688.688s.625-.313.625-.688V10.001c0-.375-.25-.688-.625-.688zm5.312 0a.694.694 0 00-.688.688v15.313c0 .375.313.688.688.688s.688-.313.688-.688V10.001A.694.694 0 0016 9.313zm4.688.687v15.313c0 .375.25.688.625.688s.688-.313.688-.688V10c0-.375-.313-.688-.688-.688s-.625.313-.625.688z"></path>
                </svg>
                <span className="sr-only">Delete</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        id="emoji"
        onClick={showEmojis}
        style={{
          position: "relative",
          top: "-40px",
          left: "90%",
          display: "inline-block",
          cursor: "pointer",
          color: "red",
        }}
      >
        &#128512;
      </div>
      <div className="emoji-picker" style={{ top: "40%" }} id="emoji-picker">
        <span
          style={{ float: "right", cursor: "pointer", color: "red" }}
          onClick={hideEmojiPicker}
        >
          &#10006;
        </span>
        <Picker onEmojiClick={changeContent} />
      </div>
    </form>
  );
};

export default TextResponseInput;
