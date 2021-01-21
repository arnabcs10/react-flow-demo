import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';

export default memo(() => {
  
  return (
    <>
      <Handle
        type="target"
        position="top"
        // style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
     <i className="fas fa-plus-circle"></i>
    </>
  );
});