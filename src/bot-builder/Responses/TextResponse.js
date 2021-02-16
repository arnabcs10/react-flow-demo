import React, {useEffect,useState} from 'react';
import TextResponseInput from './TextResponseInput';
let count = 1;

const TextResponse = ({botReplys}) => {
  
  
  const [textResponses, setTextResponses] = useState([]);

  const addAnotherInput = ()=>{
    ++count;
    const newInput = {
        id: count,
        content:""
    }
    setTextResponses(textResponses => [...textResponses,newInput]);
}

  useEffect(() => {
    const initialResponse = [
      {
          id:count,
          content:""
         
      }
  ];
  let responses ;
  if(botReplys){
    count = botReplys.length ;
    responses = botReplys.map((rep,i)=>{
      return {
        id:i,
        content:rep
      }
    });
  }else{
    responses = initialResponse;
  }
    setTextResponses(responses);
    // eslint-disable-next-line
}, []);


  return (
    <div className="text-response">
      <h4 className="apps-grid-title">Text Response</h4>
      <div className="tr-blognav-container pa5 pt6 bg-grouped-table shadow-1 br3">
      {textResponses.map((response, i) => <TextResponseInput key={response.id} response={response} textResponses={textResponses} setTextResponses={setTextResponses}/>)}
          
          <button
            type="button"
            style={{
              color: "#58bbf0",
              border: "1px solid #58bbf0",
              borderRadius: "20%/50%",
              marginLeft: "20px",
              fontSize: "1.2rem",
              textAlign: "center",
              padding: "6px 12px",
            }}
            className="tr-btn"
            onClick={addAnotherInput}
          >
            + Add Another
          </button>
        {/* <form
          id="settings-navigation"
          class="tr-blognav"
          novalidate="novalidate"
          autocomplete="off"
        >
          <div class="sortable-objects">
            <div draggable="false" class="js-draggableObject draggable-object">
              <div class="tr-blognav-item tr-blognav-item--sortable">
                <div class="tr-blognav-line">
                  <span class="tr-blognav-url">
                    <div
                      class="textarea tr-input"
                      id="tr-1"
                      contenteditable="true"
                    ></div>
                    <p class="response" hidden=""></p>
                  </span>
                </div>
              </div>
            </div> */}
            {/* <div draggable="false" class="js-draggableObject draggable-object ">
              <div class="tr-blognav-item tr-blognav-item--sortable">
                <div class="tr-blognav-line">
                  <span class="tr-blognav-url">
                    <div
                      class="textarea tr-input"
                      id="tr-2"
                      contenteditable="true"
                    ></div>
                    <p class="response" hidden=""></p>
                  </span>
                </div>
              </div>
            </div>
            <div draggable="false" class="js-draggableObject draggable-object ">
              <div class="tr-blognav-item tr-blognav-item--sortable">
                <div class="tr-blognav-line">
                  <span class="tr-blognav-url">
                    <div
                      class="textarea tr-input"
                      id="tr-3"
                      contenteditable="true"
                    ></div>
                    <p class="response" hidden=""></p>
                  </span>
                </div>
              </div>
            </div>
            <div draggable="false" class="js-draggableObject draggable-object ">
              <div class="tr-blognav-item tr-blognav-item--sortable ">
                <div class="tr-blognav-line">
                  <span class="tr-blognav-url ">
                    <div
                      class="textarea tr-input"
                      // onInput={showTextarea}
                      id="tr-4"
                      contenteditable="true"
                    ></div>
                    <p class="response" hidden=""></p>
                  </span>
                </div>
              </div>
            </div> */}
          {/* </div>
        </form> */}
      </div>
    </div>
  );
};

export default TextResponse;
