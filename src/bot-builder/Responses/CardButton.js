import React,{useState} from "react";
import GotoBlock from './GotoBlock';
const CardButton = ({ btn, setButtons,btnCount, clickedButton,setClickedButton }) => {
    const [buttonInfo, setButtonInfo] = useState({});
    const [buttonType, setButtonType] = useState("url");

    const handleButtonInfo = (e)=>{
      setButtonInfo(buttonInfo => ({
        ...buttonInfo,
        type:buttonType,
        [e.target.name]:e.target.value
      }))
    }

    const selectBlock = (block)=>{
      setButtonInfo(buttonInfo => ({
        ...buttonInfo,
        type:buttonType,
        goto:block
      }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setButtons((buttons) =>
        buttons.map((bt) => {
            if (bt.id === btn.id) {
            return { ...bt, ...buttonInfo };//#
            }
            return bt;
        })
        );
        setClickedButton(null);
    }
  return (
    (clickedButton && clickedButton.id===btn.id) ?
    
    <div style={{borderTop:"1px solid #eeeeee", textAlign:"start"}}>
      <br/>
      <form onSubmit={handleSubmit}>
            <label htmlFor="button-name" style={{marginLeft:"10px"}}>Button Name</label>
            <input
              placeholder="Button Name"
              name="name"
              value={buttonInfo.name}
              onChange={handleButtonInfo}
              
              autoComplete="off"
              
              className="user-name ember-text-field tr-input ember-view"
              type="text"
            />
      
          <div style={{display:"flex", justifyContent:"space-around",alignItems:"baseline",paddingTop:"6px"}}>
            <div style={{display:"inherit"}}>
              <input 
              type="radio" 
              id="url" 
              name="url" 
              value={buttonType}
              checked={buttonType==='url'}
              onChange={(e)=> {
                setButtonType('url'); 
                setButtonInfo(buttonInfo => ({
                  ...buttonInfo,
                  type:'url',
                  goto:""
                }));
              }}
              />
            <label htmlFor="url">URL</label>
            </div>
          <div style={{display:"inherit"}}>
          <input 
            type="radio" 
            id="block" 
            name="block" 
            value={buttonType}
            checked={buttonType==='block'}
            onChange={(e)=> {
              setButtonType('block');
              setButtonInfo(buttonInfo => ({
                ...buttonInfo,  
                type:'block',             
                goto:""
              }))
            }}
            />
          <label htmlFor="block">Go to Block</label>
          </div>
          </div>

         
          {buttonType === "url" ?
          (
            <>
               <label style={{marginLeft:"10px"}}>URL</label>
               <input
                  type="text"
                  className="tr-input"
                  placeholder="Enter URL"
                  name="goto"
                  value={buttonInfo.goto}
                  onChange={handleButtonInfo}
                  
                  style={{ borderBottom:"1px solid #eeeeee" }}
                />
            </>
          ):
          (
            <>
              <label style={{marginLeft:"10px"}}>Go to Block</label>
              <GotoBlock initialBlock={buttonInfo.goto} selectBlock={selectBlock}/>
            </>
          )}
          <button className="tr-btn tr-btn-green" style={{margin:"10px",padding:"1px 9px"}}>save</button>
          </form>
          <br />
    </div>
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
