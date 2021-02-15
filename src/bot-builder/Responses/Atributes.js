const Attributes = () => {
  return (
    <div>
      <input
        type="text"
        style={{ width: "100px", display: "inline-block" }}
        className="tr-input"
        placeholder="KEY"
      />
      :
      <input
        type="text"
        style={{ width: "100px", display: "inline-block" }}
        className="tr-input"
        placeholder="Value"
      />
    </div>
  );
};

export default Attributes;
