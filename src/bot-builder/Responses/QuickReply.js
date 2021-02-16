import React, { useState, useEffect, useRef } from "react";
import Picker from "emoji-picker-react";
import QRButton from "./QRButton";
import AutoComplete from "react-tag-autocomplete";
import GotoBlock from "./GotoBlock";

let count = 0;

const QuckReply = ({botReplys}) => {
  console.log(botReplys);
  let nameBox = document.getElementById("button-name");
  const [buttons, setButtons] = useState([]);
  const [clickedButton, setClickedButton] = useState();

  //goto block

  const options = {
    maxWidth: "100vw",
    width: "100%",
    background: "white",
    color: "#222222",
  };

  const blocks = [
    { name: "USA" },
    { name: "India" },
    { name: "Argentina" },
    { name: "Armenia" },
  ];

  //tags input
  const [tags, setTags] = useState([]);

  const suggestions = [
    { id: 1, name: "Bananas" },
    { id: 2, name: "Mangos" },
    { id: 3, name: "Lemons" },
    { id: 4, name: "Apricots" },
  ];
  const reactTags = useRef(null);

  const onDelete = (i) => {
    const tagss = tags.slice(0);
    tagss.splice(i, 1);
    setTags(tagss);
  };

  const onAddition = (tag) => {
    const tagss = [].concat(tags, tag);
    setTags(tagss);
  };

  const [buttonInfo, setButtonInfo] = useState(
    clickedButton ? clickedButton.name : ""
  );
  //emoji-picker
  const [chosenEmoji, setChosenEmoji] = useState("");

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    nameBox.value = `${nameBox.value}${emojiObject.emoji}`;
    setButtonInfo(nameBox.value);
    nameBox.focus();
  };

  const showEmojis = () => {
    document.getElementById("emoji-picker").style = "display:inline-block";
  };

  const addAnotherButton = () => {
    ++count;
    const newButton = {
      id: count,
      name: "Click",
    };
    setButtons((buttons) => [...buttons, newButton]);
    setClickedButton(newButton);
  };

  const hideEmojiPicker = () => {
    console.log("Hide");
    document.getElementById("emoji-picker").style = "display:none";
  };

  useEffect(() => {
    setButtons([
      {
        id: count,
        name: "Click",
      },
    ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(clickedButton, buttonInfo);
    setButtons((buttons) =>
      buttons.map((bt) => {
        if (bt.id === clickedButton.id) {
          return { ...bt, name: buttonInfo };
        }
        return bt;
      })
    );
    setButtonInfo("");
  };

  return (
    <div className="quick-reply">
      <h4 className="apps-grid-title">Quick Reply</h4>
      <div className="tr-themes-container">
        <div id="ember97" className="ember-view">
          <div className="apps-grid">
            <div className="apps-grid-cell">
              <div className="apps-card-app theme-list-item--active">
                <div className="apps-card-left">
                  <div className="apps-card-meta">
                    <input
                      type="text"
                      name="QR"
                      placeholder="Type Something..."
                      id="QR"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          {buttons.map((bt) => (
            <QRButton
              key={bt.id}
              btn={bt}
              setButtons={setButtons}
              setClickedButton={setClickedButton}
              setButtonInfo={setButtonInfo}
            />
          ))}
          {buttons.length < 10 && (
            <button
              id="add-button"
              onClick={addAnotherButton}
              type="button"
              className="ember-view tr-btn tr-themes-uploadbtn"
              style={{
                border: "1px solid grey",
                background: "none",
                color: "#222222",
              }}
            >
              <span>Add New +</span>
            </button>
          )}
        </div>
      </div>

      {clickedButton && (
        <div id="ember59" class="first-form-group form-group ember-view">
          <span
            style={{
              float: "right",
              cursor: "pointer",
              position: "absolute",
              right: "0",
              top: "-10px",
            }}
            onClick={() => {
              setClickedButton("");
            }}
          >
            &#10006;
          </span>

          <form onSubmit={handleSubmit}>
            <label for="button-name">Button Name</label>
            <input
              placeholder="Button Name"
              value={buttonInfo}
              onChange={(e) => {
                setButtonInfo(e.target.value);
              }}
              onInput={(e) => {
                let x = e.target.value.length;
                if (x > 40) {
                  window.alert("Button Name cannot be more than 40 characters");
                }
              }}
              autoComplete="off"
              id="button-name"
              class="user-name ember-text-field tr-input ember-view"
              type="text"
            />
          </form>
          <div
            id="emoji"
            onClick={showEmojis}
            style={{
              position: "relative",
              top: "-30px",
              left: "95%",
              display: "inline-block",
              cursor: "pointer",
              color: "red",
            }}
          >
            &#128512;
          </div>
          <div
            className="emoji-picker"
            id="emoji-picker"
            style={{ position: "absolute" }}
          >
            <span
              style={{ float: "right", cursor: "pointer", color: "red" }}
              onClick={hideEmojiPicker}
            >
              &#10006;
            </span>
            <Picker onEmojiClick={onEmojiClick} />
          </div>

          <br />

          <label>Go to Block</label>

          <GotoBlock />
          <br />

          <button className="tr-btn" style={{ color: "#58bbf0" }}>
            Add Attribute
          </button>
        </div>
      )}
    </div>
  );
};

export default QuckReply;
