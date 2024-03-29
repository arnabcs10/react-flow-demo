import React from "react";

const QRButton = ({ btn, setButtons, setClickedButton, setButtonInfo }) => {
  return (
    <span
      className="qr-button"
      onClick={(e) => {
        if (e.target.innerHTML !== "✖") {
          setClickedButton(btn);
          setButtonInfo(btn.name);
        }
      }}
    >
      <button
        id="ember99"
        className="ember-view tr-btn tr-btn-blue tr-themes-uploadbtn"
      >
        <span>{btn.name}</span>
      </button>
      <span
        className="delete-qr"
        name="cross"
        id={btn.id}
        onClick={(e) =>

            setButtons((buttons) =>
            buttons.filter((bt) => bt.id !== Number(e.target.id))
          )
        }
      >
        &#10006;
      </span>
    </span>
  );
};

export default QRButton;
