import React, { useState } from 'react';


function Form(props){
    const [interactionName, setInteractionName ] = useState("");
    const submitHandler = (e) =>{
        e.preventDefault();
        //

        props.onSetSidebarOpen(false);
    }
    return(
        <div style={{zIndex:3}}>
            <button onClick={() => props.onSetSidebarOpen(false)}>Close</button>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="interactionName">Enter interaction name:</label>
                    <input 
                        type='text'
                        id="interactionName"
                        value={interactionName}
                        onChange={(e) => setInteractionName(e.target.value)}
                    />
                    <button>save</button>
                </div>
            </form>
        </div>
    );
}

export default Form;