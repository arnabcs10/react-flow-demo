import React,{useState} from "react";

const Card = ({card,setCards}) => {
  const [titleLimit, setTitleLimit] = useState(false);
  const [descriptionLimit, setDescriptionLimit] = useState(false);
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
            <span>Name cannot be more than 80 characters.</span>
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
            <span>Name cannot be more than 160 characters.</span>
          </small>
        </div>
        <div className="card-button">
          <button
            className="tr-btn tr-btn-blue"
            style={{
              width: "100%",
              height: "32px",
              borderRadius: "0px 0px 4px 4px",
            }}
          >
            Button
          </button>
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
