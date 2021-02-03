const quckReply = () => {
  return (
    <div className="quick-reply">
      <h4 class="apps-grid-title">Quick Reply</h4>
      <div class="tr-themes-container">
        <div id="ember97" class="ember-view">
          <div class="apps-grid">
            <div class="apps-grid-cell">
              <div class="apps-card-app theme-list-item--active">
                <div class="apps-card-left">
                  <div class="apps-card-meta">
                    <h3 class="apps-card-app-title">Question/Text</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#/settings/design/uploadtheme/"
          id="ember99"
          class="ember-view tr-btn tr-btn-blue tr-themes-uploadbtn"
        >
          <span>QR1</span>
        </a>
        &nbsp;
        <a
          href="#/settings/design/uploadtheme/"
          id="ember99"
          type="button"
          class="ember-view tr-btn tr-btn-blue tr-themes-uploadbtn"
        >
          <span>QR2</span>
        </a>
      </div>
    </div>
  );
};

export default quckReply;
