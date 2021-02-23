import React, { useState, useEffect } from "react";
import Picker from "emoji-picker-react";
import QRButton from "./QRButton";
// import AutoComplete from "react-tag-autocomplete";
import GotoBlock from "./GotoBlock";
import Attributes from "./Atributes";

//temporary id counter
let count = 0;
let attrCount = 0;
const QuckReply = ({botReplys}) => {
  console.log(botReplys);
  // let nameBox = document.getElementById("button-name");
  const [buttons, setButtons] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [clickedButton, setClickedButton] = useState();
  const [err, setErr] = useState(false);

  //goto block
  const selectBlock = (block)=>{
    console.log(block); //temporary
  }
  //tags input
  // const [tags, setTags] = useState([]);

  const [buttonInfo, setButtonInfo] = useState(
    clickedButton ? clickedButton.name : ""
  );
  //emoji-picker
  const [chosenEmoji, setChosenEmoji] = useState("");

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    if (buttonInfo.length >= 40) {
      setErr(true);
    } else {
      setButtonInfo(buttonInfo => `${buttonInfo}${emojiObject.emoji}`);
      setErr(false);
    }
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

  const addAnotherAttribute = ()=>{
    ++attrCount;
    const newAttribute = {
        id: attrCount,
        attrKey:"",
        attrValue:""
    }
    setAttributes(attributes => [...attributes,newAttribute]);
}

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
    setAttributes([
      {
        id:attrCount,
        attrKey:"",
        attrValue:""
      }
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
        <div id="ember59" className="first-form-group form-group ember-view">
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
            <label htmlFor="button-name">Button Name</label>
            <input
              placeholder="Button Name"
              value={buttonInfo}
              maxLength="40"
              onChange={(e) => {
                setButtonInfo(e.target.value);
              }}
              onInput={(e) => {
                if (e.target.value.length >= 40) {
                  setErr(true);
                } else {
                  setErr(false);
                }
              }}
              autoComplete="off"
              id={err ? "button-name" : ""}
              className="user-name ember-text-field tr-input ember-view"
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
          <small
            style={
              err
                ? { color: "red", display: "inline-block" }
                : { display: "none" }
            }
          >
            <span>Name cannot be more than 40 characters.</span>
          </small>

          <br />

          <label>Go to Block</label>

          <GotoBlock selectBlock={selectBlock}/>
          <br />
          {attributes.map(attribute => <Attributes key={attribute.id} attributesCount={attributes.length} attribute={attribute} setAttributes={setAttributes}/> )}
          
          {attributes.length < 3 && (
          <button 
            className="tr-btn" 
            style={{
              color: "#58bbf0",
              border: "1px solid #58bbf0",
              borderRadius: "20%/50%",
              marginTop: "10px",
              fontSize: "1.2rem",
              textAlign: "center",
              padding: "6px 12px",
            }}
            onClick={addAnotherAttribute}
          >
            Add Attribute
          </button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuckReply;
