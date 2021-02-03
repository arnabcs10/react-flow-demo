const imageGIFResponse = () => {
  return (
    <div className="imgGIF">
      <h4 class="apps-grid-title">Image/GIF Response</h4>
      <div class="apps-grid">
        <div class="flex flex-column justify-center items-center mih30 miw-100">
          <div class="flex flex-column items-center pa5 pt15 pb15 custom-styles">
            <label class="f5" for="upload-image-gif">
              + Upload a Image/GIF
            </label>
            <input
              type="file"
              id="upload-image-gif"
              name="img"
              accept="image/*,.gif"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default imageGIFResponse;
