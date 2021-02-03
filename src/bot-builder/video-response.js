const videoResponse = () => {
  return (
    <div className="video-response">
      <h4 class="apps-grid-title">Video Response</h4>
      <div class="apps-grid">
        <div class="flex flex-column justify-center items-center mih30 miw-100">
          <div class="flex flex-column items-center pa5 pt15 pb15 custom-styles">
            <label class="f5" for="upload-video">
              + Upload a Video
            </label>
            <input
              type="file"
              id="upload-video"
              name="video"
              accept="video/*"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default videoResponse;
