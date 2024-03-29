import React from 'react';

const Attributes = ({attribute,setAttributes,attributesCount}) => {
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
        style={{ width: "45.5%", display: "inline-block" }}
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
        style={{ width: "45.5%", display: "inline-block" }}
        className="tr-input"
        placeholder="VALUE"
        name="attrValue"
        value={attribute.attrValue}
        onChange={handleChange}
      />
     
              <button
                className="tr-blognav-delete"
                onClick={(e) =>
                  setAttributes((attributes) =>
                    attributes.filter((attr) => attr.id !== attribute.id)
                  )
                }
                type="button"
                data-ember-action=""
                data-ember-action-62="62"
                style={{display: "inline-block"}}
              >
                <svg viewBox="0 0 32 32">
                  <path d="M30.688 4H22V.687a.694.694 0 00-.688-.688H10.687a.694.694 0 00-.688.688V4H1.311c-.375 0-.625.313-.625.688s.25.625.625.625h3.375v26c0 .375.25.688.625.688h21.375c.375 0 .625-.313.625-.688v-26h3.375c.375 0 .625-.25.625-.625S31.061 4 30.686 4zM11.313 1.313h9.375v2.688h-9.375zM26 30.688H6V5.313h20zM10.688 9.313a.694.694 0 00-.688.688v15.313c0 .375.313.688.688.688s.625-.313.625-.688V10.001c0-.375-.25-.688-.625-.688zm5.312 0a.694.694 0 00-.688.688v15.313c0 .375.313.688.688.688s.688-.313.688-.688V10.001A.694.694 0 0016 9.313zm4.688.687v15.313c0 .375.25.688.625.688s.688-.313.688-.688V10c0-.375-.313-.688-.688-.688s-.625.313-.625.688z"></path>
                </svg>
                <span className="sr-only">Delete</span>
              </button>
            
    </div>
  );
};

export default Attributes;
