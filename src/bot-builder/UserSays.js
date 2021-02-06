const UserSays = () => {
  const addTextArea = () => {
    let container = document.querySelector(".sortable-objects");
    let textField = document.querySelector("#us-1").cloneNode(true);
    container.appendChild(textField);
  };
  // const deleteTextField = () => {};

  return (
    <div className="tab">
      <input type="checkbox" id="chck3" />
      <label className="tab-label f6" htmlFor="chck3">
        <span>
          User Says or Intents
          <span
            data-desc="Something that user says during conversation to tigger this block"
            id="user-says"
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0 0 93.936 93.936"
              enableBackground="new 0 0 93.936 93.936;"
              fill="#444444"
            >
              <g>
                <path
                  d="M80.179,13.758c-18.342-18.342-48.08-18.342-66.422,0c-18.342,18.341-18.342,48.08,0,66.421
            c18.342,18.342,48.08,18.342,66.422,0C98.521,61.837,98.521,32.099,80.179,13.758z M44.144,83.117
            c-4.057,0-7.001-3.071-7.001-7.305c0-4.291,2.987-7.404,7.102-7.404c4.123,0,7.001,3.044,7.001,7.404
            C51.246,80.113,48.326,83.117,44.144,83.117z M54.73,44.921c-4.15,4.905-5.796,9.117-5.503,14.088l0.097,2.495
            c0.011,0.062,0.017,0.125,0.017,0.188c0,0.58-0.47,1.051-1.05,1.051c-0.004-0.001-0.008-0.001-0.012,0h-7.867
            c-0.549,0-1.005-0.423-1.047-0.97l-0.202-2.623c-0.676-6.082,1.508-12.218,6.494-18.202c4.319-5.087,6.816-8.865,6.816-13.145
            c0-4.829-3.036-7.536-8.548-7.624c-3.403,0-7.242,1.171-9.534,2.913c-0.264,0.201-0.607,0.264-0.925,0.173
            s-0.575-0.327-0.693-0.636l-2.42-6.354c-0.169-0.442-0.02-0.943,0.364-1.224c3.538-2.573,9.441-4.235,15.041-4.235
            c12.36,0,17.894,7.975,17.894,15.877C63.652,33.765,59.785,38.919,54.73,44.921z"
                />
              </g>
            </svg>
          </span>{" "}
        </span>
      </label>
      <div className="tab-content">
        <div className="tr-blognav-container pa5 pt6 bg-grouped-table shadow-1 br3">
          <form
            id="settings-navigation"
            className="tr-blognav"
            noValidate="novalidate"
          >
            <div id="ember55" className="sortable-objects ember-view">
              <div
                draggable="false"
                id="us-1"
                className="js-draggableObject draggable-object ember-view"
              >
                <div
                  id="ember57"
                  className="tr-blognav-item tr-blognav-item--sortable ember-view"
                >
                  <div className="tr-blognav-line">
                    <span id="ember60" className="tr-blognav-url ember-view">
                      <input
                        id="ember61"
                        className="ember-text-field tr-input ember-view"
                        type="text"
                      />
                      <p className="response" hidden=""></p>
                    </span>
                  </div>

                  <button
                    className="tr-blognav-delete"
                    onClick={(e) => {
                      document
                        .querySelector(".tr-blognav-delete")
                        .parentNode.parentNode.parentNode.removeChild(
                          document.querySelector(".tr-blognav-delete")
                            .parentNode.parentNode
                        );
                    }}
                    type="button"
                    data-ember-action=""
                    data-ember-action-62="62"
                  >
                    <svg viewBox="0 0 32 32">
                      <path d="M30.688 4H22V.687a.694.694 0 00-.688-.688H10.687a.694.694 0 00-.688.688V4H1.311c-.375 0-.625.313-.625.688s.25.625.625.625h3.375v26c0 .375.25.688.625.688h21.375c.375 0 .625-.313.625-.688v-26h3.375c.375 0 .625-.25.625-.625S31.061 4 30.686 4zM11.313 1.313h9.375v2.688h-9.375zM26 30.688H6V5.313h20zM10.688 9.313a.694.694 0 00-.688.688v15.313c0 .375.313.688.688.688s.625-.313.625-.688V10.001c0-.375-.25-.688-.625-.688zm5.312 0a.694.694 0 00-.688.688v15.313c0 .375.313.688.688.688s.688-.313.688-.688V10.001A.694.694 0 0016 9.313zm4.688.687v15.313c0 .375.25.688.625.688s.688-.313.688-.688V10c0-.375-.313-.688-.688-.688s-.625.313-.625.688z"></path>
                    </svg>
                    <span className="sr-only">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <button
            type="button"
            style={{
              color: "#58bbf0",
              border: "1px solid #58bbf0",
              borderRadius: "20%/50%",
              marginLeft: "20px",
              fontSize: "1.2rem",
              textAlign: "center",
              padding: "5px",
            }}
            className="tr-btn"
            onClick={addTextArea}
          >
            + Add Another
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSays;
