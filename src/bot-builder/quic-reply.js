const quckReply = () => {
  const addAnother = () => {
    let count = 1;
    const qrButton = document.querySelector(".qr-button").cloneNode(true);
    qrButton.id = `item${count}`;
    let index = document.getElementsByClassName("buttons")[0].childNodes.length;
    document
      .getElementsByClassName("buttons")[0]
      .insertBefore(
        qrButton,
        document.getElementsByClassName("buttons")[0].childNodes[index - 1]
      );
    if (index == 6) {
      document.getElementById("add-button").style.display = "none";
    }
  };
  const deleteOption = () => {
    document.querySelectorAll(".delete-qr")[0].style = "display:inline-block";
  };
  const hideDelete = () => {
    document.querySelectorAll(".delete-qr")[0].style = "display:none";
  };

  const checkLength = (e) => {
    const length = document.getElementById("button-name").value.length;
    if (length >= 40) {
      window.alert("Button Name Cannot be more than 40 characters");
    }
  };

  return (
    <div classNameName="quick-reply">
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
          <span className="qr-button" id="item0">
            <a
              href="#/settings/design/uploadtheme/"
              id="ember99"
              className="ember-view tr-btn tr-btn-blue tr-themes-uploadbtn"
              onMouseOver={deleteOption}
              onMouseOut={hideDelete}
            >
              <span>QR1</span>
            </a>
            <span className="delete-qr" onMouseOver={deleteOption}>
              X
            </span>
          </span>
          &nbsp;
          <a
            id="add-button"
            onClick={addAnother}
            type="button"
            className="ember-view tr-btn tr-themes-uploadbtn"
            style={{
              border: "1px solid grey",
              background: "none",
              color: "#222222",
            }}
          >
            <span>Add New +</span>
          </a>
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
        <textarea
          placeholder="Button Name"
          autocorrect="off"
          id="button-name"
          class="user-name ember-text-field tr-input ember-view"
          type="text"
          onChange={checkLength}
          style={{ minHeight: "38px", overflow: "hidden" }}
        ></textarea>
        <br />
        <label for="cars">Choose Action</label>
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

export default quckReply;
