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
    document.querySelector(".delete-qr").style = "display:inline-block";
  };
  const hideDelete = () => {
    document.querySelector(".delete-qr").style = "display:none";
  };
  const deleteButton = () => {};

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
    </div>
  );
};

export default quckReply;
