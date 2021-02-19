import React from "react";

const AddCard = ({addAnotherCard}) => {
  return (
      <div
        className="AddCard"
      >
        <div className="AddCard-area" onClick={addAnotherCard}>
          Add Another Card
        </div>
      </div>
      
  );
};

export default AddCard;
