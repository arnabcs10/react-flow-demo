import React, { useState, useEffect, useRef } from "react";
import Picker from "emoji-picker-react";
import QRButton from "./QRButton";
import AutoComplete from "react-tag-autocomplete";

let count = 0;

const QuckReply = () => {
  let nameBox = document.getElementById("button-name");
  const [buttons, setButtons] = useState([]);
  const [clickedButton, setClickedButton] = useState();

  //tags input
  const [tags, setTags] = useState([]);
  const [actions, setActions] = useState([]);

  const actionSuggestion = [
    { id: 1, name: "India" },
    { id: 2, name: "America" },
    { id: 3, name: "Australia" },
    { id: 4, name: "Europe" },
  ];
  const suggestions = [
    { id: 1, name: "Bananas" },
    { id: 2, name: "Mangos" },
    { id: 3, name: "Lemons" },
    { id: 4, name: "Apricots" },
  ];
  const reactTags = useRef(null);
  const reactTags1 = useRef(null);

  const onDelete = (i) => {
    const tagss = tags.slice(0);
    tagss.splice(i, 1);
    setTags(tagss);
  };

  const onAddition = (tag) => {
    const tagss = [].concat(tags, tag);
    setTags(tagss);
  };
  const onDelete1 = (i) => {
    const actionss = actions.slice(0);
    actionss.splice(i, 1);
    setActions(actionss);
  };

  const onAddition1 = (action) => {
    const actionss = [].concat(actions, action);
    setActions(actionss);
  };

  const [buttonInfo, setButtonInfo] = useState(
    clickedButton ? clickedButton.name : ""
  );
  //emoji-picker
  const [chosenEmoji, setChosenEmoji] = useState("");

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    nameBox.value = `${nameBox.value}${chosenEmoji.emoji}`;
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
      <div
        style={{
          width: "100%",
          height: "3px",
          borderTop: "1px solid lightgray",
        }}
      ></div>
      {clickedButton && (
        <div id="ember59" class="first-form-group form-group ember-view">
          <form onSubmit={handleSubmit}>
            <label for="button-name">Button Name</label>
            <input
              placeholder="Button Name"
              value={buttonInfo}
              onChange={(e) => {
                let x = e.target.value.length;
                if (x > 40) {
                  window.alert("Button Name cannot be more than 40 characters");
                }
                setButtonInfo(e.target.value);
              }}
              autoCorrect="off"
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
              top: "-25px",
              left: "95%",
              display: "inline-block",
              cursor: "pointer",
            }}
          >
            &#128512;
          </div>
          <div className="emoji-picker" id="emoji-picker">
            <span
              style={{ float: "right", cursor: "pointer" }}
              onClick={hideEmojiPicker}
            >
              X
            </span>
            <Picker onEmojiClick={onEmojiClick} />
          </div>

          <br />
          <label for="cars">Go to Block</label>
          <AutoComplete
            ref={reactTags1}
            tags={actions}
            suggestions={actionSuggestion}
            onDelete={onDelete1}
            onAddition={onAddition1}
          />

          <label for="button-name" style={{ paddingTop: "10px" }}>
            Save Attributes
          </label>
          {/* <input
            placeholder="Save Attributes"
            autoCorrect="off"
            id="button-name"
            class="user-name ember-text-field tr-input ember-view"
            type="text"
          ></input> */}
          <AutoComplete
            ref={reactTags}
            tags={tags}
            suggestions={suggestions}
            onDelete={onDelete}
            onAddition={onAddition}
          />
        </div>
      )}
    </div>
  );
};

export default QuckReply;
