import {useState} from 'react';

const Attributes = ({attribute,setAttributes}) => {
  //const [content, setContent] = useState({});
  const handleChange = (evt)=>{
    // setContent({
    //   [evt.target.name]: evt.target.value
    // });
    setAttributes((attributes) =>
    attributes.map((attr) => {
      if (attr.id === attribute.id) {
        return { ...attr, [evt.target.name]: evt.target.value };//
      }
      return attr;
    }))
  }

  // useEffect(() => {
  //   setAttributes((attributes) =>
  //   attributes.map((attr) => {
  //     if (attr.id === attribute.id) {
  //       return { ...attr,  };//
  //     }
  //     return attr;
  //   }))
  // }, [content])
  return (
    <div>
      <input
        type="text"
        style={{ width: "47.5%", display: "inline-block" }}
        className="tr-input"
        placeholder="KEY"
        name="attrKey"
        value={attribute.attrKey}
        onChange={handleChange}
      />
      <div style={{display: "inline-block", margin: "10px", fontSize: "large", fontWeight: 700}}>
      :
      </div>
      <input
        type="text"
        style={{ width: "47.5%", display: "inline-block" }}
        className="tr-input"
        placeholder="VALUE"
        name="attrValue"
        value={attribute.attrValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Attributes;
