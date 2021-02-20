import React, { useEffect, useState, useRef } from "react";

const GotoBlock = ({initialBlock,selectBlock}) => {
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState(initialBlock ? initialBlock : "");
  const wrapperRef = useRef(null);
  const options = [
    { name: "Text" },
    { name: "Quick Reply" },
    { name: "Image" },
    { name: "Video" },
  ];

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  useEffect(() => {
    
    selectBlock(search);
    
  }, [search]);

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updateInput = (event) => {
    setSearch(event);
    setDisplay(false);
  };

  return (
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
      <input
        id="auto"
        onClick={() => setDisplay(!display)}
        placeholder="Type to search"
        autoComplete="off"
        value={search}
        className="tr-input"
        onChange={(event) => setSearch(event.target.value)}
      />
      {display && (
        <div className="autoContainer">
          {options
            .filter(({ name }) => {
              return name.indexOf(search.toLowerCase()) > -1;
            })
            .map((value, i) => {
              return (
                <div
                  onClick={() => updateInput(value.name)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
                  {value.name}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default GotoBlock;
