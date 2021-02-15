import React from 'react';


const AddIcon = (props) => {
  
  return (
    <div >
      {props.children}
     <i style={{cursor:"pointer"}} id="add-icon" className="fas fa-plus-circle"></i>
    </div>
  );
}

export default AddIcon;