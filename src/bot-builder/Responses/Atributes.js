const Attributes = () => {
  return (
    <div>
      <input
        type="text"
        style={{ width: "47.5%", display: "inline-block" }}
        className="tr-input"
        placeholder="KEY"
      />
      <div style={{display: "inline-block", margin: "10px", fontSize: "large", fontWeight: 700}}>
      :
      </div>
      <input
        type="text"
        style={{ width: "47.5%", display: "inline-block" }}
        className="tr-input"
        placeholder="Value"
      />
    </div>
  );
};

export default Attributes;
