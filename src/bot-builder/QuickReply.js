import React, {useState,useEffect} from 'react';
let count = 0;
const QuckReply = () => {

    const [buttons, setButtons] = useState([]);

    const addAnotherButton = ()=>{
        ++count;
        const newButton = {
            id: count,
            btnElement: (<span className="qr-button" key={count}>
                            <a                
                            id="ember99"                            
                            className="ember-view tr-btn tr-btn-blue tr-themes-uploadbtn"
                            >
                            <span>QR</span>
                            </a>
                            <span 
                                className="delete-qr" 
                                id={count}  
                                onClick={(e)=> setButtons(buttons => buttons.filter(bt => bt.id !== Number(e.target.id) ))}
                            >
                                X
                            </span>
                        </span>)
        }
        setButtons(buttons => [...buttons,newButton]);
    }      

    useEffect(() => {
        setButtons([
            {
                id:count,
                btnElement: (<span className="qr-button" key={count}>
                                <a                      
                                id="ember99"
                                className="ember-view tr-btn tr-btn-blue tr-themes-uploadbtn"
                                >
                                <span>QR</span>
                                </a>
                                <span 
                                id={count} 
                                className="delete-qr"  
                                onClick={(e)=> setButtons(buttons => buttons.filter(bt => bt.id !== Number(e.target.id) ))}>
                                X
                                </span>
                            </span>)
            }
        ])
       
    }, []);                
  
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
            {buttons.map(bt => bt.btnElement)}
            {buttons.length<10 && (<a
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
            </a>)}
          </div> 
        </div>
        <div
          style={{
            width: "100%",
            height: "3px",
            borderTop: "1px solid lightgray",
          }}
        ></div>
        <div id="ember59" class="first-form-group form-group ember-view">
          <label for="button-name">Button Name</label>
          <input
            placeholder="Button Name"
            autocorrect="off"
            id="button-name"
            class="user-name ember-text-field tr-input ember-view"
            type="text"
          ></input>
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
        </div>
      </div>
    );
  };
  
  export default QuckReply;
  