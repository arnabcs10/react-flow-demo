import React,{useState,useEffect} from "react";
import CardButton from './CardButton';
let count = 0;
const Card = ({card,setCards,shiftLeft,shiftRight,cardCount}) => {
  const [titleLimit, setTitleLimit] = useState(false);
  const [descriptionLimit, setDescriptionLimit] = useState(false);
  //====
  const [buttons, setButtons] = useState([...card.buttons]);
  const [clickedButton, setClickedButton] = useState();

  const addAnotherButton = () => {
    ++count;
    const newButton = {
      id: count,
      name: "Click",
    };
    setButtons((buttons) => [...buttons, newButton]);
    setClickedButton(newButton);
  };
  useEffect(() => {
    let initialButtons = card.buttons ? card.buttons : [
      {
        id: count,
        name: "Click",
      },
    ];
    setButtons(initialButtons);
  }, []);
  useEffect(() => {
    setCards((cards) =>
    cards.map((crd) => {
      if (crd.id === card.id) {
        return { ...crd, buttons: buttons };//
      }
      return crd;
    }))
  }, [buttons]);
  //====

  const handleChange = (evt)=>{
   
    setCards((cards) =>
    cards.map((crd) => {
      if (crd.id === card.id) {
        return { ...crd, [evt.target.name]: evt.target.value };//
      }
      return crd;
    }))
  }
  return (
    // <div style={{ position: "relative" }}>
      <div
        className="card"
        style={{
          width: "250px",
          borderRadius: "4px",
          display: "inline-block",
          boxShadow:
            " 0 2px 5px 0 rgba(0,0,0,.08),0 2px 10px 0 rgba(0,0,0,.08)",
        }}
      >
        {/* <div
          className="card-img"
          style={{
            height: "150px",
            backgroundColor: "#eeeeee",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label htmlFor="img">Add Image</label>
          <input type="file" id="img" />
        </div> */}
         <div className="apps-grid">
            <div className="flex flex-column justify-center items-center mih30 miw-100">
              <img
                src={card.src}
                className="flex flex-column items-center custom-styles"
                width="100%"
                id="image-upload"
                style={{ textAlign: "center",backgroundColor: "#eeeeee",maxHeight:"140px" }}
                alt=""
              />
            </div>
            
            {cardCount > 1 &&(
              <>
            <button
              className="tr-blognav-delete card-delete"
              onClick={(e) =>
                setCards((cards) =>
                  cards.filter((crd) => crd.id !== card.id)
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

            <button
              className="tr-blognav-delete card-shift-arrow"
              type="button"
              data-ember-action=""
              data-ember-action-62="62"  
              style={{right: "0px"}}   
              onClick={()=> shiftRight(card.id)}              
            >
              →      
            </button>

            <button
              className="tr-blognav-delete card-shift-arrow"
              type="button"
              data-ember-action=""
              data-ember-action-62="62"  
              style={{ left: "0px"}}  
              onClick={()=> shiftLeft(card.id)}  
            >
              ←      
            </button>
            </>
            )}

          </div>
        <input
        type="text"
        className="tr-input"
        placeholder="Paste Image Link"
        name="src"
        value={card.src}
        onChange={handleChange}
        style={{ borderBottom:"1px solid #eeeeee" }}
      />
        <div className="card-title" style={{ margin: "0",borderBottom:"1px solid #eeeeee"}}>
          <textarea
            type="text"
            style={{
              border: "none",
              minWidth: "100px",
              // width: "230px",
              minHeight: "40px",
              height: "44px",
              margin:"10px 0px",
              padding:"12px 10px",
              overflow:"hidden"
            }}
            className="tr-input"
            placeholder="Card Title"
            maxLength="80"
            name="title"
            value={card.title}
            onChange={handleChange}
            onInput={(e) => {
              if (e.target.value.length >= 80) {
                setTitleLimit(true);
              } else {
                setTitleLimit(false);
              }
            }}
          ></textarea>
          <small
            style={
              titleLimit
                ? { color: "red", display: "inline-block" }
                : { display: "none" }
            }
          >
            <span>Title cannot be more than 80 characters.</span>
          </small>

          
        </div>
        <div className="card-description" style={{ margin: "0" }}>
          <textarea
            type="text"
            style={{
              minWidth: "100px",
              // width: "230px",
              minHeight: "38px",
              height: "100px",
              border: "none",
              verticalAlign: "top",
              overflow:"hidden",
              padding:"12px 7px",
              margin:"10px 0px"
            }}
            className="tr-input"
            placeholder="Card Description"
            maxLength="160"
            name="description"
            value={card.description}
            onChange={handleChange}
            onInput={(e) => {
              if (e.target.value.length >= 160) {
                setDescriptionLimit(true);
              } else {
                setDescriptionLimit(false);
              }
            }}
          ></textarea>
          <small
            style={
              descriptionLimit
                ? { color: "red", display: "inline-block" }
                : { display: "none" }
            }
          >
            <span>Description cannot be more than 160 characters.</span>
          </small>
        </div>
        <div className="cardbutton">
          
          {buttons.map((bt) => (
            <CardButton
              key={bt.id}
              btn={bt}
              btnCount={buttons.length}
              setButtons={setButtons}
              clickedButton={clickedButton}
              setClickedButton={setClickedButton}
            />
          ))}
          {buttons.length <3 &&(<button
            className="tr-btn "
            style={{
              width: "100%",
              height: "32px",
              borderRadius: "0px 0px 4px 4px",
              color: "#58BBF0"
            }}
            onClick={addAnotherButton}
          >
            +Add Button
          </button>)}
        </div>
      </div>
      // {/* <div
      //   className="add-card"
      //   style={{ display: "inline-block", position: "absolute", top: "40%" }}
      // >
      //   <div
      //     style={{
      //       width: "30px",
      //       borderTop: "1px dashed grey",
      //       display: "inline-block",
      //     }}
      //   ></div>
      //   <button
      //     className="tr-btn"
      //     style={{
      //       color: "#58BBF0",
      //       fontSize: "small",
      //       padding: "5px 3px",
      //     }}
      //   >
      //     Add Card
      //   </button>
      // </div> */}
    //   {/* <div className="add-btn" style={{ marginLeft: "18%" }}>
    //     <div
    //       style={{
    //         height: "30px",
    //         borderLeft: "1px dashed grey",
    //       }}
    //     ></div>
    //     <button
    //       className="tr-btn"
    //       style={{
    //         color: "#58BBF0",
    //         fontSize: "small",
    //         padding: "5px 3px",
    //         marginLeft: "-25px",
    //       }}
    //     >
    //       Add Button
    //     </button>
    //   </div> */}
    // {/* </div> */}
  );
};

export default Card;

// ←