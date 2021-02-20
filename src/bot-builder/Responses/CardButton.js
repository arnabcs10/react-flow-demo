import React,{useState} from "react";

const CardButton = ({ btn, setButtons,btnCount, clickedButton,setClickedButton }) => {
    const [name, setName] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        setButtons((buttons) =>
        buttons.map((bt) => {
            if (bt.id === btn.id) {
            return { ...bt, name: name };
            }
            return bt;
        })
        );
        setClickedButton(null);
    }
  return (
    (clickedButton && clickedButton.id===btn.id) ?
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        className="tr-input"
        placeholder="Enter button name"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        
        style={{ borderBottom:"1px solid #eeeeee" }}
      />
      </form>
      :
    (<span
    className="card-button"
      onClick={(e) => {
        if (e.target.innerHTML !== "✖") {
          setClickedButton(btn);
        }
      }}
    >
      <button
        id="ember99"
        className="tr-btn-blue "
        style={{
            width: "100%",
            height: "32px",
            // borderRadius: "0px 0px 4px 4px",
          }}
      >
        <span>{btn.name}</span>
      </button>
      {btnCount > 1&&(<span
        className="delete-card-btn"
        name="cross"
        id={btn.id}
        onClick={(e) =>

            setButtons((buttons) =>
            buttons.filter((bt) => bt.id !== Number(e.target.id))
          )
        }
      >
        &#10006;
      </span>)}
    </span>)
  );
};

export default CardButton;
