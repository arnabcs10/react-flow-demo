import React from "react";

const textResponse = () => {
  // let tr1 = document.querySelectorAll("tr-input")[0];
  // let tr2 = document.querySelectorAll("tr-input")[1];

  return (
    <div className="text-response">
      <h4 class="apps-grid-title">Text Response</h4>
      <div class="tr-blognav-container pa5 pt6 bg-grouped-table shadow-1 br3">
        <form
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
            </div>
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default textResponse;
