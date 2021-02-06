import React, {useState,useEffect} from 'react';
import QRButton from './QRButton';
let count = 0;
const QuckReply = () => {

    const [buttons, setButtons] = useState([]);
    const [clickedButton, setClickedButton] = useState();
    const [buttonInfo, setButtonInfo] = useState(clickedButton?clickedButton.name:"");
    

    const addAnotherButton = ()=>{
        ++count;
        const newButton = {
            id: count,
            name:"Click"
        }
        setButtons(buttons => [...buttons,newButton]);
        setClickedButton(newButton);
    }      

    useEffect(() => {
        setButtons([
            {
                id:count,
                name:"Click"
            }
        ])
       
    }, []);                
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(clickedButton,buttonInfo);
    setButtons( buttons => buttons.map(bt => {
      if(bt.id === clickedButton.id){
        return {...bt,name:buttonInfo}
      }
      return bt;
    }));
    setButtonInfo("");
  }

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
            {buttons.map(bt => <QRButton key={bt.id} btn={bt} setButtons={setButtons} setClickedButton={setClickedButton} setButtonInfo={setButtonInfo}/>)}
            {buttons.length<10 && (<button
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
            </button>)}
          </div> 
        </div>
        <div
          style={{
            width: "100%",
            height: "3px",
            borderTop: "1px solid lightgray",
          }}
        ></div>
        {clickedButton &&(<div id="ember59" class="first-form-group form-group ember-view">
         <form onSubmit={handleSubmit}>
          <label for="button-name">Button Name</label>
          <input
            placeholder="Button Name"
            value={buttonInfo}
            onChange={(e) => setButtonInfo(e.target.value)}
            autoCorrect="off"
            id="button-name"
            class="user-name ember-text-field tr-input ember-view"
            type="text"
          ></input>
         </form>
          
          <br />
          <label for="cars">Go to Block</label>
          <select name="cars" className="tr-input" id="actions">
            <option value="volvo" className="tr-input">
              Volvo
            </option>
            <option value="saab" className="tr-input">
              Saab
            </option>
            <option value="mercedes" className="tr-input">
              Mercedes
            </option>
            <option value="audi" className="tr-input">
              Audi
            </option>
          </select>

          <label for="button-name" style={{paddingTop:"10px"}}>Save Attributes</label>
          <input
            placeholder="Save Attributes"
            autoCorrect="off"
            id="button-name"
            class="user-name ember-text-field tr-input ember-view"
            type="text"
          ></input>

        </div>)}
      </div>
    );
  };
  
  export default QuckReply;
  